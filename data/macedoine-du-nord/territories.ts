import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const SRC = "Office national de la statistique de Macédoine du Nord";
const SRC_URL = "https://www.stat.gov.mk/";

export const territories: TerritoriesData = {
  summary:
    "La Macédoine du Nord ne comporte pas d'échelon régional intermédiaire doté d'un gouvernement propre : ses 84 municipalités (opštini), dont la Ville de Skopje qui en regroupe dix, forment directement l'échelon de base de l'administration locale — c'est ce découpage que montre la carte ci-dessous. Le pays est par ailleurs regroupé, à des fins purement statistiques et sans existence administrative, en 8 régions de planification.",
  divisions: [
    { name: "Municipalités (opštini)", count: 84, source: SRC, sourceUrl: SRC_URL },
    { name: "Régions statistiques de planification", count: 8, source: SRC, sourceUrl: "https://en.wikipedia.org/wiki/Statistical_regions_of_North_Macedonia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
