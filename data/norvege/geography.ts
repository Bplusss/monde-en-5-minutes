import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un long ruban côtier de fjords, entre mer de Norvège et massifs scandinaves",
  areaKm2: {
    value: 385_207,
    unit: "km²",
    year: 2024,
    source: "SSB (Statistisk sentralbyrå)",
    sourceUrl: "https://www.ssb.no/en/",
  },
  highestPoint: {
    name: "Galdhøpiggen",
    elevationM: 2469,
    source: "Kartverket",
    sourceUrl: "https://www.kartverket.no/en",
  },
  borderingCountries: ["Suède", "Finlande", "Russie"],
  generalSource: { source: "SSB (Statistisk sentralbyrå)", sourceUrl: "https://www.ssb.no/en/" },
  climate:
    "Climat côtier tempéré et humide grâce au Gulf Stream sur la façade atlantique, nettement plus continental et froid à l'intérieur des terres et dans le nord, avec un soleil de minuit en été au-delà du cercle polaire.",
  summary:
    "La Norvège occupe la façade occidentale de la péninsule scandinave, un territoire étiré du sud au grand nord arctique, très découpé par des fjords glaciaires profonds et bordé de milliers d'îles. L'intérieur est dominé par des massifs montagneux et des plateaux (fjell).",
};
