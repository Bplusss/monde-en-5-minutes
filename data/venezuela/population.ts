import type { PopulationData } from "@/lib/types";

const WB = "Banque mondiale";

export const population: PopulationData = {
  total: {
    value: 28_516_896,
    unit: "habitants",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=VE",
    note: "Estimation : le dernier recensement date de 2011 (27,2 millions d'habitants), et l'émigration massive des années 2010 rend les chiffres incertains.",
  },
  density: {
    value: 31,
    unit: "hab./km²",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=VE",
  },
  growthRate: {
    value: 0.39,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=VE",
  },
  urbanShare: {
    value: 89.3,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=VE",
  },
  summary:
    "Le Venezuela est l'un des pays les plus urbanisés d'Amérique latine : la grande majorité des habitants vit dans les villes du nord, de Maracaibo à Caracas, tandis que le sud, au-delà de l'Orénoque, est presque vide. La population est en grande partie métissée, issue des peuples autochtones, des colons espagnols et des esclaves africains, puis enrichie au XXe siècle par l'immigration italienne, espagnole, portugaise et colombienne. Pays d'immigration pendant le boom pétrolier, le Venezuela a connu depuis 2015 l'un des plus grands exodes du monde : environ 7,9 millions de Vénézuéliens vivent à l'étranger, surtout en Colombie, au Pérou, au Brésil et aux États-Unis.",
};
