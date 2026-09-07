import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 9_208_163,
    unit: "habitants",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL",
  },
  density: {
    value: 111,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST",
  },
  urbanShare: {
    value: 69.7,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS",
  },
  summary:
    "Avec un peu plus de 9,2 millions d'habitants, l'Autriche est un pays de taille moyenne à l'échelle européenne. La population se concentre fortement le long du Danube et dans l'agglomération viennoise, qui rassemble à elle seule plus d'un cinquième des habitants du pays.",
};
