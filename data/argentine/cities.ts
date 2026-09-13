import type { City } from "@/lib/types";

const SRC2022 = "INDEC (recensement 2022)";
const SRC2010 = "INDEC (recensement 2010)";

export const cities: City[] = [
  { name: "Buenos Aires", lat: -34.6037, lon: -58.3816, isCapital: true, population: { value: 3_121_707, year: 2022, source: SRC2022, note: "Ville autonome (CABA) ; l'agglomération du Grand Buenos Aires dépasse 16 millions d'habitants." } },
  { name: "Córdoba", lat: -31.4201, lon: -64.1888, population: { value: 1_317_298, year: 2010, source: SRC2010 } },
  { name: "Rosario", lat: -32.9468, lon: -60.6393, population: { value: 948_312, year: 2010, source: SRC2010 } },
  { name: "Salta", lat: -24.7859, lon: -65.4117, population: { value: 520_683, year: 2010, source: SRC2010 } },
  { name: "Mendoza", lat: -32.8908, lon: -68.8272, population: { value: 114_893, year: 2010, source: SRC2010, note: "Ville proprement dite ; l'agglomération du Grand Mendoza, cœur du vignoble argentin, dépasse 1 million d'habitants." } },
  { name: "Ushuaia", lat: -54.8019, lon: -68.3030, population: { value: 56_593, year: 2010, source: SRC2010, note: "Ville la plus australe du monde à cette échelle, capitale de la province de Terre de Feu." } },
];
