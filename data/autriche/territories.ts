import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'Autriche est un État fédéral composé de neuf Länder, chacun disposant de son propre gouvernement et parlement régional. L'Autriche ne possède aucun territoire d'outre-mer.",
  divisions: [
    { name: "Länder", count: 9, note: "États fédérés, dont Vienne, à la fois ville et Land.", source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
