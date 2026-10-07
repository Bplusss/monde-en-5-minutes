import type { EconomyData } from "@/lib/types";

const CAVEAT =
  "Dernière donnée publiée par la Banque mondiale, en dollars courants au taux officiel d'avant la réforme monétaire de 2021 (1 peso pour 1 dollar), qui surestime fortement le niveau réel de l'économie cubaine.";

export const economy: EconomyData = {
  currency: { name: "Peso cubain", code: "CUP", symbol: "$" },
  gdp: {
    value: 107_352_000_000,
    unit: "USD",
    year: 2020,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=CU",
    note: CAVEAT,
  },
  gdpPerCapita: {
    value: 9_605,
    unit: "USD",
    year: 2020,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=CU",
    note: CAVEAT,
  },
  unemploymentRate: {
    value: 1.8,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=CU",
    note: "Un chiffre officiel très bas qui ne reflète ni le sous-emploi dans le secteur public, où les salaires ne suffisent plus à vivre, ni l'économie informelle.",
  },
  sectors: [
    { name: "Services", sharePercent: 73.4 },
    { name: "Industrie (dont construction)", sharePercent: 23.9 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 1.2 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2024 },
  indicators: [],
  summary:
    "L'économie cubaine reste largement planifiée et dominée par les entreprises d'État, notamment le conglomérat militaire GAESA, même si les petites entreprises privées sont autorisées depuis 2021. Le tourisme, les envois de fonds de la diaspora, les exportations de services médicaux, le nickel et le tabac sont les principales sources de devises. Le pays traverse sa pire crise depuis la « période spéciale » des années 1990 : pénuries de nourriture et de médicaments, inflation, effondrement du peso sur le marché informel et coupures d'électricité géantes, aggravées en 2026 par la perte du pétrole vénézuélien et le blocus pétrolier américain. L'embargo des États-Unis, en vigueur depuis 1962, limite par ailleurs fortement ses échanges.",
};
