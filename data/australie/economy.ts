import type { EconomyData } from "@/lib/types";

const IMF = "Fonds monétaire international (FMI)";
const IMF_URL = "https://en.wikipedia.org/wiki/Economy_of_Australia";
const ABS = "Australian Bureau of Statistics (ABS)";

export const economy: EconomyData = {
  currency: { name: "Dollar australien", code: "AUD", symbol: "$" },
  gdp: {
    value: 1_950_000_000_000,
    unit: "USD",
    year: 2026,
    source: IMF,
    sourceUrl: IMF_URL,
    note: "Dollars courants, estimation — 12ᵉ économie mondiale par le PIB nominal.",
  },
  gdpPerCapita: {
    value: 69_360,
    unit: "USD",
    year: 2026,
    source: IMF,
    sourceUrl: IMF_URL,
    note: "Dollars courants, estimation — l'un des PIB par habitant les plus élevés au monde.",
  },
  unemploymentRate: {
    value: 4.3,
    unit: "%",
    year: 2026,
    source: ABS,
    sourceUrl: "https://www.abs.gov.au/statistics/labour/employment-and-unemployment/labour-force-australia/latest-release",
    note: "Mars 2026 ; le chômage des jeunes de 15 à 24 ans reste nettement plus élevé, autour de 10 %.",
  },
  sectors: [
    { name: "Services", sharePercent: 70.0 },
    { name: "Industrie (dont mines)", sharePercent: 25.0 },
    { name: "Agriculture", sharePercent: 2.5 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [
    {
      label: "Premier partenaire commercial",
      value: { value: "Chine", year: 2024, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Australia", note: "Environ 30 % des exportations australiennes, très majoritairement des minerais de fer, du charbon et du gaz naturel liquéfié." },
    },
  ],
  summary:
    "Économie développée à haut revenu, l'Australie tire une part considérable de sa richesse extérieure de l'exportation de matières premières — minerai de fer, charbon, gaz naturel liquéfié, or et, dans une moindre mesure, uranium — principalement à destination de l'Asie et en premier lieu de la Chine. Le secteur des services (finance, éducation internationale, tourisme) domine largement l'emploi et la valeur ajoutée intérieure. Le pays a connu près de trois décennies de croissance ininterrompue entre le début des années 1990 et la pandémie de Covid-19, une performance exceptionnelle parmi les économies développées, portée notamment par la demande chinoise en matières premières.",
};
