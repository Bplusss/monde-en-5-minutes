import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Cedi", code: "GHS", symbol: "₵" },
  gdp: {
    value: 114_210_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=GH",
  },
  gdpPerCapita: {
    value: 3_257,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=GH",
  },
  unemploymentRate: {
    value: 3.0,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=GH",
    note: "Le chômage au sens strict est faible, mais le sous-emploi et le travail informel concernent la majorité des actifs.",
  },
  sectors: [
    { name: "Services", sharePercent: 42.9 },
    { name: "Industrie (dont mines et pétrole)", sharePercent: 29.3 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 21.3 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [
    {
      label: "Programme du Fonds monétaire international (FMI)",
      value: { value: "3 milliards de dollars", year: 2023, source: "FMI", sourceUrl: "https://www.imf.org/en/Countries/GHA", note: "Facilité élargie de crédit approuvée en mai 2023, après le défaut sur la dette extérieure de décembre 2022." },
    },
  ],
  summary:
    "Le Ghana est le premier producteur d'or d'Afrique et le deuxième producteur mondial de cacao, derrière la Côte d'Ivoire ; le pétrole, exploité au large depuis 2010, complète ses exportations. Ces matières premières ont porté une croissance rapide dans les années 2000 et 2010, sans transformer l'économie, encore largement informelle. Endetté, le pays a fait défaut fin 2022, alors que l'inflation dépassait 50 %, et a dû restructurer sa dette avec l'aide du FMI. La flambée des cours de l'or a ensuite aidé le cedi à se redresser et l'inflation à reculer nettement.",
};
