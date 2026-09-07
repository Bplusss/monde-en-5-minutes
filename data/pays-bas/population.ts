import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 18_087_633,
    unit: "habitants",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=NL",
  },
  density: {
    value: 537,
    unit: "hab./km²",
    year: 2025,
    source: "Banque mondiale (calculé)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=NL",
    note: "Calculé à partir de la population totale et de la superficie terrestre.",
  },
  summary:
    "Avec environ 18,1 millions d'habitants sur un territoire de taille modeste, les Pays-Bas comptent parmi les pays les plus densément peuplés d'Europe, la population se concentrant surtout dans la conurbation de la Randstad (Amsterdam, Rotterdam, La Haye, Utrecht).",
};
