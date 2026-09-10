import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Save",
    lengthKm: { value: 945, unit: "km", source: "Wikipedia (géographie physique)", note: "Dont environ 562 km en Croatie ; principal affluent du Danube dans le pays." },
    source_location: "Alpes juliennes (Slovénie)",
    mouth: "Danube, à Belgrade (Serbie)",
  },
  {
    name: "Drave",
    lengthKm: { value: 707, unit: "km", source: "Wikipedia (géographie physique)", note: "Marque une partie de la frontière entre la Croatie et la Hongrie." },
    source_location: "Alpes (Tyrol, Autriche)",
    mouth: "Danube, près d'Osijek",
  },
  {
    name: "Danube",
    lengthKm: { value: 188, unit: "km", source: "Wikipedia (géographie physique)", note: "Seul le tronçon le long de la frontière avec la Serbie, en Slavonie orientale, est croate." },
    source_location: "Forêt-Noire (Allemagne)",
    mouth: "Mer Noire (Roumanie)",
  },
];
