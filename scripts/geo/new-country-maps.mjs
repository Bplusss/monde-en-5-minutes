// Builds outline + regions GeoJSON for a country that has none yet, at full
// Natural Earth 1:10m fidelity (the same source/resolution as every other
// country on the site — see rebuild-country-maps.mjs for the "already has a
// file, upgrade it" version this complements).
//
// Usage: node scripts/geo/new-country-maps.mjs <slug> <ADM0_A3>
//   e.g. node scripts/geo/new-country-maps.mjs albanie ALB
//
// Regions are named/coded straight from Natural Earth (local/English name +
// iso_3166_2). If the country's data/<slug>/regions.ts ends up using
// different (French) names for the same codes, resync labels afterward with
// sync-region-names.mjs.
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function main() {
  const [slug, adm0] = process.argv.slice(2);
  if (!slug || !adm0) {
    console.error("Usage: node scripts/geo/new-country-maps.mjs <slug> <ADM0_A3>");
    process.exit(1);
  }

  const { admin0: admin0Path, admin1: admin1Path } = await ensureNaturalEarthData();
  const admin0 = JSON.parse(readFileSync(admin0Path, "utf8"));
  const admin1 = JSON.parse(readFileSync(admin1Path, "utf8"));

  const outline = admin0.features.find((f) => f.properties.ADM0_A3 === adm0);
  if (!outline) throw new Error(`No admin0 feature for ${adm0}`);
  writeFeatureCollection(path.join(GEO_DIR, `${slug}-outline.json`), [
    { type: "Feature", geometry: outline.geometry, properties: { name: outline.properties.NAME, name_fr: outline.properties.NAME_FR, iso_a3: adm0 } },
  ]);

  const regions = admin1.features.filter((f) => f.properties.adm0_a3 === adm0);
  const regionFeatures = regions.map((f) => ({
    type: "Feature",
    geometry: f.geometry,
    properties: { name: f.properties.name, code: f.properties.iso_3166_2 },
  }));
  writeFeatureCollection(path.join(GEO_DIR, `${slug}-regions.json`), regionFeatures);

  console.log(`${slug}: outline (${outline.geometry.type}) + ${regionFeatures.length} regions written.`);
  console.log("Regions:", regionFeatures.map((f) => `${f.properties.code} ${f.properties.name}`).join(", "));
}

main();
