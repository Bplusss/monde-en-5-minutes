import type { EconomyData } from "@/lib/types";

const ISTAT_PIL_URL = "https://www.istat.it/wp-content/uploads/2025/09/Conti-economici-nazionali-Anni-2023-2024.pdf";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 2_192.2,
    unit: "Md€ courants",
    year: 2024,
    source: "ISTAT",
    sourceUrl: ISTAT_PIL_URL,
  },
  gdpPerCapita: {
    value: 37_197,
    unit: "€",
    year: 2024,
    source: "ISTAT",
    sourceUrl: ISTAT_PIL_URL,
    note: "Estimation arrondie.",
  },
  unemploymentRate: {
    value: 6.1,
    unit: "%",
    year: 2025,
    source: "ISTAT",
    sourceUrl: "https://www.istat.it/comunicato-stampa/occupati-e-disoccupati-dati-provvisori-dicembre-2025/",
    note: "Moyenne annuelle 2025.",
  },
  sectors: [
    { name: "Services", sharePercent: 72.3 },
    { name: "Industrie et agriculture", sharePercent: 22 },
    { name: "Construction", sharePercent: 5.7 },
  ],
  sectorsSource: { source: "ISTAT", sourceUrl: ISTAT_PIL_URL, year: 2024 },
  indicators: [],
  summary:
    "Huitième économie mondiale, l'Italie repose sur une économie de services développée et une industrie manufacturière puissante — mécanique, automobile, mode et agroalimentaire — organisée autour de nombreuses petites et moyennes entreprises, en particulier dans le nord du pays.",
};
