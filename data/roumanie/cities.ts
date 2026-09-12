import type { City } from "@/lib/types";

const SRC = "INS (recensement 2021)";
const URL = "https://en.wikipedia.org/wiki/2021_Romanian_census";

export const cities: City[] = [
  { name: "Bucarest", lat: 44.4268, lon: 26.1025, isCapital: true, population: { value: 1_716_961, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Cluj-Napoca", lat: 46.7712, lon: 23.6236, population: { value: 286_598, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Iași", lat: 47.1585, lon: 27.6014, population: { value: 271_692, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Constanța", lat: 44.1765, lon: 28.6348, population: { value: 263_688, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Timișoara", lat: 45.7489, lon: 21.2087, population: { value: 250_849, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Craiova", lat: 44.3302, lon: 23.7949, population: { value: 234_140, year: 2021, source: SRC, sourceUrl: URL } },
];
