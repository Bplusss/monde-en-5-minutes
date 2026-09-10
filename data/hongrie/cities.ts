import type { City } from "@/lib/types";

const SRC = "KSH (Office central hongrois de la statistique)";

export const cities: City[] = [
  { name: "Budapest", lat: 47.4979, lon: 19.0402, isCapital: true, population: { value: 1_679_000, year: 2024, source: SRC } },
  { name: "Debrecen", lat: 47.5316, lon: 21.6273, population: { value: 199_640, year: 2024, source: SRC } },
  { name: "Szeged", lat: 46.2530, lon: 20.1414, population: { value: 158_965, year: 2024, source: SRC } },
  { name: "Miskolc", lat: 48.1035, lon: 20.7784, population: { value: 149_034, year: 2024, source: SRC } },
  { name: "Pécs", lat: 46.0727, lon: 18.2323, population: { value: 138_800, year: 2024, source: SRC } },
  { name: "Győr", lat: 47.6875, lon: 17.6504, population: { value: 132_075, year: 2024, source: SRC } },
];
