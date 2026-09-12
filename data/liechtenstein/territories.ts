import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "Amt für Statistik Liechtenstein";
const SRC_URL = "https://en.wikipedia.org/wiki/Municipalities_of_Liechtenstein";

export const territories: TerritoriesData = {
  summary:
    "Le Liechtenstein est divisé en 11 communes (Gemeinden), traditionnellement regroupées en deux régions historiques et électorales, l'Oberland (haut pays, au sud) et l'Unterland (bas pays, au nord). Chaque commune dispose d'un conseil communal élu et d'une autonomie de gestion locale. Le pays ne possède aucun territoire d'outre-mer.",
  divisions: [{ name: "Communes (Gemeinden)", count: 11, source: SRC, sourceUrl: SRC_URL }],
  metropolitanRegions: regions,
  overseas: [],
};
