import type { City } from "@/lib/types";

const SRC = "Statbel / Wikipédia";
const URL = "https://fr.wikipedia.org/wiki/Communes_belges_les_plus_peupl%C3%A9es";

export const cities: City[] = [
  { name: "Bruxelles", lat: 50.8502, lon: 4.35, isCapital: true, population: { value: 198_314, year: 2025, source: SRC, sourceUrl: URL, note: "Ville de Bruxelles (commune), pas la région entière." } },
  { name: "Anvers", lat: 51.22, lon: 4.4, population: { value: 565_615, year: 2026, source: SRC, sourceUrl: URL } },
  { name: "Gand", lat: 51.05, lon: 3.7333, population: { value: 274_042, year: 2026, source: SRC, sourceUrl: URL } },
  { name: "Charleroi", lat: 50.4167, lon: 4.4444, population: { value: 206_900, year: 2026, source: SRC, sourceUrl: URL } },
  { name: "Liège", lat: 50.6397, lon: 5.5706, population: { value: 198_102, year: 2026, source: SRC, sourceUrl: URL } },
];
