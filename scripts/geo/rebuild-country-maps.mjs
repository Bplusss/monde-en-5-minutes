// Rebuilds a country's outline + regions GeoJSON at full Natural Earth 1:10m
// fidelity — the resolution France's map has always used. Run this for any
// country whose map looks coarser than France's, and again for every new
// country added to the site so it starts at the same quality bar.
//
// Usage: node scripts/geo/rebuild-country-maps.mjs [slug ...]
//   (no args = rebuild every country listed in COUNTRIES below)
//
// What it does NOT touch: France (its regions/departements come from a
// France-specific curated source, not Natural Earth, and are already at
// full resolution) and each country's *-rivers.json (sourced separately,
// see git history).
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");

// NE's `region` property groups fine-grained provinces into the
// coarser administrative level these two countries' region maps use.
// Mapping: NE region name -> { name: current French name, code: current code }
const ITALY_GROUPS = {
  "Piemonte": { name: "Piémont", code: "01" },
  "Valle d'Aosta": { name: "Vallée d'Aoste", code: "02" },
  "Lombardia": { name: "Lombardie", code: "03" },
  "Trentino-Alto Adige": { name: "Trentin-Haut-Adige", code: "04" },
  "Veneto": { name: "Vénétie", code: "05" },
  "Friuli-Venezia Giulia": { name: "Frioul-Vénétie julienne", code: "06" },
  "Liguria": { name: "Ligurie", code: "07" },
  "Emilia-Romagna": { name: "Émilie-Romagne", code: "08" },
  "Toscana": { name: "Toscane", code: "09" },
  "Umbria": { name: "Ombrie", code: "10" },
  "Marche": { name: "Marches", code: "11" },
  "Lazio": { name: "Latium", code: "12" },
  "Abruzzo": { name: "Abruzzes", code: "13" },
  "Molise": { name: "Molise", code: "14" },
  "Campania": { name: "Campanie", code: "15" },
  "Apulia": { name: "Pouilles", code: "16" },
  "Basilicata": { name: "Basilicate", code: "17" },
  "Calabria": { name: "Calabre", code: "18" },
  "Sicily": { name: "Sicile", code: "19" },
  "Sardegna": { name: "Sardaigne", code: "20" },
};

const SPAIN_GROUPS = {
  "Ceuta": { name: "Ceuta" },
  "Melilla": { name: "Melilla" },
  "Foral de Navarra": { name: "Navarre" },
  "País Vasco": { name: "Pays basque" },
  "Aragón": { name: "Aragon" },
  "Cataluña": { name: "Catalogne" },
  "Extremadura": { name: "Estrémadure" },
  "Andalucía": { name: "Andalousie" },
  "Galicia": { name: "Galice" },
  "Castilla y León": { name: "Castille-et-León" },
  "Valenciana": { name: "Communauté valencienne" },
  "Murcia": { name: "Murcie" },
  "Asturias": { name: "Asturies" },
  "Cantabria": { name: "Cantabrie" },
  "Canary Is.": { name: "Canaries" },
  "Islas Baleares": { name: "Baléares" },
  "La Rioja": { name: "La Rioja" },
  "Castilla-La Mancha": { name: "Castille-La Manche" },
  "Madrid": { name: "Madrid" },
};

const COUNTRIES = [
  { slug: "autriche", adm0: "AUT", regionMatch: "code", codeProp: "code" },
  { slug: "belgique", adm0: "BEL", regionMatch: "code", codeProp: "code" },
  { slug: "danemark", adm0: "DNK", regionMatch: "code", codeProp: "code" },
  { slug: "germany", adm0: "DEU", regionMatch: "code", codeProp: "id" },
  { slug: "grece", adm0: "GRC", regionMatch: "code", codeProp: "code" },
  { slug: "italy", adm0: "ITA", regionMatch: "group", groups: ITALY_GROUPS },
  { slug: "norvege", adm0: "NOR", regionMatch: "code", codeProp: "code" },
  { slug: "pays-bas", adm0: "NLD", regionMatch: "code", codeProp: "code" },
  { slug: "pologne", adm0: "POL", regionMatch: "code", codeProp: "code" },
  { slug: "portugal", adm0: "PRT", regionMatch: "name", nameAliases: { "Lisbonne": "Lisboa" } },
  { slug: "spain", adm0: "ESP", regionMatch: "group", groups: SPAIN_GROUPS },
  { slug: "suede", adm0: "SWE", regionMatch: "code", codeProp: "code" },
  { slug: "suisse", adm0: "CHE", regionMatch: "code", codeProp: "code" },
  { slug: "royaume-uni", adm0: "GBR", regionMatch: "none" },
];

