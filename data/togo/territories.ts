import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Togo est un État unitaire découpé en 5 régions, elles-mêmes subdivisées en 39 préfectures (dont la préfecture du Golfe, qui correspond à l'agglomération de Lomé) et une commune capitale. Le pays ne compte aucun territoire non contigu ni possession d'outre-mer.",
  divisions: [
    { name: "Régions", count: 5, source: "Wikipedia", sourceUrl: "https://fr.wikipedia.org/wiki/R%C3%A9gions_du_Togo" },
    { name: "Préfectures", count: 39, note: "Y compris la préfecture du Golfe (Lomé).", source: "Wikipedia", sourceUrl: "https://fr.wikipedia.org/wiki/Pr%C3%A9fectures_du_Togo" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
