import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/san-marino";

export const economy: EconomyData = {
  currency: { name: "Euro", code: "EUR", symbol: "€" },
  gdp: {
    value: 2_030_000_000,
    unit: "USD",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 59_871,
    unit: "USD",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: WB_URL,
    note: "Dollars courants ; parmi les PIB par habitant les plus élevés du monde, porté par la finance, l'industrie manufacturière et le tourisme.",
  },
  unemploymentRate: {
    value: 4.0,
    unit: "%",
    year: 2025,
    source: "Ufficio Informatica, Tecnologia, Dati e Statistica",
    sourceUrl: "https://www.statistica.sm/",
    note: "Taux au sens large, premier trimestre 2025 ; en forte hausse depuis la crise financière de 2008 (autrefois proche de zéro).",
  },
  sectors: [
    { name: "Services", sharePercent: 60.7 },
    { name: "Industrie", sharePercent: 39.2 },
    { name: "Agriculture", sharePercent: 0.1 },
  ],
  sectorsSource: { source: "Wikipedia (estimations reprises du CIA World Factbook)" },
  indicators: [
    {
      label: "Part de l'Italie dans le commerce extérieur",
      value: { value: "environ 88 % des exportations, 78 % des importations", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_San_Marino" },
    },
  ],
  summary:
    "Sans être membre de l'Union européenne, Saint-Marin utilise l'euro depuis 2000-2001 en vertu d'une convention monétaire bilatérale avec l'UE — la même situation que l'Andorre — et participe à une union douanière avec l'Union européenne depuis 1991 ; un accord d'association conclu en décembre 2023 avec Bruxelles doit encore approfondir son intégration au marché unique. L'économie, très largement dépendante de l'Italie voisine (l'essentiel de ses échanges), repose sur le tourisme (plusieurs millions de visiteurs à la journée chaque année), la banque et l'industrie manufacturière (céramique, textile, électronique, vin). Le secteur bancaire, longtemps marqué par un statut proche du paradis fiscal, a aboli les sociétés anonymes en 2010 et le secret bancaire en 2017, ce qui a permis la sortie de Saint-Marin des listes grises internationales, mais reste fragile, avec un volume élevé de créances douteuses hérité de la crise de 2008.",
};
