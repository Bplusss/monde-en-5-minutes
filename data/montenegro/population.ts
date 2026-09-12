import type { PopulationData } from "@/lib/types";

const SRC = "Zavod za statistiku Crne Gore (MONSTAT)";
const URL = "https://www.monstat.org/";

export const population: PopulationData = {
  total: {
    value: 623_633,
    unit: "habitants",
    year: 2023,
    source: SRC,
    sourceUrl: "https://www.monstat.org/eng/novosti.php?id=4012",
    note: "Recensement de la population, des ménages et des logements de 2023, le premier depuis 2011.",
  },
  density: {
    value: 45.2,
    unit: "hab./km²",
    year: 2023,
    source: SRC,
    sourceUrl: URL,
    note: "Calculée à partir de la population et de la superficie du pays.",
  },
  growthRate: {
    value: 0.05,
    unit: "%",
    year: 2023,
    source: SRC,
    sourceUrl: "https://www.monstat.org/eng/novosti.php?id=4012",
    note: "Taux de croissance intercensitaire quasi nul (2011-2023), résultat d'un solde naturel légèrement positif compensé par l'émigration.",
  },
  medianAge: {
    value: 39.7,
    unit: "ans",
    year: 2023,
    source: SRC,
    sourceUrl: "https://www.monstat.org/eng/novosti.php?id=4012",
    note: "Âge moyen de la population résidente au recensement de 2023 (donnée publiée comme moyenne, non comme médiane stricte).",
  },
  summary:
    "Avec un peu plus de 620 000 habitants, le Monténégro est l'un des pays les moins peuplés d'Europe. Sa population est très concentrée autour de Podgorica, qui rassemble à elle seule près de 29 % des habitants du pays, et le long de la côte adriatique, où l'afflux touristique estival multiplie ponctuellement la population de villes comme Budva ou Kotor. Le recensement de 2023 confirme un léger vieillissement et une identité ethnique partagée, la population se répartissant entre plusieurs groupes nationaux, au premier rang desquels Monténégrins et Serbes.",
};
