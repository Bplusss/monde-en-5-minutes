// Builds algerie-regions.json (see data/algerie/regions.ts). The outline comes
// from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer only has the 48
// wilayas of the 1984 division. Algeria now has 69: ten were created in 2019
// (n° 49-58, Grand Sud) and eleven by law no. 26-06 of April 2026 (n° 59-69,
// former delegated wilayas of the Hauts-Plateaux and the South). The 69 units
// come from OpenStreetMap's admin_level=4 relations, fetched as polygons from
// polygons.openstreetmap.fr (ODbL), simplified and clipped to the NE outline.
// Newest wilayas are placed first and older ones only keep what is left, so a
// parent wilaya whose OSM boundary hasn't been redrawn yet can't overlap the
// wilaya carved out of it; slivers between the two sources go to the nearest
// wilaya.
//
// Usage: node scripts/geo/build-algerie-regions.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/osm-boundaries");
const SIMPLIFY_TOLERANCE = 0.003; // degrees (~300 m)

/** Official wilaya number → OSM relation id. Codes are DZ-<number> (see regions.ts). */
const RELATIONS = {
  1: 1258650, 2: 1283740, 3: 1280081, 4: 1278749, 5: 1278748, 6: 1278765, 7: 1280072, 8: 1258647,
  9: 1283683, 10: 1283093, 11: 1279667, 12: 1280465, 13: 1280702, 14: 1281404, 15: 1283601, 16: 157062,
  17: 1280073, 18: 1278746, 19: 1278747, 20: 1281260, 21: 1273552, 22: 1259189, 23: 1455599, 24: 1273369,
  25: 1273368, 26: 1282111, 27: 1259191, 28: 1278767, 29: 1259190, 30: 1279811, 31: 1259187, 32: 1258649,
  33: 1279816, 34: 1278766, 35: 1283608, 36: 1455600, 37: 1258651, 38: 1282090, 39: 1280071, 40: 1280466,
  41: 1283457, 42: 1286213, 43: 1273544, 44: 1283678, 45: 1258648, 46: 1259188, 47: 1279666, 48: 1282091,
  49: 6528164, 50: 6528163, 51: 10489092, 52: 6824843, 53: 6824900, 54: 6825881, 55: 6822397, 56: 6825876,
  57: 6825874, 58: 6825901, 59: 20442307, 60: 20419608, 61: 20420206, 62: 20421910, 63: 20815946, 64: 20442362,
  65: 20442406, 66: 20812604, 67: 20953792, 68: 20819318, 69: 20816671,
};

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function ensureOsmPolygon(id) {
  const dest = path.join(CACHE_DIR, `rel-${id}.geojson`);
  if (!existsSync(dest)) {
    mkdirSync(CACHE_DIR, { recursive: true });
    console.log(`Downloading OSM relation ${id}...`);
    const res = await fetch(`https://polygons.openstreetmap.fr/get_geojson.py?id=${id}&params=0`);
    if (!res.ok) throw new Error(`Failed to fetch OSM relation ${id}: ${res.status}`);
    const text = await res.text();
    if (!text.trim().startsWith("{")) throw new Error(`OSM relation ${id}: polygon not ready (${text.slice(0, 80)})`);
    writeFileSync(dest, text);
  }
  return turf.feature(JSON.parse(readFileSync(dest, "utf8")));
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

/** { code, name } pairs from data/algerie/regions.ts, so map labels match the stat cards. */
function regionNames() {
  const src = readFileSync(path.resolve(import.meta.dirname, "../../data/algerie/regions.ts"), "utf8");
  const names = new Map();
  for (const m of src.matchAll(/\{\s*code:\s*"([^"]+)"\s*,\s*name:\s*"([^"]+)"/g)) names.set(m[1], m[2]);
  return names;
}

async function main() {
  const outlinePath = path.join(GEO_DIR, "algerie-outline.json");
  const outline = JSON.parse(readFileSync(outlinePath, "utf8")).features[0];
  const names = regionNames();

  const regions = [];
  const numbers = Object.keys(RELATIONS).map(Number).sort((a, b) => b - a); // newest first
  for (const n of numbers) {
    const code = `DZ-${String(n).padStart(2, "0")}`;
    const osm = await ensureOsmPolygon(RELATIONS[n]);
    const simplified = turf.simplify(osm, { tolerance: SIMPLIFY_TOLERANCE, highQuality: true });
    let clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) throw new Error(`${code}: entirely outside the outline`);
    for (const r of regions) {
      const diff = turf.difference(turf.featureCollection([clipped, turf.feature(r.geometry)]));
      if (!diff) throw new Error(`${code}: entirely covered by newer wilayas`);
      clipped = diff;
    }
    regions.push({ code, name: names.get(code) ?? code, geometry: clipped.geometry });
  }

  // Fill slivers left between the OSM wilayas and the NE outline.
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
  console.log(`Filled ${filled} sliver(s) between OSM wilayas and the NE outline`);

  const features = regions.map((r) => ({ type: "Feature", geometry: round(r.geometry), properties: { name: r.name, code: r.code } }));
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, "algerie-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
