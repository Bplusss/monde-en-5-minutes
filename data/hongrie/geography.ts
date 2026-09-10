import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays enclavé au cœur du bassin des Carpates, partagé entre grande plaine et collines",
  areaKm2: {
    value: 93_030,
    unit: "km²",
    source: "Office central hongrois de la statistique (KSH)",
    sourceUrl: "https://www.ksh.hu/en/",
  },
  highestPoint: {
    name: "Kékes (massif du Mátra)",
    elevationM: 1_014,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/K%C3%A9kes",
  },
  borderingCountries: ["Autriche", "Slovaquie", "Ukraine", "Roumanie", "Serbie", "Croatie", "Slovénie"],
  generalSource: { source: "KSH / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Hungary" },
  climate:
    "Climat continental tempéré, avec des étés chauds et parfois secs et des hivers froids ; les précipitations, modérées, sont plus abondantes à l'ouest qu'à l'est du pays.",
  summary:
    "Entièrement enclavée, la Hongrie occupe la majeure partie du bassin des Carpates. À l'est du Danube s'étend la Grande Plaine hongroise (Alföld), vaste plaine agricole ; à l'ouest, la Transdanubie (Dunántúl) est plus vallonnée, avec les collines du Bakony et le lac Balaton, le plus grand lac d'Europe centrale. Au nord, les massifs du Mátra et du Bükk portent les points culminants du pays.",
};
