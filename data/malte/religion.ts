import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Enquête démographique et sociale",
  year: 2021,
  ageScope: "Population totale résidente",
  source: "Office national de la statistique de Malte (NSO)",
  sourceUrl: "https://nso.gov.mt/",
  points: [
    { label: "Catholiques", sharePercent: 82.6 },
    { label: "Autres religions", sharePercent: 9.1 },
    { label: "Sans religion", sharePercent: 8.3 },
  ],
  summary:
    "Le catholicisme, religion d'État inscrite dans la Constitution, imprègne profondément la vie sociale et culturelle maltaise — chaque village célèbre encore avec faste la fête (festa) de son saint patron — même si la pratique religieuse recule sensiblement chez les jeunes générations.",
  methodologyNote:
    "Malte ne mène pas de recensement religieux exhaustif régulier ; ces chiffres proviennent d'une enquête démographique et sociale de l'office national de statistique.",
};
