import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";
const WB_URL = "https://data.worldbank.org/country/korea-rep";

export const economy: EconomyData = {
  currency: { name: "Won sud-coréen", code: "KRW", symbol: "₩" },
  gdp: {
    value: 1_872_375_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: WB_URL,
    note: "12ᵉ-13ᵉ PIB mondial.",
  },
  gdpPerCapita: {
    value: 36_230,
    unit: "USD",
    year: 2025,
    source: "Calculé (Banque mondiale, PIB ÷ population KOSIS)",
    sourceUrl: WB_URL,
    note: "Comparable au Japon ou à l'Europe du Sud.",
  },
  unemploymentRate: {
    value: 2.8,
    unit: "%",
    year: 2024,
    source: "Bureau national de statistique de Corée (KOSIS)",
    sourceUrl: "https://kosis.kr/eng/",
    note: "Un des taux les plus bas des pays développés.",
  },
  sectors: [
    { name: "Services", sharePercent: 58.3 },
    { name: "Industrie", sharePercent: 32.0 },
    { name: "Agriculture", sharePercent: 1.8 },
  ],
  sectorsSource: { source: WB, sourceUrl: WB_URL, year: 2023 },
  indicators: [
    {
      label: "Part des semi-conducteurs dans les exportations",
      value: {
        value: 25,
        unit: "%",
        year: 2024,
        source: "Ministère du Commerce, de l'Industrie et de l'Énergie de Corée",
        sourceUrl: "https://en.sedaily.com/finance/2026/01/01/semiconductors-account-for-25-percent-of-koreas-2024",
        note: "Samsung Electronics et SK Hynix contrôlent plus des deux tiers du marché mondial des puces mémoire.",
      },
    },
  ],
  summary:
    "Entre les années 1960 et 1990, la Corée du Sud connaît l'une des transformations économiques les plus rapides de l'histoire moderne — le « miracle du fleuve Han » —, passant du rang de pays parmi les plus pauvres d'Asie à celui de puissance industrielle, portée par les chaebols (Samsung, Hyundai, SK, LG) qui dominent encore l'électronique et l'automobile, malgré un endettement des ménages parmi les plus élevés au monde.",
};
