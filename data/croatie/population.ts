import type { PopulationData } from "@/lib/types";

const SRC = "Office croate de la statistique (DZS)";
const URL = "https://podaci.dzs.hr/en/";

export const population: PopulationData = {
  total: {
    value: 3_874_993,
    unit: "habitants",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Estimation de population à mi-année 2025.",
  },
  density: {
    value: 68.5,
    unit: "hab./km²",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: 0.2,
    unit: "%",
    year: 2025,
    source: SRC,
    sourceUrl: URL,
    note: "Légère hausse (+8 760 habitants) par rapport à 2024, portée par le solde migratoire malgré un déclin naturel persistant.",
  },
  medianAge: {
    value: 45.0,
    unit: "ans",
    year: 2024,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 61.2,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=HR",
  },
  summary:
    "Après une décennie de fort déclin démographique — la population a chuté de près de 10 % entre les recensements de 2011 et 2021, sous l'effet conjugué d'une natalité basse et d'une émigration importante vers l'Europe de l'Ouest après l'adhésion à l'UE en 2013 — la population croate s'est stabilisée depuis 2023-2024, l'arrivée de travailleurs étrangers compensant désormais le déclin naturel. La population reste concentrée autour de Zagreb, qui rassemble à elle seule plus d'un cinquième des habitants du pays.",
};
