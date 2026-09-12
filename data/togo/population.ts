import type { PopulationData } from "@/lib/types";

const SRC = "INSEED (Institut National de la Statistique et des Études Économiques et Démographiques)";
const URL = "https://inseed.tg/";

export const population: PopulationData = {
  total: {
    value: 8_095_498,
    unit: "habitants",
    year: 2022,
    source: SRC,
    sourceUrl: URL,
    note: "Résultats définitifs du 5ᵉ recensement général de la population et de l'habitat (RGPH-5), réalisé en novembre 2022. La population est estimée à plus de 8,4 millions d'habitants en 2024 par la Banque mondiale, compte tenu de la croissance démographique.",
  },
  density: {
    value: 142.6,
    unit: "hab./km²",
    year: 2022,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 2.2,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=TG",
  },
  urbanShare: {
    value: 43.8,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=TG",
  },
  summary:
    "Le Togo connaît une croissance démographique rapide et une population encore jeune et majoritairement rurale, même si la part urbaine progresse régulièrement. Lomé, la capitale, concentre à elle seule une part disproportionnée de la population urbaine et de l'activité économique du pays, dans un contexte de forte pression migratoire des campagnes vers la ville.",
};
