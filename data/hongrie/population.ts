import type { PopulationData } from "@/lib/types";

const SRC = "Office central hongrois de la statistique (KSH)";
const URL = "https://www.ksh.hu/en/population";

export const population: PopulationData = {
  total: {
    value: 9_584_627,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 103.0,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: -0.3,
    unit: "%",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Déclin naturel persistant, partiellement compensé par le solde migratoire.",
  },
  medianAge: {
    value: 43.8,
    unit: "ans",
    year: 2023,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 72.3,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=HU",
  },
  summary:
    "La population hongroise décline depuis les années 1980, sous l'effet d'une natalité durablement basse malgré des politiques familiales très volontaristes engagées depuis 2010. Budapest et son agglomération concentrent près d'un habitant sur cinq, tandis que de nombreuses zones rurales de l'est du pays continuent de se dépeupler.",
};
