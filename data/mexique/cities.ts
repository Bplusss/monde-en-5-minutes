import type { City } from "@/lib/types";

const SRC = "INEGI (recensement 2020)";

export const cities: City[] = [
  { name: "Mexico", lat: 19.4326, lon: -99.1332, isCapital: true, population: { value: 9_209_944, year: 2020, source: SRC, note: "Population de la municipalité (« ville-municipalité ») de Mexico ; l'agglomération de la vallée de Mexico dépasse 21 millions d'habitants." } },
  { name: "Tijuana", lat: 32.5250, lon: -117.0333, population: { value: 1_810_645, year: 2020, source: SRC } },
  { name: "Ecatepec de Morelos", lat: 19.6097, lon: -99.0600, population: { value: 1_645_352, year: 2020, source: SRC, note: "Municipalité de la banlieue nord de Mexico, l'une des plus peuplées du pays." } },
  { name: "Puebla", lat: 19.0333, lon: -98.1833, population: { value: 1_542_232, year: 2020, source: SRC } },
  { name: "Guadalajara", lat: 20.6767, lon: -103.3475, population: { value: 1_385_629, year: 2020, source: SRC } },
  { name: "Monterrey", lat: 25.6844, lon: -100.3181, population: { value: 1_142_952, year: 2020, source: SRC } },
  { name: "Mérida", lat: 20.9672, lon: -89.6236, population: { value: 921_771, year: 2020, source: SRC } },
];
