import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/bulgaria";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 112_210_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 17_478,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 3.7,
    unit: "%",
    year: 2025,
    source: "Eurostat",
    sourceUrl: "https://tradingeconomics.com/bulgaria/unemployment-rate-eurostat-data.html",
  },
  sectors: [
    { name: "Services", sharePercent: 62.5 },
    { name: "Industrie", sharePercent: 26.7 },
    { name: "Agriculture", sharePercent: 3.8 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Membre de l'Union européenne depuis 2007 et de la zone euro depuis le 1ᵉʳ janvier 2026, la Bulgarie reste l'un des pays les plus pauvres de l'UE en PIB par habitant, mais affiche une croissance régulière portée par les services, l'externalisation informatique et une industrie manufacturière tournée vers l'exportation (automobile, textile, métallurgie).",
};
