import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Dniepr",
    lengthKm: { value: 700, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire biélorusse ; longueur totale : 2 201 km." },
    source_location: "Collines de Valdaï (Russie)",
    mouth: "Mer Noire (Ukraine)",
  },
  {
    name: "Pripiat",
    lengthKm: { value: 500, unit: "km", source: "Wikipedia (géographie physique)", note: "Traverse les marais de Polésie ; longueur totale : 761 km." },
    source_location: "Volhynie (Ukraine)",
    mouth: "Dniepr, près de Kiev (Ukraine)",
  },
  {
    name: "Dvina occidentale",
    lengthKm: { value: 328, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire biélorusse ; longueur totale : 1 020 km." },
    source_location: "Collines de Valdaï (Russie)",
    mouth: "Mer Baltique, à Riga (Lettonie)",
  },
  {
    name: "Niémen",
    lengthKm: { value: 459, unit: "km", source: "Wikipedia (géographie physique)", note: "Prend sa source en Biélorussie même ; longueur totale : 937 km." },
    source_location: "Région de Minsk (Biélorussie)",
    mouth: "Mer Baltique (lagune de Courlande, Lituanie)",
  },
];
