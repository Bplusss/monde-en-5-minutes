import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const STAT_FI = "Statistics Finland";
const STAT_FI_URL = "https://en.wikipedia.org/wiki/Regions_of_Finland";

export const territories: TerritoriesData = {
  summary:
    "La Finlande continentale est divisée en 18 régions (maakunnat), elles-mêmes subdivisées en municipalités, échelon de base de l'administration locale. Les îles Åland, archipel démilitarisé et entièrement suédophone au large du sud-ouest du pays, forment une 19ᵉ région dotée d'un statut d'autonomie très étendu depuis 1921, avec son propre Parlement et son propre gouvernement.",
  divisions: [
    { name: "Régions continentales (maakunnat)", count: 18, source: STAT_FI, sourceUrl: STAT_FI_URL },
    { name: "Municipalités", count: 309, source: STAT_FI, sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Finland" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/finlande-overseas.json",
  overseas: [
    {
      name: "Åland",
      status:
        "Région autonome démilitarisée et entièrement suédophone, dotée de son propre Parlement (Lagting) et gouvernement depuis 1921, garantis par un statut international sous l'égide de la Société des Nations puis de l'ONU.",
      population: { value: 30_579, year: 2024, source: "Statistics and Research Åland (ÅSUB)", sourceUrl: "https://www.asub.ax/en" },
      mapGroupId: "aland",
    },
  ],
};
