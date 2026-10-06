// Fixes up colombie-regions.json after new-country-maps.mjs (see data/colombie/regions.ts).
//
// Natural Earth's admin1 layer has the right 32 departments plus Bogotá, but:
// - Bogotá (Distrito Capital) carries Cundinamarca's code "CO-CUN" instead of
//   its own ISO 3166-2 code "CO-DC";
// - Malpelo island comes as an extra nameless feature ("CO-X01~"). It belongs
//   to Valle del Cauca and is drawn on the overseas map instead
//   (build-overseas-maps.mjs, group "malpelo"), so it's dropped here.
//
// Usage: node scripts/geo/new-country-maps.mjs colombie COL
//        node scripts/geo/rebuild-country-maps.mjs colombie   (mainland-only outline)
//        node scripts/geo/build-colombie-regions.mjs
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve(import.meta.dirname, "../../public/geo/colombie-regions.json");

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

const geo = JSON.parse(readFileSync(FILE, "utf8"));
const features = geo.features
  .filter((f) => f.properties.name)
  .map((f) => (f.properties.name === "Bogota" ? { ...f, properties: { ...f.properties, code: "CO-DC" } } : f));

const codes = features.map((f) => f.properties.code);
const duplicates = codes.filter((c, i) => codes.indexOf(c) !== i);
if (duplicates.length) throw new Error(`Duplicate codes: ${duplicates.join(", ")}`);

writeFeatureCollection(FILE, features);
console.log(`colombie-regions.json: ${features.length} regions (${geo.features.length - features.length} dropped)`);
