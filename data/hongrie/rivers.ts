import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Danube (Duna)",
    lengthKm: { value: 417, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire hongrois ; longueur totale du fleuve : 2 850 km." },
    source_location: "Forêt-Noire (Allemagne)",
    mouth: "Mer Noire (delta du Danube, Roumanie)",
  },
  {
    name: "Tisza",
    lengthKm: { value: 596, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire hongrois ; longueur totale : 966 km, principal affluent du Danube." },
    source_location: "Monts Gorgany (Carpates ukrainiennes)",
    mouth: "Danube, à Titel (Serbie)",
  },
  {
    name: "Dráva",
    lengthKm: { value: 145, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours formant la frontière avec la Croatie ; longueur totale : environ 505 km." },
    source_location: "Alpes (Tyrol du Sud, Italie)",
    mouth: "Danube, près d'Osijek (Croatie)",
  },
];
