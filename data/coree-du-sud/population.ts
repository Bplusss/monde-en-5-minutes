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
    note: "Population résidente totale, en léger recul depuis le pic de 2020 (environ 51,84 millions) — la Corée du Sud est entrée dans un déclin démographique structurel.",
  },
  density: {
    value: 516,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (KOSIS ÷ superficie CIA World Factbook)",
    sourceUrl: KOSIS_URL,
    note: "L'une des densités les plus élevées au monde parmi les grands pays, avec une concentration extrême dans la région métropolitaine de Séoul.",
  },
  growthRate: {
    value: -0.13,
    unit: "%",
    year: 2025,
    source: KOSIS,
    sourceUrl: KOSIS_URL,
    note: "Population en recul depuis 2020, sous l'effet direct de l'indice de fécondité le plus bas au monde ; le pays enregistre par ailleurs davantage de décès que de naissances chaque année depuis 2020.",
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
    note: "Plus de la moitié de la population totale du pays vit dans la seule région métropolitaine de Séoul (Séoul, Incheon, province du Gyeonggi), l'une des plus fortes concentrations urbaines au monde rapportée à la taille du pays.",
  },
  summary:
    "La Corée du Sud affiche depuis le milieu des années 2010 l'indice de fécondité le plus bas jamais enregistré dans le monde moderne — 0,75 enfant par femme en 2024, très légèrement remonté après un plancher de 0,72 en 2023, contre un seuil de renouvellement des générations de 2,1. Coût du logement et de l'éducation des enfants, précarité de l'emploi des jeunes, pression sociale extrême autour de la réussite scolaire et inégalités persistantes entre hommes et femmes dans la répartition des tâches domestiques sont les explications les plus souvent avancées à ce phénomène, qui a fait basculer le pays dans un déclin démographique structurel depuis 2020 malgré des mesures natalistes massives (aides financières, congés parentaux étendus) engagées depuis le milieu des années 2000 sans résultat probant à ce jour. Combiné à l'un des vieillissements les plus rapides du monde développé, ce recul démographique fait peser une menace directe sur le financement des retraites, le système de santé et, à terme, la taille de la population active.",
};
