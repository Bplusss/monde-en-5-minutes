import type { PopulationData } from "@/lib/types";

const WB = "Banque mondiale";

export const population: PopulationData = {
  total: {
    value: 91_567_738,
    unit: "habitants",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=IR",
    note: "L'ONU (Perspectives de la population mondiale) projette environ 92,4 millions d'habitants pour 2025 ; l'Iran est le 2ᵉ pays le plus peuplé du Moyen-Orient après l'Égypte.",
  },
  density: {
    value: 55.6,
    unit: "hab./km²",
    year: 2024,
    source: "Calculé (population Banque mondiale ÷ superficie totale)",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=IR",
    note: "Moyenne trompeuse : la population se concentre sur le pourtour du plateau central et la bande caspienne, tandis que les immenses déserts du centre (Dasht-e Kavir, Dasht-e Lut) sont quasiment inhabités.",
  },
  growthRate: {
    value: 0.7,
    unit: "%",
    year: 2023,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=IR",
    note: "Croissance modeste et en net ralentissement depuis le pic démographique des années 1980 (plus de 3 % par an), sous l'effet d'une politique nataliste très volontariste dans les années 2000 puis 2010 destinée à contrer le vieillissement de la population.",
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
    "L'Iran a connu un basculement démographique spectaculaire en une génération : après une politique nataliste des années 1980 (« plus d'enfants pour l'armée de la révolution ») qui a porté la fécondité à plus de 6 enfants par femme, le pays a mis en place l'un des programmes de planification familiale les plus efficaces au monde à partir de 1989, faisant chuter la fécondité en dessous du seuil de renouvellement dès le milieu des années 2000. Inquiet du vieillissement à venir, l'État a inversé le cap depuis 2012 en restreignant l'accès à la contraception et en subventionnant la natalité, sans parvenir à relancer durablement les naissances. Le pays reste très majoritairement urbain, la capitale Téhéran et sa région rassemblant à elles seules près de 15 millions d'habitants, et fait face, comme la plupart des sociétés à transition démographique rapide, à un vieillissement désormais inévitable de sa pyramide des âges.",
};
