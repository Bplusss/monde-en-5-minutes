// Builds cuba-regions.json (see data/cuba/regions.ts). The outline comes from
// new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer has the 2011 province
// names and codes, but not the 2011 boundaries — the three eastern
// municipalities of Pinar del Río (Bahía Honda, San Cristóbal, Candelaria)
// that joined the new Artemisa province are still drawn in Pinar del Río,
// which leaves Artemisa at half its real area. geoBoundaries gbOpen CUB ADM1
// has the current 15 provinces + the special municipality of Isla de la
// Juventud (no ISO codes, mapped by name below); they're simplified and
// clipped to the NE outline, and coastline slivers are assigned to the
// nearest province so the provinces tile the outline exactly.
//
// Usage: node scripts/geo/new-country-maps.mjs cuba CUB
//        node scripts/geo/build-cuba-regions.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/geoboundaries");
const GB_URL =
  "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/CUB/ADM1/geoBoundaries-CUB-ADM1.geojson";
const SIMPLIFY_TOLERANCE = 0.002; // degrees (~200 m), keeps the file close to NE 1:10m density

/** geoBoundaries shapeName → ISO 3166-2:CU code. */
const CODES = {
  "Pinar del Rio": "CU-01",
  Artemisa: "CU-15",
  Havana: "CU-03",
  Mayabeque: "CU-16",
  Matanzas: "CU-04",
  "Villa Clara": "CU-05",
  Cienfuegos: "CU-06",
  "Sancti Spiritus": "CU-07",
  "Ciego de Avila": "CU-08",
  "Camagüey": "CU-09",
  "Las Tunas": "CU-10",
  "Holguín": "CU-11",
  Granma: "CU-12",
  "Santiago de Cuba": "CU-13",
  "Guantánamo": "CU-14",
  "Isle of Youth": "CU-99",
};

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function ensureGeoBoundaries() {
  const dest = path.join(CACHE_DIR, "geoBoundaries-CUB-ADM1.geojson");
  if (existsSync(dest)) return dest;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log("Downloading geoBoundaries CUB ADM1...");
  const res = await fetch(GB_URL);
  if (!res.ok) throw new Error(`Failed to fetch geoBoundaries: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

async function main() {
  const outlinePath = path.join(GEO_DIR, "cuba-outline.json");
  if (!existsSync(outlinePath)) throw new Error("Run `node scripts/geo/new-country-maps.mjs cuba CUB` first");
  const outline = JSON.parse(readFileSync(outlinePath, "utf8")).features[0];

  const gb = JSON.parse(readFileSync(await ensureGeoBoundaries(), "utf8"));
  const regions = [];
  for (const f of gb.features) {
    const code = CODES[f.properties.shapeName];
    if (!code) throw new Error(`Unmapped geoBoundaries province: ${f.properties.shapeName}`);
    const simplified = turf.simplify(f, { tolerance: SIMPLIFY_TOLERANCE, highQuality: true });
    let clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) throw new Error(`${code} ${f.properties.shapeName}: entirely outside the outline`);
    for (const r of regions) {
      const diff = turf.difference(turf.featureCollection([clipped, turf.feature(r.geometry)]));
      if (diff) clipped = diff;
    }
    regions.push({ code, name: f.properties.shapeName, geometry: clipped.geometry });
  }
  if (regions.length !== 16) throw new Error(`Expected 16 provinces, got ${regions.length}`);

  // Fill coastline slivers left between the geoBoundaries provinces and the NE outline.
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
  console.log(`Filled ${filled} sliver(s) between geoBoundaries provinces and the NE outline`);

  const features = regions.map((r) => ({ type: "Feature", geometry: round(r.geometry), properties: { name: r.name, code: r.code } }));
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, "cuba-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
