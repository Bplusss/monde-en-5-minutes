import type { City } from "@/lib/types";

const SRC = "U.S. Census Bureau";
const URL = "https://www.census.gov/quickfacts/";

export const cities: City[] = [
  { name: "Washington, D.C.", lat: 38.9072, lon: -77.0369, isCapital: true, population: { value: 693_645, year: 2025, source: SRC, sourceUrl: URL, note: "N'est, malgré son statut de capitale, que la 21ᵉ ville la plus peuplée du pays." } },
  { name: "New York", lat: 40.7128, lon: -74.0060, population: { value: 8_584_629, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437, population: { value: 3_869_089, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Chicago", lat: 41.8781, lon: -87.6298, population: { value: 2_731_585, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Houston", lat: 29.7604, lon: -95.3698, population: { value: 2_397_315, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Phoenix", lat: 33.4484, lon: -112.0740, population: { value: 1_665_481, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Philadelphie", lat: 39.9526, lon: -75.1652, population: { value: 1_574_281, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "San Antonio", lat: 29.4241, lon: -98.4936, population: { value: 1_548_422, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "San Diego", lat: 32.7157, lon: -117.1611, population: { value: 1_406_106, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Dallas", lat: 32.7767, lon: -96.7970, population: { value: 1_329_491, year: 2025, source: SRC, sourceUrl: URL } },
];
