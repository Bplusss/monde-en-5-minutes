import type { City } from "@/lib/types";

const SRC = "Belstat (Comité national des statistiques de Biélorussie)";

export const cities: City[] = [
  { name: "Minsk", lat: 53.9006, lon: 27.5590, isCapital: true, population: { value: 2_020_600, year: 2024, source: SRC } },
  { name: "Gomel", lat: 52.4345, lon: 30.9754, population: { value: 526_872, year: 2024, source: SRC } },
  { name: "Moguilev", lat: 53.9168, lon: 30.3449, population: { value: 356_293, year: 2024, source: SRC } },
  { name: "Vitebsk", lat: 55.1904, lon: 30.2049, population: { value: 353_744, year: 2024, source: SRC } },
  { name: "Grodno", lat: 53.6884, lon: 23.8258, population: { value: 356_500, year: 2024, source: SRC } },
];
