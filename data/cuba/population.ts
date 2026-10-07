import type { PopulationData } from "@/lib/types";

const ONEI = "ONEI (Anuario Demográfico de Cuba 2024)";
const ONEI_URL = "https://www.onei.gob.cu/";

export const population: PopulationData = {
  total: {
    value: 9_748_007,
    unit: "habitants",
    year: 2024,
    source: ONEI,
    sourceUrl: ONEI_URL,
    note: "Population effective au 31 décembre 2024, qui exclut les Cubains partis vivre à l'étranger ; elle était de 11,2 millions en 2020.",
  },
  density: {
    value: 88.7,
    unit: "hab./km²",
    year: 2024,
    source: ONEI,
    sourceUrl: ONEI_URL,
  },
  growthRate: {
    value: -3.1,
    unit: "%",
    year: 2024,
    source: ONEI,
    sourceUrl: ONEI_URL,
    note: "Variation de la population effective au cours de 2024, due surtout à l'émigration.",
  },
  urbanShare: {
    value: 75.1,
    unit: "%",
    year: 2024,
    source: ONEI,
    sourceUrl: ONEI_URL,
  },
  summary:
    "Cuba connaît un effondrement démographique sans équivalent hors temps de guerre : selon l'office statistique national, la population résidente est passée de 11,2 millions d'habitants en 2020 à 9,75 millions fin 2024, sous l'effet d'un exode massif, surtout de jeunes adultes partis vers les États-Unis, l'Espagne ou l'Amérique latine. La natalité est l'une des plus basses d'Amérique, et 17 % des habitants ont 65 ans ou plus selon la Banque mondiale. La population est issue du métissage entre descendants d'Espagnols et d'esclaves africains.",
};
