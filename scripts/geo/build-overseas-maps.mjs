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

// Sub-regions of a single admin0 multipolygon that aren't their own Natural
// Earth map unit (unlike New Caledonia, French Polynesia, etc.), so they're
// extracted by bounding box instead.
const SUBREGIONS = {
  france: {
    guyane: { name: "Guyane", bbox: [-55, 1.5, -51, 6] },
    martinique: { name: "Martinique", bbox: [-61.5, 14.2, -60.5, 15.0] },
    guadeloupe: { name: "Guadeloupe", bbox: [-62.0, 15.7, -60.9, 16.6] },
    "la-reunion": { name: "La Réunion", bbox: [54.9, -21.6, 56.0, -20.7] },
    mayotte: { name: "Mayotte", bbox: [44.9, -13.1, 45.35, -12.6] },
  },
  "pays-bas": {
    bonaire: { name: "Bonaire", bbox: [-68.5, 11.9, -68.1, 12.4] },
    "sint-eustatius": { name: "Sint Eustatius", bbox: [-63.05, 17.4, -62.9, 17.6] },
    saba: { name: "Saba", bbox: [-63.3, 17.58, -63.2, 17.68] },
  },
  norvege: {
    svalbard: { name: "Svalbard", bbox: [9, 74, 35, 81] },
    "jan-mayen": { name: "Jan Mayen", bbox: [-9.5, 70.5, -7.5, 71.5] },
  },
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
  "pays-bas": {
    ABW: { group: "aruba", name: "Aruba" },
    CUW: { group: "curacao", name: "Curaçao" },
    SXM: { group: "sint-maarten", name: "Sint Maarten" },
  },
  danemark: {
    GRL: { group: "groenland", name: "Groenland" },
    FRO: { group: "iles-feroe", name: "Îles Féroé" },
  },
};

/** Builds one country's overseas GeoJSON from its direct-admin0 units plus any bbox sub-regions of its own admin0 multipolygon. */
function buildOverseas(slug, admin0Features, adm0a3ForSubregions) {
  const features = [];
  for (const [adm0a3, { group, name }] of Object.entries(DIRECT_ADM0[slug] ?? {})) {
    const f = admin0Features.find((x) => x.properties.ADM0_A3 === adm0a3);
    if (!f) { console.warn(`! ${adm0a3} not found`); continue; }
    features.push({ type: "Feature", geometry: f.geometry, properties: { group, name } });
  }
  const subregions = SUBREGIONS[slug];
  if (subregions && adm0a3ForSubregions) {
    const parent = admin0Features.find((f) => f.properties.ADM0_A3 === adm0a3ForSubregions);
    for (const [group, { name, bbox }] of Object.entries(subregions)) {
      const polys = parent.geometry.coordinates.filter((poly) => within(bboxOfRing(poly[0]), bbox));
      if (!polys.length) { console.warn(`! no ${adm0a3ForSubregions} polygons matched ${group}`); continue; }
      const geometry = polys.length === 1 ? { type: "Polygon", coordinates: polys[0] } : { type: "MultiPolygon", coordinates: polys };
      features.push({ type: "Feature", geometry, properties: { group, name } });
    }
  }
  return features;
}

async function main() {
  const { admin0: admin0Path, admin1: admin1Path } = await ensureNaturalEarthData();
  const admin0 = JSON.parse(readFileSync(admin0Path, "utf8"));
  const admin1 = JSON.parse(readFileSync(admin1Path, "utf8"));

  // --- Countries whose overseas territories are direct admin0 units and/or
  // bbox sub-regions of their own admin0 multipolygon. ---------------------
  for (const [slug, parentAdm0a3] of [
    ["france", "FRA"],
    ["royaume-uni", null],
    ["pays-bas", "NLD"],
    ["danemark", null],
    ["norvege", "NOR"],
  ]) {
    const features = buildOverseas(slug, admin0.features, parentAdm0a3);
    writeFeatureCollection(path.join(GEO_DIR, `${slug}-overseas.json`), features);
    console.log(`${slug}-overseas.json: ${features.length} territories`);
  }

  // --- Portugal: NUTS-2 admin1 regions, not separate admin0 units ---------
  const prtFeatures = [];
  for (const [code, group, name] of [["PT-30", "madeira", "Madeira"], ["PT-20", "acores", "Açores"]]) {
    const f = admin1.features.find((x) => x.properties.iso_3166_2 === code);
    if (!f) { console.warn(`! ${code} not found`); continue; }
    prtFeatures.push({ type: "Feature", geometry: f.geometry, properties: { group, name } });
  }
  writeFeatureCollection(path.join(GEO_DIR, "portugal-overseas.json"), prtFeatures);
  console.log(`portugal-overseas.json: ${prtFeatures.length} territories`);
}

main();
