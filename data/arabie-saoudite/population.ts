import type { PopulationData } from "@/lib/types";

const GASTAT = "General Authority for Statistics (GASTAT)";

export const population: PopulationData = {
  total: {
    value: 35_300_280,
    unit: "habitants",
    year: 2024,
    source: `${GASTAT}, estimation mi-2024 (via Banque mondiale)`,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=SA",
    note: "Le recensement de 2022 a dénombré 32,2 millions d'habitants, dont 18,8 millions de Saoudiens (58,4 %) et 13,4 millions d'étrangers (41,6 %).",
  },
  density: {
    value: 16.4,
    unit: "hab./km²",
    year: 2024,
    source: "Calculé (population GASTAT ÷ superficie)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=SA",
  },
  growthRate: {
    value: 4.6,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=SA",
    note: "Croissance portée surtout par l'arrivée de travailleurs étrangers.",
  },
  medianAge: {
    value: 29,
    unit: "ans",
    year: 2022,
    source: `${GASTAT}, recensement 2022 (via Saudipedia)`,
    sourceUrl: "https://saudipedia.com/en/saudi-census-2022",
    note: "25 ans pour les seuls Saoudiens, dont 63 % ont moins de 30 ans.",
  },
  urbanShare: {
    value: 84.5,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=SA",
  },
  summary:
    "Nomade ou semi-nomade jusqu'aux années 1960, la population est aujourd'hui urbaine à près de 85 %. Les régions de Riyad, de La Mecque et de l'Est regroupent 68 % des habitants. Plus de quatre résidents sur dix sont étrangers, venus surtout d'Asie du Sud, d'Égypte, d'Indonésie et des Philippines ; les hommes sont donc nettement plus nombreux que les femmes.",
};
