import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Côte d'Ivoire est un État unitaire dont le premier niveau administratif, depuis la réforme de 2011, est constitué de 14 districts : 12 districts dirigés par un ministre-gouverneur et 2 districts autonomes, Abidjan et Yamoussoukro. Les 12 districts sont subdivisés en 31 régions, elles-mêmes divisées en départements et sous-préfectures. Le pays ne possède aucun territoire non contigu.",
  divisions: [
    { name: "Districts", count: 14, note: "Dont 2 districts autonomes (Abidjan et Yamoussoukro), non subdivisés en régions.", source: "Wikipedia", sourceUrl: "https://fr.wikipedia.org/wiki/Districts_de_C%C3%B4te_d%27Ivoire" },
    { name: "Régions", count: 31, note: "Collectivités territoriales dotées d'un conseil régional élu.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Subdivisions_of_Ivory_Coast" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
