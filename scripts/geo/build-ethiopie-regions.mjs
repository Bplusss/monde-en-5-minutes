// Builds ethiopie-regions.json (see data/ethiopie/regions.ts). The outline comes
// from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer (and geoBoundaries,
// 2020 at best) predate Ethiopia's recent reorganisation. Since 2023 the
// federation has 12 regional states and 2 chartered cities: Sidama split from
// the Southern Nations, Nationalities and Peoples' Region (SNNPR) in 2020,
// South West Ethiopia Peoples' Region in 2021, and the SNNPR remainder was
// divided into Central Ethiopia and South Ethiopia in 2023. The 14 units come
// from OpenStreetMap's admin_level=4 relations, fetched as polygons from
// polygons.openstreetmap.fr (ODbL), simplified and clipped to the NE outline;
// slivers between the two sources go to the nearest region.
//
// Codes: ISO 3166-2:ET still lists the dissolved SNNPR (ET-SN) and has no code
// for Central Ethiopia or South Ethiopia, which get the site-local codes
// "ET-CE" and "ET-SE".
//
// Usage: node scripts/geo/new-country-maps.mjs ethiopie ETH
//        node scripts/geo/build-ethiopie-regions.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/osm-boundaries");
const SIMPLIFY_TOLERANCE = 0.003; // degrees (~300 m)

const REGIONS = [
  { relation: 1707699, code: "ET-AA", name: "Addis Ababa" },
  { relation: 1707249, code: "ET-AF", name: "Afar" },
  { relation: 1707264, code: "ET-AM", name: "Amhara" },
  { relation: 1707653, code: "ET-BE", name: "Benishangul-Gumuz" },
  { relation: 16827893, code: "ET-CE", name: "Central Ethiopia" },
  { relation: 1707654, code: "ET-DD", name: "Dire Dawa" },
  { relation: 1707655, code: "ET-GA", name: "Gambela" },
  { relation: 1707700, code: "ET-HA", name: "Harari" },
  { relation: 1707656, code: "ET-OR", name: "Oromia" },
  { relation: 16827894, code: "ET-SE", name: "South Ethiopia" },
  { relation: 3306775, code: "ET-SI", name: "Sidama" },
  { relation: 1707658, code: "ET-SO", name: "Somali" },
  { relation: 13509372, code: "ET-SW", name: "South West Ethiopia Peoples" },
  { relation: 1707148, code: "ET-TI", name: "Tigray" },
];

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

async function main() {
  const outlinePath = path.join(GEO_DIR, "ethiopie-outline.json");
  if (!existsSync(outlinePath)) throw new Error("Run `node scripts/geo/new-country-maps.mjs ethiopie ETH` first");
  const outline = JSON.parse(readFileSync(outlinePath, "utf8")).features[0];

  const regions = [];
  for (const { relation, code, name } of REGIONS) {
    const osm = await ensureOsmPolygon(relation);
    const simplified = turf.simplify(osm, { tolerance: SIMPLIFY_TOLERANCE, highQuality: true });
    let clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) {
      console.log(`${code} ${name}: entirely outside the outline, dropped`);
      continue;
    }
    // Remove overlap with regions already placed (OSM units can overlap slightly once simplified).
    for (const r of regions) {
      const diff = turf.difference(turf.featureCollection([clipped, turf.feature(r.geometry)]));
      if (diff) clipped = diff;
    }
    regions.push({ code, name, geometry: clipped.geometry });
  }

  // Fill slivers left between the OSM regions and the NE outline.
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
  writeFeatureCollection(path.join(GEO_DIR, "ethiopie-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
