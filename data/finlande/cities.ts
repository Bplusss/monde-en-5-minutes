import type { City } from "@/lib/types";

const SRC = "Statistics Finland";

export const cities: City[] = [
  { name: "Helsinki", lat: 60.1699, lon: 24.9384, isCapital: true, population: { value: 684_886, year: 2024, source: SRC } },
  { name: "Espoo", lat: 60.2055, lon: 24.6559, population: { value: 316_713, year: 2024, source: SRC } },
  { name: "Tampere", lat: 61.4978, lon: 23.7610, population: { value: 259_027, year: 2024, source: SRC } },
  { name: "Vantaa", lat: 60.2934, lon: 25.0378, population: { value: 245_260, year: 2024, source: SRC } },
  { name: "Oulu", lat: 65.0121, lon: 25.4651, population: { value: 216_612, year: 2024, source: SRC } },
];
