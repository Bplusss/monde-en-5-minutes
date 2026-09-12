import type { PopulationData } from "@/lib/types";

const SRC = "Office statistique de la République de Slovénie (SURS)";
const URL = "https://www.stat.si/statweb/en/News/Index/13582";

export const population: PopulationData = {
  total: {
    value: 2_130_850,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Population au 1ᵉʳ janvier 2025.",
  },
  density: {
    value: 105.1,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 0.2,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: "https://www.stat.si/statweb/en/News/Index/14290",
    note: "Hausse portée par le solde migratoire (le nombre de citoyens slovènes a lui-même diminué en 2025) alors que le solde naturel reste négatif.",
  },
  medianAge: {
    value: 44.3,
    unit: "ans",
    year: 2024,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 56.1,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=SI",
  },
  summary:
    "Avec un peu plus de deux millions d'habitants, la Slovénie est l'un des pays les moins peuplés de l'Union européenne. Sa démographie est marquée par un vieillissement prononcé et un solde naturel négatif depuis le milieu des années 2010, compensé depuis par une immigration de travail croissante, notamment en provenance des Balkans occidentaux. La population reste peu concentrée : Ljubljana, la capitale, ne rassemble qu'environ 14 % des habitants, loin des taux de primatie observés dans d'autres capitales d'Europe centrale.",
};
