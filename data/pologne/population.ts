import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 36_435_861,
    unit: "habitants",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=PL",
  },
  density: {
    value: 117,
    unit: "hab./km²",
    year: 2025,
    source: "Banque mondiale (calculé à partir de la population et de la superficie)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=PL",
  },
  summary:
    "Avec environ 36,4 millions d'habitants, la Pologne est le pays le plus peuplé d'Europe centrale. Sa population, en recul depuis plusieurs années, se concentre autour de Varsovie et des grandes agglomérations de Cracovie, Łódź, Wrocław et Poznań.",
};
