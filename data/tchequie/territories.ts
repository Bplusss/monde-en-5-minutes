import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const CSU = "ČSÚ (Office tchèque de la statistique)";
const CSU_URL = "https://en.wikipedia.org/wiki/Regions_of_the_Czech_Republic";

export const territories: TerritoriesData = {
  summary:
    "La Tchéquie est découpée en 13 régions (kraje) et la capitale Prague, qui a le statut de région à part entière depuis la réforme régionale de l'an 2000. Chaque région regroupe à son tour des districts (okresy) puis des communes, échelon de base de l'administration locale.",
  divisions: [
    { name: "Régions (kraje)", count: 13, source: CSU, sourceUrl: CSU_URL },
    { name: "Prague (capitale, statut de région)", count: 1, source: CSU, sourceUrl: CSU_URL },
    { name: "Districts (okresy)", count: 76, source: CSU, sourceUrl: "https://en.wikipedia.org/wiki/Districts_of_the_Czech_Republic" },
    { name: "Communes (obce)", count: 6_254, source: CSU, sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_the_Czech_Republic" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
