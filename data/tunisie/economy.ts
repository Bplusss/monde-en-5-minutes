import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Dinar tunisien", code: "TND", symbol: "DT" },
  gdp: {
    value: 57_500_000_000,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=TN",
    note: "Dollars courants.",
  },
  gdpPerCapita: {
    value: 4_657,
    unit: "USD",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=TN",
  },
  unemploymentRate: {
    value: 15.1,
    unit: "%",
    year: 2025,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=TN",
    note: "Estimation OIT ; nettement plus élevé chez les jeunes diplômés et dans les gouvernorats de l'intérieur.",
  },
  sectors: [
    { name: "Services", sharePercent: 62.7 },
    { name: "Industrie (dont manufacture, mines et énergie)", sharePercent: 22.0 },
    { name: "Agriculture", sharePercent: 10.3 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=TN", year: 2025 },
  indicators: [
    {
      label: "Inflation",
      value: { value: 5.2, unit: "%", year: 2025, source: WB, sourceUrl: "https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=TN", note: "En baisse après un pic à 9,3 % en 2023." },
    },
    {
      label: "Dette publique",
      value: { value: "84,5 % du PIB (2025, estimation)", source: "Banque mondiale (via Kapitalis)", sourceUrl: "https://kapitalis.com/tunisie/?p=17995101", note: "Contre 68 % en 2019 ; financée surtout par l'endettement intérieur et la Banque centrale depuis le refus d'un accord avec le FMI." },
    },
    {
      label: "Tourisme",
      value: { value: "plus de 11 millions de visiteurs en 2025 (record)", source: "La Presse de Tunisie", sourceUrl: "https://www.lapresse.tn/2025/12/25/tourisme-les-recettes-atteignent-7886-milliards-de-dinars-en-2025/", note: "Balnéaire surtout (Djerba, Hammamet, Sousse, Monastir), avec une forte clientèle algérienne, libyenne et européenne." },
    },
  ],
  summary:
    "L'économie tunisienne est diversifiée pour la région : industries manufacturières exportatrices (textile, composants automobiles et aéronautiques) tournées vers l'Union européenne, premier partenaire commercial, tourisme, phosphates du bassin de Gafsa et huile d'olive, dont le pays est l'un des premiers exportateurs mondiaux. La croissance reste faible depuis 2011 et le chômage élevé, surtout chez les jeunes diplômés. En 2023, Kaïs Saïed a rejeté les conditions d'un prêt de 1,9 milliard de dollars du FMI ; l'État se finance depuis par l'endettement intérieur, ce qui pèse sur l'accès au crédit et contribue aux pénuries récurrentes de produits subventionnés.",
};
