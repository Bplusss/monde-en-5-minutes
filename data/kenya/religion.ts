import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et de l'habitat",
  year: 2019,
  ageScope: "Population totale",
  source: "Kenya National Bureau of Statistics (KNBS), recensement 2019",
  sourceUrl: "https://www.knbs.or.ke/2019-kenya-population-and-housing-census-results/",
  points: [
    { label: "Protestants", sharePercent: 33.4 },
    { label: "Catholiques", sharePercent: 20.6 },
    { label: "Évangéliques", sharePercent: 20.4 },
    { label: "Églises africaines indépendantes", sharePercent: 7.0 },
    { label: "Autres chrétiens (dont orthodoxes)", sharePercent: 4.1 },
    { label: "Musulmans", sharePercent: 10.9 },
    { label: "Sans religion", sharePercent: 1.6 },
    { label: "Autres religions et sans réponse", sharePercent: 2.0 },
  ],
  summary:
    "Le Kenya est un pays très majoritairement chrétien (85,5 % de la population) et très pratiquant, où les Églises protestantes historiques, l'Église catholique et un nombre croissant d'Églises évangéliques et pentecôtistes occupent une place centrale dans la vie sociale et politique. Les musulmans, environ un Kényan sur dix, vivent surtout sur la côte swahilie et dans le nord-est, peuplé de Somalis. L'État est laïque et la Constitution garantit la liberté de culte.",
  methodologyNote:
    "La catégorie « Autres religions et sans réponse » regroupe hindous, religions traditionnelles africaines, autres croyances et réponses « ne sait pas » (environ 2 % au total).",
};
