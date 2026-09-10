import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Moselle",
    lengthKm: { value: 40, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours marquant la frontière avec l'Allemagne ; longueur totale : 545 km." },
    source_location: "Vosges (France)",
    mouth: "Rhin, à Coblence (Allemagne)",
  },
  {
    name: "Sûre",
    lengthKm: { value: 173, unit: "km", source: "Wikipedia (géographie physique)", note: "Traverse le nord du pays et en marque une partie de la frontière avec l'Allemagne." },
    source_location: "Ardennes belges",
    mouth: "Moselle, près de Wasserbillig",
  },
  {
    name: "Alzette",
    lengthKm: { value: 70, unit: "km", source: "Wikipedia (géographie physique)", note: "Traverse Esch-sur-Alzette et la ville de Luxembourg." },
    source_location: "Meurthe-et-Moselle (France)",
    mouth: "Sûre, près d'Ettelbruck",
  },
];
