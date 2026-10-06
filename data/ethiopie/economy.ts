import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Birr", code: "ETB", symbol: "Br" },
  gdp: {
    value: 126_359_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=ET",
    note: "Dollars courants ; le montant a baissé en dollars après le flottement du birr en juillet 2024, qui a fortement dévalué la monnaie.",
  },
  gdpPerCapita: {
    value: 933,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=ET",
    note: "Dollars courants ; l'un des plus bas du monde.",
  },
  unemploymentRate: {
    value: 3.3,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=ET",
    note: "Taux peu significatif dans une économie dominée par l'agriculture familiale et le sous-emploi.",
  },
  sectors: [
    { name: "Services", sharePercent: 36.6 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 32.8 },
    { name: "Industrie (dont construction)", sharePercent: 27.8 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [],
  summary:
    "L'Éthiopie a connu depuis le milieu des années 2000 l'une des croissances les plus rapides du monde, tirée par l'investissement public dans les routes, les barrages et les parcs industriels, et la pauvreté a nettement reculé. L'agriculture reste le premier employeur, et le café, dont le pays est le premier producteur africain, sa principale exportation avec l'or et les fleurs ; Ethiopian Airlines est la plus grande compagnie aérienne du continent. Les guerres, l'inflation et une pénurie de devises ont conduit le pays à un défaut sur sa dette en décembre 2023, puis à un programme du FMI et au flottement du birr en 2024. Privé de façade maritime, le pays dépend du port de Djibouti pour l'essentiel de son commerce, et le gouvernement fait de l'accès à la mer une priorité stratégique.",
};
