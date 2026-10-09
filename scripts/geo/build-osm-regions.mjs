// Builds <slug>-regions.json from OpenStreetMap admin_level=4 relations, for
// countries whose Natural Earth admin1 layer predates a reform. The outline
// comes from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
//   tanzanie   — NE has 30 regions: Songwe (TZ-31) was split from Mbeya in 2016.
//   kazakhstan — NE predates Shymkent's city status (2018), the renaming of
//                South Kazakhstan to Turkistan (2018) and the creation of Abai,
//                Jetisu and Ulytau (2022): 17 regions + 3 cities today.
//
// Polygons are fetched from polygons.openstreetmap.fr (ODbL), simplified and
// clipped to the NE outline. Units are processed in the listed order (newest
// first) and older ones only keep what is left, so a parent whose OSM boundary
// hasn't been redrawn can't overlap the unit carved out of it; slivers between
// the two sources go to the nearest unit. Labels come from data/<slug>/regions.ts.
//
// Usage: node scripts/geo/build-osm-regions.mjs <slug>
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/osm-boundaries");

/** Per country: ISO 3166-2 code → OSM relation id, newest units first. */
const COUNTRIES = {
  tanzanie: {
    tolerance: 0.003,
    relations: {
      "TZ-31": 13015687, "TZ-30": 3775213, "TZ-29": 3775101, "TZ-28": 3775100, "TZ-27": 3775212,
      "TZ-26": 1243808, "TZ-01": 1243810, "TZ-02": 7202037, "TZ-03": 1600852, "TZ-04": 1600802,
      "TZ-05": 1600767, "TZ-06": 1614021, "TZ-07": 1614022, "TZ-08": 1600842, "TZ-09": 1243795,
      "TZ-10": 1614028, "TZ-11": 1614020, "TZ-12": 1600807, "TZ-13": 1243804, "TZ-14": 1600771,
      "TZ-15": 1614023, "TZ-16": 1600831, "TZ-17": 1600798, "TZ-18": 5712706, "TZ-19": 1600824,
      "TZ-20": 1600839, "TZ-21": 1600825, "TZ-22": 5712716, "TZ-23": 1600775, "TZ-24": 1600809,
      "TZ-25": 1600844,
    },
  },
  kazakhstan: {
    tolerance: 0.004,
    relations: {
      "KZ-10": 14243026, "KZ-33": 14312169, "KZ-62": 14312737, "KZ-79": 3389772, "KZ-75": 2465058,
      "KZ-71": 3087155, "KZ-61": 215739, "KZ-11": 215743, "KZ-15": 215683, "KZ-19": 215718,
      "KZ-23": 214834, "KZ-27": 215441, "KZ-31": 215722, "KZ-35": 215776, "KZ-39": 1288730,
      "KZ-43": 215727, "KZ-47": 215686, "KZ-55": 215772, "KZ-59": 215760, "KZ-63": 215699,
    },
  },
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

/** { code, name } pairs from data/<slug>/regions.ts, so map labels match the stat cards. */
function regionNames(slug) {
  const names = new Map();
  const file = path.resolve(import.meta.dirname, `../../data/${slug}/regions.ts`);
  if (!existsSync(file)) return names;
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(/\{\s*code:\s*"([^"]+)"\s*,\s*name:\s*"([^"]+)"/g)) names.set(m[1], m[2]);
  return names;
}

async function main() {
  const slug = process.argv[2];
  const config = COUNTRIES[slug];
  if (!config) throw new Error(`Usage: node scripts/geo/build-osm-regions.mjs <${Object.keys(COUNTRIES).join("|")}>`);
  const outline = JSON.parse(readFileSync(path.join(GEO_DIR, `${slug}-outline.json`), "utf8")).features[0];
  const names = regionNames(slug);

  const regions = [];
  for (const [code, id] of Object.entries(config.relations)) {
    const osm = await ensureOsmPolygon(id);
    const simplified = turf.simplify(osm, { tolerance: config.tolerance, highQuality: true });
    let clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) throw new Error(`${code}: entirely outside the outline`);
    for (const r of regions) {
      const diff = turf.difference(turf.featureCollection([clipped, turf.feature(r.geometry)]));
      if (!diff) throw new Error(`${code}: entirely covered by newer units`);
      clipped = diff;
    }
    regions.push({ code, name: names.get(code) ?? code, geometry: clipped.geometry });
  }

  // Fill slivers left between the OSM units and the NE outline.
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
  console.log(`Filled ${filled} sliver(s) between OSM units and the NE outline`);

  const features = regions.map((r) => ({ type: "Feature", geometry: round(r.geometry), properties: { name: r.name, code: r.code } }));
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, `${slug}-regions.json`), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
