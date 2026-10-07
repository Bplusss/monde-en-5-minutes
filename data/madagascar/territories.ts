import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Madagascar est un État unitaire. Ses 24 régions, créées en 2004 en remplacement des six provinces héritées de la colonisation, sont le principal échelon de l'administration territoriale ; deux régions ont été ajoutées depuis 2021. Elles se subdivisent en districts et en quelque 1 700 communes. La décentralisation reste largement inachevée : les régions sont dirigées par des gouverneurs nommés par le pouvoir central. Madagascar revendique les îles Éparses, petits îlots inhabités du canal du Mozambique administrés par la France, dont les deux pays discutent d'une possible cogestion.",
  divisions: [
    { name: "Régions", count: 24, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Madagascar" },
    { name: "Districts", count: 119, note: "Nombre au recensement de 2018.", source: "INSTAT", sourceUrl: "https://www.instat.mg/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
