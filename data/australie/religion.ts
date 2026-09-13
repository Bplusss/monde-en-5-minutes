import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et du logement (Census of Population and Housing)",
  year: 2021,
  ageScope: "Population totale ayant répondu à la question, facultative, sur la religion",
  source: "Australian Bureau of Statistics (ABS)",
  sourceUrl: "https://www.abs.gov.au/statistics/people/people-and-communities/religious-affiliation-australia/latest-release",
  points: [
    { label: "Christianisme (toutes confessions)", sharePercent: 43.9 },
    { label: "Sans religion", sharePercent: 38.9 },
    { label: "Islam", sharePercent: 3.2 },
    { label: "Hindouisme", sharePercent: 2.7 },
    { label: "Bouddhisme", sharePercent: 2.4 },
    { label: "Autres religions et non déclaré", sharePercent: 8.9 },
  ],
  summary:
    "L'Australie connaît une sécularisation rapide : la part de la population se déclarant sans religion a plus que doublé depuis 2001 et a dépassé pour la première fois celle des chrétiens catholiques comme groupe le plus nombreux dès le recensement de 2016. Le catholicisme (environ 20 % de la population) reste la plus importante confession chrétienne, devant l'anglicanisme. L'immigration a par ailleurs fortement diversifié le paysage religieux, avec des communautés musulmane, hindoue et bouddhiste en croissance continue.",
  methodologyNote:
    "La question sur la religion est facultative dans le recensement australien, ce qui explique une part significative de réponses non précisées, agrégée ici avec les religions minoritaires restantes.",
};
