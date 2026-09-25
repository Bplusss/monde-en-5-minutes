import type { PopulationData } from "@/lib/types";

const SRC = "Statistics South Africa (Stats SA), estimations démographiques de mi-année";
const URL = "https://www.statssa.gov.za/?page_id=1854&PPN=P0302";

export const population: PopulationData = {
  total: {
    value: 63_100_000,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Estimation de mi-année 2025 ; le recensement de 2022 (affecté par un taux de sous-dénombrement estimé à environ 31 %, corrigé statistiquement) avait dénombré 62 027 503 habitants.",
  },
  density: {
    value: 51.7,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population Stats SA ÷ superficie Banque mondiale)",
    sourceUrl: URL,
  },
  growthRate: {
    value: 1.23,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  medianAge: {
    value: 28.0,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies (ONU)",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 67.4,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=ZA",
  },
  summary:
    "Avec un peu plus de 63 millions d'habitants, l'Afrique du Sud est le pays le plus industrialisé du continent mais seulement le 5ᵉ plus peuplé, loin derrière le Nigeria. Stats SA continue de suivre la répartition par « groupe de population » — catégorie héritée de l'apartheid, utilisée notamment pour le Black Economic Empowerment — avec environ 81 % de Sud-Africains noirs, 8 % de métis, 7 % de Blancs et 3 % d'Indiens et Asiatiques. La population se concentre dans le Gauteng (Johannesburg-Pretoria) et sur les côtes du Cap et du KwaZulu-Natal, l'intérieur semi-aride restant peu peuplé.",
};
