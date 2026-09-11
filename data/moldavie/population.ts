import type { PopulationData } from "@/lib/types";

const SRC = "Bureau national de statistique de Moldavie (BNS)";
const URL = "https://statistica.gov.md/";

export const population: PopulationData = {
  total: {
    value: 2_423_000,
    unit: "habitants",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
    note: "Population résidente du territoire effectivement administré par Chișinău (hors Transnistrie, environ 350 000 à 400 000 habitants supplémentaires) ; aucun recensement n'a couvert l'ensemble du territoire depuis l'époque soviétique.",
  },
  density: {
    value: 71.6,
    unit: "hab./km²",
    year: 2024,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: -1.2,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=MD",
    note: "L'un des déclins démographiques les plus rapides d'Europe, porté par une émigration économique massive vers l'Union européenne et la Russie.",
  },
  urbanShare: {
    value: 42.5,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=MD",
  },
  summary:
    "La Moldavie est l'un des pays les moins urbanisés d'Europe, avec une population encore largement rurale et agricole. Elle connaît depuis son indépendance une émigration continue et de grande ampleur — une part significative de la population active vit et travaille à l'étranger, notamment en Italie, en Russie et en Roumanie, ce qui pèse durablement sur sa démographie.",
};
