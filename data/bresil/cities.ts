import type { City } from "@/lib/types";

const SRC = "IBGE (Instituto Brasileiro de Geografia e Estatística)";

export const cities: City[] = [
  { name: "Brasília", lat: -15.7939, lon: -47.8828, isCapital: true, population: { value: 2_996_899, year: 2025, source: SRC } },
  { name: "São Paulo", lat: -23.5505, lon: -46.6333, population: { value: 11_904_961, year: 2025, source: SRC, note: "Plus grande ville d'Amérique du Sud et de l'hémisphère occidental." } },
  { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729, population: { value: 6_730_729, year: 2025, source: SRC } },
  { name: "Salvador", lat: -12.9777, lon: -38.5016, population: { value: 2_564_204, year: 2025, source: SRC, note: "Première capitale du Brésil colonial (1549-1763)." } },
  { name: "Fortaleza", lat: -3.7172, lon: -38.5433, population: { value: 2_578_483, year: 2025, source: SRC } },
  { name: "Belo Horizonte", lat: -19.9167, lon: -43.9345, population: { value: 2_415_872, year: 2025, source: SRC } },
  { name: "Manaus", lat: -3.1190, lon: -60.0217, population: { value: 2_303_732, year: 2025, source: SRC, note: "Principale métropole du bassin amazonien." } },
  { name: "Curitiba", lat: -25.4284, lon: -49.2733, population: { value: 1_830_795, year: 2025, source: SRC } },
];
