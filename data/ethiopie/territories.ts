import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'Éthiopie est une fédération d'États régionaux découpés largement selon les principaux groupes ethniques, chacun doté de son gouvernement, de son parlement et de sa langue officielle. Leur nombre est passé de 9 à 12 entre 2020 et 2023, à mesure que des peuples du sud obtenaient leur propre région par référendum. Le Tigré reste dirigé par une administration intérimaire depuis l'accord de Pretoria, et sa partie occidentale, revendiquée par l'Amhara, est disputée depuis la guerre de 2020. Avec l'Érythrée, la frontière a été tranchée en 2002 par une commission internationale, attribuant notamment Badmé à l'Érythrée, une décision acceptée par Addis-Abeba en 2018 seulement.",
  divisions: [
    { name: "États régionaux", count: 12, source: "Wikipedia (régions d'Éthiopie)", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Ethiopia" },
    { name: "Villes à charte", count: 2, note: "Addis-Abeba, capitale fédérale, et Dire Dawa.", source: "Wikipedia (régions d'Éthiopie)", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Ethiopia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
