import type { EconomyData } from "@/lib/types";

export const economy: EconomyData = {
  currency: { name: "Peso mexicain", code: "MXN", symbol: "$" },
  gdp: {
    value: 2_121_000_000_000,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/MEX",
    note: "Dollars courants — pour une comparaison homogène entre pays. 13ᵉ économie mondiale en PIB nominal.",
  },
  gdpPerCapita: {
    value: 15_779,
    unit: "USD",
    year: 2026,
    source: "Fonds monétaire international (FMI)",
    sourceUrl: "https://www.imf.org/en/Countries/MEX",
    note: "Dollars courants.",
  },
  unemploymentRate: {
    value: 2.7,
    unit: "%",
    year: 2026,
    source: "Wikipedia (d'après le CIA World Factbook)",
    sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Mexico",
    note: "Taux de chômage officiellement très bas, à relativiser : l'emploi informel concernerait près de 57 % des travailleurs (2025) et n'est pas comptabilisé comme chômage.",
  },
  sectors: [
    { name: "Services", sharePercent: 64.5 },
    { name: "Industrie", sharePercent: 31.9 },
    { name: "Agriculture", sharePercent: 3.6 },
  ],
  sectorsSource: { source: "CIA World Factbook", year: 2017 },
  indicators: [
    {
      label: "Part des États-Unis dans les exportations mexicaines",
      value: {
        value: 82.7,
        unit: "%",
        source: "Wikipedia (d'après le CIA World Factbook)",
        sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Mexico",
        note: "Illustre l'intégration économique très étroite avec les États-Unis et le Canada au sein de l'accord de libre-échange USMCA (T-MEC), entré en vigueur en 2020.",
      },
    },
  ],
  summary:
    "Économie très largement intégrée à celle de son voisin nord-américain, le Mexique est devenu l'un des grands ateliers manufacturiers mondiaux — automobile, électronique, aéronautique — porté par les usines d'assemblage (maquiladoras) massées le long de la frontière avec les États-Unis et par l'accord de libre-échange nord-américain (USMCA/T-MEC). Le pays reste aussi un important producteur de pétrole via la compagnie publique Pemex, une destination touristique majeure et l'un des tout premiers bénéficiaires mondiaux des envois de fonds de sa diaspora, en particulier depuis les États-Unis. Malgré ces atouts, l'économie mexicaine demeure marquée par de fortes inégalités et une pauvreté qui touche encore une large part de la population.",
};
