import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un plateau désertique bordé à l'ouest par la vallée du Jourdain et la mer Morte, point le plus bas des terres émergées",
  areaKm2: {
    value: 89_342,
    unit: "km²",
    source: "Department of Statistics (Jordanie)",
    sourceUrl: "https://dosweb.dos.gov.jo/",
  },
  coastlineKm: {
    value: 26,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Jordan",
    note: "Sur le golfe d'Aqaba (mer Rouge), seul accès du pays à la mer.",
  },
  highestPoint: {
    name: "Jabal Umm al-Dami (près de la frontière saoudienne)",
    elevationM: 1_854,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Jabal_Umm_al_Dami",
  },
  borderingCountries: ["Syrie", "Irak", "Arabie saoudite", "Israël", "Palestine"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Jordan" },
  climate:
    "Le nord-ouest, autour d'Amman et d'Irbid, a un climat méditerranéen avec des hivers frais et pluvieux, parfois enneigés, et des étés chauds et secs. Le reste du pays, soit plus des trois quarts du territoire, est désertique, avec moins de 200 mm de pluie par an. La vallée du Jourdain et Aqaba connaissent des étés torrides.",
  summary:
    "La Jordanie est presque entièrement enclavée entre la Syrie, l'Irak, l'Arabie saoudite, Israël et la Cisjordanie. À l'ouest, la vallée du Jourdain, prolongement du grand rift africain, descend jusqu'à la mer Morte, à environ 430 m sous le niveau de la mer ; elle est dominée par des hauts plateaux où vit l'essentiel de la population. À l'est s'étend le désert de la badia, steppe de pierres et de basalte, et au sud les montagnes de grès et le désert du Wadi Rum descendent vers le golfe d'Aqaba.",
};
