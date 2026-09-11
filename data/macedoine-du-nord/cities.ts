import type { City } from "@/lib/types";

const SRC = "Office national de la statistique de Macédoine du Nord";

export const cities: City[] = [
  { name: "Skopje", lat: 41.9981, lon: 21.4254, isCapital: true, population: { value: 422_175, year: 2021, source: SRC } },
  { name: "Bitola", lat: 41.0297, lon: 21.3347, population: { value: 71_939, year: 2021, source: SRC } },
  { name: "Kumanovo", lat: 42.1322, lon: 21.7144, population: { value: 70_842, year: 2021, source: SRC } },
  { name: "Tetovo", lat: 42.0104, lon: 20.9715, population: { value: 55_780, year: 2021, source: SRC } },
];
