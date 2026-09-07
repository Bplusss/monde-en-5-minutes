import type { City } from "@/lib/types";

const SRC = "Danmarks Statistik (byopgørelsen)";
const URL = "https://www.dst.dk/nyt/49099";

export const cities: City[] = [
  { name: "Copenhague", lat: 55.6761, lon: 12.5683, isCapital: true, population: { value: 1_396_508, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Aarhus", lat: 56.1629, lon: 10.2039, population: { value: 301_049, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Odense", lat: 55.4038, lon: 10.4024, population: { value: 185_480, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Aalborg", lat: 57.0488, lon: 9.9217, population: { value: 121_878, year: 2025, source: SRC, sourceUrl: URL } },
];
