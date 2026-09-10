import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "Belstat (Comité national des statistiques de Biélorussie)";
const SRC_URL = "https://en.wikipedia.org/wiki/Regions_of_Belarus";

export const territories: TerritoriesData = {
  summary:
    "La Biélorussie est découpée en 6 voblasts (régions) et la ville de Minsk, qui a un statut administratif distinct de la voblast homonyme qui l'entoure. Chaque voblast est à son tour subdivisée en districts (raïons), échelon de base de l'administration territoriale.",
  divisions: [
    { name: "Voblasts (régions)", count: 6, source: SRC, sourceUrl: SRC_URL },
    { name: "Ville de Minsk (statut distinct)", count: 1, source: SRC, sourceUrl: SRC_URL },
    { name: "Districts (raïons)", count: 118, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Districts_of_Belarus" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
