import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Dollar néo-zélandais", code: "NZD", symbol: "$" },
  gdp: {
    value: 264_057_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=NZ",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 49_591,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=NZ",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 5.1,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=NZ",
  },
  sectors: [
    { name: "Services", sharePercent: 68.2 },
    { name: "Industrie (dont construction)", sharePercent: 19.4 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 4.0 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [],
  summary:
    "Économie développée et très ouverte, la Nouvelle-Zélande vit largement de ses exportations agricoles, bien que l'agriculture ne pèse qu'une faible part du PIB : produits laitiers, dont la coopérative Fonterra fait du pays le premier exportateur mondial, viande d'agneau et de bœuf, bois, kiwis et vins, notamment le sauvignon blanc de Marlborough. La Chine est son premier client, devant l'Australie. Le tourisme, l'éducation internationale et les services complètent cette économie. Réformée en profondeur dans les années 1980 par une libéralisation radicale, elle a traversé une récession en 2024 sous l'effet de taux d'intérêt élevés, et le coût du logement reste l'un des plus élevés du monde développé.",
};
