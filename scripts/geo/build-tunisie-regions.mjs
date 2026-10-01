// Builds tunisie-regions.json (see data/tunisie/regions.ts). The outline comes
// from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer only has 23 of the 24
// governorates — Ariana (TN-12, created 1983) is missing, its territory merged
// into the polygon labelled TN-14 "Manubah" (≈1 630 km², i.e. Ariana 482 +
// Manouba 1 137). The 24 current governorates (ISO 3166-2:TN codes) come from
// geoBoundaries (gbOpen TUN ADM1, OpenStreetMap-derived, ODbL), simplified and
// clipped to the NE outline; coastline slivers where the OSM coast lies inland
// of Natural Earth's are assigned to the nearest governorate so the regions
// tile the outline exactly.
//
// Usage: node scripts/geo/build-tunisie-regions.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/geoboundaries");
const GB_URL =
  "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/TUN/ADM1/geoBoundaries-TUN-ADM1.geojson";
const SIMPLIFY_TOLERANCE = 0.002; // degrees (~200 m), keeps the file close to NE 1:10m density

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function ensureGeoBoundaries() {
  const dest = path.join(CACHE_DIR, "geoBoundaries-TUN-ADM1.geojson");
  if (existsSync(dest)) return dest;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log("Downloading geoBoundaries TUN ADM1...");
  const res = await fetch(GB_URL);
  if (!res.ok) throw new Error(`Failed to fetch geoBoundaries: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

async function main() {
  const outlinePath = path.join(GEO_DIR, "tunisie-outline.json");
  if (!existsSync(outlinePath)) throw new Error("Run `node scripts/geo/new-country-maps.mjs tunisie TUN` first");
  const outline = JSON.parse(readFileSync(outlinePath, "utf8")).features[0];

  const gb = JSON.parse(readFileSync(await ensureGeoBoundaries(), "utf8"));
  const regions = [];
  for (const f of gb.features) {
    const simplified = turf.simplify(f, { tolerance: SIMPLIFY_TOLERANCE, highQuality: true });
    const clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) {
      console.log(`${f.properties.shapeISO} ${f.properties.shapeName}: entirely outside the outline, dropped`);
      continue;
    }
    regions.push({ code: f.properties.shapeISO, name: f.properties.shapeName, geometry: clipped.geometry });
  }

  // Fill coastline/border slivers left between the OSM-based regions and the NE outline.
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
  console.log(`Filled ${filled} sliver(s) between OSM regions and the NE outline`);

  const features = regions.map((r) => ({ type: "Feature", geometry: round(r.geometry), properties: { name: r.name, code: r.code } }));
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, "tunisie-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
