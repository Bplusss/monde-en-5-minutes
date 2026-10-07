import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Dinar jordanien", code: "JOD", symbol: "JD" },
  gdp: {
    value: 61_610_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=JO",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 5_348,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=JO",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 16.5,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=JO",
    note: "L'un des taux les plus élevés de la région, en particulier chez les jeunes et les femmes, dont à peine une sur six travaille.",
  },
  sectors: [
    { name: "Services", sharePercent: 56.8 },
    { name: "Industrie (dont mines et construction)", sharePercent: 27.4 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 5.6 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [],
  summary:
    "Pauvre en eau et en pétrole, la Jordanie vit surtout des services : tourisme, banques, santé et éducation, qui attirent des patients et des étudiants de toute la région. Ses principales ressources naturelles sont les phosphates et la potasse extraite de la mer Morte, et elle exporte aussi médicaments, engrais et vêtements. Les envois de fonds des Jordaniens travaillant dans le Golfe et l'aide étrangère, notamment américaine, sont vitaux pour l'équilibre des comptes. Les crises régionales — guerres en Irak et en Syrie, conflit à Gaza — pèsent régulièrement sur le tourisme et les échanges, et la dette publique est élevée.",
};
