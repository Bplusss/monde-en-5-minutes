import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 68_600_000,
    unit: "habitants",
    year: 2025,
    source: "INSEE",
    sourceUrl: "https://www.insee.fr/fr/statistiques/8721209",
    note: "Estimation au 1ᵉʳ janvier 2025 ; France entière (métropole et cinq départements d'outre-mer).",
  },
  density: {
    value: 120,
    unit: "hab./km²",
    year: 2022,
    source: "INSEE",
    sourceUrl: "https://www.insee.fr/fr/statistiques/1372998?sommaire=1373022",
    note: "France métropolitaine.",
  },
  growthRate: {
    value: 0.25,
    unit: "%",
    year: 2024,
    source: "INSEE",
    sourceUrl: "https://www.insee.fr/fr/statistiques/8721209",
    note: "Variation annuelle de la population, portée par le solde migratoire et un solde naturel proche de l'équilibre.",
  },
  summary:
    "La population française croît modérément, portée principalement par le solde migratoire. Elle se concentre autour de grandes aires urbaines, en premier lieu l'Île-de-France, tandis que de larges espaces ruraux restent peu denses.",
};
