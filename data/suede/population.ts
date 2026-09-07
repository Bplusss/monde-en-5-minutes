import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 10_596_620,
    unit: "habitants",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=SE",
  },
  density: {
    value: 23.5,
    unit: "hab./km²",
    year: 2025,
    source: "Banque mondiale (calculé)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=SE",
    note: "Calculé à partir de la population totale et de la superficie ; l'une des densités les plus faibles d'Europe.",
  },
  summary:
    "Avec environ 10,6 millions d'habitants pour une superficie parmi les plus vastes d'Europe, la Suède est un pays peu densément peuplé, dont la population se concentre très largement dans le tiers sud (Stockholm, Göteborg, Malmö), tandis que le nord (Laponie) reste très faiblement habité.",
};
