import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Suède est divisée en comtés (län), échelon administratif régional, eux-mêmes découpés en communes (kommuner), qui concentrent l'essentiel des compétences locales (école, urbanisme, action sociale).",
  divisions: [
    { name: "Comtés (län)", count: 21, source: "SCB (Statistiska centralbyrån)", sourceUrl: "https://www.scb.se/" },
    { name: "Communes (kommuner)", count: 290, source: "SKR (Sveriges Kommuner och Regioner)", sourceUrl: "https://skr.se/" },
  ],
  metropolitanRegions: regions,
  // La Suède n'a pas de territoire d'outre-mer : l'architecture reste générique et gère
  // simplement l'absence de données ici (voir OverseasTerritoriesGrid / WorldTerritoriesMap).
  overseas: [],
};
