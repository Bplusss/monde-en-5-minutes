// Builds kenya-regions.json (see data/kenya/regions.ts). The outline comes
// from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer still carries Kenya's
// 8 former provinces, abolished by the 2010 Constitution when the 47 counties
// became the first-level divisions (in force since the 2013 elections). The
// counties come from geoBoundaries (gbOpen KEN ADM1, ISO 3166-2:KE codes),
// simplified and clipped to the NE outline; slivers between the two sources
// are assigned to the nearest county so the regions tile the outline.
//
// Usage: node scripts/geo/build-kenya-regions.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/geoboundaries");
const GB_URL =
  "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/KEN/ADM1/geoBoundaries-KEN-ADM1.geojson";
const SIMPLIFY_TOLERANCE = 0.003; // degrees (~300 m)
const NAME_OVERRIDES = { Tharaka: "Tharaka-Nithi" };

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function ensureGeoBoundaries() {
  const dest = path.join(CACHE_DIR, "geoBoundaries-KEN-ADM1.geojson");
  if (existsSync(dest)) return dest;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log("Downloading geoBoundaries KEN ADM1...");
  const res = await fetch(GB_URL);
  if (!res.ok) throw new Error(`Failed to fetch geoBoundaries: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

async function main() {
  const outlinePath = path.join(GEO_DIR, "kenya-outline.json");
  if (!existsSync(outlinePath)) throw new Error("Run `node scripts/geo/new-country-maps.mjs kenya KEN` first");
  const outline = JSON.parse(readFileSync(outlinePath, "utf8")).features[0];

  const gb = JSON.parse(readFileSync(await ensureGeoBoundaries(), "utf8"));
  const regions = [];
  for (const f of gb.features) {
    const name = NAME_OVERRIDES[f.properties.shapeName] ?? f.properties.shapeName;
    const code = f.properties.shapeISO;
    const simplified = turf.simplify(f, { tolerance: SIMPLIFY_TOLERANCE, highQuality: true });
    let clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) {
      console.log(`${code} ${name}: entirely outside the outline, dropped`);
      continue;
    }
    // Remove overlap with regions already placed (geoBoundaries units can overlap slightly).
    for (const r of regions) {
      const diff = turf.difference(turf.featureCollection([clipped, turf.feature(r.geometry)]));
      if (diff) clipped = diff;
    }
    regions.push({ code, name, geometry: clipped.geometry });
  }

  // Fill slivers left between the geoBoundaries regions and the NE outline.
  const covered = regions.slice(1).reduce(
    (acc, r) => turf.union(turf.featureCollection([acc, turf.feature(r.geometry)])),
    turf.feature(regions[0].geometry),
  );
  const gaps = turf.difference(turf.featureCollection([outline, covered]));
  let filled = 0;
  if (gaps) {
    turf.flattenEach(gaps, (piece) => {
      const pt = turf.pointOnFeature(piece);
      let best = null;
      let bestDist = Infinity;
      for (const r of regions) {
        let d = Infinity;
        turf.flattenEach(turf.feature(r.geometry), (poly) => {
          d = Math.min(d, turf.pointToPolygonDistance(pt, poly));
        });
        if (d < bestDist) {
          bestDist = d;
          best = r;
        }
      }
      best.geometry = turf.union(turf.featureCollection([turf.feature(best.geometry), piece])).geometry;
      filled++;
    });
  }
  console.log(`Filled ${filled} sliver(s) between geoBoundaries regions and the NE outline`);

  const features = regions.map((r) => ({ type: "Feature", geometry: round(r.geometry), properties: { name: r.name, code: r.code } }));
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, "kenya-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
