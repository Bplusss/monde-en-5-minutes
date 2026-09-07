import type { City } from "@/lib/types";

const SRC = "Office fédéral de la statistique (OFS)";
const URL = "https://www.bfs.admin.ch/bfs/fr/home/statistiques/statistique-regions/publications/villes/2025/population.html";

export const cities: City[] = [
  { name: "Berne", lat: 46.948, lon: 7.4474, isCapital: true, population: { value: 137_995, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Zurich", lat: 47.3769, lon: 8.5417, population: { value: 436_551, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Genève", lat: 46.2044, lon: 6.1432, population: { value: 209_061, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Bâle", lat: 47.5596, lon: 7.5886, population: { value: 177_571, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Lausanne", lat: 46.5197, lon: 6.6323, population: { value: 144_873, year: 2024, source: SRC, sourceUrl: URL } },
];
