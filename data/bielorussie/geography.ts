import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un vaste pays plat, enclavé entre Russie et Union européenne, couvert de forêts et de marais",
  areaKm2: {
    value: 207_600,
    unit: "km²",
    source: "Comité national des statistiques de Biélorussie (Belstat)",
    sourceUrl: "https://belstat.gov.by/en/",
  },
  highestPoint: {
    name: "Dzyarzhynskaya Hara",
    elevationM: 345,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Dzyarzhynskaya_Hara",
  },
  borderingCountries: ["Russie", "Ukraine", "Pologne", "Lituanie", "Lettonie"],
  generalSource: { source: "Belstat / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Belarus" },
  climate:
    "Climat continental humide, avec des hivers froids et neigeux et des étés doux à chauds ; les précipitations sont réparties sur toute l'année, plus abondantes dans le nord et l'ouest.",
  summary:
    "La Biélorussie est un pays au relief très peu marqué, dominé par de vastes plaines et plateaux bas, largement couvert de forêts (plus d'un tiers du territoire) et parsemé de milliers de lacs, notamment au nord. Le sud du pays est occupé par les marais de Polésie, l'une des plus grandes zones humides d'Europe, partagée avec l'Ukraine.",
};
