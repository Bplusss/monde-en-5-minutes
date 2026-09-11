import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays enclavé et montagneux des Balkans centraux, traversé du nord au sud par la vallée du Vardar",
  areaKm2: {
    value: 25_713,
    unit: "km²",
    source: "Office national de la statistique de Macédoine du Nord",
    sourceUrl: "https://www.stat.gov.mk/",
  },
  highestPoint: {
    name: "Mont Korab (Golem Korab)",
    elevationM: 2_764,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Korab_(mountain)",
  },
  borderingCountries: ["Grèce", "Bulgarie", "Serbie", "Kosovo", "Albanie"],
  generalSource: { source: "Office national de la statistique de Macédoine du Nord / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_North_Macedonia" },
  climate:
    "Climat continental dans l'essentiel du pays, avec des hivers froids et enneigés en montagne, nuancé d'influences méditerranéennes remontant la vallée du Vardar jusque dans le sud, où les étés sont chauds et secs.",
  summary:
    "Sans accès à la mer, la Macédoine du Nord occupe un carrefour montagneux des Balkans, structuré par la vallée du Vardar qui traverse le pays du nord-ouest au sud-est jusqu'en Grèce. Le relief, majoritairement montagneux, culmine au mont Korab à la frontière albanaise et abrite plusieurs lacs tectoniques remarquables, dont le lac d'Ohrid, l'un des plus anciens et des plus profonds d'Europe.",
};
