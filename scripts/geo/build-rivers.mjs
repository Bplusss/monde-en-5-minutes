// Builds a country's `<slug>-rivers.json` from Natural Earth's rivers + lake
// centerlines dataset (1:10m — coarse; only major rivers are present, so not
// every river.ts entry will find a match here).
//
// Usage: node scripts/geo/build-rivers.mjs [slug ...]
//   (no args = rebuild every country listed in RIVER_MATCHES below)
//
// For each country, RIVER_MATCHES lists { riverName, neNames } or
// { riverName, osm }: `riverName` must equal the `name` field of that river
// in data/<slug>/rivers.ts exactly (required for the click-to-see-info popup
// on CountryMap to find it). `neNames` are the Natural Earth
// `properties.name` value(s) whose geometry to use — sometimes a river is
// split into several dissolved segments in the source data, so more than one
// name may be needed. When a river has no Natural Earth geometry at all
// (too minor for the 1:10m dataset — e.g. Denmark's Gudenå), `osm` falls
// back to OpenStreetMap's Overpass API instead: { nameRegex, bbox } fetches
// every `waterway=river` way whose name matches within that
// [minLon, minLat, maxLon, maxLat] box, cached under .cache/osm-rivers/ so
// re-runs don't re-hit the (rate-limited) public API. OSM data is ODbL —
// keep that in mind if this ever needs public attribution.
//
// Optional per-river flags: `neBbox` [minLon,minLat,maxLon,maxLat] keeps only
// the NE segments lying entirely inside that box (when NE reuses one name for
// segments of different rivers); `keepBorder: true` also keeps clipped pieces
// within 3 km of the outline, for rivers that trace an international border
// (otherwise the line's wobble across the border chops it into dashes).
// `osm.simplify` (degrees) simplifies OSM's full-resolution ways, for long
// rivers whose raw geometry would otherwise bloat the file.
//
// After writing each file this also clips it to the country's own outline
// (see clip-rivers.mjs) so a river shared with a neighbour only draws the
// segment inside this country.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");
const OSM_CACHE_DIR = path.resolve(import.meta.dirname, "../../.cache/osm-rivers");

