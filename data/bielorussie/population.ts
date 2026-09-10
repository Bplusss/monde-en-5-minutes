import type { PopulationData } from "@/lib/types";

const SRC = "Belstat (Comité national des statistiques de Biélorussie)";
const URL = "https://belstat.gov.by/en/ofitsialnaya-statistika/solialnaya-sfera/naselenie-i-migratsiya/naselenie/";

export const population: PopulationData = {
  total: {
    value: 9_153_000,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 44.1,
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
    note: "Déclin naturel persistant, aggravé par une émigration politique et économique importante depuis la crise de 2020.",
  },
  medianAge: {
    value: 41.4,
    unit: "ans",
    year: 2023,
    source: "Nations unies, World Population Prospects",
    sourceUrl: "https://population.un.org/wpp/",
  },
  urbanShare: {
    value: 80.6,
    unit: "%",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=BY",
  },
  summary:
    "La population biélorusse décline depuis le début des années 1990, un mouvement aggravé depuis 2020 par l'émigration de dizaines de milliers d'opposants politiques et de professionnels qualifiés à la suite de la répression consécutive à l'élection présidentielle contestée. Minsk et son agglomération concentrent une part croissante des habitants, au détriment des campagnes de l'est et du sud du pays.",
};
