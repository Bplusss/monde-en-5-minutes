import type { City } from "@/lib/types";

const SRC = "Statistikaamet (Office estonien de la statistique)";

export const cities: City[] = [
  { name: "Tallinn", lat: 59.4370, lon: 24.7536, isCapital: true, population: { value: 461_186, year: 2024, source: SRC } },
  { name: "Tartu", lat: 58.3780, lon: 26.7290, population: { value: 96_484, year: 2024, source: SRC } },
  { name: "Narva", lat: 59.3773, lon: 28.1903, population: { value: 51_949, year: 2024, source: SRC, note: "Ville à très forte majorité russophone, à la frontière avec la Russie." } },
  { name: "Pärnu", lat: 58.3859, lon: 24.4971, population: { value: 39_820, year: 2024, source: SRC } },
  { name: "Kohtla-Järve", lat: 59.3992, lon: 27.2739, population: { value: 30_924, year: 2024, source: SRC } },
];
