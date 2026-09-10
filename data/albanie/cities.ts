import type { City } from "@/lib/types";

const SRC = "INSTAT (recensement 2023, via City Population)";
const URL = "https://www.citypopulation.de/en/albania/cities/";

export const cities: City[] = [
  { name: "Tirana", lat: 41.3275, lon: 19.8189, isCapital: true, population: { value: 389_323, year: 2023, source: SRC, sourceUrl: URL, note: "Population de la ville historique (qytet), hors anciennes communes rattachées à la municipalité de Tirana lors de la réforme de 2015." } },
  { name: "Durrës", lat: 41.3235, lon: 19.4547, population: { value: 101_728, year: 2023, source: SRC, sourceUrl: URL } },
  { name: "Elbasan", lat: 41.1111, lon: 20.0806, population: { value: 66_834, year: 2023, source: SRC, sourceUrl: URL } },
  { name: "Vlorë", lat: 40.4667, lon: 19.4833, population: { value: 66_320, year: 2023, source: SRC, sourceUrl: URL } },
  { name: "Shkodër", lat: 42.0683, lon: 19.5126, population: { value: 61_633, year: 2023, source: SRC, sourceUrl: URL } },
];
