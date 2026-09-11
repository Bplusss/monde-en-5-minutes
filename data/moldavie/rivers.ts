import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Dniestr (Nistru)",
    lengthKm: { value: 1_362, unit: "km", source: "Wikipedia (géographie physique)", note: "Traverse le pays du nord au sud ; sa rive gauche délimite le territoire de facto contrôlé par la Transnistrie." },
    source_location: "Carpates ukrainiennes",
    mouth: "Mer Noire, près d'Odessa (Ukraine)",
  },
  {
    name: "Prout (Prut)",
    lengthKm: { value: 953, unit: "km", source: "Wikipedia (géographie physique)", note: "Marque toute la frontière occidentale du pays avec la Roumanie." },
    source_location: "Carpates ukrainiennes",
    mouth: "Confluence avec le Danube, près de Reni (Ukraine)",
  },
];