function countPoints(geometry) {
  let n = 0;
  const depth = { Polygon: 2, MultiPolygon: 3, LineString: 1, MultiLineString: 2 }[geometry.type] ?? 0;
  (function walk(c, d) {
    if (d === 0) return void n++;
    for (const x of c) walk(x, d - 1);
  })(geometry.coordinates, depth);
  return n;
}

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

function readFeatureCollection(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

async function main() {
  const only = process.argv.slice(2);
  const { admin0: admin0Path, admin1: admin1Path } = await ensureNaturalEarthData();

  console.log("Loading Natural Earth datasets (this can take a few seconds)...");
  const admin0 = JSON.parse(readFileSync(admin0Path, "utf8"));
  const admin1 = JSON.parse(readFileSync(admin1Path, "utf8"));

  for (const country of COUNTRIES) {
    if (only.length && !only.includes(country.slug)) continue;
    console.log(`\n=== ${country.slug} (${country.adm0}) ===`);

    // --- Outline -------------------------------------------------------
    const outlinePath = path.join(GEO_DIR, `${country.slug}-outline.json`);
    const neOutline = admin0.features.find((f) => f.properties.ADM0_A3 === country.adm0);
    if (!neOutline) {
      console.warn(`  ! no admin0 match for ${country.adm0}, skipping outline`);
    } else {
      const current = readFeatureCollection(outlinePath);
      const before = countPoints(current.features[0].geometry);
      current.features[0].geometry = neOutline.geometry;
      const after = countPoints(neOutline.geometry);
      writeFeatureCollection(outlinePath, current.features);
      console.log(`  outline: ${before} -> ${after} points`);
    }

    // --- Regions ---------------------------------------------------------
    if (country.regionMatch === "none") continue;

    const regionsPath = path.join(GEO_DIR, `${country.slug}-regions.json`);
    const countryAdmin1 = admin1.features.filter((f) => f.properties.adm0_a3 === country.adm0);

    if (country.regionMatch === "code") {
      const current = readFeatureCollection(regionsPath);
      let beforeTotal = 0;
      let afterTotal = 0;
      const unmatched = [];
      for (const feat of current.features) {
        const code = feat.properties[country.codeProp];
        const ne = countryAdmin1.find((f) => f.properties.iso_3166_2 === code);
        beforeTotal += countPoints(feat.geometry);
        if (!ne) {
          unmatched.push(code);
          continue;
        }
        feat.geometry = ne.geometry;
        afterTotal += countPoints(ne.geometry);
      }
      writeFeatureCollection(regionsPath, current.features);
      console.log(`  regions: ${beforeTotal} -> ${afterTotal} points (${current.features.length} features)`);
      if (unmatched.length) console.warn(`  ! unmatched codes: ${unmatched.join(", ")}`);
    } else if (country.regionMatch === "name") {
      const current = readFeatureCollection(regionsPath);
      let beforeTotal = 0;
      let afterTotal = 0;
      const unmatched = [];
      for (const feat of current.features) {
        const name = feat.properties.name;
        const lookupName = country.nameAliases?.[name] ?? name;
        const ne = countryAdmin1.find((f) => f.properties.name === lookupName);
        beforeTotal += countPoints(feat.geometry);
        if (!ne) {
          unmatched.push(name);
          continue;
        }
        feat.geometry = ne.geometry;
        afterTotal += countPoints(ne.geometry);
      }
      writeFeatureCollection(regionsPath, current.features);
      console.log(`  regions: ${beforeTotal} -> ${afterTotal} points (${current.features.length} features)`);
      if (unmatched.length) console.warn(`  ! unmatched names: ${unmatched.join(", ")}`);
    } else if (country.regionMatch === "group") {
      const current = readFeatureCollection(regionsPath);
      let beforeTotal = 0;
      let afterTotal = 0;
      const unmatched = [];
      for (const feat of current.features) {
        beforeTotal += countPoints(feat.geometry);
        const neGroupKey = Object.entries(country.groups).find(
          ([, v]) => v.name === feat.properties.name,
        )?.[0];
        if (!neGroupKey) {
          unmatched.push(feat.properties.name);
          continue;
        }
        const members = countryAdmin1.filter((f) => f.properties.region === neGroupKey);
        const merged =
          members.length === 1
            ? members[0].geometry
            : turf.union(turf.featureCollection(members.map((f) => turf.feature(f.geometry)))).geometry;
        feat.geometry = merged;
        afterTotal += countPoints(merged);
      }
      writeFeatureCollection(regionsPath, current.features);
      console.log(`  regions: ${beforeTotal} -> ${afterTotal} points (${current.features.length} features)`);
      if (unmatched.length) console.warn(`  ! unmatched groups: ${unmatched.join(", ")}`);
    }
  }
}

main();
