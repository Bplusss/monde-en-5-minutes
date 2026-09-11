import type { City } from "@/lib/types";

const SRC = "Agence de statistique de Bosnie-Herzégovine (BHAS)";

export const cities: City[] = [
  { name: "Sarajevo", lat: 43.8563, lon: 18.4131, isCapital: true, population: { value: 275_524, year: 2013, source: SRC } },
  { name: "Banja Luka", lat: 44.7722, lon: 17.1910, population: { value: 185_042, year: 2013, source: SRC, note: "Siège des institutions de la Republika Srpska." } },
  { name: "Tuzla", lat: 44.5386, lon: 18.6767, population: { value: 110_979, year: 2013, source: SRC } },
  { name: "Mostar", lat: 43.3438, lon: 17.8078, population: { value: 105_797, year: 2013, source: SRC } },
];
