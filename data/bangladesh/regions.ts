import type { Region } from "@/lib/types";

const SRC = "Bangladesh Bureau of Statistics (recensement 2022)";
const URL = "https://bbs.gov.bd/";
const NOTE = "Population dénombrée, avant l'ajustement qui porte le total national à 169,8 millions.";
const AREA = { unit: "km²", source: "Bangladesh Bureau of Statistics", sourceUrl: "https://bbs.gov.bd/" };

/**
 * Les 8 divisions, dont Mymensingh, détachée de Dacca en 2015 — codes
 * ISO 3166-2:BD. Population dénombrée au recensement 2022.
 */
export const regions: Region[] = [
  { code: "BD-A", name: "Barisal", population: { value: 9_100_102, year: 2022, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 13_225, ...AREA } },
  { code: "BD-B", name: "Chittagong", population: { value: 33_202_326, year: 2022, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 33_909, ...AREA } },
  { code: "BD-C", name: "Dacca", population: { value: 44_215_107, year: 2022, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 20_594, ...AREA } },
  { code: "BD-D", name: "Khulna", population: { value: 17_416_645, year: 2022, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 22_284, ...AREA } },
  { code: "BD-H", name: "Mymensingh", population: { value: 12_225_498, year: 2022, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 10_584, ...AREA } },
  { code: "BD-E", name: "Rajshahi", population: { value: 20_353_119, year: 2022, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 18_153, ...AREA } },
  { code: "BD-F", name: "Rangpur", population: { value: 17_610_956, year: 2022, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 16_185, ...AREA } },
  { code: "BD-G", name: "Sylhet", population: { value: 11_034_863, year: 2022, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 12_635, ...AREA } },
];
