import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Đồng", code: "VND", symbol: "₫" },
  gdp: {
    value: 514_700_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=VN",
    note: "Croissance de 8,02 % en 2025 selon l'Office national de statistique, l'une des plus fortes d'Asie.",
  },
  gdpPerCapita: {
    value: 5_066,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=VN",
    note: "Moins de 500 USD en 1986 ; revenu intermédiaire de la tranche inférieure.",
  },
  unemploymentRate: {
    value: 2.22,
    unit: "%",
    year: 2025,
    source: "Office national de statistique du Vietnam (NSO), population en âge de travailler",
    sourceUrl: "https://vietnamhoinhap.vn/en/population-and-employment-remain-stable-in-2025--creating-momentum-for-2026-55314.htm",
    note: "Taux bas, mais l'emploi informel concerne 63 % des actifs et le chômage des 15-24 ans atteint 9 %.",
  },
  sectors: [
    { name: "Services", sharePercent: 42.7 },
    { name: "Industrie et construction", sharePercent: 37.6 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 11.6 },
    { name: "Impôts nets sur les produits", sharePercent: 8.0 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=VN", year: 2025 },
  indicators: [
    {
      label: "Exportations de biens",
      value: {
        value: 475,
        unit: "milliards USD",
        year: 2025,
        source: "Office national de statistique du Vietnam (via Vietnam News)",
        sourceUrl: "https://vietnamnews.vn/economy/1753208/viet-nam-runs-trade-surplus-of-over-20-billion-in-2025.html",
        note: "Commerce extérieur total de 930 milliards USD, soit environ 180 % du PIB ; dixième excédent commercial consécutif. Samsung assure à lui seul environ 13 % des exportations.",
      },
    },
    {
      label: "Deuxième producteur mondial de café",
      value: {
        value: "premier producteur mondial de robusta",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Coffee_production_in_Vietnam",
        note: "Le pays figure aussi parmi les trois premiers exportateurs mondiaux de riz.",
      },
    },
  ],
  summary:
    "Depuis le Đổi Mới (« Renouveau ») de 1986, le Vietnam est passé d'une économie planifiée exsangue à une « économie de marché à orientation socialiste » parmi les plus dynamiques du monde. Sa croissance repose sur l'industrie d'assemblage pour l'export (téléphones, électronique, textile, chaussures), portée par les investissements étrangers — sud-coréens, japonais, taïwanais et chinois — qui ont profité du déplacement des chaînes de production hors de Chine. Les États-Unis sont son premier marché, la Chine son premier fournisseur. Le pays s'est fixé l'objectif de devenir une économie à revenu élevé d'ici 2045.",
};
