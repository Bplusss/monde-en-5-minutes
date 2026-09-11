import type { EconomyData } from "@/lib/types";

const WB_URL = "https://data.worldbank.org/country/north-macedonia";

export const economy: EconomyData = {
  currency: { name: "Denar macédonien", code: "MKD", symbol: "ден" },
  gdp: {
    value: 17_885_000_000,
    unit: "USD",
    year: 2025,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/MKD",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 9_882,
    unit: "USD",
    year: 2025,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/MKD",
    note: "Dollars courants ; parmi les plus faibles d'Europe, bien qu'en forte progression depuis l'indépendance.",
  },
  unemploymentRate: {
    value: 13.0,
    unit: "%",
    year: 2023,
    source: "Office national de la statistique de Macédoine du Nord",
    sourceUrl: WB_URL,
    note: "En net recul depuis un pic supérieur à 30 % au début des années 2010, mais reste l'un des taux les plus élevés d'Europe.",
  },
  sectors: [
    { name: "Services", sharePercent: 60.0 },
    { name: "Industrie", sharePercent: 25.0 },
    { name: "Agriculture", sharePercent: 8.5 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [],
  summary:
    "Après une transition économique difficile marquée par la désindustrialisation de l'ère yougoslave et un chômage durablement très élevé, la Macédoine du Nord a progressivement attiré des investissements étrangers dans l'automobile et la sous-traitance industrielle, tout en restant tributaire des transferts de la diaspora et de l'agriculture (tabac, vin, légumes). Le statut de candidat à l'Union européenne, obtenu dès 2005 mais dont les négociations d'adhésion n'ont réellement démarré qu'en 2022, structure encore largement l'agenda des réformes économiques du pays.",
};
