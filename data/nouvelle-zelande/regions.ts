import type { Region } from "@/lib/types";

const SRC = "Stats NZ (estimation au 30 juin 2025)";
const URL = "https://www.stats.govt.nz/topics/population-estimates-and-projections/";

/** Les 16 régions de Nouvelle-Zélande — codes ISO 3166-2:NZ. Les îles Chatham, territoire à part, figurent dans « Territoires ». */
export const regions: Region[] = [
  { code: "NZ-NTL", name: "Northland", population: { value: 201_100, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-AUK", name: "Auckland", population: { value: 1_816_000, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-WKO", name: "Waikato", population: { value: 532_100, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-BOP", name: "Baie de l'Abondance", population: { value: 351_500, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-GIS", name: "Gisborne", population: { value: 52_700, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-HKB", name: "Hawke's Bay", population: { value: 179_700, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-TKI", name: "Taranaki", population: { value: 130_300, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-MWT", name: "Manawatū-Whanganui", population: { value: 260_700, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-WGN", name: "Wellington", population: { value: 543_400, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-TAS", name: "Tasman", population: { value: 59_900, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-NSN", name: "Nelson", population: { value: 54_300, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-MBH", name: "Marlborough", population: { value: 50_800, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-WTC", name: "West Coast", population: { value: 34_700, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-CAN", name: "Canterbury", population: { value: 698_200, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-OTA", name: "Otago", population: { value: 253_900, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NZ-STL", name: "Southland", population: { value: 104_800, year: 2025, source: SRC, sourceUrl: URL } },
];
