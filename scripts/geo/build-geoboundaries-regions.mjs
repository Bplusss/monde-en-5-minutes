// Builds <slug>-regions.json from geoBoundaries gbOpen ADM1 (CC BY 4.0 / ODbL
// depending on the source), for countries whose Natural Earth admin1 layer
// predates a reform. The outline comes from new-country-maps.mjs (Natural
// Earth 1:10m, unchanged).
//
//   ghana      — NE has the 10 regions of 1987; six were created by the 2018
//                referendums (16 today).
//   bangladesh — NE has 7 divisions; Mymensingh was split from Dhaka in 2015.
//   venezuela  — NE still names Vargas (La Guaira since 2019) and leaves Isla
//                de Aves as an unnamed, uncoded feature.
//
// Units are matched by their geoBoundaries `shapeISO` code, simplified and
// clipped to the NE outline; slivers between the two sources go to the
// nearest unit. Labels come from data/<slug>/regions.ts.
//
// Usage: node scripts/geo/build-geoboundaries-regions.mjs <slug>
import { existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/geoboundaries");

const COUNTRIES = {
  ghana: { iso3: "GHA", count: 16, tolerance: 0.002 },
  bangladesh: { iso3: "BGD", count: 8, tolerance: 0.002 },
  venezuela: { iso3: "VEN", count: 25, tolerance: 0.003 },
};

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function ensureGeoBoundaries(iso3) {
  const dest = path.join(CACHE_DIR, `geoBoundaries-${iso3}-ADM1.geojson`);
  if (existsSync(dest)) return dest;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log(`Downloading geoBoundaries ${iso3} ADM1...`);
  const res = await fetch(
    `https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/${iso3}/ADM1/geoBoundaries-${iso3}-ADM1.geojson`,
  );
  if (!res.ok) throw new Error(`Failed to fetch geoBoundaries: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
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
  if (!config) throw new Error(`Usage: node scripts/geo/build-geoboundaries-regions.mjs <${Object.keys(COUNTRIES).join("|")}>`);
  const outline = JSON.parse(readFileSync(path.join(GEO_DIR, `${slug}-outline.json`), "utf8")).features[0];
  const names = regionNames(slug);

  const gb = JSON.parse(readFileSync(await ensureGeoBoundaries(config.iso3), "utf8"));
  const regions = [];
  for (const f of gb.features) {
    const code = f.properties.shapeISO;
    if (!code) throw new Error(`No ISO code for geoBoundaries unit ${f.properties.shapeName}`);
    const simplified = turf.simplify(f, { tolerance: config.tolerance, highQuality: true });
    let clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) throw new Error(`${code} ${f.properties.shapeName}: entirely outside the outline`);
    for (const r of regions) {
      const diff = turf.difference(turf.featureCollection([clipped, turf.feature(r.geometry)]));
      if (diff) clipped = diff;
    }
    regions.push({ code, name: names.get(code) ?? f.properties.shapeName, geometry: clipped.geometry });
  }
  if (regions.length !== config.count) throw new Error(`Expected ${config.count} units, got ${regions.length}`);

  // Fill slivers left between the geoBoundaries units and the NE outline.
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
  console.log(`Filled ${filled} sliver(s) between geoBoundaries units and the NE outline`);

  const features = regions.map((r) => ({ type: "Feature", geometry: round(r.geometry), properties: { name: r.name, code: r.code } }));
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, `${slug}-regions.json`), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
