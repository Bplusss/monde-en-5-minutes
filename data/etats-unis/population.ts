import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 341_784_857,
    unit: "habitants",
    year: 2025,
    source: "U.S. Census Bureau",
    sourceUrl: "https://www.census.gov/popclock/",
    note: "Estimation 2025 ; population des 50 États et du district de Columbia, hors territoires insulaires.",
  },
  density: {
    value: 36.8,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=US",
  },
  growthRate: {
    value: 0.52,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=US",
  },
  medianAge: {
    value: 38.9,
    unit: "ans",
    year: 2024,
    source: "Wikipédia (d'après CIA World Factbook)",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_median_age",
  },
  urbanShare: {
    value: 80.2,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=US",
  },
  summary:
    "Troisième pays le plus peuplé au monde derrière l'Inde et la Chine, les États-Unis comptent une population très majoritairement urbaine, concentrée sur les littoraux atlantique et pacifique ainsi que dans le sud du pays (Sun Belt), tandis que de vastes régions des Grandes Plaines et de l'Ouest intérieur restent peu peuplées. La croissance démographique, désormais modeste, repose de plus en plus sur le solde migratoire.",
};
