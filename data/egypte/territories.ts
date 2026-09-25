import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'Égypte est un État unitaire divisé en 27 gouvernorats (muhafazat), subdivisés en districts ruraux ou urbains. Quatre gouvernorats — Le Caire, Alexandrie, Port-Saïd et Suez — sont de simples agglomérations urbaines, tandis que la Nouvelle Vallée, presque désertique, couvre à elle seule plus de 40 % du territoire pour moins de 0,3 % de la population. Contrairement à la France ou au Royaume-Uni, l'Égypte ne possède aucun territoire ultramarin non contigu : l'ensemble de ses gouvernorats, y compris le Sinaï (seule portion du pays en Asie), forme un territoire d'un seul tenant.",
  divisions: [
    { name: "Gouvernorats (muhafazat)", count: 27, note: "Dont 4 gouvernorats purement urbains (Le Caire, Alexandrie, Port-Saïd, Suez) et 2 gouvernorats du Sinaï (Nord et Sud), seule portion du pays en Asie.", source: "CAPMAS", sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Egypt" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
