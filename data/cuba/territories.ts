import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Cuba est un État unitaire divisé en 15 provinces et en une municipalité spéciale, l'île de la Jeunesse, au sud-ouest de l'île principale. Le découpage actuel date de 2011 : l'ancienne province de La Havane a alors été divisée entre Artemisa et Mayabeque. Depuis la Constitution de 2019, chaque province est dirigée par un gouverneur élu par les délégués municipaux sur proposition du président de la République. Les provinces comptent au total 168 municipalités. À l'extrémité sud-est, les États-Unis occupent depuis 1903 la base navale de Guantánamo, en vertu d'un bail que Cuba considère comme illégal.",
  divisions: [
    { name: "Provinces", count: 15, source: "ONEI", sourceUrl: "https://www.onei.gob.cu/" },
    { name: "Municipalité spéciale", count: 1, note: "L'île de la Jeunesse (Isla de la Juventud), rattachée directement au gouvernement central.", source: "ONEI", sourceUrl: "https://www.onei.gob.cu/" },
    { name: "Municipalités", count: 168, source: "ONEI", sourceUrl: "https://www.onei.gob.cu/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
