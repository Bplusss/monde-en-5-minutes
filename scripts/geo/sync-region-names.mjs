// Syncs each region's display name from data/<slug>/regions.ts into
// public/geo/<slug>-regions.json, matched by `code`. The map's regions layer
// reads the `name` property straight from the GeoJSON file (see
// components/map/CountryMap.tsx), independently of regions.ts — so whenever
// regions.ts uses a different (usually French) name than the raw Natural
// Earth value the file was generated with, the on-map labels silently stay
// wrong until this is run.
//
// Usage: node scripts/geo/sync-region-names.mjs [slug ...]
//   (no args = sync every country listed in COUNTRIES below)
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");
const GEO_DIR = path.join(ROOT, "public/geo");

const COUNTRIES = [
  "albanie", "andorre", "autriche", "belgique", "bielorussie", "bulgarie",
  "croatie", "danemark", "estonie", "finlande", "france", "germany", "grece",
  "hongrie", "irlande", "italy", "lituanie", "luxembourg", "norvege",
  "pays-bas", "pologne", "portugal", "royaume-uni", "spain", "suede",
  "suisse", "tchequie",
];

/** Extracts { code, name } pairs from a regions.ts file's simple object-literal array. */
function parseRegionsTs(slug) {
  const src = readFileSync(path.join(ROOT, `data/${slug}/regions.ts`), "utf8");
  const entries = [];
  const re = /\{\s*code:\s*"([^"]+)"\s*,\s*name:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) entries.push({ code: m[1], name: m[2] });
  return entries;
}

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

function main() {
  const only = process.argv.slice(2);
  for (const slug of COUNTRIES) {
    if (only.length && !only.includes(slug)) continue;
    const geoPath = path.join(GEO_DIR, `${slug}-regions.json`);
    if (!existsSync(geoPath)) continue;

    const byCode = new Map(parseRegionsTs(slug).map((e) => [e.code, e.name]));
    const geo = JSON.parse(readFileSync(geoPath, "utf8"));
    let changed = 0;
    const unmatched = [];
    for (const f of geo.features) {
      const wanted = byCode.get(f.properties.code);
      if (!wanted) { unmatched.push(f.properties.code); continue; }
      if (f.properties.name !== wanted) { f.properties.name = wanted; changed++; }
    }
    if (changed) writeFeatureCollection(geoPath, geo.features);
    console.log(`${slug}: ${changed} name(s) updated${unmatched.length ? `, ${unmatched.length} code(s) unmatched (${unmatched.join(", ")})` : ""}`);
  }
}

main();
