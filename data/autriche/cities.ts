import type { City } from "@/lib/types";

const SRC = "Statistik Austria";
const URL = "https://www.statistik.at/";

export const cities: City[] = [
  { name: "Vienne", lat: 48.2083, lon: 16.3725, isCapital: true, population: { value: 2_028_499, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Graz", lat: 47.0708, lon: 15.4386, population: { value: 307_912, year: 2026, source: SRC, sourceUrl: URL } },
  { name: "Linz", lat: 48.3058, lon: 14.2864, population: { value: 213_557, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Salzbourg", lat: 47.8, lon: 13.045, population: { value: 157_834, year: 2026, source: SRC, sourceUrl: URL } },
  { name: "Innsbruck", lat: 47.2683, lon: 11.3933, population: { value: 132_188, year: 2024, source: SRC, sourceUrl: URL } },
];
