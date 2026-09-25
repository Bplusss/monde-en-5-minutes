import type { PopulationData } from "@/lib/types";

const WB = "Banque mondiale";

export const population: PopulationData = {
  total: {
    value: 91_567_738,
    unit: "habitants",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=IR",
    note: "2ᵉ pays le plus peuplé du Moyen-Orient après l'Égypte.",
  },
  density: {
    value: 55.6,
    unit: "hab./km²",
    year: 2024,
    source: "Calculé (population Banque mondiale ÷ superficie totale)",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=IR",
    note: "Moyenne trompeuse : la population se concentre sur le plateau central et la bande caspienne, tandis que les déserts du centre sont quasiment inhabités.",
  },
  growthRate: {
    value: 0.7,
    unit: "%",
    year: 2023,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=IR",
    note: "En net ralentissement depuis le pic des années 1980 (plus de 3 % par an).",
  },
  medianAge: {
    value: 32.5,
    unit: "ans",
    year: 2023,
    source: "ONU (Perspectives de la population mondiale)",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 76.2,
    unit: "%",
    year: 2023,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IR",
  },
  summary:
    "L'Iran a connu un basculement démographique spectaculaire en une génération : après une politique nataliste des années 1980 qui a porté la fécondité à plus de 6 enfants par femme, le pays a mis en place l'un des programmes de planification familiale les plus efficaces au monde dès 1989, faisant chuter la fécondité sous le seuil de renouvellement dès le milieu des années 2000. Inquiet du vieillissement à venir, l'État a inversé le cap depuis 2012 sans parvenir à relancer durablement les naissances. Le pays reste très majoritairement urbain, Téhéran et sa région rassemblant à elles seules près de 15 millions d'habitants.",
};
