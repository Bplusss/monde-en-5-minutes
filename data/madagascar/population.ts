import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 25_674_196,
    unit: "habitants",
    year: 2018,
    source: "INSTAT (troisième recensement général, RGPH-3)",
    sourceUrl: "https://www.instat.mg/",
    note: "Dernier recensement ; la Banque mondiale estime la population à 32,7 millions d'habitants en 2025.",
  },
  density: {
    value: 53.6,
    unit: "hab./km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.POP.DNST?locations=MG",
  },
  growthRate: {
    value: 2.4,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=MG",
  },
  urbanShare: {
    value: 32.9,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=MG",
  },
  summary:
    "La population malgache est jeune — plus de la moitié des habitants ont moins de 20 ans — et majoritairement rurale. Elle double en moins de trente ans. Les Malgaches descendent à la fois de navigateurs austronésiens venus d'Asie du Sud-Est et de populations d'Afrique de l'Est ; on distingue traditionnellement 18 groupes ethniques, dont les Merina des Hautes Terres, les plus nombreux, et les Betsimisaraka de la côte est. La région d'Analamanga, autour d'Antananarivo, rassemble à elle seule environ 14 % des habitants.",
};
