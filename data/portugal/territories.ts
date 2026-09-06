import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const INE = "INE";
const INE_URL = "https://www.ine.pt/";

export const territories: TerritoriesData = {
  summary:
    "Le Portugal continental est organisé en 18 districts, eux-mêmes divisés en communes (municípios) puis en freguesias. Deux archipels de l'Atlantique, Madère et les Açores, ont le statut de régions autonomes, dotées de leur propre gouvernement et parlement régional.",
  divisions: [
    { name: "Districts", count: 18, note: "Portugal continental.", source: INE, sourceUrl: INE_URL },
    { name: "Régions autonomes", count: 2, note: "Madère et Açores.", source: INE, sourceUrl: INE_URL },
    { name: "Communes", count: 308, note: "Municípios.", source: INE, sourceUrl: INE_URL },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/portugal-overseas.json",
  overseas: [
    { name: "Madère", status: "Région autonome", mapGroupId: "madeira" },
    { name: "Açores", status: "Région autonome", mapGroupId: "acores" },
  ],
};