/** Fetches (and caches) every `waterway=river` OSM way whose name matches `nameRegex` inside `bbox` ([minLon,minLat,maxLon,maxLat]). Returns an array of [lon,lat] coordinate arrays. */
async function fetchOsmRiverWays(cacheKey, nameRegex, bbox) {
  mkdirSync(OSM_CACHE_DIR, { recursive: true });
  const cachePath = path.join(OSM_CACHE_DIR, `${cacheKey}.json`);
  if (existsSync(cachePath)) return JSON.parse(readFileSync(cachePath, "utf8"));

  const [minLon, minLat, maxLon, maxLat] = bbox;
  const query = `[out:json][timeout:30];way["waterway"="river"]["name"~"${nameRegex}"](${minLat},${minLon},${maxLat},${maxLon});out geom;`;
  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: `data=${encodeURIComponent(query)}`,
    // Overpass rejects requests with no descriptive User-Agent (406 Not Acceptable).
    headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": "monde5minutes-data-import/1.0" },
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`Overpass request for "${nameRegex}" failed (likely rate-limited): ${text.slice(0, 200)}`);
  }
  const lines = json.elements.filter((e) => e.type === "way" && e.geometry).map((e) => e.geometry.map((pt) => [pt.lon, pt.lat]));
  writeFileSync(cachePath, JSON.stringify(lines));
  return lines;
}

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
  danemark: [
    // No Natural Earth geometry at 1:10m for the Gudenå (too minor); OSM has it.
    { riverName: "Gudenå", osm: { nameRegex: "Guden", bbox: [8.0, 54.5, 13.0, 57.0] } },
  ],
  islande: [{ riverName: "Þjórsá", neNames: ["Thjórsá"] }],
  andorre: [
    // No Natural Earth geometry at 1:10m for the Valira (too minor); OSM has it.
    { riverName: "Valira", osm: { nameRegex: "^Valira", bbox: [1.4, 42.35, 1.8, 42.66] } },
  ],
  chine: [
    { riverName: "Yangtsé (Chang Jiang)", neNames: ["Jinsha", "Chang Jiang", "Yangtze"] },
    { riverName: "Fleuve Jaune (Huang He)", neNames: ["Huang"] },
    // NE's "Pearl" feature is the unrelated Louisiana river; the Chinese Pearl/Xi Jiang has no NE geometry.
    // OSM tags it under its Chinese name (西江); "Xi Jiang" only appears in name:en.
    { riverName: "Rivière des Perles (Xi Jiang)", osm: { nameRegex: "西江", bbox: [104.0, 21.5, 114.5, 26.5] } },
    { riverName: "Heilong Jiang (Amour)", neNames: ["Heilong Jiang", "Amur"] },
    // NE's "Brahmaputra" segment stops at the India/Bangladesh border, short of Tibet; OSM has it tagged
    // under its Chinese name (雅鲁藏布江) throughout Tibet — "Yarlung"/"Brahmaputra" alone only picks up a
    // short stretch near the Great Bend, right at the disputed India border, which gets clipped away.
    { riverName: "Yarlung Tsangpo (haut Brahmapoutre)", osm: { nameRegex: "雅鲁藏布江", bbox: [82.0, 28.0, 97.5, 31.5] } },
  ],
  "macedoine-du-nord": [
    // No Natural Earth geometry at 1:10m for the Vardar (too minor); OSM has it,
    // tagged under its Macedonian Cyrillic name (Вардар), with "Vardar" only in name:en.
    { riverName: "Vardar", osm: { nameRegex: "Вардар", bbox: [20.4, 40.8, 23.1, 42.4] } },
    { riverName: "Crni Drim (Drin noir)", neNames: ["Drin"] },
  ],
  "bosnie-herzegovine": [
    { riverName: "Save (Sava)", neNames: ["Sava"] },
    { riverName: "Drina", neNames: ["Drina"] },
    // No Natural Earth geometry at 1:10m for the Bosna (too minor, despite giving the country its name); OSM has it.
    { riverName: "Bosna", osm: { nameRegex: "^Bosna$", bbox: [17.6, 43.9, 18.5, 45.1] } },
  ],
  moldavie: [
    { riverName: "Dniestr (Nistru)", neNames: ["Dniester"] },
    { riverName: "Prout (Prut)", neNames: ["Prut"] },
  ],
  ukraine: [
    { riverName: "Dniepr (Dnipro)", neNames: ["Dnipro"] },
    { riverName: "Dniestr", neNames: ["Dniester"] },
    { riverName: "Boug méridional (Pivdennyi Bouh)", neNames: ["Southern Bug"] },
    { riverName: "Desna", neNames: ["Desna"] },
  ],
  lettonie: [
    { riverName: "Daugava", neNames: ["Daugava"] },
    { riverName: "Gauja", osm: { nameRegex: "^Gauja$", bbox: [24.3, 57.0, 26.5, 57.7] } },
    { riverName: "Venta", neNames: ["Venta"] }, // No NE geometry at 1:10m (too minor) — checked.
    { riverName: "Lielupe", neNames: ["Lielupe"] }, // No NE geometry at 1:10m (too minor) — checked.
  ],
  roumanie: [
    { riverName: "Danube", neNames: ["Danube"] },
    { riverName: "Mureș", neNames: ["Mures"] },
    { riverName: "Olt", neNames: ["Olt"] },
    { riverName: "Siret", osm: { nameRegex: "^Siret$", bbox: [26.0, 45.4, 27.6, 48.0] } },
    { riverName: "Prut", neNames: ["Prut"] },
  ],
  slovaquie: [
    { riverName: "Danube", neNames: ["Danube"] },
    { riverName: "Váh", osm: { nameRegex: "Váh", bbox: [17.5, 47.7, 19.6, 49.4] } },
    { riverName: "Hron", neNames: ["Hron"] }, // No NE geometry at 1:10m (too minor) — checked.
    { riverName: "Hornád", neNames: ["Hornád"] }, // No NE geometry at 1:10m (too minor) — checked.
    { riverName: "Nitra", neNames: ["Nitra"] }, // No NE geometry at 1:10m (too minor) — checked.
  ],
  liechtenstein: [
    // NE's only "Rhine"-named line covers the lower Rhine (Netherlands/Germany); the
    // Alpine Rhine section bordering Liechtenstein isn't present at 1:10m, so this
    // falls back to OSM for the actual Vorarlberg/Liechtenstein/St. Gallen stretch.
    { riverName: "Rhin", osm: { nameRegex: "^Rhein$", bbox: [9.4, 46.95, 9.65, 47.3] } },
    { riverName: "Samina", neNames: ["Samina"] }, // No NE geometry at 1:10m (too minor) — checked.
  ],
  serbie: [
    { riverName: "Danube", neNames: ["Danube"] },
    { riverName: "Sava", neNames: ["Sava"] },
    { riverName: "Tisza", neNames: ["Tisa"] },
    // NE carries two distinct lines named "Morava" (this one and Czechia's); clipping
    // to Serbia's own outline keeps only the Velika Morava segment.
    { riverName: "Grande Morava (Velika Morava)", neNames: ["Morava"] },
    { riverName: "Drina", neNames: ["Drina"] },
  ],
  slovenie: [
    { riverName: "Save", neNames: ["Sava"] },
    // Slovenia's (upper) Drava is NE's "Drau" line (name_alt "Drava") — distinct from
    // the lower-Drava "Mur" line already used by croatie/hongrie.
    { riverName: "Drave", neNames: ["Drau"] },
    { riverName: "Soča", osm: { nameRegex: "Soča", bbox: [13.3, 45.6, 13.95, 46.55] } },
    { riverName: "Mura", neNames: ["Mura"] }, // No NE geometry at 1:10m (too minor) — checked.
    { riverName: "Savinja", neNames: ["Savinja"] }, // No NE geometry at 1:10m (too minor) — checked.
  ],
  montenegro: [
    { riverName: "Tara", osm: { nameRegex: "^Tara$", bbox: [18.7, 42.75, 19.6, 43.35] } },
    { riverName: "Morača", neNames: ["Morača"] }, // No NE geometry at 1:10m (too minor) — checked.
    { riverName: "Lim", neNames: ["Lim"] }, // No NE geometry at 1:10m (too minor) — checked.
  ],
  // saint-marin: no rivers.ts entries (no watercourse meets the inclusion bar) — no key needed here, same as monaco/cite-du-vatican.
  "etats-unis": [
    { riverName: "Mississippi", neNames: ["Mississippi"] },
    { riverName: "Missouri", neNames: ["Missouri"] },
    { riverName: "Rio Grande", neNames: ["Rio Grande"] },
    { riverName: "Colorado", neNames: ["Colorado"] },
    { riverName: "Columbia", neNames: ["Columbia"] },
  ],
  canada: [
    { riverName: "Fleuve Saint-Laurent", neNames: ["St. Lawrence"] },
    { riverName: "Mackenzie", neNames: ["Mackenzie"] },
    { riverName: "Fraser", neNames: ["Fraser"] },
    { riverName: "Churchill", neNames: ["Churchill"] },
    { riverName: "Nelson", neNames: ["Nelson"] },
  ],
  japon: [
    // Checked: no NE geometry, and OSM only tags these in kanji (no Latin `name`
    // in the areas queried) — a confirmed gap, not a skipped step.
    { riverName: "Shinano", osm: { nameRegex: "^Shinano", bbox: [138.0, 36.5, 139.2, 37.98] } },
    { riverName: "Tone", neNames: ["Tone"] },
    { riverName: "Ishikari", neNames: ["Ishikari"] },
    { riverName: "Kitakami", osm: { nameRegex: "^Kitakami", bbox: [140.9, 38.2, 141.7, 39.75] } },
  ],
  togo: [
    { riverName: "Mono", osm: { nameRegex: "^Mono", bbox: [1.4, 6.2, 1.9, 9.6] } },
    { riverName: "Oti (Pendjari)", neNames: ["Oti"] },
  ],
  bresil: [
    { riverName: "Amazone", neNames: ["Amazonas"] },
    { riverName: "São Francisco", osm: { nameRegex: "São Francisco", bbox: [-46.0, -21.0, -36.0, -9.0] } },
    { riverName: "Paraná", neNames: ["Paraná"] },
    { riverName: "Madeira", neNames: ["Madeira"] },
    { riverName: "Rio Negro", neNames: ["Negro"] },
  ],
  australie: [
    { riverName: "Murray", neNames: ["Murray"] },
    { riverName: "Darling (Baaka)", neNames: ["Darling"] },
    { riverName: "Murrumbidgee", osm: { nameRegex: "^Murrumbidgee", bbox: [143.5, -35.5, 149.5, -34.5] } },
  ],
  mexique: [
    { riverName: "Rio Bravo", neNames: ["Rio Grande"] },
    { riverName: "Usumacinta", neNames: ["Usumacinta"] },
    { riverName: "Lerma-Santiago", neNames: ["Lerma", "Santiago"] },
    { riverName: "Balsas", neNames: ["Balsas"] },
    { riverName: "Grijalva", neNames: ["Grijalva"] },
  ],
  inde: [
    { riverName: "Gange (Ganga)", neNames: ["Ganges"] },
    { riverName: "Brahmapoutre", neNames: ["Yarlung", "Brahmaputra"] },
    { riverName: "Yamuna", neNames: ["Yamuna"] },
    { riverName: "Godavari", osm: { nameRegex: "^Godavari", bbox: [73.5, 16.5, 82.3, 20.1] } },
    { riverName: "Narmada", neNames: ["Narmada"] },
  ],
  nigeria: [
    { riverName: "Niger", neNames: ["Niger"] },
    { riverName: "Bénoué", neNames: ["Benue"] },
    { riverName: "Kaduna", neNames: ["Kaduna"] },
    // Checked: no NE geometry; Overpass has repeatedly timed out on this query
    // (server-side, verified via direct curl) rather than returning an empty
    // result — retry later if this keeps failing.
    { riverName: "Cross River", osm: { nameRegex: "^Cross River", bbox: [8.0, 4.8, 9.3, 6.2] } },
  ],
  argentine: [
    { riverName: "Paraná", neNames: ["Paraná"] },
    { riverName: "Uruguay", neNames: ["Uruguay"] },
    // An estuary rather than a classic river line — may have no centerline
    // geometry in either dataset; a documented, acceptable gap if so.
    { riverName: "Río de la Plata", osm: { nameRegex: "Plata", bbox: [-58.7, -36.0, -55.5, -34.0] } },
    { riverName: "Colorado", neNames: ["Colorado"] },
    { riverName: "Río Negro", neNames: ["Negro"] },
  ],
  iran: [
    // No NE geometry at 1:10m for the Karun (too minor despite being Iran's longest
    // and only navigable river). OSM tags it under its Persian name (کارون); the
    // Latin "Karun"/"Karoun" only appears in name:en, which this query doesn't check.
    { riverName: "Karoun", osm: { nameRegex: "کارون", bbox: [47.8, 29.9, 51.2, 32.2] } },
    { riverName: "Sefid-Roud", neNames: ["Sefid"] },
    { riverName: "Karkheh", neNames: ["Karkheh"] },
    // No NE geometry at 1:10m for the Zayandeh-Roud (too minor; also seasonally dry
    // for much of its lower course in recent years). OSM tags it under its Persian
    // name (زاینده‌رود / زاینده رود).
    { riverName: "Zayandeh-Roud", osm: { nameRegex: "زاینده", bbox: [49.8, 32.0, 53.0, 32.9] } },
    { riverName: "Aras (Araxe)", neNames: ["Aras"] },
  ],
  "coree-du-sud": [
    // NE's "Han" line includes an unrelated Chinese Han (Hubei/Shaanxi, tributary
    // of the Yangtze) plus the actual Korean Han-gang near Seoul — clipping to the
    // outline drops the Chinese segments automatically. "Namhan" adds the South
    // Han tributary branch.
    { riverName: "Han-gang (Han)", neNames: ["Han", "Namhan"] },
    { riverName: "Nakdong-gang (Nakdong)", neNames: ["Nakdong"] },
    // No NE geometry at 1:10m for the Geum or the Yeongsan (too minor); OSM
    // tags them under their Hangul names.
    { riverName: "Geum-gang (Geum)", osm: { nameRegex: "금강", bbox: [126.5, 35.8, 127.9, 36.6] } },
    { riverName: "Yeongsan-gang (Yeongsan)", osm: { nameRegex: "영산강", bbox: [126.2, 34.7, 126.95, 35.35] } },
  ],
  "afrique-du-sud": [
    { riverName: "Orange (Gariep)", neNames: ["Orange"] },
    { riverName: "Vaal", neNames: ["Vaal"] },
    { riverName: "Limpopo", neNames: ["Limpopo"] },
    // No NE geometry at 1:10m for the Tugela (too minor); OSM has it.
    { riverName: "Tugela", osm: { nameRegex: "^Tugela", bbox: [28.5, -29.3, 31.6, -28.1] } },
  ],
  egypte: [
    { riverName: "Nil", neNames: ["Nile"] },
  ],
  turquie: [
    // NE stores the Kızılırmak with a mangled dotless-i ("Kiz?lirmak") and the
    // Büyük Menderes as "Byk Menderes"; the Euphrates' Turkish course is "Firat"
    // (river + lake centerline through the Atatürk/Keban reservoirs) and the
    // Tigris' is "Dicle". "Tigris"/"Al Furat" are their Iraqi/Syrian segments,
    // which clipping to the outline drops anyway.
    { riverName: "Kızılırmak", neNames: ["Kiz?lirmak"] },
    { riverName: "Euphrate", neNames: ["Firat", "Al Furat"] },
    { riverName: "Tigre", neNames: ["Dicle", "Tigris"], keepBorder: true },
    { riverName: "Sakarya", neNames: ["Sakarya"] },
    { riverName: "Ceyhan", neNames: ["Ceyhan"] },
    { riverName: "Grand Méandre (Büyük Menderes)", neNames: ["Byk Menderes"] },
  ],
  liban: [
    // Natural Earth 1:10m carries no Lebanese river (only the Jordan, outside
    // the outline); every entry falls back to OSM's Arabic `name` tag. The
    // Litani cache was seeded with the identical query run against
    // overpass.kumi.systems (overpass-api.de was erroring). OSM only names
    // ~131 of the Litani's 174 km and ~11 of the Nahr Ibrahim's 23 km.
    { riverName: "Litani", osm: { nameRegex: "الليطاني", bbox: [35.1, 33.2, 36.3, 34.1] } },
    { riverName: "Oronte (Nahr al-Assi)", osm: { nameRegex: "العاصي", bbox: [36.1, 34.1, 36.7, 34.7] } },
    { riverName: "Nahr Ibrahim (fleuve Adonis)", osm: { nameRegex: "نهر إبراهيم", bbox: [35.6, 34.0, 35.95, 34.12] } },
  ],
  russie: [
    { riverName: "Volga", neNames: ["Volga"] },
    { riverName: "Ob", neNames: ["Ob"] },
    { riverName: "Ienisseï", neNames: ["Yenisey"] },
    { riverName: "Lena", neNames: ["Lena"] },
    { riverName: "Amour", neNames: ["Amur", "Heilong Jiang"] },
    { riverName: "Don", neNames: ["Don"] },
    { riverName: "Kama", neNames: ["Kama"] },
    { riverName: "Oural", neNames: ["Ural"] },
  ],
  indonesie: [
    { riverName: "Kapuas", neNames: ["Kapuas"] },
    { riverName: "Barito", neNames: ["Barito"] },
    { riverName: "Mahakam", neNames: ["Mahakam"] },
    // No NE geometry at 1:10m for the Musi (too minor). OSM fallback has
    // repeatedly errored (Overpass returning an HTML error page rather than
    // JSON, verified across several retries) rather than returning an empty
    // result — a documented gap, retry later if this keeps failing.
    { riverName: "Musi", osm: { nameRegex: "Musi", bbox: [102.5, -4.5, 105.5, -1.5] } },
    // No NE geometry at 1:10m for the Bengawan Solo (too minor); OSM has it.
    { riverName: "Bengawan Solo", osm: { nameRegex: "Bengawan Solo|^Solo$", bbox: [110.6, -8.0, 112.9, -6.7] } },
  ],
  algerie: [
    // Natural Earth 1:10m carries no Algerian river at all (checked: no NE line
    // intersects the outline); every entry falls back to OSM, matching either the
    // French or the Arabic `name` tag. The Chélif is tagged "Chelif", "Oued Chlef"
    // or "Oued Chelef" depending on the segment; OSM only names it from Boughezoul
    // downstream (~510 of ~700 km — the upper course, Nahr Ouassel, is not drawn).
    // The overpass-api.de endpoint repeatedly timed out on this query; the cache
    // was seeded with the identical query run against overpass.kumi.systems.
    { riverName: "Chélif", osm: { nameRegex: "Ch[eé]?l[eé]?i?f|الشلف", bbox: [-0.2, 34.0, 3.2, 36.4] } },
    { riverName: "Seybouse", osm: { nameRegex: "Seybouse|سيبوس", bbox: [7.2, 36.2, 7.9, 36.95] } },
    { riverName: "Soummam", osm: { nameRegex: "Soummam|الصومام", bbox: [4.4, 36.4, 5.1, 36.8] } },
    { riverName: "Medjerda", osm: { nameRegex: "Medjerda|مجردة", bbox: [7.5, 36.0, 8.7, 36.6] } },
  ],
  maroc: [
    { riverName: "Oum Er-Rbia", neNames: ["Oum Er Rbia"] },
    { riverName: "Sebou", neNames: ["Oued Sebou"] },
    { riverName: "Moulouya", neNames: ["Moulouya"] },
    // No NE geometry at 1:10m for the Draa (intermittent desert river); OSM has it.
    { riverName: "Draa", osm: { nameRegex: "درعة|Dr[aâ]a", bbox: [-11.5, 28.0, -5.0, 31.6] } },
  ],
  tunisie: [
    // Natural Earth 1:10m has no river at all in Tunisia; OSM tags the Medjerda
    // with its Arabic name (مجردة). Its tributary the Mellègue is left out of
    // rivers.ts: OSM only maps ~50 km of its course inside Tunisia.
    { riverName: "Medjerda", osm: { nameRegex: "مجردة", bbox: [7.5, 35.8, 10.4, 37.3] } },
  ],
  senegal: [
    { riverName: "Sénégal", neNames: ["Sénégal"] },
    { riverName: "Gambie", neNames: ["Gambia"] },
    // No NE geometry at 1:10m for the Casamance or the Falémé; OSM has both.
    { riverName: "Casamance", osm: { nameRegex: "^Casamance", bbox: [-16.8, 12.3, -14.3, 13.2] } },
    { riverName: "Falémé", osm: { nameRegex: "Fal[eé]m[eé]", bbox: [-12.6, 12.2, -11.3, 14.8] } },
  ],
  "republique-democratique-du-congo": [
    // NE chains Lualaba (sources → Bukama) / "Congo" (Bukama → -5.6°, actually the
    // middle Lualaba) / "Lualaba" (→ Kisangani) / "Congo" (Kisangani → Atlantic).
    // `neBbox` keeps the four disjoint segments apart so nothing is drawn twice:
    // the Congo starts at Boyoma Falls (Kisangani), everything upstream is the Lualaba.
    { riverName: "Congo", neNames: ["Congo"], neBbox: [12.0, -6.5, 25.0, 3.0], keepBorder: true },
    { riverName: "Lualaba", neNames: ["Lualaba", "Congo"], neBbox: [24.0, -12.0, 27.5, 1.0] },
    { riverName: "Kasaï", neNames: ["Kasai"], keepBorder: true },
    // NE's "Ubangi" only starts below Bangui (the Yakoma → Bangui stretch is part of its "Uele" line),
    // so the full course comes from OSM instead.
    { riverName: "Oubangui", osm: { nameRegex: "Ubangi|Oubangui", bbox: [16.5, -1.5, 23.0, 5.5] }, keepBorder: true },
  ],
  cameroun: [
    { riverName: "Sanaga", neNames: ["Sanaga"] },
    // No NE geometry at 1:10m for the Nyong or the Wouri (too minor); OSM has them.
    { riverName: "Nyong", osm: { nameRegex: "^Nyong", bbox: [9.8, 3.0, 13.2, 4.2] } },
    { riverName: "Wouri", osm: { nameRegex: "^Wouri", bbox: [9.4, 3.9, 10.4, 5.0] } },
    { riverName: "Bénoué", neNames: ["Bénoué"] },
    // The lower Logone forms the Chad border down to N'Djamena/Kousséri.
    { riverName: "Logone", neNames: ["Logone"], keepBorder: true },
  ],
  "cote-d-ivoire": [
    { riverName: "Comoé", neNames: ["Komoé"] },
    // NE splits the upper course ("Bandama Blanc") from the main stem.
    { riverName: "Bandama", neNames: ["Bandama", "Bandama Blanc"] },
    { riverName: "Sassandra", neNames: ["Sassandra"] },
    // No NE geometry at 1:10m for the Cavally; OSM has it. Its middle and
    // lower course forms the Liberia border.
    { riverName: "Cavally", osm: { nameRegex: "^Cavall", bbox: [-8.8, 4.3, -7.2, 7.8] }, keepBorder: true },
  ],
  thailande: [
    // NE names the upstream course (Golden Triangle stretch) "Lancang" and the
    // Laos-border stretch "Mekong"; both trace the border, hence keepBorder.
    { riverName: "Mékong", neNames: ["Mekong", "Lancang"], keepBorder: true },
    { riverName: "Chao Phraya", neNames: ["Chao Phraya"] },
    { riverName: "Chi", neNames: ["Chi"] },
    { riverName: "Mun", neNames: ["Mun"] },
    { riverName: "Ping", neNames: ["Ping"] },
    // No NE geometry at 1:10m for the Nan; OSM tags it in Thai (แม่น้ำน่าน).
    { riverName: "Nan", osm: { nameRegex: "^แม่น้ำน่าน$|^Nan River$", bbox: [99.8, 15.6, 101.4, 19.7] } },
  ],
  vietnam: [
    { riverName: "Mékong", neNames: ["Mekong"] },
    { riverName: "Fleuve Rouge", neNames: ["Hong"] },
    { riverName: "Rivière Noire", neNames: ["Da"] },
    { riverName: "Cả", neNames: ["Ca"] },
    // No NE geometry at 1:10m for the Đồng Nai (too minor); OSM has it (named
    // only down to Nhà Bè — the lower course is the Nhà Bè / Soài Rạp). The
    // overpass-api.de and kumi endpoints returned 504s; the cache was seeded
    // with the identical query run against overpass.private.coffee.
    { riverName: "Đồng Nai", osm: { nameRegex: "Sông Đồng Nai|Đồng Nai$", bbox: [106.6, 10.5, 108.6, 12.3] } },
  ],
  philippines: [
    { riverName: "Cagayan", neNames: ["Cagayan"] },
    // Natural Earth 1:10m has no other Philippine river; OSM fallbacks below.
    // The Rio Grande de Mindanao's 373 km include its upper course, the Pulangi.
    { riverName: "Rio Grande de Mindanao", osm: { nameRegex: "Rio Grande de Mindanao|Mindanao River|Pulangi", bbox: [124.0, 6.8, 125.5, 8.5] } },
    { riverName: "Agusan", osm: { nameRegex: "^Agusan", bbox: [125.3, 7.3, 126.3, 9.1] } },
    { riverName: "Pampanga", osm: { nameRegex: "^Pampanga", bbox: [120.5, 14.7, 121.4, 15.9] } },
    { riverName: "Agno", osm: { nameRegex: "^Agno", bbox: [120.1, 15.6, 121.0, 16.7] } },
    { riverName: "Pasig", osm: { nameRegex: "^Pasig River$|^Ilog Pasig$", bbox: [120.9, 14.5, 121.15, 14.65] } },
  ],
  israel: [
    // Upper Jordan lies inside the 1949 line; below Lake Tiberias it traces the
    // border with Jordan, hence keepBorder.
    { riverName: "Jourdain", neNames: ["Jordan"], keepBorder: true },
    // Too minor for NE 1:10m; OSM tags them under their Hebrew names.
    { riverName: "Yarkon", osm: { nameRegex: "ירקון", bbox: [34.75, 32.05, 35.0, 32.15] } },
    { riverName: "Kishon", osm: { nameRegex: "קישון", bbox: [34.98, 32.45, 35.4, 32.85] } },
  ],
  chili: [
    // NE 1:10m only carries the Biobío among Chile's rivers; the rest come
    // from OSM, where they're tagged "Río <name>".
    { riverName: "Biobío", neNames: ["Bío-Bío"] },
    { riverName: "Loa", osm: { nameRegex: "^Río Loa$", bbox: [-70.3, -22.5, -68.0, -21.0], simplify: 0.0005 } },
    { riverName: "Maipo", osm: { nameRegex: "^Río Maipo$", bbox: [-71.8, -34.3, -69.8, -33.4], simplify: 0.0005 } },
    { riverName: "Maule", osm: { nameRegex: "^Río Maule$", bbox: [-72.5, -36.2, -70.4, -35.2], simplify: 0.0005 } },
    { riverName: "Baker", osm: { nameRegex: "^Río Baker$", bbox: [-73.6, -48.0, -72.3, -46.9], simplify: 0.0005 } },
  ],
  colombie: [
    { riverName: "Magdalena", neNames: ["Magdalena"] },
    { riverName: "Cauca", neNames: ["Cauca"] },
    { riverName: "Atrato", neNames: ["Atrato"] },
    // Part of the Meta's lower course is the border with Venezuela.
    { riverName: "Meta", neNames: ["Meta"], keepBorder: true },
    // Its lower course, in Brazil, is NE's "Japurá" — dropped by the outline clip anyway.
    { riverName: "Caquetá", neNames: ["Caquetá"] },
  ],
  kenya: [
    { riverName: "Tana", neNames: ["Tana"] },
    // Too minor for NE 1:10m. The Athi changes name twice downstream; the
    // northern Ewaso Ng'iro's bbox excludes its southern namesake (Lake Natron basin).
    { riverName: "Athi-Galana-Sabaki", osm: { nameRegex: "^(Athi|Galana|Sabaki|Athi-Galana-Sabaki|Galana-Sabaki)( [Rr]iver)?$", bbox: [36.6, -3.4, 40.2, -1.0], simplify: 0.0005 } },
    { riverName: "Ewaso Ng'iro", osm: { nameRegex: "Ewaso|Uaso Nyiro", bbox: [36.3, -0.3, 40.5, 1.5], simplify: 0.0005 } },
    { riverName: "Mara", osm: { nameRegex: "^Mara( River)?$", bbox: [34.0, -1.6, 35.9, -0.4], simplify: 0.0005 } },
    { riverName: "Nzoia", osm: { nameRegex: "Nzoia", bbox: [34.0, 0.0, 35.5, 1.3], simplify: 0.0005 } },
  ],
  perou: [
    // NE's "Amazonas" also covers the Brazilian course; the outline clip keeps the Peruvian part.
    { riverName: "Amazone", neNames: ["Amazonas"] },
    { riverName: "Ucayali", neNames: ["Ucayali"] },
    { riverName: "Marañón", neNames: ["Marañón"] },
    { riverName: "Madre de Dios", neNames: ["Madre de Dios"] },
    // Too minor for NE 1:10m.
    { riverName: "Rímac", osm: { nameRegex: "^Río Rímac$", bbox: [-77.2, -12.1, -76.1, -11.5], simplify: 0.0005 } },
  ],
  ethiopie: [
    { riverName: "Nil Bleu (Abay)", neNames: ["Abay"] },
    { riverName: "Awash", neNames: ["Awash"] },
    { riverName: "Omo", neNames: ["Omo"] },
    // Part of the Tekezé's course is the border with Eritrea.
    { riverName: "Tekezé", neNames: ["Tekeze"], keepBorder: true },
    // NE splits it into an Ethiopian ("Shebele") and a Somali ("Shabeelle") stretch.
    { riverName: "Shebele", neNames: ["Shebele", "Shabeelle"] },
  ],
  "nouvelle-zelande": [
    { riverName: "Waikato", neNames: ["Waikato"] },
    { riverName: "Clutha", neNames: ["Clutha"] },
    { riverName: "Whanganui", neNames: ["Whanganui"] },
    { riverName: "Waitaki", neNames: ["Waitaki"] },
    { riverName: "Waimakariri", neNames: ["Waimakariri"] },
  ],
};

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

