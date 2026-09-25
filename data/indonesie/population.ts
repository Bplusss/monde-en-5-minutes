import type { PopulationData } from "@/lib/types";

const BPS = "Badan Pusat Statistik (BPS, Institut national de statistique d'Indonésie), projection de population de mi-année";
const BPS_URL = "https://www.bps.go.id/en/statistics-table/2/MTk3NSMy/mid-year-population--thousand-people-.html";

export const population: PopulationData = {
  total: {
    value: 284_440_000,
    unit: "habitants",
    year: 2025,
    source: BPS,
    sourceUrl: BPS_URL,
    note: "Projection de mi-année 2025 ; le recensement de 2020 avait dénombré 270 203 917 habitants. 4ᵉ pays le plus peuplé du monde derrière l'Inde, la Chine et les États-Unis.",
  },
  density: {
    value: 149.3,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population BPS ÷ superficie)",
    sourceUrl: BPS_URL,
    note: "Moyenne peu représentative : Java, avec environ 7 % du territoire, concentre plus de la moitié de la population.",
  },
  growthRate: {
    value: 0.82,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=ID",
  },
  medianAge: {
    value: 30.8,
    unit: "ans",
    year: 2023,
    source: "Division de la population des Nations unies (ONU), World Population Prospects (révision 2024)",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 59.2,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=ID",
  },
  summary:
    "Avec environ 284 millions d'habitants, l'Indonésie est le 4ᵉ pays le plus peuplé du monde et, de loin, le pays à majorité musulmane le plus peuplé de la planète. La population est très mal répartie : Java, avec environ 7 % de la superficie, abrite plus de la moitié des Indonésiens, tandis que la Papouasie, le Kalimantan ou les Moluques restent peu peuplés. Le pays est aussi l'un des plus divers ethniquement au monde, avec plus de 1 300 groupes ethniques (Javanais majoritaires) et plus de 700 langues vivantes.",
};
