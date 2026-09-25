import type { PopulationData } from "@/lib/types";

const KOSIS = "Statistiques Corée (KOSIS)";
const KOSIS_URL = "https://kosis.kr/eng/";

export const population: PopulationData = {
  total: {
    value: 51_685_000,
    unit: "habitants",
    year: 2025,
    source: KOSIS,
    sourceUrl: KOSIS_URL,
    note: "En léger recul depuis le pic de 2020 — déclin démographique structurel.",
  },
  density: {
    value: 516,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (KOSIS ÷ superficie CIA World Factbook)",
    sourceUrl: KOSIS_URL,
    note: "L'une des densités les plus élevées au monde parmi les grands pays.",
  },
  growthRate: {
    value: -0.13,
    unit: "%",
    year: 2025,
    source: KOSIS,
    sourceUrl: KOSIS_URL,
    note: "Davantage de décès que de naissances chaque année depuis 2020.",
  },
  medianAge: {
    value: 45.6,
    unit: "ans",
    year: 2024,
    source: "ONU (Perspectives de la population mondiale)",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 81.4,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=KR",
    note: "Plus de la moitié vit dans la seule région métropolitaine de Séoul.",
  },
  summary:
    "La Corée du Sud affiche l'indice de fécondité le plus bas jamais enregistré dans le monde moderne — 0,75 enfant par femme en 2024, contre un seuil de renouvellement de 2,1 — malgré des mesures natalistes massives sans résultat probant. Combiné à un vieillissement très rapide, ce déclin démographique menace le financement des retraites et la population active.",
};
