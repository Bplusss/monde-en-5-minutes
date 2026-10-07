import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Ariary", code: "MGA", symbol: "Ar" },
  gdp: {
    value: 19_620_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=MG",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 599,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=MG",
    note: "Dollars courants ; l'un des dix plus bas du monde.",
  },
  unemploymentRate: {
    value: 3.0,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=MG",
    note: "Un taux bas qui reflète surtout la part écrasante de l'agriculture de subsistance et du travail informel.",
  },
  sectors: [
    { name: "Services", sharePercent: 48.8 },
    { name: "Industrie (dont mines et construction)", sharePercent: 23.9 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 21.7 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [
    {
      label: "Production de vanille",
      value: {
        value: "premier producteur mondial, environ les quatre cinquièmes de la vanille naturelle",
        source: "Wikipedia",
        sourceUrl: "https://en.wikipedia.org/wiki/Vanilla",
        note: "Cultivée surtout dans la région de la Sava, au nord-est ; les cours, très volatils, font alterner périodes d'abondance et crises pour les planteurs.",
      },
    },
  ],
  summary:
    "Madagascar est l'un des pays les plus pauvres du monde : près de trois habitants sur quatre vivent sous le seuil international d'extrême pauvreté, et le revenu par habitant est aujourd'hui plus faible qu'à l'indépendance. L'agriculture, dominée par le riz, occupe la majorité des actifs. Les exportations reposent sur la vanille, le girofle, les crevettes, le textile des zones franches d'Antananarivo et Antsirabe, et les mines — nickel et cobalt d'Ambatovy, ilménite de Fort-Dauphin, graphite. Les crises politiques à répétition, les coupures d'électricité de la compagnie publique Jirama et la corruption freinent l'investissement.",
};
