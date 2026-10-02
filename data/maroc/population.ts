import type { PopulationData } from "@/lib/types";

const HCP = "Haut-Commissariat au Plan (HCP), recensement général de la population et de l'habitat (RGPH) 2024";
const HCP_URL = "https://en.wikipedia.org/wiki/Regions_of_Morocco";

export const population: PopulationData = {
  total: {
    value: 36_170_000,
    unit: "habitants",
    year: 2024,
    source: `${HCP} — calcul hors Sahara occidental`,
    sourceUrl: HCP_URL,
    note: "Environ 36,17 millions au 1er septembre 2024 dans les frontières internationalement reconnues : total officiel moins la région de Dakhla-Oued Ed-Dahab et la région de Laâyoune-Sakia El Hamra hors province de Tarfaya. Le chiffre officiel du HCP, 36 828 330 habitants, inclut la partie du Sahara occidental administrée par le Maroc (environ 650 000 habitants).",
  },
  density: {
    value: 81,
    unit: "hab./km²",
    year: 2024,
    source: "Calculé (population hors Sahara occidental ÷ superficie)",
    sourceUrl: HCP_URL,
    note: "Population concentrée sur la façade atlantique ; le sud-est présaharien est très peu peuplé.",
  },
  growthRate: {
    value: 0.85,
    unit: "% par an",
    year: 2024,
    source: HCP,
    sourceUrl: "https://www.hcp.ma/region-laayoune/attachment/2865727/",
    note: "Croissance annuelle moyenne entre les recensements de 2014 et 2024, en net ralentissement (1,25 % entre 2004 et 2014).",
  },
  medianAge: {
    value: 29.2,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies, World Population Prospects (via Our World in Data)",
    sourceUrl: "https://ourworldindata.org/grapher/median-age",
  },
  urbanShare: {
    value: 62.8,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=MA",
  },
  summary:
    "Le Maroc compte environ 36 millions d'habitants hors Sahara occidental. Avec moins de deux enfants par femme en 2024, la croissance ralentit et la population vieillit. Près des deux tiers des Marocains vivent en ville, surtout sur l'axe atlantique Tanger–Casablanca–El Jadida. Une importante diaspora vit en Europe, d'abord en France et en Espagne.",
};
