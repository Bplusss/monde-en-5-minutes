import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Eurobaromètre",
  year: 2019,
  ageScope: "Population adulte",
  source: "Commission européenne, Eurobaromètre",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Luxembourg",
  points: [
    { label: "Catholiques", sharePercent: 59.6 },
    { label: "Sans religion", sharePercent: 28.0 },
    { label: "Protestants", sharePercent: 3.0 },
    { label: "Autres religions", sharePercent: 9.4 },
  ],
  summary:
    "Historiquement très largement catholique, le Luxembourg connaît depuis plusieurs décennies un net recul de la pratique religieuse, la part de personnes sans religion progressant particulièrement chez les jeunes générations et dans la population immigrée.",
  methodologyNote:
    "Le Luxembourg ne mène pas de recensement officiel sur la religion depuis 1979 ; ces chiffres proviennent d'une enquête Eurobaromètre et doivent être interprétés comme des ordres de grandeur.",
};
