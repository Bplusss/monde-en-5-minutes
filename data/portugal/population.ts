import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 11_424_031,
    unit: "habitants",
    year: 2025,
    source: "INE",
    sourceUrl: "https://www.ine.pt/",
    note: "Population résidente au 31 décembre 2025.",
  },
  density: {
    value: 117,
    unit: "hab./km²",
    year: 2025,
    source: "INE",
    sourceUrl: "https://www.ine.pt/",
  },
  summary:
    "La population portugaise se concentre sur le littoral, en particulier autour des aires métropolitaines de Lisbonne et Porto, tandis que l'intérieur rural continue de se dépeupler. La croissance récente est portée par l'immigration, qui compense un solde naturel négatif.",
};
