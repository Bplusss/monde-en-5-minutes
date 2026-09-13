import type { EconomyData } from "@/lib/types";

const WB = "Banque mondiale";

export const economy: EconomyData = {
  currency: { name: "Roupie indienne", code: "INR", symbol: "₹" },
  gdp: {
    value: 3_760_813_470_501,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=IN",
    note: "Dollars courants ; 5ᵉ PIB mondial en valeur nominale.",
  },
  gdpPerCapita: {
    value: 2_592,
    unit: "USD",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=IN",
    note: "Dollars courants ; nettement plus élevé en parité de pouvoir d'achat (environ 11 000-12 000 USD selon le FMI), l'écart reflétant un faible niveau de prix intérieur.",
  },
  unemploymentRate: {
    value: 4.2,
    unit: "%",
    year: 2024,
    source: WB,
    sourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=IN",
    note: "Estimation modélisée (OIT) ; les enquêtes nationales de l'Enquête périodique sur la population active (PLFS, MoSPI) donnent des résultats sensiblement différents selon la définition retenue de l'activité, l'écrasante majorité de l'emploi indien restant informel.",
  },
  sectors: [
    { name: "Services", sharePercent: 48.0 },
    { name: "Industrie", sharePercent: 25.2 },
    { name: "Agriculture", sharePercent: 17.6 },
  ],
  sectorsSource: { source: WB, sourceUrl: "https://data.worldbank.org/indicator/NV.SRV.TOTL.ZS?locations=IN", year: 2024 },
  indicators: [
    {
      label: "Réserves de change",
      value: { value: "785,7 milliards", unit: "USD", year: 2026, source: "Reserve Bank of India (RBI)", sourceUrl: "https://www.rbi.org.in/" },
    },
    {
      label: "Transactions numériques UPI",
      value: { value: "environ 20 milliards par mois", unit: "transactions", year: 2025, source: "National Payments Corporation of India (NPCI)", sourceUrl: "https://en.wikipedia.org/wiki/Unified_Payments_Interface", note: "Le système de paiement instantané public UPI traiterait, selon des estimations, près de la moitié des transactions numériques réalisées dans le monde." },
    },
  ],
  summary:
    "Cinquième économie mondiale en valeur nominale mais 149ᵉ en PIB par habitant, l'Inde combine une économie de services développée — logiciels, technologies de l'information, pharmacie générique (le pays fournit à lui seul environ 20 % de la demande mondiale de médicaments génériques) — avec une agriculture qui emploie encore près de la moitié de la population active pour moins d'un cinquième de la richesse produite. Les réformes de libéralisation économique engagées en 1991, en réponse à une grave crise de la balance des paiements, ont ouvert le pays au commerce et aux investissements étrangers et amorcé sa croissance soutenue depuis trois décennies. L'économie reste marquée par un secteur informel très étendu, de fortes inégalités régionales et de revenu, et une infrastructure numérique publique (paiements UPI, identifiant biométrique Aadhaar) considérée comme un modèle par plusieurs pays en développement.",
};
