import type { PopulationData } from "@/lib/types";

const SRC = "ELSTAT (Autorité statistique hellénique)";
const URL = "https://www.statistics.gr/documents/20181/d8439ad7-d043-2235-f4b4-8466c3c9cd56";

export const population: PopulationData = {
  total: {
    value: 10_372_335,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Population résidente estimée au 1ᵉʳ janvier 2025.",
  },
  density: {
    value: 78.7,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: -0.03,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Déclin naturel (plus de décès que de naissances) partiellement compensé par un solde migratoire positif.",
  },
  summary:
    "La population grecque décline légèrement depuis plusieurs années, sous l'effet d'une natalité durablement basse et d'un vieillissement marqué. Elle reste très concentrée dans l'agglomération d'Athènes (environ 3,8 millions d'habitants dans la région d'Attique) et, dans une moindre mesure, autour de Thessalonique.",
};
