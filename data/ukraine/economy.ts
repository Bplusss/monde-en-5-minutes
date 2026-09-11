import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Hryvnia", code: "UAH", symbol: "₴" },
  gdp: {
    value: 225_340_000_000,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/countries/ukr",
    note: "Dollars courants — pour une comparaison homogène entre pays.",
  },
  gdpPerCapita: {
    value: 6_980,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/countries/ukr",
    note: "Dollars courants ; l'un des plus bas d'Europe, encore réduit par la destruction d'une large part de l'appareil productif depuis 2022.",
  },
  unemploymentRate: {
    value: 10.2,
    unit: "%",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/countries/ukr",
    note: "En repli depuis les sommets atteints au début de l'invasion, mais toujours élevé du fait des destructions et des déplacements de population.",
  },
  sectors: [
    { name: "Services", sharePercent: 61.3 },
    { name: "Industrie", sharePercent: 18.8 },
    { name: "Agriculture", sharePercent: 7.4 },
  ],
  sectorsSource: { source: "Banque mondiale", year: 2023 },
  indicators: [],
  summary:
    "Grenier céréalier historique et exportateur mondial de premier plan de blé, de maïs et d'huile de tournesol, l'Ukraine reste une puissance agricole malgré la destruction d'infrastructures portuaires et le blocus intermittent de ses ports de la mer Noire depuis 2022. Son industrie lourde (sidérurgie, machines-outils), concentrée dans l'est du pays, a été durement frappée par les combats et l'occupation d'une partie du Donbass, tandis que le secteur des services informatiques, moins dépendant du territoire physique, a continué de croître pendant la guerre et représente une part croissante des exportations.",
};
