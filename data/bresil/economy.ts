import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Real brésilien", code: "BRL", symbol: "R$" },
  gdp: {
    value: 2_642_000_000_000,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/BRA",
    note: "Dollars courants ; dixième économie mondiale en valeur nominale, et parmi les huit premières en parité de pouvoir d'achat.",
  },
  gdpPerCapita: {
    value: 12_313,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/BRA",
    note: "Dollars courants ; masque de fortes disparités régionales entre le Sud-Est industrialisé et le Nord-Nordeste.",
  },
  unemploymentRate: {
    value: 5.3,
    unit: "%",
    year: 2026,
    source: "IBGE (enquête PNAD Contínua)",
    sourceUrl: "https://www.ibge.gov.br/en/statistics/social/labor.html",
    note: "Au plus bas historique depuis la création de la série statistique en 2012.",
  },
  sectors: [
    { name: "Services", sharePercent: 58.9 },
    { name: "Industrie", sharePercent: 22.3 },
    { name: "Agriculture", sharePercent: 6.2 },
  ],
  sectorsSource: { source: "IBGE (Comptes nationaux)", year: 2023 },
  indicators: [
    {
      label: "Premier exportateur mondial de soja",
      value: { value: "1er rang mondial", source: "USDA", sourceUrl: "https://www.fas.usda.gov/data/production/commodity/2222000" },
    },
    {
      label: "Premier producteur et exportateur mondial de café",
      value: { value: "1er rang mondial", source: "Organisation internationale du café (OIC)", sourceUrl: "https://www.ico.org/" },
    },
  ],
  summary:
    "Dixième économie mondiale et première d'Amérique latine, le Brésil combine une agriculture d'exportation puissante (premier exportateur mondial de soja et de café, grand exportateur de viande bovine et de sucre), une base industrielle diversifiée (aéronautique avec Embraer, automobile, pétrochimie, extraction minière avec Vale) et un secteur des services largement majoritaire dans le PIB. L'économie reste marquée par de fortes inégalités de revenu parmi les plus élevées au monde ainsi que par des écarts régionaux prononcés entre un Sud-Est et un Sud industrialisés et un Nord et Nordeste plus pauvres, malgré des programmes de transferts sociaux (comme le Bolsa Família) qui ont contribué à réduire la pauvreté depuis les années 2000.",
};
