import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population 2002",
  year: 2002,
  ageScope: "Population totale résidente",
  source: "Office statistique de la République de Slovénie (SURS)",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Slovenia",
  points: [
    { label: "Catholiques", sharePercent: 57.8 },
    { label: "Orthodoxes", sharePercent: 2.3 },
    { label: "Musulmans", sharePercent: 2.4 },
    { label: "Sans religion ou athées", sharePercent: 13.6 },
    { label: "Autres, non déclaré ou inconnu", sharePercent: 23.9 },
  ],
  summary:
    "L'Église catholique romaine, historiquement dominante, rassemblait un peu moins de 58 % de la population lors du dernier recensement à avoir posé la question religieuse, en 2002 — en recul sensible par rapport aux décennies précédentes. Les minorités orthodoxe et musulmane, principalement composées de descendants d'immigrés venus d'autres républiques yougoslaves (Serbie, Bosnie-Herzégovine notamment) au XXᵉ siècle, représentent chacune un peu plus de 2 % de la population. La part de personnes sans religion, athées ou n'ayant pas répondu est particulièrement élevée, la Slovénie comptant parmi les sociétés les plus sécularisées d'Europe centrale.",
  methodologyNote:
    "Le recensement de 2002 reste la dernière source officielle exhaustive sur l'appartenance religieuse en Slovénie : depuis 2011, le recensement slovène est réalisé par croisement de registres administratifs et ne pose plus de question sur la religion, qui relève désormais de la sphère privée déclarative. Le taux élevé de non-réponse et de réponses « inconnu » en 2002 (plus de 22 % à elles deux) limite par ailleurs la précision de ces chiffres.",
};
