import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'Égypte est un État unitaire divisé en 27 gouvernorats (muhafazat), eux-mêmes subdivisés en districts ruraux (markaz) ou urbains (kism), puis en villes et villages. Quatre gouvernorats — Le Caire, Alexandrie, Port-Saïd et Suez — correspondent à de simples agglomérations urbaines sans zone rurale distincte, tandis que le gouvernorat de la Nouvelle Vallée, presque entièrement désertique, couvre à lui seul plus de 40 % du territoire national pour moins de 0,3 % de sa population. Contrairement à des États comme la France ou le Royaume-Uni, l'Égypte ne possède aucun territoire ultramarin non contigu : l'ensemble de ses gouvernorats, y compris la péninsule du Sinaï (seule portion du pays située en Asie), forme un territoire d'un seul tenant. Un projet de fusion administrative de plusieurs petits gouvernorats a été discuté par le gouvernement égyptien au milieu des années 2020 dans le cadre d'un plan de réduction des dépenses publiques, mais n'a, à ce jour, pas été mis en œuvre : le pays compte toujours 27 gouvernorats.",
  divisions: [
    { name: "Gouvernorats (muhafazat)", count: 27, note: "Dont 4 gouvernorats purement urbains (Le Caire, Alexandrie, Port-Saïd, Suez) et 2 gouvernorats du Sinaï (Nord et Sud), seule portion du pays en Asie.", source: "CAPMAS", sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Egypt" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
