import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Vistule",
    lengthKm: { value: 1047, unit: "km", source: "Wikipedia (géographie physique)", note: "Plus long fleuve de Pologne, entièrement sur le territoire polonais." },
    source_location: "Barania Góra (Beskides silésiennes, Carpates)",
    mouth: "Mer Baltique (golfe de Gdańsk), via le lagon de la Vistule",
  },
  {
    name: "Oder",
    lengthKm: { value: 840, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur totale ; une partie du cours forme la frontière germano-polonaise." },
    source_location: "Monts d'Odry (région d'Olomouc, Tchéquie)",
    mouth: "Mer Baltique (lagon de Szczecin / baie de Poméranie)",
  },
];
