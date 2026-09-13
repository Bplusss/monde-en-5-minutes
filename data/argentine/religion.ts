import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Latinobarómetro",
  year: 2024,
  ageScope: "Population adulte",
  source: "Corporación Latinobarómetro",
  sourceUrl: "https://www.latinobarometro.org/",
  points: [
    { label: "Catholiques", sharePercent: 63.0 },
    { label: "Évangéliques et pentecôtistes", sharePercent: 8.8 },
    { label: "Autres chrétiens (dont Témoins de Jéhovah)", sharePercent: 1.2 },
    { label: "Sans religion", sharePercent: 26.2 },
    { label: "Autre religion ou sans réponse", sharePercent: 0.8 },
  ],
  summary:
    "Bien que le catholicisme reste très majoritaire et profondément ancré dans l'identité nationale — l'Argentine est le pays natal du pape François (Jorge Mario Bergoglio, 1936-2025), premier pape latino-américain de l'histoire —, la part de la population se déclarant sans religion a fortement progressé depuis les années 2000, tandis que les Églises évangéliques et pentecôtistes gagnent du terrain, en particulier dans les quartiers populaires.",
  methodologyNote:
    "Enquête d'opinion annuelle menée dans 17 pays d'Amérique latine ; les instituts argentins (INDEC) ne collectent pas de données officielles sur la religion depuis 1960.",
};
