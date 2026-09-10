import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Shannon",
    lengthKm: { value: 360, unit: "km", source: "Wikipedia (géographie physique)", note: "Le plus long fleuve d'Irlande et des îles Britanniques." },
    source_location: "Monts Cuilcagh (comté de Cavan)",
    mouth: "Océan Atlantique (estuaire du Shannon)",
  },
  {
    name: "Liffey",
    lengthKm: { value: 125, unit: "km", source: "Wikipedia (géographie physique)", note: "Traverse Dublin, qui s'est développée sur ses rives." },
    source_location: "Monts Wicklow",
    mouth: "Mer d'Irlande, à Dublin",
  },
  {
    name: "Lee",
    lengthKm: { value: 89, unit: "km", source: "Wikipedia (géographie physique)", note: "Traverse Cork, deuxième ville du pays." },
    source_location: "Monts Shehy (comté de Cork)",
    mouth: "Port de Cork (mer Celtique)",
  },
];
