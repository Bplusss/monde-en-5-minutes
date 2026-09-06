import type { City } from "@/lib/types";

const SRC = "ISTAT";
const URL = "https://www.istat.it/wp-content/uploads/2025/12/Censimento-e-dinamica-della-popolazione-Anno-2024.pdf";

export const cities: City[] = [
  { name: "Rome", lat: 41.9028, lon: 12.4964, isCapital: true, population: { value: 2_744_573, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Milan", lat: 45.4642, lon: 9.19, population: { value: 1_363_366, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Naples", lat: 40.8518, lon: 14.2681, population: { value: 904_243, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Turin", lat: 45.0703, lon: 7.6869, population: { value: 855_694, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Palerme", lat: 38.1157, lon: 13.3615, population: { value: 625_831, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Gênes", lat: 44.4056, lon: 8.9463, population: { value: 561_947, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Bologne", lat: 44.4949, lon: 11.3426, population: { value: 390_518, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Florence", lat: 43.7696, lon: 11.2558, population: { value: 363_837, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Bari", lat: 41.1171, lon: 16.8719, population: { value: 316_212, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Catane", lat: 37.5079, lon: 15.083, population: { value: 298_209, year: 2024, source: SRC, sourceUrl: URL } },
];
