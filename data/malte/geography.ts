import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un archipel calcaire au cœur de la Méditerranée, à 80 km au sud de la Sicile",
  areaKm2: {
    value: 316,
    unit: "km²",
    source: "Office national de la statistique de Malte (NSO)",
    sourceUrl: "https://nso.gov.mt/",
  },
  highestPoint: {
    name: "Ta' Dmejrek",
    elevationM: 253,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Ta%27_Dmejrek",
  },
  borderingCountries: [],
  generalSource: { source: "NSO / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Malta" },
  climate:
    "Climat méditerranéen parmi les plus chauds et les plus secs d'Europe : hivers doux et pluvieux, étés longs, chauds et quasiment sans précipitations.",
  summary:
    "L'archipel maltais se compose de trois îles habitées — Malte, Gozo et Comino — et de quelques îlots inhabités, posés sur un plateau calcaire au centre du bassin méditerranéen, sur l'une des routes maritimes les plus fréquentées du monde. Dépourvu de relief marqué et de cours d'eau permanents, le territoire est aujourd'hui urbanisé à près de 95 %, l'un des taux les plus élevés au monde.",
};
