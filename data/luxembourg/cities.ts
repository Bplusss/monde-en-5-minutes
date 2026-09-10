import type { City } from "@/lib/types";

const SRC = "STATEC (Institut national de la statistique du Luxembourg)";

export const cities: City[] = [
  { name: "Luxembourg", lat: 49.6117, lon: 6.1319, isCapital: true, population: { value: 136_412, year: 2024, source: SRC } },
  { name: "Esch-sur-Alzette", lat: 49.4958, lon: 5.9806, population: { value: 37_988, year: 2024, source: SRC } },
  { name: "Differdange", lat: 49.5244, lon: 5.8917, population: { value: 29_990, year: 2024, source: SRC } },
  { name: "Dudelange", lat: 49.4808, lon: 6.0864, population: { value: 22_240, year: 2024, source: SRC } },
];
