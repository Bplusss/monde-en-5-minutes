import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Bolívar", code: "VES", symbol: "Bs." },
  gdp: {
    value: 99_661_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=VE",
    note: "Estimation : la banque centrale publie peu de données depuis 2015, et les comptes nationaux sont très incertains.",
  },
  gdpPerCapita: {
    value: 3_495,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=VE",
  },
  unemploymentRate: {
    value: 5.3,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=VE",
    note: "Estimation modélisée : le pays ne publie plus de statistiques fiables sur l'emploi, et une grande partie des actifs travaille dans l'économie informelle.",
  },
  sectors: [],
  sectorsSource: { source: "Donnée non disponible." },
  indicators: [
    {
      label: "Réserves prouvées de pétrole",
      value: { value: "1er rang mondial", year: 2024, source: "OPEP", sourceUrl: "https://www.opec.org/", note: "Environ 300 milliards de barils, surtout des pétroles extra-lourds de la ceinture de l'Orénoque, coûteux à extraire et à raffiner." },
    },
  ],
  summary:
    "Le pétrole fournit l'essentiel des exportations du Venezuela, qui possède les plus grandes réserves prouvées du monde. Le pays a ainsi été le plus riche d'Amérique du Sud, mais n'a jamais diversifié son économie. La chute des cours en 2014, la mauvaise gestion de la compagnie publique PDVSA, les contrôles des prix et les sanctions américaines ont provoqué l'un des plus graves effondrements économiques hors temps de guerre : le PIB a fondu d'environ trois quarts entre 2013 et 2021, et l'hyperinflation a dépassé un million de pour cent en 2018. L'économie s'est en partie « dollarisée ». Depuis janvier 2026, une réforme ouvre le secteur pétrolier aux compagnies étrangères, et une partie des ventes de brut transite sous contrôle américain.",
};
