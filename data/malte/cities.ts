import type { City } from "@/lib/types";

const SRC = "Office national de la statistique de Malte (NSO)";

export const cities: City[] = [
  { name: "La Valette", lat: 35.8989, lon: 14.5146, isCapital: true, population: { value: 5_157, year: 2021, source: SRC, note: "Plus petite capitale de l'Union européenne par la population ; l'agglomération urbaine environnante dépasse largement ce chiffre." } },
  { name: "San Pawl il-Baħar (St Paul's Bay)", lat: 35.9497, lon: 14.4008, population: { value: 29_781, year: 2021, source: SRC } },
  { name: "Birkirkara", lat: 35.8972, lon: 14.4611, population: { value: 22_260, year: 2021, source: SRC } },
  { name: "Mosta", lat: 35.9089, lon: 14.4256, population: { value: 20_268, year: 2021, source: SRC } },
];
