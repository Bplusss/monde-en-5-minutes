import type { Region } from "@/lib/types";

const SRC = "Ghana Statistical Service (recensement 2021)";
const URL = "https://census2021.statsghana.gov.gh/";
const AREA = { unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Ghana" };

/**
 * Les 16 régions, dont six créées après les référendums de décembre 2018 —
 * codes ISO 3166-2:GH. Population du recensement 2021.
 */
export const regions: Region[] = [
  { code: "GH-WP", name: "Occidentale", population: { value: 2_060_585, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 13_842, ...AREA } },
  { code: "GH-WN", name: "Occidentale-Nord", population: { value: 880_921, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 10_079, ...AREA } },
  { code: "GH-CP", name: "Centrale", population: { value: 2_859_821, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_826, ...AREA } },
  { code: "GH-AA", name: "Grand Accra", population: { value: 5_455_692, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_245, ...AREA } },
  { code: "GH-EP", name: "Orientale", population: { value: 2_925_653, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 19_323, ...AREA } },
  { code: "GH-TV", name: "Volta", population: { value: 1_659_040, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_504, ...AREA } },
  { code: "GH-OT", name: "Oti", population: { value: 747_248, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 11_066, ...AREA } },
  { code: "GH-AH", name: "Ashanti", population: { value: 5_440_463, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 24_389, ...AREA } },
  { code: "GH-AF", name: "Ahafo", population: { value: 564_668, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_196, ...AREA } },
  { code: "GH-BO", name: "Bono", population: { value: 1_208_649, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 11_113, ...AREA } },
  { code: "GH-BE", name: "Bono oriental", population: { value: 1_203_400, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 23_248, ...AREA } },
  { code: "GH-NP", name: "Septentrionale", population: { value: 2_310_939, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 26_534, ...AREA } },
  { code: "GH-SV", name: "Savane", population: { value: 653_266, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 34_790, ...AREA } },
  { code: "GH-NE", name: "Nord-Est", population: { value: 658_946, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_070, ...AREA } },
  { code: "GH-UE", name: "Haut-Ghana oriental", population: { value: 1_301_226, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_842, ...AREA } },
  { code: "GH-UW", name: "Haut-Ghana occidental", population: { value: 901_502, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 18_476, ...AREA } },
];
