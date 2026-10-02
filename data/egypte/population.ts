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
    note: "Population résidant sur le territoire, franchie le 9 mai 2026 selon le compteur CAPMAS (94,8 millions au recensement de 2017). Avec la diaspora (plus de 11 millions, surtout dans le Golfe), l'ONU estime la population totale mi-2026 à environ 120 millions.",
  },
  density: {
    value: 107.9,
    unit: "hab./km²",
    year: 2026,
    source: "Calculé (population CAPMAS ÷ superficie)",
    sourceUrl: CAPMAS_URL,
    note: "Moyenne trompeuse : dans la vallée et le delta du Nil, la densité réelle dépasse 1 000 hab./km².",
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
    "Pays le plus peuplé du monde arabe et troisième d'Afrique, l'Égypte a une population jeune (âge médian d'environ 25 ans) et en croissance rapide. Cette pression démographique sur des ressources en eau et en terres arables limitées est l'un des grands défis du pays, avec une forte émigration de travail vers le Golfe.",
};
