import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Statistique d'appartenance à l'Église de Suède",
  year: 2024,
  ageScope: "Ensemble de la population résidente",
  source: "Statista (d'après les données de l'Église de Suède)",
  sourceUrl: "https://www.statista.com/statistics/537712/sweden-church-members-as-a-percentage-of-total-population/",
  points: [
    { label: "Membres de l'Église de Suède (luthérienne)", sharePercent: 51 },
    { label: "Autres confessions ou sans appartenance déclarée", sharePercent: 49 },
  ],
  summary:
    "En 2024, 51 % des habitants étaient membres de l'Église de Suède (luthérienne, désétablie de l'État en 2000), contre 70 % en 2010 — un recul continu, bien que l'année 2024 ait vu le plus grand nombre de nouvelles adhésions depuis des décennies.",
  methodologyNote:
    "Ce chiffre mesure l'appartenance administrative à l'Église de Suède, pas la pratique religieuse réelle, qui reste beaucoup plus faible : moins de 5 % de fréquentation régulière des offices sur longue période, même si une étude de l'institut SOM a mesuré une hausse de la fréquentation chez les jeunes adultes (de 17 % à 34 % entre 2020 et 2024).",
};
