// Fixes up pakistan-regions.json after new-country-maps.mjs (see data/pakistan/regions.ts).
//
// Natural Earth's admin1 layer still has the Federally Administered Tribal
// Areas (FATA, "PK-TA") as a separate unit, but they were merged into
// Khyber Pakhtunkhwa by the 25th constitutional amendment in May 2018. This
// dissolves FATA's polygon into KP's.
//
// Usage: node scripts/geo/new-country-maps.mjs pakistan PAK
//        node scripts/geo/build-pakistan-regions.mjs
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";

const FILE = path.resolve(import.meta.dirname, "../../public/geo/pakistan-regions.json");

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

const geo = JSON.parse(readFileSync(FILE, "utf8"));
const fata = geo.features.find((f) => f.properties.code === "PK-TA");
const kp = geo.features.find((f) => f.properties.code === "PK-KP");
if (!kp) throw new Error("No PK-KP feature");

let features = geo.features;
if (fata) {
  const merged = turf.union(turf.featureCollection([turf.feature(kp.geometry), turf.feature(fata.geometry)]));
  kp.geometry = turf.truncate(merged, { precision: 6 }).geometry;
  features = geo.features.filter((f) => f !== fata);
}

writeFeatureCollection(FILE, features);
console.log(`pakistan-regions.json: ${features.length} regions (${features.map((f) => f.properties.code).join(", ")})`);
