import type { PopulationData } from "@/lib/types";

const CAPMAS = "Central Agency for Public Mobilization and Statistics (CAPMAS), compteur de population";
const CAPMAS_URL = "https://english.ahram.org.eg/NewsContentP/1/567589/Egypt/Egypt-domestic-population-reaches--million-CAPMAS.aspx";

export const population: PopulationData = {
  total: {
    value: 109_000_000,
    unit: "habitants",
    year: 2026,
    source: CAPMAS,
    sourceUrl: CAPMAS_URL,
    note: "Population « intérieure » (résidant effectivement sur le territoire égyptien), franchie le 9 mai 2026 selon le compteur de population de l'agence nationale de statistique CAPMAS ; le dernier recensement complet, en 2017, avait dénombré environ 94,8 millions d'habitants. En intégrant la diaspora égyptienne à l'étranger (plus de 11 millions de personnes, essentiellement dans les pays du Golfe), l'estimation de population totale mi-2026 des Nations unies atteint environ 120 millions.",
  },
  density: {
    value: 107.9,
    unit: "hab./km²",
    year: 2026,
    source: "Calculé (population CAPMAS ÷ superficie)",
    sourceUrl: CAPMAS_URL,
    note: "Moyenne nationale trompeuse : plus de 95 % des Égyptiens vivent sur les 5 à 6 % du territoire qu'occupent la vallée et le delta du Nil, où la densité réelle dépasse largement 1 000 hab./km² (jusqu'à plus de 3 000 hab./km² dans certains quartiers du Caire), tandis que les déserts Occidental et Oriental restent quasiment vides.",
  },
  growthRate: {
    value: 1.73,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=EG",
  },
  medianAge: {
    value: 24.6,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies (ONU), World Population Prospects (révision 2024)",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 43.26,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=EG",
  },
  summary:
    "Avec près de 109 millions d'habitants sur son sol (et environ 120 millions en comptant sa diaspora), l'Égypte est le pays le plus peuplé du monde arabe et le troisième d'Afrique après le Nigeria et l'Éthiopie. Sa population, jeune (âge médian d'environ 25 ans) et en croissance rapide (elle a plus que doublé depuis les années 1980), est concentrée de façon extrême sur l'étroite bande fertile du Nil et de son delta, qui ne représente qu'environ 5 à 6 % du territoire national mais où vivent plus de 95 % des Égyptiens, faisant du Caire et de sa région l'une des agglomérations les plus densément peuplées de la planète. Cette pression démographique sur des ressources en eau et en terres arables déjà contraintes — accentuée par les incertitudes liées au grand barrage éthiopien de la Renaissance (GERD) sur le Nil bleu — constitue l'un des grands défis structurels du pays, aux côtés d'une émigration de travail importante, notamment vers les monarchies du Golfe et la Libye, qui fait des transferts de fonds des Égyptiens de l'étranger une ressource économique majeure.",
};
