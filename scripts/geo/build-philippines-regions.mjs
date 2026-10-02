// Builds philippines-regions.json (see data/philippines/regions.ts). The outline
// comes from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer for PHL holds 118
// provinces and highly urbanized cities, far too fine for the site — the
// Philippines are read at the level of their 18 administrative regions. Each
// NE polygon carries its region in `region_cod`, so the regions are rebuilt by
// dissolving those polygons, with two corrections for changes NE predates:
//   - Negros Island Region (NIR, Republic Act 12000 of June 2024): Negros
//     Occidental, Bacolod, Negros Oriental and Siquijor leave Regions VI/VII.
//     ISO 3166-2 has no code for it yet, hence the site-local "PH-NIR".
//   - Sulu: excluded from BARMM by the Supreme Court (September 2024) and
//     attached to Zamboanga Peninsula (Region IX) by Executive Order 91 (2025).
// Known residual approximations (below 1:10m province granularity): Isabela
// City stays drawn inside Basilan (BARMM) though administered by Region IX,
// and the 63 barangays of BARMM's Special Geographic Area stay inside
// Cotabato province (Region XII).
//
// Usage: node scripts/geo/build-philippines-regions.mjs
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");

/** NE province name → region code, overriding NE's outdated `region_cod`. */
const OVERRIDES = {
  "Negros Occidental": "PH-NIR",
  Bacolod: "PH-NIR",
  "Negros Oriental": "PH-NIR",
  Siquijor: "PH-NIR",
  Sulu: "PH-09",
};

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function main() {
  const { admin1: admin1Path } = await ensureNaturalEarthData();
  const admin1 = JSON.parse(readFileSync(admin1Path, "utf8"));
  const provinces = admin1.features.filter((f) => f.properties.adm0_a3 === "PHL");

  const groups = new Map();
  for (const f of provinces) {
    const code = OVERRIDES[f.properties.name] ?? f.properties.region_cod;
    if (!code) throw new Error(`No region for ${f.properties.name}`);
    if (!groups.has(code)) groups.set(code, []);
    groups.get(code).push(turf.feature(f.geometry));
  }

  const features = [];
  for (const [code, parts] of groups) {
    const merged = parts.length > 1 ? turf.union(turf.featureCollection(parts)) : parts[0];
    const geometry = turf.truncate(merged, { precision: 5 }).geometry;
    // Placeholder name; sync-region-names.mjs replaces it with the regions.ts label.
    features.push({ type: "Feature", geometry, properties: { name: code, code } });
  }
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, "philippines-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code}: ${Math.round(turf.area(f) / 1e6)} km²`);
  console.log(`${features.length} regions written.`);
}

main();
