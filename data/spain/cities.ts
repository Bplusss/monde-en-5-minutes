import type { City } from "@/lib/types";

const SRC = "INE";
const URL = "https://www.ine.es/";

export const cities: City[] = [
  { name: "Madrid", lat: 40.4168, lon: -3.7038, isCapital: true, population: { value: 3_477_497, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Barcelone", lat: 41.3874, lon: 2.1686, population: { value: 1_713_247, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Valence", lat: 39.4699, lon: -0.3763, population: { value: 841_558, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Saragosse", lat: 41.6488, lon: -0.8891, population: { value: 699_007, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Séville", lat: 37.3891, lon: -5.9845, population: { value: 688_714, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Malaga", lat: 36.7213, lon: -4.4213, population: { value: 591_637, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Murcie", lat: 37.9922, lon: -1.1307, population: { value: 482_971, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Palma", lat: 39.5696, lon: 2.6502, population: { value: 420_442, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Bilbao", lat: 43.263, lon: -2.935, population: { value: 346_405, year: 2024, source: SRC, sourceUrl: URL } },
];
