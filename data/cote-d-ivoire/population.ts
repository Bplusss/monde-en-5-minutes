import type { PopulationData } from "@/lib/types";

const WB = "Banque mondiale";

export const population: PopulationData = {
  total: {
    value: 32_711_547,
    unit: "habitants",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CI",
    note: "Estimation. Le dernier recensement (RGPH 2021, Institut national de la statistique) a dénombré 29 389 150 habitants.",
  },
  density: {
    value: 101.4,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population Banque mondiale ÷ superficie)",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CI",
    note: "Densité plus forte dans le sud forestier et autour d'Abidjan que dans le nord et le nord-est.",
  },
  growthRate: {
    value: 2.4,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=CI",
  },
  medianAge: {
    value: 18.3,
    unit: "ans",
    year: 2025,
    source: "Division de la population des Nations unies, World Population Prospects (révision 2024), via Worldometer",
    sourceUrl: "https://www.worldometers.info/world-population/cote-d-ivoire-population/",
  },
  urbanShare: {
    value: 54.5,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CI",
  },
  summary:
    "Avec environ 33 millions d'habitants, la Côte d'Ivoire est l'un des pays les plus peuplés d'Afrique de l'Ouest. Sa population est très jeune (les trois quarts des habitants ont moins de 35 ans selon le recensement de 2021) et croît d'environ 2,4 % par an. Pôle d'immigration régional depuis l'époque coloniale, le pays compte 22 % de résidents de nationalité étrangère, principalement burkinabè et maliens, venus travailler dans les plantations puis dans les villes. Un peu plus de la moitié de la population est urbaine, et l'agglomération d'Abidjan concentre à elle seule plus d'un habitant sur cinq.",
};
