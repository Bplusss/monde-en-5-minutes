// Builds royaume-uni-regions.json, which never existed (see data/royaume-uni/regions.ts).
// UK has no single-level admin1 matching its 4 constituent nations in Natural
// Earth's dataset (it lists ~230 counties/unitary authorities instead), but
// each of those carries a `geonunit` property naming its nation — union them
// into 4 nation-level polygons at full Natural Earth 1:10m fidelity.
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");

const NATIONS = [
  { geonunit: "England", name: "Angleterre", code: "ENG" },
  { geonunit: "Scotland", name: "Écosse", code: "SCT" },
  { geonunit: "Wales", name: "Pays de Galles", code: "WLS" },
  { geonunit: "Northern Ireland", name: "Irlande du Nord", code: "NIR" },
];

async function main() {
  const { admin1: admin1Path } = await ensureNaturalEarthData();
  const admin1 = JSON.parse(readFileSync(admin1Path, "utf8"));
  const gbr = admin1.features.filter((f) => f.properties.adm0_a3 === "GBR");

  const features = NATIONS.map(({ geonunit, name, code }) => {
    const members = gbr.filter((f) => f.properties.geonunit === geonunit);
    console.log(`${geonunit}: unioning ${members.length} units`);
    let geometry = members[0].geometry;
    for (let i = 1; i < members.length; i++) {
      const merged = turf.union(turf.featureCollection([turf.feature(geometry), turf.feature(members[i].geometry)]));
      geometry = merged.geometry;
    }
    return { type: "Feature", geometry, properties: { name, code } };
  });

  const outPath = path.join(GEO_DIR, "royaume-uni-regions.json");
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(outPath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
  console.log(`Wrote ${outPath}`);
}

main();
