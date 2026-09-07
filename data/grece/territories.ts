import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Depuis la réforme « Kallikratis » de 2011, la Grèce est organisée en 13 régions (périphéries), elles-mêmes divisées en unités régionales puis en municipalités (dèmes). Une part importante du territoire est insulaire, répartie en plusieurs archipels sans lien administratif unique.",
  divisions: [
    { name: "Régions (périphéries)", count: 13, source: "ELSTAT", sourceUrl: "https://www.statistics.gr/en/greece-in-figures" },
    { name: "Unités régionales", count: 74, source: "Ministère de l'Intérieur", sourceUrl: "https://en.wikipedia.org/wiki/Regional_units_of_Greece" },
    { name: "Municipalités (dèmes)", count: 332, source: "Ministère de l'Intérieur", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_divisions_of_Greece" },
  ],
  metropolitanRegions: regions,
  // La Grèce n'a pas de territoire d'outre-mer au sens classique ; ses milliers d'îles
  // (mentionnées dans geography.summary) font partie intégrante des régions ci-dessus.
  overseas: [],
};
