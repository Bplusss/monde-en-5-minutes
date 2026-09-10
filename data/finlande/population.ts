import type { PopulationData } from "@/lib/types";

const SRC = "Statistics Finland";
const URL = "https://stat.fi/en/statistics/vaerak";

export const population: PopulationData = {
  total: {
    value: 5_648_223,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 16.7,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "L'une des densités les plus faibles d'Europe, avec une population très concentrée dans le sud du pays.",
  },
  growthRate: {
    value: 0.3,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Croissance portée uniquement par l'immigration, la Finlande affichant l'un des taux de natalité les plus bas d'Europe.",
  },
  medianAge: {
    value: 43.8,
    unit: "ans",
    year: 2023,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 86.9,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=FI",
  },
  summary:
    "Très peu densément peuplée en dehors du sud du pays, la Finlande connaît depuis plusieurs années l'un des taux de natalité les plus bas d'Europe, sa population ne continuant de croître que grâce à l'immigration. Helsinki et sa région rassemblent près d'un tiers des habitants, tandis que la Laponie et l'est du pays continuent de se dépeupler.",
};
