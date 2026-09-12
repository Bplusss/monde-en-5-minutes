import type { City } from "@/lib/types";

const SRC = "Wikipedia";

export const cities: City[] = [
  { name: "Ville de Saint-Marin", lat: 43.9364, lon: 12.4475, isCapital: true, population: { value: 4_146, year: 2025, source: SRC, sourceUrl: "https://fr.wikipedia.org/wiki/Ville_de_Saint-Marin" } },
  { name: "Serravalle", lat: 43.9678, lon: 12.4739, population: { value: 11_226, year: 2025, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Serravalle,_San_Marino", note: "Castello le plus peuplé du pays ; comprend le bourg de Dogana, principale zone commerciale et industrielle." } },
  { name: "Borgo Maggiore", lat: 43.9436, lon: 12.4486, population: { value: 6_953, year: 2025, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Borgo_Maggiore" } },
  { name: "Domagnano", lat: 43.9569, lon: 12.4653, population: { value: 3_617, year: 2025, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Domagnano" } },
];
