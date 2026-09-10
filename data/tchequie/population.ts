import type { PopulationData } from "@/lib/types";

const SRC = "Office tchèque de la statistique (ČSÚ)";
const URL = "https://www.czso.cz/csu/czso/population";

export const population: PopulationData = {
  total: {
    value: 10_900_555,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 138.2,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 0.4,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Croissance portée par un solde migratoire positif, notamment lié à l'accueil de réfugiés ukrainiens depuis 2022, malgré un déclin naturel.",
  },
  medianAge: {
    value: 43.6,
    unit: "ans",
    year: 2023,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 74.1,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CZ",
  },
  summary:
    "La population tchèque croît modérément depuis les années 2000, portée par l'immigration économique et, depuis 2022, par l'accueil de plusieurs centaines de milliers de réfugiés ukrainiens — l'un des taux d'accueil rapportés à la population les plus élevés d'Europe. Prague et son agglomération concentrent une part croissante des habitants, au détriment de certaines régions industrielles du nord-ouest et de Moravie-Silésie.",
};
