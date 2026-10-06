import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Enquête Pew Research Center sur la religion en Amérique latine",
  year: 2024,
  ageScope: "Population adulte",
  source: "Pew Research Center",
  sourceUrl: "https://www.pewresearch.org/religion/2026/01/21/catholicism-has-declined-in-latin-america-over-the-past-decade/",
  points: [
    { label: "Catholiques", sharePercent: 60 },
    { label: "Protestants, évangéliques et autres religions", sharePercent: 17 },
    { label: "Sans religion", sharePercent: 23 },
  ],
  summary:
    "La Colombie reste majoritairement catholique, mais c'est le pays d'Amérique latine où le catholicisme a reculé le plus vite au cours de la dernière décennie : de 79 % des adultes en 2013-2014 à 60 % en 2024. Ce recul profite surtout aux personnes sans religion, dont la part a presque quadruplé, et, dans une moindre mesure, aux Églises évangéliques et pentecôtistes. La Constitution de 1991 a mis fin au statut de religion officielle du catholicisme et garantit la liberté de culte.",
  methodologyNote:
    "Le Pew Research Center publie les parts des catholiques et des sans-religion ; la catégorie « Protestants, évangéliques et autres religions » est obtenue par différence. Le recensement colombien ne pose pas de question sur la religion.",
};
