import type { PopulationData } from "@/lib/types";

const SRC = "Office statistique de la République de Serbie (RZS)";
const URL = "https://www.stat.gov.rs/en-us/oblasti/stanovnistvo/procene-stanovnistva/";

export const population: PopulationData = {
  total: {
    value: 6_549_901,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Estimation excluant le Kosovo, hors du contrôle statistique de Belgrade depuis 1999, comme toutes les données courantes de l'office serbe.",
  },
  density: {
    value: 84.5,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Calculée sur la superficie hors Kosovo (77 474 km²).",
  },
  growthRate: {
    value: -0.6,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Calculé à partir des estimations officielles (6 586 476 en 2024 puis 6 549 901 en 2025) ; solde naturel très négatif, partiellement compensé par l'immigration de retour.",
  },
  urbanShare: {
    value: 56.9,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=RS",
  },
  summary:
    "La population serbe décline depuis le début des années 1990, sous l'effet d'une natalité basse, du vieillissement et, par le passé, d'une forte émigration économique. Environ un habitant sur six vit dans l'agglomération de Belgrade, tandis que la Voïvodine conserve une mosaïque ethnique héritée des Habsbourg (Hongrois, Slovaques, Roumains, Ruthènes...).",
};
