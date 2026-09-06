import type { City } from "@/lib/types";

const SRC = "INE";
const URL = "https://www.ine.pt/";

export const cities: City[] = [
  { name: "Lisbonne", lat: 38.7223, lon: -9.1393, isCapital: true, population: { value: 575_739, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Porto", lat: 41.1579, lon: -8.6291, population: { value: 252_687, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Vila Nova de Gaia", lat: 41.1239, lon: -8.6118, population: { value: 312_984, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Amadora", lat: 38.7536, lon: -9.2302, population: { value: 181_607, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Funchal", lat: 32.6669, lon: -16.9241, population: { value: 105_701, year: 2021, source: SRC, sourceUrl: URL } },
];
