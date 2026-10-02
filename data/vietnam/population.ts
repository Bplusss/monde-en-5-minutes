import type { PopulationData } from "@/lib/types";

const NSO = "Office national de statistique du Vietnam (NSO, ex-GSO)";
const NSO_URL = "https://vietnamhoinhap.vn/en/population-and-employment-remain-stable-in-2025--creating-momentum-for-2026-55314.htm";

export const population: PopulationData = {
  total: {
    value: 102_300_000,
    unit: "habitants",
    year: 2025,
    source: NSO,
    sourceUrl: NSO_URL,
    note: "Population moyenne 2025 ; le recensement de 2019 avait dénombré 96,2 millions d'habitants. 16ᵉ pays le plus peuplé du monde.",
  },
  density: {
    value: 308.7,
    unit: "hab./km²",
    year: 2025,
    source: "Calculé (population NSO ÷ superficie)",
    sourceUrl: NSO_URL,
    note: "Très contrastée : plus de 1 500 hab./km² dans le delta du fleuve Rouge, moins de 100 dans les provinces montagneuses du nord-ouest.",
  },
  growthRate: {
    value: 0.6,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.POP.GROW?locations=VN",
  },
  urbanShare: {
    value: 38.8,
    unit: "%",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=VN",
  },
  summary:
    "Avec environ 102 millions d'habitants, le Vietnam est le troisième pays le plus peuplé d'Asie du Sud-Est. La population reste majoritairement rurale et se concentre dans les deux deltas et autour d'Hô Chi Minh-Ville et de Hanoï. L'État reconnaît 54 groupes ethniques ; les Kinh (Viet) en forment 85 %. La fécondité (1,93 enfant par femme en 2025) est passée sous le seuil de renouvellement, et le pays vieillit rapidement ; le déséquilibre des naissances (110 garçons pour 100 filles) reste marqué.",
};
