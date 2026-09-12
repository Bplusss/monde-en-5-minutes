import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population",
  year: 2021,
  ageScope: "Population totale ayant déclaré une appartenance religieuse",
  source: "Statistique Canada",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Canada",
  points: [
    { label: "Catholiques", sharePercent: 29.9 },
    { label: "Protestants", sharePercent: 14.1 },
    { label: "Autres chrétiens (orthodoxes et autres)", sharePercent: 9.3 },
    { label: "Sans religion", sharePercent: 34.6 },
    { label: "Musulmans", sharePercent: 4.9 },
    { label: "Hindous", sharePercent: 2.3 },
    { label: "Sikhs", sharePercent: 2.1 },
    { label: "Bouddhistes", sharePercent: 1.0 },
    { label: "Juifs", sharePercent: 0.9 },
    { label: "Autres (dont spiritualités autochtones)", sharePercent: 0.9 },
  ],
  summary:
    "Le christianisme, très largement dominant historiquement, ne rassemble plus qu'un peu plus de la moitié de la population, en net recul continu depuis plusieurs décennies au profit de l'absence de religion, désormais deuxième catégorie la plus déclarée. Le catholicisme reste particulièrement présent au Québec, historiquement façonné par l'Église catholique jusqu'à la Révolution tranquille des années 1960, ainsi que dans les communautés d'origine irlandaise, italienne, polonaise ou philippine ; l'essor des religions non chrétiennes (islam, hindouisme, sikhisme) reflète directement les grandes vagues d'immigration récentes.",
  methodologyNote: "Recensement de 2021 ; la question sur la religion n'est posée qu'une fois par décennie, lors des recensements se terminant par 1.",
};
