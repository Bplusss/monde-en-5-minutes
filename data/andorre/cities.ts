import type { City } from "@/lib/types";

const SRC = "Departament d'Estadística d'Andorra";

export const cities: City[] = [
  { name: "Andorre-la-Vieille", lat: 42.5063, lon: 1.5218, isCapital: true, population: { value: 22_614, year: 2024, source: SRC } },
  { name: "Escaldes-Engordany", lat: 42.5075, lon: 1.5347, population: { value: 15_853, year: 2024, source: SRC } },
  { name: "Encamp", lat: 42.5359, lon: 1.5834, population: { value: 14_589, year: 2024, source: SRC } },
];
