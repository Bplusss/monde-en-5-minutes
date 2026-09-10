import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Narva",
    lengthKm: { value: 77, unit: "km", source: "Wikipedia (géographie physique)", note: "Marque la frontière avec la Russie sur presque tout son cours." },
    source_location: "Lac Peïpous",
    mouth: "Golfe de Finlande, près de Narva-Jõesuu",
  },
  {
    name: "Emajõgi",
    lengthKm: { value: 100, unit: "km", source: "Wikipedia (géographie physique)", note: "Traverse Tartu, deuxième ville du pays." },
    source_location: "Lac Võrtsjärv",
    mouth: "Lac Peïpous",
  },
  {
    name: "Pärnu",
    lengthKm: { value: 144, unit: "km", source: "Wikipedia (géographie physique)" },
    source_location: "Hautes terres du centre de l'Estonie (comté de Viljandi)",
    mouth: "Golfe de Riga, à Pärnu",
  },
];
