import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Monténégro se divise aujourd'hui en 25 municipalités (opštine), dont Podgorica, la capitale, et Cetinje, qui conserve un statut constitutionnel particulier d'« ancienne capitale royale » (Prijestonica). Plusieurs municipalités actuelles sont issues de scissions récentes de subdivisions plus anciennes (Tuzi en 2018, Zeta en 2022, par exemple) ; la carte et la liste des régions de cette fiche suivent le découpage en 21 unités encore utilisé par les données géographiques de référence, antérieur à ces derniers ajustements. Le pays ne compte aucun territoire d'outre-mer.",
  divisions: [
    {
      name: "Municipalités (opštine)",
      count: 25,
      note: "Dont Podgorica (capitale) et Cetinje (ancienne capitale royale, Prijestonica, au statut constitutionnel particulier).",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Montenegro",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
