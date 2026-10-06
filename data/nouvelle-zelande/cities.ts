import type { City } from "@/lib/types";

const SRC = "Stats NZ (estimation au 30 juin 2025, aire urbaine)";
const URL = "https://www.stats.govt.nz/topics/population-estimates-and-projections/";

export const cities: City[] = [
  { name: "Wellington", lat: -41.2865, lon: 174.7762, isCapital: true, population: { value: 209_800, year: 2025, source: SRC, sourceUrl: URL, note: "Ville de Wellington ; la région, qui inclut Lower Hutt et Porirua, compte environ 543 000 habitants." } },
  { name: "Auckland", lat: -36.8485, lon: 174.7633, population: { value: 1_547_200, year: 2025, source: SRC, sourceUrl: URL, note: "Première ville et principal port du pays, bâtie sur un champ d'une cinquantaine de volcans éteints." } },
  { name: "Christchurch", lat: -43.5321, lon: 172.6362, population: { value: 407_800, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Hamilton", lat: -37.787, lon: 175.2793, population: { value: 192_100, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Tauranga", lat: -37.6878, lon: 176.1651, population: { value: 160_900, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Dunedin", lat: -45.8788, lon: 170.5028, population: { value: 104_000, year: 2025, source: SRC, sourceUrl: URL } },
];
