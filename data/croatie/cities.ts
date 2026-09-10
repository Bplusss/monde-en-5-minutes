import type { City } from "@/lib/types";

const SRC = "Office croate de la statistique (DZS), recensement 2021";

export const cities: City[] = [
  { name: "Zagreb", lat: 45.8150, lon: 15.9819, isCapital: true, population: { value: 767_131, year: 2021, source: SRC } },
  { name: "Split", lat: 43.5081, lon: 16.4402, population: { value: 161_312, year: 2021, source: SRC } },
  { name: "Rijeka", lat: 45.3271, lon: 14.4422, population: { value: 107_964, year: 2021, source: SRC } },
  { name: "Osijek", lat: 45.5550, lon: 18.6955, population: { value: 75_827, year: 2021, source: SRC } },
  { name: "Zadar", lat: 44.1194, lon: 15.2314, population: { value: 75_082, year: 2021, source: SRC } },
  { name: "Pula", lat: 44.8666, lon: 13.8496, population: { value: 52_220, year: 2021, source: SRC } },
];
