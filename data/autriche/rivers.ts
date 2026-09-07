import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Danube",
    lengthKm: { value: 2850, unit: "km", source: "Umweltbundesamt", note: "Longueur totale du fleuve ; la portion autrichienne n'a pas pu être vérifiée (donnée non disponible)." },
    source_location: "Donaueschingen (Forêt-Noire, Allemagne)",
    mouth: "Mer Noire, via le delta du Danube (Roumanie/Ukraine)",
  },
  {
    name: "Inn",
    lengthKm: { value: 518.5, unit: "km", source: "Umweltbundesamt", note: "Longueur totale de la rivière ; la portion autrichienne n'a pas pu être vérifiée (donnée non disponible)." },
    source_location: "Alpes suisses, près de Saint-Moritz",
    mouth: "Danube, à Passau (Allemagne)",
  },
];
