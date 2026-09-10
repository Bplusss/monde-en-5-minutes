import type { City } from "@/lib/types";

const SRC = "Office lituanien de statistique";
const URL = "https://www.citypopulation.de/en/lithuania/cities/";

export const cities: City[] = [
  { name: "Vilnius", lat: 54.6872, lon: 25.2797, isCapital: true, population: { value: 607_842, year: 2026, source: SRC, sourceUrl: URL, note: "Estimation au 1ᵉʳ janvier 2026." } },
  { name: "Kaunas", lat: 54.8985, lon: 23.9036, population: { value: 302_874, year: 2026, source: SRC, sourceUrl: URL, note: "Estimation au 1ᵉʳ janvier 2026." } },
  { name: "Klaipėda", lat: 55.7033, lon: 21.1443, population: { value: 160_082, year: 2026, source: SRC, sourceUrl: URL, note: "Estimation au 1ᵉʳ janvier 2026." } },
  { name: "Šiauliai", lat: 55.9349, lon: 23.3144, population: { value: 111_018, year: 2026, source: SRC, sourceUrl: URL, note: "Estimation au 1ᵉʳ janvier 2026." } },
  { name: "Panevėžys", lat: 55.7342, lon: 24.3541, population: { value: 84_392, year: 2026, source: SRC, sourceUrl: URL, note: "Estimation au 1ᵉʳ janvier 2026." } },
];
