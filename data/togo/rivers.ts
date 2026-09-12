import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Mono",
    lengthKm: {
      value: 467,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Mono_(fleuve)",
      note: "Longueur estimée entre 467 et 530 km selon les sources.",
    },
    source_location: "Massif du Tchaoudjo, près de Sokodé et Bafilo (centre du Togo)",
    mouth: "Golfe de Guinée (océan Atlantique), à la frontière entre le Togo et le Bénin",
  },
  {
    name: "Oti (Pendjari)",
    lengthKm: {
      value: 500,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Oti_(rivi%C3%A8re)",
    },
    source_location: "Massif de l'Atacora, au Bénin",
    mouth: "Fleuve Volta (lac Volta), au Ghana",
  },
];
