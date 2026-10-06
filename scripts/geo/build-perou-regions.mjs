// Fixes up perou-regions.json after new-country-maps.mjs (see data/perou/regions.ts).
//
// Natural Earth's admin1 layer has Peru's 26 first-level units (24
// departments, the Constitutional Province of Callao and the Province of
// Lima), but gives the Province of Lima (Lima Metropolitana) the Lima
// department's code "PE-LIM" instead of its own ISO 3166-2 code "PE-LMA".
//
// Usage: node scripts/geo/new-country-maps.mjs perou PER
//        node scripts/geo/build-perou-regions.mjs
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve(import.meta.dirname, "../../public/geo/perou-regions.json");

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

const geo = JSON.parse(readFileSync(FILE, "utf8"));
const features = geo.features.map((f) =>
  f.properties.name === "Lima Province" ? { ...f, properties: { ...f.properties, code: "PE-LMA" } } : f,
);

const codes = features.map((f) => f.properties.code);
const duplicates = codes.filter((c, i) => codes.indexOf(c) !== i);
if (duplicates.length) throw new Error(`Duplicate codes: ${duplicates.join(", ")}`);

writeFeatureCollection(FILE, features);
console.log(`perou-regions.json: ${features.length} regions, codes unique`);
