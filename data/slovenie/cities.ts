import type { City } from "@/lib/types";

const SRC = "Office statistique de la République de Slovénie (SURS)";

export const cities: City[] = [
  { name: "Ljubljana", lat: 46.0569, lon: 14.5058, isCapital: true, population: { value: 297_432, year: 2024, source: SRC } },
  { name: "Maribor", lat: 46.5547, lon: 15.6459, population: { value: 113_245, year: 2024, source: SRC } },
  { name: "Kranj", lat: 46.2437, lon: 14.3557, population: { value: 57_081, year: 2024, source: SRC } },
  { name: "Koper", lat: 45.5481, lon: 13.7302, population: { value: 53_915, year: 2024, source: SRC } },
  { name: "Celje", lat: 46.2309, lon: 15.2601, population: { value: 49_104, year: 2024, source: SRC } },
  { name: "Velenje", lat: 46.3590, lon: 15.1102, population: { value: 33_675, year: 2024, source: SRC } },
];
