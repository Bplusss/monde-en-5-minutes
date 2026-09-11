import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Leu moldave", code: "MDL", symbol: "L" },
  gdp: {
    value: 17_500_000_000,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/MDA",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 7_200,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/MDA",
    note: "Dollars courants ; l'un des plus bas d'Europe, bien qu'en forte progression depuis l'indépendance.",
  },
  unemploymentRate: {
    value: 3.0,
    unit: "%",
    year: 2023,
    source: "Bureau national de statistique de Moldavie (BNS)",
    sourceUrl: "https://statistica.gov.md/",
    note: "Taux structurellement bas, moins révélateur de la santé du marché du travail que de l'ampleur de l'émigration économique vers l'étranger.",
  },
  sectors: [
    { name: "Services", sharePercent: 60.0 },
    { name: "Agriculture", sharePercent: 22.0 },
    { name: "Industrie", sharePercent: 18.0 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [],
  summary:
    "Économie parmi les plus pauvres d'Europe, l'agriculture — notamment la viticulture, sur des sols de tchernoziom réputés — y occupe encore une place bien plus importante que dans la plupart des pays européens. Le pays dépend lourdement des transferts financiers envoyés par sa diaspora, qui représentent une part considérable du revenu des ménages, ainsi que d'une intégration économique croissante avec l'Union européenne depuis l'ouverture des négociations d'adhésion, dans un contexte de rupture accélérée des liens énergétiques et commerciaux hérités de l'époque soviétique avec la Russie.",
};
