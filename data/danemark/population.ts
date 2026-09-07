import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 6_025_603,
    unit: "habitants",
    year: 2026,
    source: "Danmarks Statistik",
    sourceUrl: "https://www.dst.dk/da/Statistik/emner/borgere/befolkning/befolkningstal",
    note: "Population au 1ᵉʳ janvier 2026, Danemark métropolitain (hors Groenland et îles Féroé).",
  },
  density: {
    value: 140,
    unit: "hab./km²",
    year: 2026,
    source: "Danmarks Statistik",
    sourceUrl: "https://www.dst.dk/da/Statistik/emner/borgere/befolkning/befolkningstal",
    note: "Estimation arrondie (population ÷ superficie).",
  },
  urbanShare: {
    value: 42,
    unit: "%",
    year: 2025,
    source: "Danmarks Statistik (byopgørelsen)",
    sourceUrl: "https://www.dst.dk/nyt/49099",
    note: "Part de la population vivant dans les aires urbaines de plus de 100 000 habitants (Copenhague, Aarhus, Odense, Aalborg).",
  },
  summary:
    "La population danoise est concentrée sur Sjælland (autour de Copenhague) et dans les principales villes du Jutland (Aarhus, Aalborg) et de Fionie (Odense). La part de la population vivant dans les grandes aires urbaines progresse régulièrement depuis dix ans.",
};
