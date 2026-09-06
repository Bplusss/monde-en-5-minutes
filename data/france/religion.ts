import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Trajectoires et Origines 2 (TeO2)",
  year: 2020,
  ageScope: "18-59 ans, France métropolitaine",
  source: "INSEE / INED",
  sourceUrl: "https://www.insee.fr/fr/statistiques/6793308?sommaire=6793391",
  points: [
    { label: "Sans religion", sharePercent: 51 },
    { label: "Catholicisme", sharePercent: 29 },
    { label: "Islam", sharePercent: 10 },
    { label: "Autres religions et croyances", sharePercent: 10 },
  ],
  summary:
    "Selon l'enquête Trajectoires et Origines (Insee/Ined, 2019-2020), 51 % des personnes de 18 à 59 ans résidant en France métropolitaine déclarent n'avoir aucune religion, 29 % se déclarent catholiques et 10 % musulmanes.",
  methodologyNote:
    "Ces chiffres reposent sur l'auto-déclaration d'appartenance et ne mesurent pas la pratique religieuse, qui est nettement plus faible pour l'ensemble des cultes. Il s'agit de la déclaration des personnes, non d'une caractérisation de la population dans son ensemble.",
};
