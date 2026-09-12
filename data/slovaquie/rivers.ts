import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Danube",
    lengthKm: { value: 172, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire slovaque, où il marque la frontière avec l'Autriche puis la Hongrie ; longueur totale : 2 850 km." },
    source_location: "Forêt-Noire (Allemagne)",
    mouth: "Mer Noire, delta du Danube (Roumanie)",
  },
  {
    name: "Váh",
    lengthKm: { value: 406, unit: "km", source: "Wikipedia (géographie physique)", note: "Le plus long cours d'eau entièrement slovaque, formé par la réunion du Váh blanc et du Váh noir dans les Tatras." },
    source_location: "Hautes Tatras et Basses Tatras",
    mouth: "Danube, près de Komárno",
  },
  {
    name: "Hron",
    lengthKm: { value: 271, unit: "km", source: "Wikipedia (géographie physique)", note: "Deuxième plus long cours d'eau du pays." },
    source_location: "Basses Tatras (près de Kráľova hoľa)",
    mouth: "Danube, près de Štúrovo",
  },
  {
    name: "Hornád",
    lengthKm: { value: 286, unit: "km", source: "Wikipedia (géographie physique)", note: "178 km en territoire slovaque, le reste en Hongrie." },
    source_location: "Basses Tatras (près de Kráľova hoľa)",
    mouth: "Slaná (Sajó), en Hongrie",
  },
  {
    name: "Nitra",
    lengthKm: { value: 166, unit: "km", source: "Wikipedia (géographie physique)" },
    source_location: "Petites Carpates (Malá Fatra)",
    mouth: "Váh, près de Komoča",
  },
];
