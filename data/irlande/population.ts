import type { PopulationData } from "@/lib/types";

const SRC = "CSO (Central Statistics Office)";
const URL = "https://www.cso.ie/en/statistics/population/";

export const population: PopulationData = {
  total: {
    value: 5_432_300,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 77.3,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 1.3,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "L'un des taux de croissance démographique les plus élevés de l'Union européenne, porté à la fois par la natalité et par l'immigration.",
  },
  medianAge: {
    value: 38.8,
    unit: "ans",
    year: 2023,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
    note: "L'une des populations les plus jeunes d'Europe occidentale.",
  },
  urbanShare: {
    value: 64.4,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IE",
  },
  summary:
    "Après avoir été divisée par deux au XIXᵉ siècle sous l'effet de la Grande Famine et d'une émigration massive, la population irlandaise n'a retrouvé son niveau d'avant-famine qu'au début des années 2020. Le pays affiche aujourd'hui l'une des croissances démographiques les plus dynamiques d'Europe, portée par une natalité comparativement élevée et une forte immigration liée à son économie en plein essor.",
};
