import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement général de la population et du logement (Statistics Korea)",
  year: 2015,
  ageScope: "Population totale",
  source: "Statistics Korea (KOSIS)",
  sourceUrl: "https://kosis.kr/eng/",
  points: [
    { label: "Sans religion", sharePercent: 56.1 },
    { label: "Protestantisme", sharePercent: 19.7 },
    { label: "Bouddhisme", sharePercent: 15.5 },
    { label: "Catholicisme", sharePercent: 7.9 },
    { label: "Autres (dont wonbulgyo, confucianisme, chondogyo)", sharePercent: 0.8 },
  ],
  summary:
    "Le recensement de 2015 confirmait une sécularisation de fond : la part des sans-religion, déjà majoritaire, continue de croître, tandis que le christianisme (~27,6 %) a dépassé le bouddhisme — une singularité régionale, la Corée comptant parmi les premiers foyers du christianisme en Asie de l'Est avec les Philippines.",
  methodologyNote:
    "Statistics Korea n'a plus posé la question religieuse depuis 2015, remplacée par un sondage sur échantillon réduit ; 2015 reste la référence exhaustive la plus récente.",
};
