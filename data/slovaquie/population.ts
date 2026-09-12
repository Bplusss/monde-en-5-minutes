import type { PopulationData } from "@/lib/types";

const SRC = "Štatistický úrad SR (Office statistique slovaque)";
const URL = "https://slovak.statistics.sk/";

export const population: PopulationData = {
  total: {
    value: 5_419_451,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 110.5,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Calculé à partir de la population totale et de la superficie du pays.",
  },
  growthRate: {
    value: -0.1,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Quatrième année consécutive de recul démographique : les décès (environ 54 000) dépassent nettement les naissances (environ 46 000), un déficit naturel que l'immigration ne compense qu'en partie.",
  },
  medianAge: {
    value: 41.3,
    unit: "ans",
    year: 2023,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 54.2,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=SK",
  },
  summary:
    "La population slovaque décline légèrement depuis le début des années 2020, la mortalité l'emportant sur la natalité malgré un solde migratoire positif. Le pays reste moins urbanisé que ses voisins tchèque ou hongrois, avec une part importante d'habitants en petites villes et villages, notamment dans les régions montagneuses du centre et de l'est.",
};
