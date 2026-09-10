import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/andorra";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 6_000_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 70_500,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — parmi les plus élevés au monde, porté par le tourisme et la finance.",
  },
  unemploymentRate: {
    value: 3.7,
    unit: "%",
    year: 2024,
    source: "Departament d'Estadística d'Andorra",
    sourceUrl: "https://www.estadistica.ad/",
  },
  sectors: [
    { name: "Services", sharePercent: 84.0 },
    { name: "Industrie et construction", sharePercent: 15.5 },
    { name: "Agriculture", sharePercent: 0.5 },
  ],
  sectorsSource: { source: "Departament d'Estadística d'Andorra", year: 2023 },
  indicators: [],
  summary:
    "Sans être membre de l'Union européenne, l'Andorre utilise unilatéralement l'euro depuis 2002 (officialisé par un accord monétaire en 2011) et vit presque exclusivement du tourisme — plus de huit millions de visiteurs par an, attirés par le ski et un régime fiscal longtemps très avantageux — ainsi que du commerce de détail hors taxes et d'une place financière discrète, aujourd'hui davantage encadrée après la levée du secret bancaire imposée par les standards internationaux à partir de 2009.",
};
