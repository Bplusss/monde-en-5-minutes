import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Jourdain",
    lengthKm: {
      value: 251,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Il marque la frontière avec Israël puis la Cisjordanie ; détourné en amont pour l'irrigation et l'eau potable, son cours inférieur n'est plus qu'un mince filet.",
    },
    source_location: "Confluence du Hasbani, du Dan et du Banias, au pied du mont Hermon",
    mouth: "Mer Morte",
  },
  {
    name: "Yarmouk",
    lengthKm: {
      value: 70,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Principal affluent du Jourdain, il forme la frontière avec la Syrie ; le barrage d'Al-Wehda y a été construit avec Damas dans les années 2000.",
    },
    source_location: "Plateau du Hauran (Syrie)",
    mouth: "Jourdain, au sud du lac de Tibériade",
  },
  {
    name: "Zarqa",
    lengthKm: {
      value: 65,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Deuxième affluent du Jourdain, il traverse l'agglomération d'Amman-Zarqa ; très pollué, il alimente le barrage du roi Talal, dont l'eau ne sert plus qu'à l'irrigation.",
    },
    source_location: "Sources d'Ain Ghazal, au nord-est d'Amman",
    mouth: "Jourdain",
  },
];
