import type { PopulationData } from "@/lib/types";

const SRC = "Bureau des statistiques du Japon";
const URL = "https://www.stat.go.jp/english/";

export const population: PopulationData = {
  total: {
    value: 122_680_000,
    unit: "habitants",
    year: 2026,
    source: SRC,
    sourceUrl: URL,
    note: "Estimation mensuelle ; onzième population mondiale, en recul continu depuis un pic d'environ 128 millions d'habitants atteint en 2008-2010.",
  },
  density: {
    value: 338,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: -0.44,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Déclin naturel continu depuis 2010, faiblement compensé par l'immigration de travail.",
  },
  medianAge: {
    value: 49.9,
    unit: "ans",
    year: 2024,
    source: "Wikipedia (démographie du Japon)",
    sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Japan",
    note: "Deuxième âge médian le plus élevé au monde après Monaco.",
  },
  urbanShare: {
    value: 90.7,
    unit: "%",
    year: 2010,
    source: SRC,
    sourceUrl: URL,
    note: "Dernier recensement décennal détaillant la répartition urbain/rural ; la population reste depuis très majoritairement concentrée dans les grandes agglomérations côtières.",
  },
  summary:
    "Le Japon connaît depuis le milieu des années 2000 un déclin démographique continu, conséquence d'une natalité durablement basse et d'un vieillissement rapide de la population : plus d'un habitant sur trois a aujourd'hui plus de 65 ans. La population reste concentrée sur l'étroite bande littorale et les plaines de Honshū, en particulier autour de la mégalopole de Tokyo, l'une des agglomérations les plus peuplées au monde avec près de 37 millions d'habitants, tandis que de vastes régions rurales et montagneuses se dépeuplent.",
};
