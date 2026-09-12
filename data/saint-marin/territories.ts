import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Saint-Marin est divisé en 9 castelli (municipalités), échelon administratif unique hérité de l'histoire communale du pays, chacun doté d'une giunta di castello (conseil municipal) élue. Le pays ne comporte aucun territoire d'outre-mer ni possession non contiguë.",
  divisions: [
    { name: "Castelli (municipalités)", count: 9, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_San_Marino" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
