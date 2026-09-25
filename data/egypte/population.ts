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
    note: "Moyenne nationale trompeuse : plus de 95 % des Égyptiens vivent sur les 5 à 6 % du territoire qu'occupent la vallée et le delta du Nil, où la densité réelle dépasse 1 000 hab./km², tandis que les déserts restent quasiment vides.",
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
    "Avec près de 109 millions d'habitants sur son sol (et environ 120 millions en comptant sa diaspora), l'Égypte est le pays le plus peuplé du monde arabe et le troisième d'Afrique. Sa population, jeune (âge médian d'environ 25 ans) et en croissance rapide, est concentrée de façon extrême sur l'étroite bande fertile du Nil et de son delta, où vivent plus de 95 % des Égyptiens sur 5 à 6 % du territoire. Cette pression démographique sur des ressources en eau et en terres arables déjà contraintes constitue l'un des grands défis structurels du pays, aux côtés d'une émigration de travail importante, notamment vers le Golfe, qui fait des transferts de fonds une ressource économique majeure.",
};
