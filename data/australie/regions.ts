import type { Region } from "@/lib/types";

const ABS = "Australian Bureau of Statistics (ABS)";
const ABS_URL = "https://en.wikipedia.org/wiki/States_and_territories_of_Australia";

export const regions: Region[] = [
  { code: "AU-NSW", name: "Nouvelle-Galles du Sud", population: { value: 8_624_534, year: 2025, source: ABS, sourceUrl: ABS_URL }, areaKm2: { value: 800_150, unit: "km²", source: ABS, sourceUrl: ABS_URL } },
  { code: "AU-VIC", name: "Victoria", population: { value: 7_104_349, year: 2025, source: ABS, sourceUrl: ABS_URL }, areaKm2: { value: 227_416, unit: "km²", source: ABS, sourceUrl: ABS_URL } },
  { code: "AU-QLD", name: "Queensland", population: { value: 5_692_642, year: 2025, source: ABS, sourceUrl: ABS_URL }, areaKm2: { value: 1_729_742, unit: "km²", source: ABS, sourceUrl: ABS_URL } },
  { code: "AU-WA", name: "Australie-Occidentale", population: { value: 3_061_672, year: 2025, source: ABS, sourceUrl: ABS_URL }, areaKm2: { value: 2_527_013, unit: "km²", source: ABS, sourceUrl: ABS_URL } },
  { code: "AU-SA", name: "Australie-Méridionale", population: { value: 1_908_182, year: 2025, source: ABS, sourceUrl: ABS_URL }, areaKm2: { value: 984_321, unit: "km²", source: ABS, sourceUrl: ABS_URL } },
  { code: "AU-TAS", name: "Tasmanie", population: { value: 576_659, year: 2025, source: ABS, sourceUrl: ABS_URL }, areaKm2: { value: 68_401, unit: "km²", source: ABS, sourceUrl: ABS_URL } },
  { code: "AU-NT", name: "Territoire du Nord", population: { value: 265_457, year: 2025, source: ABS, sourceUrl: ABS_URL }, areaKm2: { value: 1_347_791, unit: "km²", source: ABS, sourceUrl: ABS_URL } },
  { code: "AU-ACT", name: "Territoire de la capitale australienne", population: { value: 486_231, year: 2025, source: ABS, sourceUrl: ABS_URL }, areaKm2: { value: 2_358, unit: "km²", source: ABS, sourceUrl: ABS_URL } },
];
