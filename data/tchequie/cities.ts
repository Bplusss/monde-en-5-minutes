import type { City } from "@/lib/types";

const SRC = "ČSÚ (Office tchèque de la statistique)";

export const cities: City[] = [
  { name: "Prague", lat: 50.0755, lon: 14.4378, isCapital: true, population: { value: 1_357_326, year: 2024, source: SRC } },
  { name: "Brno", lat: 49.1951, lon: 16.6068, population: { value: 397_808, year: 2024, source: SRC } },
  { name: "Ostrava", lat: 49.8209, lon: 18.2625, population: { value: 279_649, year: 2024, source: SRC } },
  { name: "Plzeň", lat: 49.7384, lon: 13.3736, population: { value: 174_842, year: 2024, source: SRC } },
  { name: "Liberec", lat: 50.7663, lon: 15.0543, population: { value: 105_565, year: 2024, source: SRC } },
];
