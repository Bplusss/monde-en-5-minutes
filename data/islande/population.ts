import type { PopulationData } from "@/lib/types";

const SRC = "Statistics Iceland (Hagstofa Íslands)";
const URL = "https://www.statice.is/";

export const population: PopulationData = {
  total: {
    value: 394_324,
    unit: "habitants",
    year: 2026,
    source: SRC,
    sourceUrl: URL,
  },
  density: {
    value: 3.8,
    unit: "hab./km²",
    year: 2026,
    source: SRC,
    sourceUrl: URL,
    note: "L'une des plus faibles densités d'Europe ; la quasi-totalité de la population vit sur l'étroit pourtour côtier.",
  },
  growthRate: {
    value: 1.9,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=IS",
    note: "Croissance très supérieure à la moyenne européenne, portée avant tout par l'immigration de travail (tourisme, construction, pêche).",
  },
  urbanShare: {
    value: 93.9,
    unit: "%",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IS",
  },
  summary:
    "Un peu moins de deux tiers des Islandais vivent dans la seule agglomération de Reykjavík, faisant de l'Islande l'un des pays les plus urbanisés et les moins densément peuplés d'Europe à la fois. La croissance démographique récente doit beaucoup à une immigration de travail en forte hausse, notamment polonaise, attirée par le boom touristique et la pénurie de main-d'œuvre.",
};
