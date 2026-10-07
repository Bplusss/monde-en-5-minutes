import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Roupie pakistanaise", code: "PKR", symbol: "Rs" },
  gdp: {
    value: 407_307_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=PK",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 1_596,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=PK",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 5.4,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=PK",
    note: "Le taux d'activité des femmes, d'environ un quart, est l'un des plus bas du monde.",
  },
  sectors: [
    { name: "Services", sharePercent: 50.9 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 23.0 },
    { name: "Industrie (dont construction)", sharePercent: 20.1 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [
    {
      label: "Envois de fonds des travailleurs émigrés",
      value: {
        value: "38,3 milliards de dollars (exercice 2024-2025), un record",
        source: "State Bank of Pakistan",
        sourceUrl: "https://www.sbp.org.pk/ecodata/Homeremit.pdf",
        note: "Principalement depuis l'Arabie saoudite, les Émirats arabes unis et le Royaume-Uni ; c'est la première source de devises du pays, devant les exportations de textile.",
      },
    },
  ],
  summary:
    "L'économie pakistanaise repose sur l'agriculture irriguée de la plaine de l'Indus (blé, riz, coton, canne à sucre), sur l'industrie textile, qui fournit plus de la moitié des exportations, et sur les envois de fonds de près de dix millions d'émigrés. Le pays enchaîne les crises de la balance des paiements : il a signé en 2024 son 24e programme avec le FMI, et la dette publique absorbe une large part des recettes. Le corridor économique Chine-Pakistan, lancé en 2015, a financé routes, centrales électriques et le port de Gwadar. Pauvreté, coupures d'électricité et faible collecte des impôts restent des freins majeurs.",
};
