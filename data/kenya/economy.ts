import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Shilling kényan", code: "KES", symbol: "KSh" },
  gdp: {
    value: 135_941_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=KE",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 2_363,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=KE",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 5.5,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=KE",
    note: "Ce taux masque un très fort sous-emploi : l'essentiel des actifs travaille dans le secteur informel (« jua kali »).",
  },
  sectors: [
    { name: "Services", sharePercent: 55.1 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 23.2 },
    { name: "Industrie (dont construction)", sharePercent: 16.3 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [],
  summary:
    "L'une des deux premières économies d'Afrique de l'Est avec l'Éthiopie, le Kenya est un pôle régional pour la finance, les transports et le numérique, surnommé la « Silicon Savannah » depuis le succès du paiement mobile M-Pesa. L'agriculture emploie encore une grande partie de la population et fournit les principales exportations : thé, dont le pays est le premier exportateur mondial, fleurs coupées, café et fruits. Le tourisme de safari et les transferts de la diaspora sont d'autres sources majeures de devises. La croissance est solide, mais le pays est confronté à une dette publique élevée, qui a conduit le gouvernement à des hausses d'impôts très contestées en 2024.",
};
