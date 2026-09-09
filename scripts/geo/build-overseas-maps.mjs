// Rebuilds every country's overseas-territory GeoJSON from Natural Earth
// 1:10m, the same source used for outlines/regions (see rebuild-country-maps.mjs).
// Each output feature carries {group, name}; `group` must match the
// territory's `mapGroupId` in data/<country>/territories.ts.
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

function bboxOfRing(ring) {
  let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
  for (const [x, y] of ring) {
    minx = Math.min(minx, x); maxx = Math.max(maxx, x);
    miny = Math.min(miny, y); maxy = Math.max(maxy, y);
  }
  return [minx, miny, maxx, maxy];
}

function within(bbox, region) {
  const [minx, miny, maxx, maxy] = bbox;
  const [rminx, rminy, rmaxx, rmaxy] = region;
  return minx >= rminx && maxx <= rmaxx && miny >= rminy && maxy <= rmaxy;
}

// Sub-regions of Natural Earth's single "France" admin0 multipolygon: these
// DROMs aren't separate map units in NE (unlike New Caledonia, French
// Polynesia, etc.), so extract them by bounding box instead.
const FRA_SUBREGIONS = {
  guyane: { name: "Guyane", bbox: [-55, 1.5, -51, 6] },
  martinique: { name: "Martinique", bbox: [-61.5, 14.2, -60.5, 15.0] },
  guadeloupe: { name: "Guadeloupe", bbox: [-62.0, 15.7, -60.9, 16.6] },
  "la-reunion": { name: "La Réunion", bbox: [54.9, -21.6, 56.0, -20.7] },
  mayotte: { name: "Mayotte", bbox: [44.9, -13.1, 45.35, -12.6] },
};

// Overseas territories that ARE their own Natural Earth admin0 map unit.
const DIRECT_ADM0 = {
  france: {
    PYF: { group: "polynesie-francaise", name: "Polynésie française" },
    NCL: { group: "nouvelle-caledonie", name: "Nouvelle-Calédonie" },
    SPM: { group: "saint-pierre-et-miquelon", name: "Saint-Pierre-et-Miquelon" },
    MAF: { group: "saint-martin", name: "Saint-Martin" },
    BLM: { group: "saint-barthelemy", name: "Saint-Barthélemy" },
    WLF: { group: "wallis-et-futuna", name: "Wallis-et-Futuna" },
    ATF: { group: "taaf", name: "Terres australes et antarctiques françaises" },
  },
  "royaume-uni": {
    GIB: { group: "gibraltar", name: "Gibraltar" },
    BMU: { group: "bermudes", name: "Bermudes" },
    CYM: { group: "iles-caimans", name: "Îles Caïmans" },
    FLK: { group: "falkland", name: "Îles Falkland (Malouines)" },
  },
};

async function main() {
  const { admin0: admin0Path, admin1: admin1Path } = await ensureNaturalEarthData();
  const admin0 = JSON.parse(readFileSync(admin0Path, "utf8"));
  const admin1 = JSON.parse(readFileSync(admin1Path, "utf8"));

  // --- France --------------------------------------------------------------
  const fraFeatures = [];
  for (const [adm0a3, { group, name }] of Object.entries(DIRECT_ADM0.france)) {
    const f = admin0.features.find((x) => x.properties.ADM0_A3 === adm0a3);
    if (!f) { console.warn(`! ${adm0a3} not found`); continue; }
    fraFeatures.push({ type: "Feature", geometry: f.geometry, properties: { group, name } });
  }
  const fra = admin0.features.find((f) => f.properties.ADM0_A3 === "FRA");
  for (const [group, { name, bbox }] of Object.entries(FRA_SUBREGIONS)) {
    const polys = fra.geometry.coordinates.filter((poly) => within(bboxOfRing(poly[0]), bbox));
    if (!polys.length) { console.warn(`! no FRA polygons matched ${group}`); continue; }
    const geometry = polys.length === 1 ? { type: "Polygon", coordinates: polys[0] } : { type: "MultiPolygon", coordinates: polys };
    fraFeatures.push({ type: "Feature", geometry, properties: { group, name } });
  }
  writeFeatureCollection(path.join(GEO_DIR, "france-overseas.json"), fraFeatures);
  console.log(`france-overseas.json: ${fraFeatures.length} territories`);

  // --- Portugal --------------------------------------------------------------
  const prtFeatures = [];
  for (const [code, group, name] of [["PT-30", "madeira", "Madeira"], ["PT-20", "acores", "Açores"]]) {
    const f = admin1.features.find((x) => x.properties.iso_3166_2 === code);
    if (!f) { console.warn(`! ${code} not found`); continue; }
    prtFeatures.push({ type: "Feature", geometry: f.geometry, properties: { group, name } });
  }
  writeFeatureCollection(path.join(GEO_DIR, "portugal-overseas.json"), prtFeatures);
  console.log(`portugal-overseas.json: ${prtFeatures.length} territories`);

  // --- UK ----------------------------------------------------------------
  const gbrFeatures = [];
  for (const [adm0a3, { group, name }] of Object.entries(DIRECT_ADM0["royaume-uni"])) {
    const f = admin0.features.find((x) => x.properties.ADM0_A3 === adm0a3);
    if (!f) { console.warn(`! ${adm0a3} not found`); continue; }
    gbrFeatures.push({ type: "Feature", geometry: f.geometry, properties: { group, name } });
  }
  writeFeatureCollection(path.join(GEO_DIR, "royaume-uni-overseas.json"), gbrFeatures);
  console.log(`royaume-uni-overseas.json: ${gbrFeatures.length} territories`);
}

main();
