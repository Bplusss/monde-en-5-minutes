import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Jourdain",
    lengthKm: {
      value: 251,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Jordan_River",
      note: "Son cours inférieur forme la frontière avec la Jordanie puis longe la Cisjordanie. Les prélèvements israéliens, jordaniens et syriens en ont réduit le débit à une fraction de son niveau historique.",
    },
    source_location: "Confluence du Hasbani, du Dan et du Banias, au pied du mont Hermon, dans le nord de la vallée de la Houla",
    mouth: "Mer Morte, après avoir traversé le lac de Tibériade",
  },
  {
    name: "Yarkon",
    lengthKm: {
      value: 27.5,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Yarkon_River",
      note: "Rivière de la plaine côtière centrale, réhabilitée après des décennies de pollution.",
    },
    source_location: "Sources de Rosh HaAyin (Tel Afek)",
    mouth: "Mer Méditerranée, à Tel-Aviv",
  },
  {
    name: "Kishon",
    lengthKm: {
      value: 70,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Kishon_River",
      note: "Draine la vallée de Jezreel ; son estuaire, dans la zone industrielle de la baie de Haïfa, a fait l'objet d'importants travaux de dépollution.",
    },
    source_location: "Monts de Gilboa et plateau de Samarie, au sud-est de la vallée de Jezreel",
    mouth: "Mer Méditerranée, dans la baie de Haïfa",
  },
];
