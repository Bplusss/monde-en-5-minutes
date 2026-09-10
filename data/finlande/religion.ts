import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Statistiques d'appartenance religieuse 2023",
  year: 2023,
  ageScope: "Population totale résidente",
  source: "Statistics Finland",
  sourceUrl: "https://stat.fi/en/statistics/vaerak",
  points: [
    { label: "Église évangélique-luthérienne de Finlande", sharePercent: 61.8 },
    { label: "Sans religion", sharePercent: 33.4 },
    { label: "Église orthodoxe de Finlande", sharePercent: 1.1 },
    { label: "Autres religions", sharePercent: 3.7 },
  ],
  summary:
    "L'Église évangélique-luthérienne, l'une des deux Églises nationales du pays avec l'Église orthodoxe, reste majoritaire mais a perdu près de trente points de part de population depuis les années 1990, sous l'effet d'une sécularisation rapide qui touche particulièrement les jeunes générations urbaines.",
  methodologyNote:
    "Ces chiffres reposent sur les registres officiels d'appartenance aux Églises, tenus par l'État finlandais, et non sur une enquête déclarative — une méthode plus précise mais qui ne mesure que l'affiliation administrative, non la pratique ou la croyance réelle.",
};
