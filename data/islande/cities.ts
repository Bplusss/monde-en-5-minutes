import type { City } from "@/lib/types";

const SRC = "Statistics Iceland (Hagstofa Íslands)";

export const cities: City[] = [
  { name: "Reykjavík", lat: 64.1466, lon: -21.9426, isCapital: true, population: { value: 139_875, year: 2024, source: SRC } },
  { name: "Kópavogur", lat: 64.1116, lon: -21.9088, population: { value: 39_500, year: 2024, source: SRC } },
  { name: "Hafnarfjörður", lat: 64.0672, lon: -21.9425, population: { value: 31_400, year: 2024, source: SRC } },
  { name: "Akureyri", lat: 65.6835, lon: -18.0878, population: { value: 20_100, year: 2024, source: SRC } },
];
