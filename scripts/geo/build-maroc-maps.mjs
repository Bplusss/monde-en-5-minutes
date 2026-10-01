// Builds maroc-outline.json + maroc-regions.json (see data/maroc/regions.ts).
//
// Why a dedicated script instead of new-country-maps.mjs:
// 1. Outline — Natural Earth's MAR feature includes the part of Western Sahara
//    west of the berm (Moroccan-administered), while its SAH feature only covers
//    the Polisario-held strip east of it. The site follows internationally
//    recognized borders (cf. Crimea, Taiwan), so the MAR outline is clipped to
//    the Morocco / Western Sahara boundary, the 27°40'N parallel.
// 2. Regions — Natural Earth still carries the 16 pre-2015 regions. The 12
//    current regions (2015 reform, ISO 3166-2:MA codes MA-01..MA-12) come from
//    geoBoundaries (gbOpen MAR ADM1, OpenStreetMap-derived, ODbL), clipped to
//    the outline above. Dakhla-Oued Ed-Dahab, entirely in Western Sahara,
//    disappears; Laâyoune-Sakia El Hamra keeps only the Tarfaya strip and
//    Guelmim-Oued Noun loses its part south of 27°40'N. Coastline slivers where
//    the OSM coast lies inland of Natural Earth's are assigned to the nearest
//    region so the regions tile the outline exactly.
//
// Usage: node scripts/geo/build-maroc-maps.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/geoboundaries");
const GB_URL =
  "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/MAR/ADM1/geoBoundaries-MAR-ADM1.geojson";
const WESTERN_SAHARA_NORTH_LAT = 27 + 40 / 60; // 27°40'N
const SIMPLIFY_TOLERANCE = 0.002; // degrees (~200 m), keeps the file close to NE 1:10m density

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function ensureGeoBoundaries() {
  const dest = path.join(CACHE_DIR, "geoBoundaries-MAR-ADM1.geojson");
  if (existsSync(dest)) return dest;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log("Downloading geoBoundaries MAR ADM1...");
  const res = await fetch(GB_URL);
  if (!res.ok) throw new Error(`Failed to fetch geoBoundaries: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

async function main() {
  const { admin0: admin0Path } = await ensureNaturalEarthData();
  const admin0 = JSON.parse(readFileSync(admin0Path, "utf8"));
  const mar = admin0.features.find((f) => f.properties.ADM0_A3 === "MAR");

  const north = turf.bboxPolygon([-20, WESTERN_SAHARA_NORTH_LAT, 0, 37]);
  const outline = turf.intersect(turf.featureCollection([turf.feature(mar.geometry), north]));
  writeFeatureCollection(path.join(GEO_DIR, "maroc-outline.json"), [
    { type: "Feature", geometry: outline.geometry, properties: { name: mar.properties.NAME, name_fr: mar.properties.NAME_FR, iso_a3: "MAR" } },
  ]);
  console.log(`Outline: ${Math.round(turf.area(outline) / 1e6)} km² (NE MAR uncut: ${Math.round(turf.area(mar) / 1e6)} km²)`);

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
  writeFeatureCollection(path.join(GEO_DIR, "maroc-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
