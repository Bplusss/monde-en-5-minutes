import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recenseamento (Censos)",
  year: 2021,
  ageScope: "Ensemble de la population résidente",
  source: "INE",
  sourceUrl: "https://www.ine.pt/",
  points: [
    { label: "Catholiques", sharePercent: 80.2 },
    { label: "Sans religion", sharePercent: 14.1 },
    { label: "Autres religions ou non précisé", sharePercent: 5.7 },
  ],
  summary:
    "Selon le recensement de 2021, 80,2 % de la population résidente se déclare catholique — en recul par rapport à 88,3 % en 2011 — tandis que la part des personnes sans religion a plus que doublé, passant de 6,8 % à 14,1 % en une décennie.",
  methodologyNote:
    "Ces chiffres reposent sur l'auto-déclaration d'appartenance lors du recensement national et ne mesurent pas la pratique religieuse effective, généralement plus faible que l'appartenance déclarée.",
};
