import type { City } from "@/lib/types";

const SRC = "Amt für Statistik Liechtenstein";

export const cities: City[] = [
  { name: "Vaduz", lat: 47.1410, lon: 9.5209, isCapital: true, population: { value: 6_002, year: 2024, source: SRC } },
  { name: "Schaan", lat: 47.1662, lon: 9.5091, population: { value: 6_250, year: 2024, source: SRC, note: "Commune la plus peuplée du pays, devant la capitale Vaduz." } },
  { name: "Triesen", lat: 47.1046, lon: 9.5289, population: { value: 5_688, year: 2024, source: SRC } },
  { name: "Balzers", lat: 47.0682, lon: 9.5045, population: { value: 4_803, year: 2024, source: SRC } },
  { name: "Eschen", lat: 47.2003, lon: 9.5233, population: { value: 4_663, year: 2024, source: SRC } },
];
