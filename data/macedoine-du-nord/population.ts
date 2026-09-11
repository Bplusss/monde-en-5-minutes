import type { PopulationData } from "@/lib/types";

const SRC = "Office national de la statistique de Macédoine du Nord";
const URL = "https://www.stat.gov.mk/";

export const population: PopulationData = {
  total: {
    value: 1_836_713,
    unit: "habitants",
    year: 2021,
    source: SRC,
    sourceUrl: URL,
    note: "Recensement de 2021, le premier organisé depuis 2002 ; sa méthodologie et ses résultats ont fait l'objet de débats politiques internes.",
  },
  density: {
    value: 71.4,
    unit: "hab./km²",
    year: 2021,
    source: SRC,
    sourceUrl: URL,
  },
  growthRate: {
    value: -0.6,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=MK",
    note: "Population en léger recul, portée par une émigration économique de longue date vers l'Europe occidentale.",
  },
  urbanShare: {
    value: 61.0,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=MK",
  },
  summary:
    "Environ un quart de la population du pays réside dans la seule agglomération de Skopje. La société macédonienne est marquée par une diversité ethnique notable, avec une importante minorité albanaise concentrée dans l'ouest et le nord-ouest du pays, et par une émigration économique de longue date qui pèse sur la démographie nationale.",
};
