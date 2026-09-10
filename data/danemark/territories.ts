import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Danemark métropolitain est divisé en 5 régions et 98 communes. Le royaume du Danemark inclut par ailleurs deux territoires autonomes bénéficiant d'un « home rule » étendu : le Groenland et les îles Féroé, chacun doté de son propre gouvernement et parlement.",
  divisions: [
    { name: "Régions", count: 5, source: "Danmarks Statistik", sourceUrl: "https://www.dst.dk/da/Statistik/kommunekort/kommunefakta" },
    { name: "Communes (kommuner)", count: 98, source: "Danmarks Statistik", sourceUrl: "https://www.dst.dk/da/Statistik/kommunekort/kommunefakta" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/danemark-overseas.json",
  overseas: [
    {
      name: "Groenland",
      status:
        "Territoire autonome du royaume du Danemark depuis 1979, à autonomie élargie depuis la loi de 2009 (Selvstyre) qui lui reconnaît le droit à l'indépendance ; gère ses propres affaires intérieures, la politique étrangère et la défense restant partagées avec Copenhague.",
      population: { value: 55_745, year: 2025, source: "Statistics Greenland / ONU", sourceUrl: "https://www.worldometers.info/world-population/greenland-population/" },
      mapGroupId: "groenland",
    },
    {
      name: "Îles Féroé",
      status: "Territoire autonome du royaume du Danemark depuis 1948, disposant de son propre Parlement (Løgting) et gérant la plupart de ses affaires intérieures.",
      population: { value: 53_623, year: 2025, source: "Hagstova Føroya (institut statistique féroïen)", sourceUrl: "https://www.hagstova.fo/" },
      mapGroupId: "iles-feroe",
    },
  ],
};
