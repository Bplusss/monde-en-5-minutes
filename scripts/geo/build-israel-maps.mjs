// Builds israel-outline.json + israel-regions.json (see data/israel/regions.ts).
//
// Why a dedicated script instead of new-country-maps.mjs: Natural Earth's ISR
// feature (and geoBoundaries' too) includes the Golan Heights and East
// Jerusalem, both annexed by Israel but not internationally recognised as
// Israeli. The site follows internationally recognised borders (cf. Crimea,
// Western Sahara in build-maroc-maps.mjs), so both are cut out using the
// OpenStreetMap relations "Golan Heights" (boundary=disputed, r16119376) and
// "East Jerusalem" (r13958423), fetched as polygons from polygons.openstreetmap.fr
// (ODbL). The result is Israel within the 1949 armistice line (~20 770 km²).
// The six Natural Earth districts are clipped the same way (HaZafon loses the
// Golan, Jerusalem loses East Jerusalem).
//
// Usage: node scripts/geo/build-israel-maps.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/osm-boundaries");
const OSM_RELATIONS = { golan: 16119376, eastJerusalem: 13958423 };

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
    writeFileSync(dest, await res.text());
  }
  return turf.feature(JSON.parse(readFileSync(dest, "utf8")));
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

async function main() {
  const { admin0: admin0Path, admin1: admin1Path } = await ensureNaturalEarthData();
  const admin0 = JSON.parse(readFileSync(admin0Path, "utf8"));
  const admin1 = JSON.parse(readFileSync(admin1Path, "utf8"));

  const golan = await ensureOsmPolygon(OSM_RELATIONS.golan);
  const eastJerusalem = await ensureOsmPolygon(OSM_RELATIONS.eastJerusalem);
  const excluded = turf.union(turf.featureCollection([golan, eastJerusalem]));

  const isr = admin0.features.find((f) => f.properties.ADM0_A3 === "ISR");
  // Natural Earth and OSM don't trace identical lines, so the difference leaves
  // slivers along East Jerusalem and pockets north of the OSM Golan polygon
  // (Mount Hermon / Shebaa Farms, which the UN also counts as Golan). Israel
  // has no islands, so only the main polygon is kept.
  const diff = turf.difference(turf.featureCollection([turf.feature(isr.geometry), excluded]));
  const parts = diff.geometry.type === "Polygon" ? [diff.geometry.coordinates] : diff.geometry.coordinates;
  const main = parts.map((p) => turf.polygon(p)).sort((a, b) => turf.area(b) - turf.area(a))[0];
  const outline = turf.polygon([main.geometry.coordinates[0]]);
  writeFeatureCollection(path.join(GEO_DIR, "israel-outline.json"), [
    { type: "Feature", geometry: round(outline.geometry), properties: { name: "Israel", name_fr: "Israël", iso_a3: "ISR" } },
  ]);

  const regions = admin1.features
    .filter((f) => f.properties.adm0_a3 === "ISR")
    .map((f) => {
      const clipped = turf.intersect(turf.featureCollection([turf.feature(f.geometry), outline]));
      return {
        type: "Feature",
        geometry: round(clipped.geometry),
        properties: { name: f.properties.name, code: f.properties.iso_3166_2 },
      };
    });
  writeFeatureCollection(path.join(GEO_DIR, "israel-regions.json"), regions);

  console.log(`Outline: ${(turf.area(outline) / 1e6).toFixed(0)} km² (Natural Earth ISR: ${(turf.area(isr) / 1e6).toFixed(0)} km²)`);
  for (const r of regions) console.log(`  ${r.properties.code} ${r.properties.name}: ${(turf.area(r) / 1e6).toFixed(0)} km²`);
}

main();
