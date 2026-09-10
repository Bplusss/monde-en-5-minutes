import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Depuis la réforme administrative du 31 juillet 2014, l'Albanie est organisée en 12 comtés (qarqe), eux-mêmes divisés en 61 municipalités (bashki), qui ont remplacé les 373 communes et municipalités antérieures. Chaque comté regroupe plusieurs municipalités autour d'une ville principale, le plus souvent celle qui donne son nom au comté.",
  divisions: [
    { name: "Comtés (qarqe)", count: 12, source: "INSTAT", sourceUrl: "https://www.instat.gov.al/en/" },
    { name: "Municipalités (bashki)", count: 61, source: "Ministère de l'Intérieur", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_divisions_of_Albania" },
  ],
  metropolitanRegions: regions,
  // L'Albanie n'a pas de territoire d'outre-mer.
  overseas: [],
};
