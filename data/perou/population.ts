import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 34_157_732,
    unit: "habitants",
    year: 2025,
    source: "INEI (recensement 2025)",
    sourceUrl: "https://censos2025.inei.gob.pe/",
    note: "Premiers résultats des Censos Nacionales 2025, réalisés d'août à octobre 2025.",
  },
  density: {
    value: 26.4,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=PE",
  },
  growthRate: {
    value: 1.04,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=PE",
  },
  medianAge: {
    value: 34.2,
    unit: "ans",
    year: 2025,
    source: "INEI (recensement 2025)",
    sourceUrl: "https://censos2025.inei.gob.pe/",
  },
  urbanShare: {
    value: 85.6,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=PE",
  },
  summary:
    "Près de trois Péruviens sur dix vivent à Lima Métropolitaine, qui dépasse les 10 millions d'habitants : l'exode rural depuis les Andes, puis le conflit armé des années 1980-1990, ont fait gonfler la capitale et ses quartiers populaires installés sur les collines désertiques. La population vieillit : les plus de 60 ans représentent 14,8 % des habitants en 2025, contre 11,7 % en 2017. Au recensement de 2017, un quart des Péruviens se déclaraient d'origine autochtone, quechua surtout, et le pays a accueilli depuis 2017 environ 1,5 million de migrants vénézuéliens.",
};
