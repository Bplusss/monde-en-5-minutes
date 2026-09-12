import type { PopulationData } from "@/lib/types";

const SRC = "Ufficio Informatica, Tecnologia, Dati e Statistica";
const URL = "https://www.statistica.sm/";

export const population: PopulationData = {
  total: {
    value: 34_132,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Population résidente au 30 septembre 2025.",
  },
  density: {
    value: 557.8,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 0.4,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Croissance portée par l'immigration, en particulier italienne, plutôt que par le solde naturel.",
  },
  summary:
    "Avec un peu plus de 34 000 habitants, Saint-Marin est l'un des États les plus peuplés parmi les micro-États européens tout en restant l'un des moins peuplés du monde. La diaspora sammarinaise, notamment en Amérique du Nord et du Sud, serait plus nombreuse que la population résidente elle-même. Le pays affiche par ailleurs l'un des taux de motorisation les plus élevés au monde, avec près de 1,6 véhicule par habitant.",
};
