import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/hungary";

export const economy: EconomyData = {
  currency: { name: "Forint hongrois", code: "HUF", symbol: "Ft" },
  gdp: {
    value: 223_000_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 23_270,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 4.5,
    unit: "%",
    year: 2025,
    source: "KSH",
    sourceUrl: "https://www.ksh.hu/en/labour-market",
  },
  sectors: [
    { name: "Services", sharePercent: 64.8 },
    { name: "Industrie", sharePercent: 31.0 },
    { name: "Agriculture", sharePercent: 4.2 },
  ],
  sectorsSource: { source: "Wikipedia (d'après les statistiques nationales)", year: 2023 },
  indicators: [],
  summary:
    "Membre de l'Union européenne depuis 2004 mais hors zone euro, la Hongrie s'est imposée comme l'un des principaux pôles industriels d'Europe centrale, en particulier dans l'automobile (Audi, Mercedes-Benz, Suzuki) et, plus récemment, les batteries électriques, portée par d'importants investissements étrangers, notamment asiatiques.",
};
