import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population, des ménages et des logements",
  year: 2022,
  ageScope: "Population totale (hors Kosovo)",
  source: "Office statistique de la République de Serbie (RZS)",
  sourceUrl: "https://www.stat.gov.rs/en-us/vesti/20230616-st/",
  points: [
    { label: "Orthodoxes", sharePercent: 81.1 },
    { label: "Catholiques", sharePercent: 3.9 },
    { label: "Musulmans", sharePercent: 4.2 },
    { label: "Protestants", sharePercent: 0.8 },
    { label: "Autres, non-déclarés ou sans religion", sharePercent: 10.0 },
  ],
  summary:
    "L'écrasante majorité des Serbes orthodoxes appartient à l'Église orthodoxe serbe, autocéphale depuis le XIIIᵉ siècle et institution qui a joué un rôle central dans la préservation de l'identité nationale sous domination ottomane. La minorité catholique se concentre en Voïvodine (Hongrois, Croates), et la minorité musulmane dans le Sandžak (Bosniaques) et le sud du pays.",
  methodologyNote:
    "Dernier recensement disponible, réalisé en 2022 ; comme l'ensemble des statistiques officielles serbes depuis 1999, il ne couvre pas le territoire du Kosovo.",
};
