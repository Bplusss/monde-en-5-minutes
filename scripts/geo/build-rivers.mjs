// Builds a country's `<slug>-rivers.json` from Natural Earth's rivers + lake
// centerlines dataset (1:10m — coarse; only major rivers are present, so not
// every river.ts entry will find a match here).
//
// Usage: node scripts/geo/build-rivers.mjs [slug ...]
//   (no args = rebuild every country listed in RIVER_MATCHES below)
//
// For each country, RIVER_MATCHES lists { riverName, neNames }: `riverName`
// must equal the `name` field of that river in data/<slug>/rivers.ts exactly
// (required for the click-to-see-info popup on CountryMap to find it),
// `neNames` are the Natural Earth `properties.name` value(s) whose
// geometry to use — sometimes a river is split into several dissolved
// segments in the source data, so more than one name may be needed.
//
// After writing each file this also clips it to the country's own outline
// (see clip-rivers.mjs) so a river shared with a neighbour only draws the
// segment inside this country.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");

const RIVER_MATCHES = {
  albanie: [
    { riverName: "Drin", neNames: ["Drin"] },
    { riverName: "Buna", neNames: ["Bojana"] },
  ],
  bulgarie: [
    { riverName: "Danube (Dounav)", neNames: ["Danube"] },
    { riverName: "Maritsa (Evros)", neNames: ["Evros"] },
  ],
  croatie: [
    { riverName: "Save", neNames: ["Sava"] },
    { riverName: "Drave", neNames: ["Mur"] }, // NE dissolves the lower Drava into the "Mur" line (name_alt: "Drava")
    { riverName: "Danube", neNames: ["Danube"] },
  ],
  estonie: [{ riverName: "Narva", neNames: ["Narva"] }],
  bielorussie: [
    { riverName: "Dniepr", neNames: ["Dnipro"] },
    { riverName: "Pripiat", neNames: ["Pripyat"] },
    { riverName: "Dvina occidentale", neNames: ["Daugava"] },
  ],
  irlande: [{ riverName: "Shannon", neNames: ["Shannon"] }],
  luxembourg: [{ riverName: "Moselle", neNames: ["Mosel"] }],
  finlande: [
    { riverName: "Kemijoki", neNames: ["Kemijoki"] },
    { riverName: "Oulujoki", neNames: ["Oulu"] },
    { riverName: "Vuoksi", neNames: ["Vuoksi"] },
  ],
  hongrie: [
    { riverName: "Danube (Duna)", neNames: ["Danube"] },
    { riverName: "Tisza", neNames: ["Tisa"] },
    { riverName: "Dráva", neNames: ["Mur"] }, // NE dissolves the lower Drava into the "Mur" line (name_alt: "Drava")
  ],
  tchequie: [
    { riverName: "Vltava", neNames: ["Vltava"] },
    { riverName: "Labe (Elbe)", neNames: ["Elbe"] },
    { riverName: "Morava", neNames: ["Morava"] },
  ],
  lituanie: [
    { riverName: "Nemunas (Niémen)", neNames: ["Neman"] },
    { riverName: "Neris (Vilia)", neNames: ["Neris"] },
  ],
};

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

function readFeatureCollection(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function clipToOutline(features, outlinePolygon) {
  const clipped = [];
  let dropped = 0;
  for (const feat of features) {
    const lines = feat.geometry.type === "LineString" ? [feat.geometry.coordinates] : feat.geometry.coordinates;
    const segments = [];
    for (const coords of lines) {
      if (coords.length < 2) continue;
      const line = turf.lineString(coords);
      let pieces;
      try {
        pieces = turf.lineSplit(line, outlinePolygon).features;
      } catch {
        pieces = [line];
      }
      if (pieces.length === 0) pieces = [line];
      for (const piece of pieces) {
        const len = turf.length(piece);
        const mid = len > 0 ? turf.along(piece, len / 2) : turf.point(piece.geometry.coordinates[0]);
        if (turf.booleanPointInPolygon(mid, outlinePolygon)) segments.push(piece.geometry.coordinates);
      }
    }
    if (!segments.length) { dropped++; continue; }
    const geometry = segments.length === 1 ? { type: "LineString", coordinates: segments[0] } : { type: "MultiLineString", coordinates: segments };
    clipped.push({ type: "Feature", geometry, properties: feat.properties });
  }
  return { clipped, dropped };
}

async function main() {
  const only = process.argv.slice(2);
  const { rivers: riversPath } = await ensureNaturalEarthData();
  const neRivers = JSON.parse(readFileSync(riversPath, "utf8"));

  for (const [slug, matches] of Object.entries(RIVER_MATCHES)) {
    if (only.length && !only.includes(slug)) continue;
    const outlinePath = path.join(GEO_DIR, `${slug}-outline.json`);
    if (!existsSync(outlinePath)) { console.warn(`! ${slug}: no outline file, skipping`); continue; }

    const features = [];
    const missing = [];
    for (const { riverName, neNames } of matches) {
      const segments = neRivers.features.filter((f) => neNames.includes(f.properties.name));
      if (!segments.length) { missing.push(riverName); continue; }
      const lines = [];
      for (const seg of segments) {
        const parts = seg.geometry.type === "LineString" ? [seg.geometry.coordinates] : seg.geometry.coordinates;
        lines.push(...parts);
      }
      const geometry = lines.length === 1 ? { type: "LineString", coordinates: lines[0] } : { type: "MultiLineString", coordinates: lines };
      features.push({ type: "Feature", geometry, properties: { name: riverName } });
    }

    const outline = readFeatureCollection(outlinePath);
    const { clipped, dropped } = clipToOutline(features, outline.features[0]);
    writeFeatureCollection(path.join(GEO_DIR, `${slug}-rivers.json`), clipped);

    console.log(`${slug}: ${clipped.length}/${matches.length} rivers matched and drawn${dropped ? ` (${dropped} fully outside outline, dropped)` : ""}${missing.length ? ` — no NE geometry for: ${missing.join(", ")}` : ""}`);
  }
}

main();
