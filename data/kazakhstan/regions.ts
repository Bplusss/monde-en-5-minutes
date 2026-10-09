import type { Region } from "@/lib/types";

const SRC = "Bureau of National Statistics (population au 1er janvier 2026)";
const URL = "https://stat.gov.kz/en/industries/social-statistics/demography/publications/475783/";
const AREA = { unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Kazakhstan" };

/**
 * Les 17 régions (oblys) et les 3 villes à statut républicain, dans le
 * découpage de 2022 (création d'Abaï, de Jetyssou et d'Oulytaou) — codes
 * ISO 3166-2:KZ numériques. Population au 1er janvier 2026.
 */
export const regions: Region[] = [
  { code: "KZ-10", name: "Abaï", population: { value: 595_676, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 185_500, ...AREA } },
  { code: "KZ-11", name: "Akmola", population: { value: 789_413, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 146_219, ...AREA } },
  { code: "KZ-15", name: "Aktioubé", population: { value: 955_775, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 300_629, ...AREA } },
  { code: "KZ-19", name: "Almaty (région)", population: { value: 1_596_331, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 105_100, ...AREA } },
  { code: "KZ-23", name: "Atyraou", population: { value: 715_930, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 118_631, ...AREA } },
  { code: "KZ-27", name: "Kazakhstan-Occidental", population: { value: 695_594, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 151_339, ...AREA } },
  { code: "KZ-31", name: "Jambyl", population: { value: 1_215_373, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 144_264, ...AREA } },
  { code: "KZ-33", name: "Jetyssou", population: { value: 687_568, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 118_500, ...AREA } },
  { code: "KZ-35", name: "Karaganda", population: { value: 1_131_287, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 239_100, ...AREA } },
  { code: "KZ-39", name: "Kostanaï", population: { value: 821_464, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 196_001, ...AREA } },
  { code: "KZ-43", name: "Kyzylorda", population: { value: 846_135, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 226_019, ...AREA } },
  { code: "KZ-47", name: "Manguistaou", population: { value: 819_655, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 165_642, ...AREA } },
  { code: "KZ-55", name: "Pavlodar", population: { value: 745_217, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 124_800, ...AREA } },
  { code: "KZ-59", name: "Kazakhstan-Septentrional", population: { value: 514_156, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 97_993, ...AREA } },
  { code: "KZ-61", name: "Turkestan", population: { value: 2_148_658, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 116_100, ...AREA } },
  { code: "KZ-62", name: "Oulytaou", population: { value: 218_993, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 188_900, ...AREA } },
  { code: "KZ-63", name: "Kazakhstan-Oriental", population: { value: 718_945, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 97_700, ...AREA } },
  { code: "KZ-71", name: "Astana", population: { value: 1_638_233, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 797, ...AREA } },
  { code: "KZ-75", name: "Almaty", population: { value: 2_347_924, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 682, ...AREA } },
  { code: "KZ-79", name: "Chymkent", population: { value: 1_293_648, year: 2026, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_163, ...AREA } },
];
