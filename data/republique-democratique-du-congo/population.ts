import type { PopulationData } from "@/lib/types";

const POP_URL = "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CD";

export const population: PopulationData = {
  total: {
    value: 112_832_473,
    unit: "habitants",
    year: 2025,
    source: "Banque mondiale (d'après les World Population Prospects de l'ONU)",
    sourceUrl: POP_URL,
    note: "Estimation et non résultat de recensement : le dernier recensement général date de 1984 (environ 30,7 millions d'habitants). Les chiffres actuels sont des projections de la Division de la population de l'ONU, reprises par la Banque mondiale, avec une marge d'incertitude importante.",
  },
  density: {
    value: 48.1,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (estimation Banque mondiale ÷ superficie)",
    sourceUrl: POP_URL,
    note: "Moyenne trompeuse : la cuvette forestière centrale est peu peuplée, contrairement à Kinshasa, au Kivu ou au Katanga.",
  },
  growthRate: {
    value: 3.2,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=CD",
    note: "L'un des taux les plus élevés au monde, avec environ 6 enfants par femme (2024).",
  },
  urbanShare: {
    value: 45.1,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=CD",
  },
  summary:
    "Avec environ 113 millions d'habitants selon les estimations de l'ONU, la RDC est le pays le plus peuplé d'Afrique centrale, le quatrième du continent et le plus peuplé des pays ayant le français pour langue officielle. Ce chiffre reste approximatif, faute de recensement depuis 1984. La population est très jeune et croît d'environ 3 % par an. Kinshasa regroupe à elle seule plus d'un habitant sur dix. Le pays compte plus de 200 groupes ethniques.",
};
