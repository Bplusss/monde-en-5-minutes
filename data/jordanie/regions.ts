import type { Region } from "@/lib/types";

const SRC = "Department of Statistics (Jordanie)";
const URL = "https://dosweb.dos.gov.jo/";
const AREA = { unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Jordan" };

/** Les 12 gouvernorats (muhafazat) — codes ISO 3166-2:JO. Estimations de population à la fin de 2024. */
export const regions: Region[] = [
  { code: "JO-AM", name: "Amman", population: { value: 4_920_100, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 7_579, ...AREA } },
  { code: "JO-IR", name: "Irbid", population: { value: 2_173_200, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_572, ...AREA } },
  { code: "JO-AZ", name: "Zarqa", population: { value: 1_675_700, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_761, ...AREA } },
  { code: "JO-MA", name: "Mafraq", population: { value: 675_200, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 26_551, ...AREA } },
  { code: "JO-BA", name: "Balqa", population: { value: 603_700, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_120, ...AREA } },
  { code: "JO-KA", name: "Karak", population: { value: 388_700, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_495, ...AREA } },
  { code: "JO-JA", name: "Jerash", population: { value: 291_000, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 410, ...AREA } },
  { code: "JO-AQ", name: "Aqaba", population: { value: 245_200, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_905, ...AREA } },
  { code: "JO-MD", name: "Madaba", population: { value: 232_300, year: 2024, source: SRC, sourceUrl: URL } },
  { code: "JO-AJ", name: "Ajloun", population: { value: 216_200, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 420, ...AREA } },
  { code: "JO-MN", name: "Ma'an", population: { value: 194_500, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 32_832, ...AREA } },
  { code: "JO-AT", name: "Tafila", population: { value: 118_200, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_209, ...AREA } },
];
