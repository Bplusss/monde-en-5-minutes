import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 5_324_700,
    unit: "habitants",
    year: 2025,
    source: "Stats NZ (estimation au 30 juin)",
    sourceUrl: "https://www.stats.govt.nz/topics/population-estimates-and-projections/",
  },
  density: {
    value: 19.8,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=NZ",
  },
  growthRate: {
    value: 0.65,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=NZ",
  },
  urbanShare: {
    value: 84.0,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=NZ",
  },
  summary:
    "Un tiers des Néo-Zélandais vivent dans la région d'Auckland, de loin la plus grande ville du pays. La population, issue en majorité des colons britanniques, est de plus en plus diverse : au recensement de 2023, 17,8 % des habitants se déclaraient māori, 17,3 % d'origine asiatique et 8,9 % originaires des îles du Pacifique, faisant d'Auckland la plus grande ville polynésienne du monde. L'immigration soutient la croissance démographique, tandis que de nombreux jeunes Néo-Zélandais partent travailler en Australie.",
};
