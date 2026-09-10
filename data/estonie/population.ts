import type { PopulationData } from "@/lib/types";

const SRC = "Statistikaamet (Office estonien de la statistique)";
const URL = "https://www.stat.ee/en/find-statistics/statistics-theme/population";

export const population: PopulationData = {
  total: {
    value: 1_365_884,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 30.1,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "L'une des densités les plus faibles de l'Union européenne.",
  },
  growthRate: {
    value: 0.1,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Population globalement stable, un solde migratoire positif compensant un déclin naturel persistant.",
  },
  medianAge: {
    value: 43.6,
    unit: "ans",
    year: 2023,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 69.4,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=EE",
  },
  summary:
    "L'Estonie est l'un des pays les moins densément peuplés de l'Union européenne, avec une population concentrée autour de Tallinn, qui rassemble près d'un tiers des habitants. Le pays a accueilli depuis 2022 un nombre important de réfugiés ukrainiens, ce qui a temporairement inversé une tendance démographique auparavant marquée par le déclin naturel et l'émigration vers les pays nordiques.",
};
