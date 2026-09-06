import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 83_500_000,
    unit: "habitants",
    year: 2025,
    source: "Destatis",
    sourceUrl: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/06/PD26_203_124.html",
    note: "Estimation à fin 2025.",
  },
  density: {
    value: 223,
    unit: "hab./km²",
    year: 2024,
    source: "Destatis",
    sourceUrl: "https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/_inhalt.html",
  },
  summary:
    "Avec 83,5 millions d'habitants, l'Allemagne est le pays le plus peuplé de l'Union européenne. Sa population, en léger recul en 2025, se concentre le long de l'axe rhénan et dans les grandes métropoles (Berlin, Hambourg, Munich, la Ruhr).",
};
