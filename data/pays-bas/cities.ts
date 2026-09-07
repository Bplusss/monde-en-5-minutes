import type { City } from "@/lib/types";

const SRC = "CBS (Statistics Netherlands)";
const URL = "https://www.cbs.nl/en-gb/society/population";

export const cities: City[] = [
  { name: "Amsterdam", lat: 52.3728, lon: 4.8936, isCapital: true, population: { value: 941_873, year: 2026, source: SRC, sourceUrl: URL } },
  { name: "Rotterdam", lat: 51.92, lon: 4.48, population: { value: 674_485, year: 2026, source: SRC, sourceUrl: URL } },
  {
    name: "La Haye",
    lat: 52.08,
    lon: 4.31,
    population: { value: 549_163, year: 2021, source: SRC, sourceUrl: URL, note: "Siège du gouvernement et du Parlement, bien qu'Amsterdam soit la capitale constitutionnelle." },
  },
  { name: "Utrecht", lat: 52.0908, lon: 5.1217, population: { value: 378_140, year: 2026, source: SRC, sourceUrl: URL } },
  { name: "Eindhoven", lat: 51.433, lon: 5.483, population: { value: 249_054, year: 2025, source: SRC, sourceUrl: URL } },
];
