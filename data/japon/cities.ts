import type { City } from "@/lib/types";

const SRC = "Wikipedia";

export const cities: City[] = [
  { name: "Tokyo (23 arrondissements spéciaux)", lat: 35.6762, lon: 139.6503, isCapital: true, population: { value: 9_800_000, year: 2024, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Special_wards_of_Tokyo", note: "Population des 23 arrondissements spéciaux seuls ; l'agglomération du Grand Tokyo compte environ 37 millions d'habitants." } },
  { name: "Yokohama", lat: 35.4437, lon: 139.6380, population: { value: 3_772_726, year: 2024, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Yokohama" } },
  { name: "Ōsaka", lat: 34.6937, lon: 135.5023, population: { value: 2_816_247, year: 2025, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Osaka" } },
  { name: "Nagoya", lat: 35.1815, lon: 136.9066, population: { value: 2_337_864, year: 2025, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Nagoya" } },
  { name: "Sapporo", lat: 43.0618, lon: 141.3545, population: { value: 1_962_596, year: 2026, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Sapporo" } },
  { name: "Fukuoka", lat: 33.5904, lon: 130.4017, population: { value: 1_632_713, year: 2023, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Fukuoka" } },
  { name: "Hiroshima", lat: 34.3853, lon: 132.4553, population: { value: 1_183_696, year: 2023, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Hiroshima", note: "Reconstruite après le bombardement atomique du 6 août 1945." } },
  { name: "Naha", lat: 26.2124, lon: 127.6809, population: { value: 313_424, year: 2025, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Naha", note: "Chef-lieu de la préfecture d'Okinawa, principale ville de l'archipel des Ryūkyū." } },
];
