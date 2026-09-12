import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/slovak-republic";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 141_780_000_000,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 26_150,
    unit: "USD",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=SK",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  unemploymentRate: {
    value: 5.3,
    unit: "%",
    year: 2024,
    source: "Eurostat",
    sourceUrl: "https://ec.europa.eu/eurostat/databrowser/view/tps00203/default/table?lang=en",
  },
  sectors: [
    { name: "Services", sharePercent: 56.4 },
    { name: "Industrie", sharePercent: 32.9 },
    { name: "Agriculture", sharePercent: 2.0 },
  ],
  sectorsSource: { source: "Statista, d'après les comptes nationaux", year: 2023 },
  indicators: [
    {
      label: "Production automobile par habitant",
      value: {
        value: "1ʳᵉ mondiale",
        year: 2024,
        source: "The Slovak Spectator / GLOBSEC",
        sourceUrl: "https://spectator.sme.sk/business/c/the-economist-slovakia-builds-cars-faster-than-anyone-but-can-it-keep-up",
        note: "La Slovaquie produit environ un million de véhicules par an pour 5,4 millions d'habitants, le taux le plus élevé au monde depuis 2007 ; le secteur automobile représente environ 10 % du PIB.",
      },
    },
  ],
  summary:
    "Membre de l'Union européenne depuis 2004 et de la zone euro depuis 2009 — seul des pays issus de la Tchécoslovaquie à avoir adopté la monnaie unique — la Slovaquie s'est bâti depuis les années 1990 une économie tournée vers l'export, portée par une industrie automobile devenue son secteur phare : Volkswagen, Kia, Stellantis et Jaguar Land Rover y possèdent chacun une usine d'assemblage. Cette spécialisation industrielle rend l'économie slovaque particulièrement sensible aux cycles de la demande automobile européenne.",
};