function readFeatureCollection(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

/** True when `pt` lies within 3 km of the outline boundary — used for `keepBorder` rivers that trace an international border, whose line wobbles across it. */
function nearBoundary(pt, outlinePolygon) {
  let d = Infinity;
  turf.flattenEach(outlinePolygon, (poly) => {
    d = Math.min(d, Math.abs(turf.pointToPolygonDistance(pt, poly)));
  });
  return d <= 3;
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
        const keep = turf.booleanPointInPolygon(mid, outlinePolygon) || (feat.keepBorder && nearBoundary(mid, outlinePolygon));
        if (keep) segments.push(piece.geometry.coordinates);
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
    for (const { riverName, neNames, neBbox, osm, keepBorder } of matches) {
      let lines = [];
      if (neNames) {
        // Optional `neBbox` ([minLon,minLat,maxLon,maxLat]): keep only the NE segments lying entirely inside it —
        // for when NE gives one name to segments that belong to different rivers (e.g. its "Congo" includes part of the Lualaba).
        const inBbox = (f) => {
          if (!neBbox) return true;
          const [a, b, c, d] = turf.bbox(f);
          return a >= neBbox[0] && b >= neBbox[1] && c <= neBbox[2] && d <= neBbox[3];
        };
        const segments = neRivers.features.filter((f) => neNames.includes(f.properties.name) && inBbox(f));
        for (const seg of segments) {
          const parts = seg.geometry.type === "LineString" ? [seg.geometry.coordinates] : seg.geometry.coordinates;
          lines.push(...parts);
        }
      }
      if (!lines.length && osm) {
        try {
          lines = await fetchOsmRiverWays(`${slug}-${riverName}`, osm.nameRegex, osm.bbox);
          if (osm.simplify) {
            lines = lines
              .filter((c) => c.length >= 2)
              .map((c) => turf.simplify(turf.lineString(c), { tolerance: osm.simplify, highQuality: true }).geometry.coordinates);
          }
        } catch (err) {
          console.warn(`! ${slug}/${riverName}: OSM fetch failed — ${err.message}`);
        }
      }
      if (!lines.length) { missing.push(riverName); continue; }
      const geometry = lines.length === 1 ? { type: "LineString", coordinates: lines[0] } : { type: "MultiLineString", coordinates: lines };
      features.push({ type: "Feature", geometry, properties: { name: riverName }, keepBorder });
    }

    const outline = readFeatureCollection(outlinePath);
    const { clipped, dropped } = clipToOutline(features, outline.features[0]);
    writeFeatureCollection(path.join(GEO_DIR, `${slug}-rivers.json`), clipped);

    console.log(`${slug}: ${clipped.length}/${matches.length} rivers matched and drawn${dropped ? ` (${dropped} fully outside outline, dropped)` : ""}${missing.length ? ` — no NE geometry for: ${missing.join(", ")}` : ""}`);
  }
}

main();
