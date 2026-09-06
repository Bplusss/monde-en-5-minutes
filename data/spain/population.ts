import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 49_128_297,
    unit: "habitants",
    year: 2025,
    source: "INE",
    sourceUrl: "https://www.ine.es/",
    note: "Estimation au 1ᵉʳ janvier 2025.",
  },
  density: {
    value: 98,
    unit: "hab./km²",
    year: 2025,
    source: "INE",
    sourceUrl: "https://www.ine.es/",
  },
  summary:
    "La population espagnole croît depuis plusieurs années, portée par un solde migratoire positif. Elle se concentre sur le pourtour côtier et autour de Madrid, tandis que l'intérieur de la Meseta reste peu peuplé — un contraste souvent résumé par l'expression « Espagne vide ».",
};
