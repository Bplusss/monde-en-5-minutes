import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'Égypte est un État unitaire divisé en 27 gouvernorats (muhafazat), subdivisés en districts. La Nouvelle Vallée, presque désertique, compte moins de 0,3 % de la population. Le pays ne possède aucun territoire ultramarin : Sinaï compris, il forme un territoire d'un seul tenant.",
  divisions: [
    { name: "Gouvernorats (muhafazat)", count: 27, note: "Dont 4 gouvernorats purement urbains (Le Caire, Alexandrie, Port-Saïd, Suez) et 2 gouvernorats du Sinaï (Nord et Sud), seule portion du pays en Asie.", source: "CAPMAS", sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Egypt" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
