import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation CIA World Factbook",
  year: 2023,
  ageScope: "Population totale résidente (estimation)",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/andorra/",
  points: [
    { label: "Catholiques", sharePercent: 88.2 },
    { label: "Autres ou sans religion", sharePercent: 11.8 },
  ],
  summary:
    "Historiquement très largement catholique — l'évêque d'Urgell, coprince du pays, en est le symbole institutionnel le plus visible — l'Andorre ne mène pas de recensement religieux officiel ; la part réelle de pratiquants est vraisemblablement bien inférieure à l'appartenance déclarée.",
  methodologyNote:
    "Aucun recensement national ne porte sur la religion en Andorre ; ces chiffres proviennent d'une estimation externe (CIA World Factbook) et doivent être interprétés avec prudence.",
};
