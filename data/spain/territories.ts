import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const INE = "INE";
const INE_URL = "https://www.ine.es/";

export const territories: TerritoriesData = {
  summary:
    "L'Espagne est organisée en 17 communautés autonomes et 2 villes autonomes (Ceuta, Melilla), chacune dotée d'un statut d'autonomie propre, d'un parlement et d'un gouvernement régional. Les communautés sont subdivisées en provinces, puis en communes.",
  divisions: [
    {
      name: "Communautés et villes autonomes",
      count: 19,
      note: "17 communautés autonomes et 2 villes autonomes.",
      source: INE,
      sourceUrl: INE_URL,
    },
    { name: "Provinces", count: 50, source: INE, sourceUrl: INE_URL },
    { name: "Communes", count: 8131, note: "Municipios, 2022.", source: INE, sourceUrl: INE_URL },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
