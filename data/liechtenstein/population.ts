import type { PopulationData } from "@/lib/types";

const SRC = "Amt für Statistik Liechtenstein";
const URL = "https://www.statistikportal.li/de/themen/bevoelkerung/bevoelkerungsstand";

export const population: PopulationData = {
  total: {
    value: 41_398,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Population totale au 31 décembre 2024, résidents non permanents inclus (512 personnes).",
  },
  density: {
    value: 257.9,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 2.2,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Hausse en partie mécanique : la définition de la population permanente a été élargie en 2024 à de nouvelles catégories de titulaires de permis de séjour résidant depuis au moins 12 mois dans le pays.",
  },
  summary:
    "Un peu plus du tiers des résidents du Liechtenstein ne possèdent pas la nationalité liechtensteinoise — Suisses, Autrichiens et Allemands en tête — et le pays vit en symbiose économique étroite avec ses deux voisins : plus de la moitié des emplois du territoire sont occupés par des travailleurs frontaliers qui rentrent chaque soir en Suisse ou en Autriche sans jamais y résider.",
};
