import type { City } from "@/lib/types";

const SRC = "CSO (Central Statistics Office), recensement 2022";

export const cities: City[] = [
  { name: "Dublin", lat: 53.3498, lon: -6.2603, isCapital: true, population: { value: 592_713, year: 2022, source: SRC } },
  { name: "Cork", lat: 51.8985, lon: -8.4756, population: { value: 224_004, year: 2022, source: SRC } },
  { name: "Limerick", lat: 52.6638, lon: -8.6267, population: { value: 102_287, year: 2022, source: SRC } },
  { name: "Galway", lat: 53.2707, lon: -9.0568, population: { value: 85_910, year: 2022, source: SRC } },
  { name: "Waterford", lat: 52.2593, lon: -7.1101, population: { value: 60_079, year: 2022, source: SRC } },
];
