import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "European Social Survey (ESS11)",
  year: 2023,
  ageScope: "Population résidente adulte",
  source: "European Social Survey European Research Infrastructure (ESS ERIC)",
  sourceUrl: "https://www.europeansocialsurvey.org/",
  points: [
    { label: "Sans religion", sharePercent: 59 },
    { label: "Catholiques", sharePercent: 31 },
    { label: "Musulmans", sharePercent: 6 },
    { label: "Protestants", sharePercent: 1 },
    { label: "Orthodoxes", sharePercent: 1 },
    { label: "Autres chrétiens", sharePercent: 1 },
    { label: "Autres religions", sharePercent: 1 },
  ],
  summary:
    "Selon l'enquête European Social Survey de 2023, une majorité de la population résidant en Belgique se déclare sans religion (59 %), devant les catholiques (31 %) et les musulmans (6 %).",
  methodologyNote:
    "Ces chiffres proviennent d'une enquête déclarative par sondage (ESS11), non d'un recensement officiel — la Belgique ne collecte pas l'appartenance religieuse dans son registre national.",
};
