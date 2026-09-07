import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 5_627_400,
    unit: "habitants",
    year: 2026,
    source: "SSB (Statistisk sentralbyrå)",
    sourceUrl: "https://www.ssb.no/en/befolkning/folketall/statistikk/befolkning",
    note: "Au 1er janvier 2026.",
  },
  density: {
    value: 15,
    unit: "hab./km²",
    year: 2026,
    source: "SSB (Statistisk sentralbyrå)",
    sourceUrl: "https://www.ssb.no/en/befolkning/folketall/statistikk/befolkning",
    note: "Une des densités les plus faibles d'Europe, population très concentrée sur le littoral sud.",
  },
  summary:
    "Avec environ 5,6 millions d'habitants pour un territoire très étendu, la Norvège est l'un des pays les moins densément peuplés d'Europe. La population se concentre très largement dans le sud-est, autour d'Oslo, et le long de la côte.",
};
