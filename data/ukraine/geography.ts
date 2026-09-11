import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le plus grand pays entièrement situé en Europe, des steppes fertiles aux Carpates",
  areaKm2: {
    value: 603_628,
    unit: "km²",
    source: "Service national de géodésie, cartographie et cadastre d'Ukraine",
    sourceUrl: "https://en.wikipedia.org/wiki/Ukraine",
  },
  highestPoint: {
    name: "Hoverla (Carpates)",
    elevationM: 2_061,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Hoverla",
  },
  borderingCountries: ["Russie", "Biélorussie", "Pologne", "Slovaquie", "Hongrie", "Roumanie", "Moldavie"],
  generalSource: { source: "Wikipedia (géographie physique)", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Ukraine" },
  climate:
    "Climat continental tempéré sur la majeure partie du territoire, avec des hivers froids et des étés chauds ; influence méditerranéenne plus douce sur la côte sud de Crimée. Les vastes steppes du centre et du sud reposent sur des sols de tchernoziom (terre noire), parmi les plus fertiles au monde, qui font de l'Ukraine l'un des principaux greniers à céréales de la planète.",
  summary:
    "Avec 603 628 km², l'Ukraine est le plus grand pays entièrement situé en Europe. Son relief est dominé par de vastes plaines et steppes, bordées au sud-ouest par les Carpates et coupées du nord au sud par le Dniepr, le plus grand fleuve du pays. Elle dispose d'un long littoral sur la mer Noire et la mer d'Azov, avec la péninsule de Crimée comme avancée méridionale — occupée par la Russie depuis 2014 et non représentée dans le tracé des régions ci-dessous (voir la section Territoire).",
};
