// Builds madagascar-regions.json (see data/madagascar/regions.ts). The outline
// comes from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer (and geoBoundaries
// ADM1) have the 22 regions of 2004, and NE only carries the six former
// provinces' ISO codes. Madagascar now has 24 regions: Vatovavy-Fitovinany
// was split into Vatovavy and Fitovinany in 2021, and Ambatosoa was carved
// out of northern Analanjirofo (law of 2023, region installed in 2025). The
// 20 unchanged regions come from geoBoundaries gbOpen MDG ADM1; the four
// affected ones are rebuilt by merging their districts from geoBoundaries
// ADM2. All are simplified, clipped to the NE outline, and coastline slivers
// go to the nearest region so the regions tile the outline exactly.
//
// Codes: ISO 3166-2:MG only lists the six former provinces, so each region
// gets a site-local three-letter code ("MG-ANA" Analamanga…).
//
// Usage: node scripts/geo/new-country-maps.mjs madagascar MDG
//        node scripts/geo/build-madagascar-regions.mjs
import { existsSync, mkdirSync, readFileSync, writeFileSync, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import * as turf from "@turf/turf";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/geoboundaries");
const GB_BASE = "https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/MDG";
const SIMPLIFY_TOLERANCE = 0.002; // degrees (~200 m), keeps the file close to NE 1:10m density

/** geoBoundaries ADM1 shapeName → site-local code, for the 20 regions unchanged since 2004. */
const ADM1_CODES = {
  Diana: "MG-DIA",
  Sava: "MG-SAV",
  "Amoron'i Mania": "MG-AMM",
  Ihorombe: "MG-IHO",
  Melaky: "MG-MEL",
  Menabe: "MG-MEN",
  Vakinankaratra: "MG-VAK",
  Atsinanana: "MG-ATS",
  "Alaotra-Mangoro": "MG-ALA",
  Sofia: "MG-SOF",
  Anosy: "MG-ANO",
  Boeny: "MG-BOE",
  Betsiboka: "MG-BET",
  Analamanga: "MG-ANA",
  Bongolava: "MG-BON",
  Itasy: "MG-ITA",
  "Atsimo-Andrefana": "MG-AAN",
  Androy: "MG-AND",
  "Atsimo-Atsinanana": "MG-AAT",
  "Matsiatra Ambony": "MG-MAT",
};

/** Regions created since 2021, rebuilt from their ADM2 districts. */
const FROM_DISTRICTS = [
  { code: "MG-VAT", name: "Vatovavy", districts: ["Mananjary", "Nosy-Varika", "Ifanadiana"] },
  { code: "MG-FIT", name: "Fitovinany", districts: ["Manakara Atsimo", "Ikongo", "Vohipeno"] },
  { code: "MG-AMB", name: "Ambatosoa", districts: ["Maroantsetra", "Mananara-Avaratra"] },
  { code: "MG-ANJ", name: "Analanjirofo", districts: ["Fenerive Est", "Soanierana Ivongo", "Vavatenina", "Sainte Marie"] },
];
const SPLIT_ADM1 = ["Vatovavy-Fitovinany", "Analanjirofo"];

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

async function ensureGeoBoundaries(level) {
  const name = `geoBoundaries-MDG-${level}.geojson`;
  const dest = path.join(CACHE_DIR, name);
  if (existsSync(dest)) return dest;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log(`Downloading geoBoundaries MDG ${level}...`);
  const res = await fetch(`${GB_BASE}/${level}/${name}`);
  if (!res.ok) throw new Error(`Failed to fetch geoBoundaries: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

async function main() {
  const outlinePath = path.join(GEO_DIR, "madagascar-outline.json");
  if (!existsSync(outlinePath)) throw new Error("Run `node scripts/geo/new-country-maps.mjs madagascar MDG` first");
  const outline = JSON.parse(readFileSync(outlinePath, "utf8")).features[0];

  const adm1 = JSON.parse(readFileSync(await ensureGeoBoundaries("ADM1"), "utf8"));
  const adm2 = JSON.parse(readFileSync(await ensureGeoBoundaries("ADM2"), "utf8"));

  const sources = [];
  for (const f of adm1.features) {
    const name = f.properties.shapeName;
    if (SPLIT_ADM1.includes(name)) continue;
    const code = ADM1_CODES[name];
    if (!code) throw new Error(`Unmapped geoBoundaries region: ${name}`);
    sources.push({ code, name, feature: f });
  }
  for (const { code, name, districts } of FROM_DISTRICTS) {
    const parts = districts.map((d) => {
      const f = adm2.features.find((x) => x.properties.shapeName === d);
      if (!f) throw new Error(`No ADM2 district named ${d}`);
      return turf.feature(f.geometry);
    });
    const merged = parts.length === 1 ? parts[0] : turf.union(turf.featureCollection(parts));
    sources.push({ code, name, feature: merged });
  }

  const regions = [];
  for (const { code, name, feature } of sources) {
    const simplified = turf.simplify(feature, { tolerance: SIMPLIFY_TOLERANCE, highQuality: true });
    let clipped = turf.intersect(turf.featureCollection([simplified, outline]));
    if (!clipped) throw new Error(`${code} ${name}: entirely outside the outline`);
    for (const r of regions) {
      const diff = turf.difference(turf.featureCollection([clipped, turf.feature(r.geometry)]));
      if (diff) clipped = diff;
    }
    regions.push({ code, name, geometry: clipped.geometry });
  }
  if (regions.length !== 24) throw new Error(`Expected 24 regions, got ${regions.length}`);

  // Fill coastline slivers left between the geoBoundaries regions and the NE outline.
  const covered = regions.slice(1).reduce(
    (acc, r) => turf.union(turf.featureCollection([acc, turf.feature(r.geometry)])),
    turf.feature(regions[0].geometry),
  );
  const gaps = turf.difference(turf.featureCollection([outline, covered]));
  let filled = 0;
  if (gaps) {
    turf.flattenEach(gaps, (piece) => {
      const pt = turf.pointOnFeature(piece);
      let best = null;
      let bestDist = Infinity;
      for (const r of regions) {
        let d = Infinity;
        turf.flattenEach(turf.feature(r.geometry), (poly) => {
          d = Math.min(d, turf.pointToPolygonDistance(pt, poly));
        });
        if (d < bestDist) {
          bestDist = d;
          best = r;
        }
      }
      best.geometry = turf.union(turf.featureCollection([turf.feature(best.geometry), piece])).geometry;
      filled++;
    });
  }
  console.log(`Filled ${filled} sliver(s) between geoBoundaries regions and the NE outline`);

  const features = regions.map((r) => ({ type: "Feature", geometry: round(r.geometry), properties: { name: r.name, code: r.code } }));
  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, "madagascar-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
}

main();
