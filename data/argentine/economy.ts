import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Peso argentin", code: "ARS", symbol: "$" },
  gdp: {
    value: 683_100_000_000,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=AR",
    note: "Dollars courants — la conversion en dollars d'un PIB mesuré en pesos très fortement dévalués rend cette comparaison internationale particulièrement sensible aux variations de change.",
  },
  gdpPerCapita: {
    value: 14_898,
    unit: "USD",
    year: 2025,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=AR",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 7.1,
    unit: "%",
    year: 2025,
    source: "Banque mondiale (estimation modélisée OIT)",
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=AR",
  },
  sectors: [
    { name: "Services", sharePercent: 56.2 },
    { name: "Industrie (dont construction)", sharePercent: 22.9 },
    { name: "Agriculture, sylviculture et pêche", sharePercent: 5.5 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2025 },
  indicators: [
    {
      label: "Inflation annuelle",
      value: { value: 31.8, unit: "%", year: 2025, source: "INDEC", sourceUrl: "https://www.indec.gob.ar/", note: "Variation sur douze mois à septembre 2025 ; en forte décrue depuis le pic de 211,4 % atteint en 2023, sous l'effet du plan de stabilisation mené par le gouvernement de Javier Milei, mais restant l'une des plus élevées au monde." },
    },
  ],
  summary:
    "Deuxième économie d'Amérique du Sud, l'Argentine dispose d'atouts considérables — terres agricoles parmi les plus fertiles au monde (soja, blé, bœuf), importantes réserves d'hydrocarbures non conventionnels (Vaca Muerta) et de lithium — mais son histoire économique récente est marquée par une instabilité macroéconomique chronique : inflation à trois chiffres pendant une grande partie des années 2020, dévaluations répétées du peso, contrôle des changes et défauts de paiement successifs sur sa dette souveraine (dont ceux de 2001 et 2020). Depuis son investiture en décembre 2023, le président libertarien Javier Milei a mené un vaste plan d'austérité budgétaire et de dérégulation qui a permis une baisse rapide de l'inflation, au prix d'une récession et d'une contestation sociale.",
};
