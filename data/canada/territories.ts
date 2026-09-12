import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Canada est une fédération composée de dix provinces, disposant de compétences constitutionnelles propres, et de trois territoires (Yukon, Territoires du Nord-Ouest, Nunavut), dont les pouvoirs sont délégués par le gouvernement fédéral. Contrairement à la France, le Canada ne possède aucun territoire non contigu ni d'outre-mer : l'ensemble du pays forme un seul bloc continental, prolongé au nord par son archipel Arctique.",
  divisions: [
    { name: "Provinces", count: 10, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Provinces_and_territories_of_Canada" },
    { name: "Territoires", count: 3, note: "Yukon, Territoires du Nord-Ouest et Nunavut.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Provinces_and_territories_of_Canada" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
