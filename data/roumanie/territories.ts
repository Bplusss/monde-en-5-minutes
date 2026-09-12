import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Administrative_divisions_of_Romania";

export const territories: TerritoriesData = {
  summary:
    "La Roumanie est organisée en 41 comtés (județe) et la municipalité de Bucarest, statut équivalent à un comté. Chaque comté est lui-même subdivisé en municipalités, villes et communes, l'échelon de base de l'administration locale. La Roumanie ne dispose d'aucun territoire d'outre-mer.",
  divisions: [
    { name: "Comtés (județe)", count: 41, source: SRC, sourceUrl: URL },
    { name: "Municipalité de Bucarest", count: 1, note: "Statut équivalent à un comté, elle-même subdivisée en 6 secteurs.", source: SRC, sourceUrl: URL },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
