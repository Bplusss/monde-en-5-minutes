import type { Region } from "@/lib/types";

const SRC = "Wikipedia (données de l'Office lituanien de statistique)";
const URL = "https://en.wikipedia.org/wiki/Counties_of_Lithuania";

/**
 * Les 10 comtés (apskritys) lituaniens. Leur administration a été supprimée en 2010,
 * mais ils restent la division statistique et géographique de référence (NUTS 3 de l'UE),
 * et c'est sur ces limites qu'est construite la géométrie de la carte du pays.
 */
export const regions: Region[] = [
  { code: "LT-AL", name: "Alytus", population: { value: 135_367, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_418, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-KU", name: "Kaunas", population: { value: 580_333, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_086, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-KL", name: "Klaipėda", population: { value: 336_104, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_222, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-MR", name: "Marijampolė", population: { value: 135_891, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_466, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-PN", name: "Panevėžys", population: { value: 211_652, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 7_878, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-SA", name: "Šiauliai", population: { value: 261_764, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_537, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-TA", name: "Tauragė", population: { value: 90_652, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_349, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-TE", name: "Telšiai", population: { value: 131_431, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_350, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-UT", name: "Utena", population: { value: 125_462, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 7_191, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "LT-VL", name: "Vilnius", population: { value: 851_346, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_730, unit: "km²", source: SRC, sourceUrl: URL } },
];
