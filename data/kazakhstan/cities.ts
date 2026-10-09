import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Astana", lat: 51.1694, lon: 71.4491, isCapital: true, population: { value: 1_638_233, year: 2026, source: "Bureau of National Statistics (population au 1er janvier 2026)", sourceUrl: "https://stat.gov.kz/en/industries/social-statistics/demography/publications/475783/" } },
  { name: "Almaty", lat: 43.2389, lon: 76.8897 },
  { name: "Chymkent", lat: 42.3417, lon: 69.5901 },
  { name: "Karaganda", lat: 49.8047, lon: 73.1094 },
  { name: "Aktioubé", lat: 50.2839, lon: 57.167 },
  { name: "Oust-Kamenogorsk", lat: 49.9483, lon: 82.6279 },
];
