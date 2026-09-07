import type { City } from "@/lib/types";

const SRC = "ELSTAT (recensement 2021)";
const URL = "https://en.wikipedia.org/wiki/2021_Greek_census";

export const cities: City[] = [
  { name: "Athènes", lat: 37.9838, lon: 23.7275, isCapital: true, population: { value: 643_452, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Thessalonique", lat: 40.6401, lon: 22.9444, population: { value: 309_617, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Patras", lat: 38.2466, lon: 21.7346, population: { value: 170_755, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Le Pirée", lat: 37.9475, lon: 23.6469, population: { value: 168_151, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Héraklion", lat: 35.3387, lon: 25.1442, population: { value: 149_501, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Larissa", lat: 39.6390, lon: 22.4191, population: { value: 146_595, year: 2021, source: SRC, sourceUrl: URL } },
];
