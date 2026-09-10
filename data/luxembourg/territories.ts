import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "STATEC";
const SRC_URL = "https://en.wikipedia.org/wiki/Districts_of_Luxembourg";

export const territories: TerritoriesData = {
  summary:
    "Le Luxembourg est découpé en 3 districts, échelon aujourd'hui purement statistique et judiciaire depuis la suppression de leur fonction administrative en 2015, puis en 12 cantons et 100 communes, l'échelon de base doté d'un réel pouvoir local.",
  divisions: [
    { name: "Districts", count: 3, note: "Fonction administrative supprimée en 2015 ; échelon statistique et judiciaire.", source: SRC, sourceUrl: SRC_URL },
    { name: "Cantons", count: 12, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Cantons_of_Luxembourg" },
    { name: "Communes", count: 100, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Communes_of_Luxembourg" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
