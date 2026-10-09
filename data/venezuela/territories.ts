import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Venezuela est une république fédérale composée de 23 États, chacun doté d'un gouverneur et d'un conseil législatif élus, du District capital, qui correspond au cœur de Caracas, et des Dépendances fédérales, plus de 300 îles et îlots de la mer des Caraïbes administrés par le gouvernement central, de l'archipel de Los Roques à la lointaine île d'Aves. Dans les faits, le pouvoir reste très centralisé. Le pays revendique en outre la Guayana Esequiba, à l'ouest du fleuve Essequibo, soit environ les deux tiers du Guyana voisin : il conteste la sentence arbitrale de 1899 qui l'a attribuée à la Guyane britannique. La Cour internationale de justice est saisie du différend depuis 2018 ; après un référendum en 2023, Caracas a créé un « État de Guayana Esequiba » qui n'existe que sur le papier. La carte suit les frontières internationalement reconnues.",
  divisions: [
    { name: "États", count: 23, source: "Instituto Nacional de Estadística", sourceUrl: "http://www.ine.gob.ve/" },
    { name: "District capital", count: 1, source: "Instituto Nacional de Estadística", sourceUrl: "http://www.ine.gob.ve/" },
    { name: "Dépendances fédérales", count: 1, note: "Plus de 300 îles caribéennes, dont les archipels de Los Roques, de Las Aves et de Los Testigos et l'île d'Aves.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Federal_Dependencies_of_Venezuela" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
