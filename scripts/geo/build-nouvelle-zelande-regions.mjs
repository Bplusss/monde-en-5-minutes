// Fixes up nouvelle-zelande-regions.json after new-country-maps.mjs (see
// data/nouvelle-zelande/regions.ts).
//
// Natural Earth's admin1 layer for NZL mixes the 16 regions with outlying
// units: the Chatham Islands Territory, unnamed-code island groups (Kermadec,
// Three Kings, Snares, Auckland, Campbell, Antipodes — "NZ-X0n~") and Tokelau
// ("TK-X01~"). Only the 16 regions are kept; the remote islands are drawn on
// the overseas map instead (build-overseas-maps.mjs).
//
// Usage: node scripts/geo/new-country-maps.mjs nouvelle-zelande NZL
//        node scripts/geo/rebuild-country-maps.mjs nouvelle-zelande   (mainland-only outline)
//        node scripts/geo/build-nouvelle-zelande-regions.mjs
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve(import.meta.dirname, "../../public/geo/nouvelle-zelande-regions.json");

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

const geo = JSON.parse(readFileSync(FILE, "utf8"));
const features = geo.features.filter(({ properties: { code } }) => /^NZ-[A-Z]{3}$/.test(code) && code !== "NZ-CIT");
if (features.length !== 16) throw new Error(`Expected 16 regions, got ${features.length}`);

writeFeatureCollection(FILE, features);
console.log(`nouvelle-zelande-regions.json: ${features.length} regions (${geo.features.length - features.length} outlying units dropped)`);
