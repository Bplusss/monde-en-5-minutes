import type { PopulationData } from "@/lib/types";

const SRC = "Centrālā statistikas pārvalde (CSP, Office letton de statistique)";
const URL = "https://www.csp.gov.lv/en/article/latvia-has-population-1845-million-0";

export const population: PopulationData = {
  total: {
    value: 1_845_000,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Population résidente au 1ᵉʳ janvier 2026 (CSP).",
  },
  density: {
    value: 28.6,
    unit: "hab./km²",
    year: 2025,
    source: `${SRC} (calculé à partir de la population et de la superficie)`,
    sourceUrl: URL,
  },
  growthRate: {
    value: -0.83,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Déclin continu depuis la restauration de l'indépendance, sous l'effet conjugué d'un solde naturel négatif (26 100 décès pour 11 900 naissances en 2025) et de l'émigration.",
  },
  medianAge: {
    value: 43.8,
    unit: "ans",
    year: 2024,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 67.7,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=LV",
  },
  summary:
    "La population lettone a diminué d'environ un tiers depuis la fin des années 1980, sous l'effet conjugué d'une natalité basse, d'une mortalité élevée et d'une forte émigration vers l'Europe de l'Ouest depuis l'adhésion à l'UE en 2004. Elle reste concentrée autour de Riga, qui rassemble près d'un tiers des habitants du pays. Héritage de la période soviétique, la minorité russophone représente environ un quart de la population ; une partie d'entre elle, ainsi que d'autres personnes arrivées avant 1991 ou leurs descendants, relève encore du statut particulier de « non-citoyen » (nepilsonis), qui concernait un peu moins de 10 % des habitants dans les années 2020, en baisse constante depuis le pic des années 1990.",
};
