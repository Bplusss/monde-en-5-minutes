import type { PopulationData } from "@/lib/types";

export const population: PopulationData = {
  total: {
    value: 764,
    unit: "habitants",
    year: 2023,
    source: "Saint-Siège / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Vatican_City",
    note: "Population résidente à l'intérieur des murs ; la citoyenneté vaticane, liée à la fonction (clergé, garde suisse, diplomates), est accordée à environ 800 personnes au total, dont certaines résident à l'étranger dans les nonciatures.",
  },
  density: {
    value: 1_559,
    unit: "hab./km²",
    year: 2023,
    source: "Calculé (population résidente ÷ superficie)",
  },
  urbanShare: {
    value: 100,
    unit: "%",
    year: 2023,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Vatican_City",
    note: "Territoire entièrement urbain par nature.",
  },
  summary:
    "La Cité du Vatican est, et de très loin, l'État le moins peuplé du monde. Sa population, presque exclusivement masculine et religieuse (cardinaux, prêtres, religieuses, gardes suisses), ne se renouvelle pas par naissance — aucune naissance n'y est enregistrée — mais par nomination et affectation, ce qui rend les indicateurs démographiques habituels (natalité, âge médian, croissance naturelle) sans objet.",
};
