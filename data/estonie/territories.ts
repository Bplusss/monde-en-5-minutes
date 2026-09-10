import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "Statistikaamet (Office estonien de la statistique)";
const URL = "https://en.wikipedia.org/wiki/Counties_of_Estonia";

export const territories: TerritoriesData = {
  summary:
    "L'Estonie est découpée en 15 comtés (maakonnad), hérités des anciens gouvernorats impériaux russes, eux-mêmes divisés en municipalités — villes et communes rurales — qui forment l'échelon de base de l'administration locale depuis la réforme de fusion des communes de 2017.",
  divisions: [
    { name: "Comtés (maakonnad)", count: 15, source: SRC, sourceUrl: URL },
    { name: "Municipalités", count: 79, note: "15 villes et 64 communes rurales, après la réforme de fusion de 2017.", source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Estonia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
