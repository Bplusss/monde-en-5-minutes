import type { City } from "@/lib/types";

const SRC = "Štatistický úrad SR (Office statistique slovaque)";

export const cities: City[] = [
  { name: "Bratislava", lat: 48.1486, lon: 17.1077, isCapital: true, population: { value: 478_040, year: 2024, source: SRC } },
  { name: "Košice", lat: 48.7164, lon: 21.2611, population: { value: 225_044, year: 2024, source: SRC } },
  { name: "Prešov", lat: 49.0018, lon: 21.2393, population: { value: 81_702, year: 2024, source: SRC } },
  { name: "Žilina", lat: 49.2231, lon: 18.7394, population: { value: 79_396, year: 2021, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/%C5%BDilina" } },
  { name: "Nitra", lat: 48.3081, lon: 18.0873, population: { value: 74_820, year: 2021, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Nitra" } },
];
