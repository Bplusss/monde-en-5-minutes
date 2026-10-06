import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Depuis la Constitution de 2010, appliquée à partir des élections de 2013, le Kenya est divisé en 47 comtés dotés chacun d'un gouverneur et d'une assemblée élus, qui gèrent notamment la santé, l'agriculture et les routes locales. Ils ont remplacé les huit provinces héritées de la colonisation. Au nord-ouest, le Kenya administre de fait le triangle d'Ilemi, une zone d'environ 10 000 à 14 000 km² également revendiquée par le Soudan du Sud ; les deux pays ont engagé des discussions pour régler ce différend frontalier.",
  divisions: [
    { name: "Comtés", count: 47, source: "Constitution du Kenya (2010), premier tableau annexé", sourceUrl: "https://new.kenyalaw.org/akn/ke/act/2010/constitution/eng@2010-09-03" },
    { name: "Sous-comtés", count: 290, note: "Correspondent aux circonscriptions électorales de l'Assemblée nationale.", source: "IEBC (commission électorale)", sourceUrl: "https://www.iebc.or.ke/" },
    { name: "Circonscriptions locales (wards)", count: 1_450, source: "IEBC (commission électorale)", sourceUrl: "https://www.iebc.or.ke/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
