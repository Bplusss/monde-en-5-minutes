import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const CSO = "CSO (Central Statistics Office)";
const CSO_URL = "https://en.wikipedia.org/wiki/Counties_of_Ireland";

export const territories: TerritoriesData = {
  summary:
    "L'Irlande est traditionnellement découpée en 26 comtés, unité de référence historique et culturelle, en particulier pour les compétitions sportives gaéliques. Depuis la réforme de l'administration locale de 2014, le pays compte 31 autorités locales : les comtés de Dublin, Cork, Galway, Limerick, Waterford et Tipperary ont été réorganisés (Dublin scindée en quatre autorités, Cork et Galway en une ville et un comté distincts, Limerick, Waterford et Tipperary fusionnées en une seule autorité ville-comté).",
  divisions: [
    { name: "Comtés traditionnels", count: 26, source: CSO, sourceUrl: CSO_URL },
    { name: "Autorités locales (réforme de 2014)", count: 31, source: CSO, sourceUrl: "https://en.wikipedia.org/wiki/Local_government_in_the_Republic_of_Ireland" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
