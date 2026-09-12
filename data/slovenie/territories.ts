import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Municipalities_of_Slovenia";

export const territories: TerritoriesData = {
  summary:
    "L'unique échelon d'administration territoriale reconnu par la Constitution slovène est la commune (občina) : le pays n'a pas de région administrative de plein exercice entre l'État et les 212 communes. Les 12 régions statistiques (razvojne regije), instituées par décret en 2000 à des fins de planification et de fonds européens, n'ont ni assemblée élue ni budget propre ; elles servent néanmoins de référence pour la statistique régionale et sont regroupées en deux macro-régions NUTS-2, la Slovénie orientale et la Slovénie occidentale.",
  divisions: [
    { name: "Communes (občine)", count: 212, note: "Dont 11 communes urbaines, qui incluent Ljubljana, Maribor et Koper.", source: WIKI, sourceUrl: WIKI_URL },
    { name: "Régions statistiques (razvojne regije)", count: 12, note: "Sans personnalité administrative propre, regroupées en deux macro-régions NUTS-2.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Statistical_regions_of_Slovenia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
