// Builds cote-d-ivoire-regions.json (see data/cote-d-ivoire/regions.ts). The
// outline comes from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer still holds the 19
// "régions" of the pre-2011 division (CI-01 Lagunes … CI-19 Cavally), which
// were abolished by the 2011 reform. The current first level is the 14
// districts (12 districts + 2 autonomous districts, Abidjan and Yamoussoukro;
// ISO 3166-2:CI codes CI-AB … CI-ZZ). geoBoundaries gbOpen CIV ADM1 has exactly
// these 14 districts (but no ISO codes, so they're mapped by name below);
// they're simplified and clipped to the NE outline, and coastline/border
// slivers where the OSM-based boundaries lie inside NE's outline are assigned
// to the nearest district so the districts tile the outline exactly.
//
// Usage: node scripts/geo/build-cote-d-ivoire-regions.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/geoboundaries");
const GB_URL =
  "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/CIV/ADM1/geoBoundaries-CIV-ADM1.geojson";
const SIMPLIFY_TOLERANCE = 0.002; // degrees (~200 m), keeps the file close to NE 1:10m density

/** geoBoundaries shapeName → ISO 3166-2:CI district code. */
const CODES = {
  "District Autonome D'Abidjan": "CI-AB",
  "Bas-Sassandra": "CI-BS",
  Comoe: "CI-CM",
  Denguele: "CI-DN",
  "Goh-Djiboua": "CI-GD",
  Lacs: "CI-LC",
  Lagunes: "CI-LG",
  Montagnes: "CI-MG",
  "Sassandra-Marahoue": "CI-SM",
  Savanes: "CI-SV",
  "Valle Du Bandama": "CI-VB",
  Woroba: "CI-WR",
  "District Autonome De Yamoussoukro": "CI-YM",
  Zanzan: "CI-ZZ",
};

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function ensureGeoBoundaries() {
  const dest = path.join(CACHE_DIR, "geoBoundaries-CIV-ADM1.geojson");
  if (existsSync(dest)) return dest;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log("Downloading geoBoundaries CIV ADM1...");
  const res = await fetch(GB_URL);
  if (!res.ok) throw new Error(`Failed to fetch geoBoundaries: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

async function main() {
  const outlinePath = path.join(GEO_DIR, "cote-d-ivoire-outline.json");
  if (!existsSync(outlinePath)) throw new Error("Run `node scripts/geo/new-country-maps.mjs cote-d-ivoire CIV` first");
  const outline = JSON.parse(readFileSync(outlinePath, "utf8")).features[0];

  const gb = JSON.parse(readFileSync(await ensureGeoBoundaries(), "utf8"));
  const regions = [];
  for (const f of gb.features) {
    const code = CODES[f.properties.shapeName];
    if (!code) throw new Error(`Unmapped geoBoundaries district: ${f.properties.shapeName}`);
    const simplified = turf.simplify(f, { tolerance: SIMPLIFY_TOLERANCE, highQuality: true });
    const clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) throw new Error(`${code} ${f.properties.shapeName}: entirely outside the outline`);
    regions.push({ code, name: f.properties.shapeName, geometry: clipped.geometry });
  }
  if (regions.length !== 14) throw new Error(`Expected 14 districts, got ${regions.length}`);

  // Fill coastline/border slivers left between the OSM-based districts and the NE outline.
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
  console.log(`Filled ${filled} sliver(s) between OSM districts and the NE outline`);

  const features = regions.map((r) => ({ type: "Feature", geometry: round(r.geometry), properties: { name: r.name, code: r.code } }));
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, "cote-d-ivoire-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
