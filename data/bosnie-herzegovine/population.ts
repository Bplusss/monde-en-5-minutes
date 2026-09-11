import type { PopulationData } from "@/lib/types";

const SRC = "Agence de statistique de Bosnie-Herzégovine (BHAS)";
const URL = "https://bhas.gov.ba/";

export const population: PopulationData = {
  total: {
    value: 3_200_000,
    unit: "habitants",
    year: 2023,
    source: SRC,
    sourceUrl: URL,
    note: "Estimation ; aucun recensement complet n'a eu lieu depuis 2013, et une émigration économique massive rend le chiffre réel incertain.",
  },
  density: {
    value: 62.5,
    unit: "hab./km²",
    year: 2023,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: -0.9,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=BA",
    note: "Déclin démographique continu, l'un des plus marqués d'Europe, dû à une émigration économique de grande ampleur vers l'Europe occidentale.",
  },
  urbanShare: {
    value: 51.5,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=BA",
  },
  summary:
    "La population se répartit en trois peuples constitutifs reconnus par la Constitution — Bosniaques (environ la moitié), Serbes (environ un tiers) et Croates (moins d'un cinquième) — dont la répartition géographique a été profondément bouleversée par le nettoyage ethnique et les déplacements de population de la guerre de 1992-1995. Le pays connaît depuis une émigration continue et massive de sa jeunesse, l'un des taux les plus élevés d'Europe.",
};
