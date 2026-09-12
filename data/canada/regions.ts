import type { Region } from "@/lib/types";

const STATCAN = "Statistique Canada (recensement de 2021)";
const STATCAN_URL = "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=E";

/** Les 10 provinces et 3 territoires du Canada, codes ISO 3166-2:CA. */
export const regions: Region[] = [
  { code: "CA-ON", name: "Ontario", population: { value: 14_223_942, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 1_076_395, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-QC", name: "Québec", population: { value: 8_501_833, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 1_542_056, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-BC", name: "Colombie-Britannique", population: { value: 5_000_879, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 944_735, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-AB", name: "Alberta", population: { value: 4_262_635, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 661_848, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-MB", name: "Manitoba", population: { value: 1_342_153, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 647_797, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-SK", name: "Saskatchewan", population: { value: 1_132_505, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 651_036, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-NS", name: "Nouvelle-Écosse", population: { value: 969_383, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 55_284, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-NB", name: "Nouveau-Brunswick", population: { value: 775_610, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 72_908, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-NL", name: "Terre-Neuve-et-Labrador", population: { value: 510_550, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 405_212, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-PE", name: "Île-du-Prince-Édouard", population: { value: 154_331, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 5_660, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-NT", name: "Territoires du Nord-Ouest", population: { value: 41_070, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 1_346_106, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-YT", name: "Yukon", population: { value: 40_232, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 482_443, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
  { code: "CA-NU", name: "Nunavut", population: { value: 36_858, year: 2021, source: STATCAN, sourceUrl: STATCAN_URL }, areaKm2: { value: 2_093_190, unit: "km²", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL } },
];
