// Clips every country's rivers to its own outline polygon, so a river that
// crosses a border (Rhine, Rhône, Danube...) only draws the segment inside
// that country — not the part running through a neighbour.
//
// Usage: node scripts/geo/clip-rivers.mjs [slug ...]
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");

const COUNTRIES_WITH_RIVERS = [
  "autriche", "belgique", "france", "germany", "grece", "italy", "norvege",
  "pays-bas", "pologne", "portugal", "royaume-uni", "spain", "suede", "suisse",
];

function readFeatureCollection(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

/** Clip a single LineString to the parts that lie inside `polygon`. Returns an array of coordinate arrays (possibly empty). */
function clipLineString(coords, polygon) {
  if (coords.length < 2) return [];
  const line = turf.lineString(coords);
  let pieces;
  try {
    pieces = turf.lineSplit(line, polygon).features;
  } catch {
    pieces = [line];
  }
  if (pieces.length === 0) pieces = [line];
  const kept = [];
  for (const piece of pieces) {
    const len = turf.length(piece);
    const mid = len > 0 ? turf.along(piece, len / 2) : turf.point(piece.geometry.coordinates[0]);
    if (turf.booleanPointInPolygon(mid, polygon)) kept.push(piece.geometry.coordinates);
  }
  return kept;
}

function clipGeometry(geometry, polygon) {
  const lines = geometry.type === "LineString" ? [geometry.coordinates] : geometry.coordinates;
  const result = [];
  for (const coords of lines) result.push(...clipLineString(coords, polygon));
  return result;
}

async function main() {
  const only = process.argv.slice(2);
  for (const slug of COUNTRIES_WITH_RIVERS) {
    if (only.length && !only.includes(slug)) continue;
    const riversPath = path.join(GEO_DIR, `${slug}-rivers.json`);
    const outlinePath = path.join(GEO_DIR, `${slug}-outline.json`);
    if (!existsSync(riversPath) || !existsSync(outlinePath)) continue;

    const rivers = readFeatureCollection(riversPath);
    const outline = readFeatureCollection(outlinePath);
    const polygon = outline.features[0];

    const clipped = [];
    let dropped = 0;
    for (const feat of rivers.features) {
      const segments = clipGeometry(feat.geometry, polygon);
      if (!segments.length) { dropped++; continue; }
      const geometry = segments.length === 1 ? { type: "LineString", coordinates: segments[0] } : { type: "MultiLineString", coordinates: segments };
      clipped.push({ type: "Feature", geometry, properties: feat.properties });
    }
    writeFeatureCollection(riversPath, clipped);
    console.log(`${slug}: ${rivers.features.length} rivers -> ${clipped.length} clipped${dropped ? ` (${dropped} fully outside, dropped)` : ""}`);
  }
}

main();
