import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Murray",
    lengthKm: { value: 2_508, unit: "km", source: "Wikipedia (géographie physique)", note: "Le plus long fleuve d'Australie ; forme une partie de la frontière entre la Nouvelle-Galles du Sud et le Victoria." },
    source_location: "Alpes australiennes, près de Cowombat Flat (Nouvelle-Galles du Sud)",
    mouth: "Océan Austral, à l'embouchure de Murray Mouth, près de Goolwa (Australie-Méridionale)",
  },
  {
    name: "Darling (Baaka)",
    lengthKm: { value: 1_472, unit: "km", source: "Wikipedia (géographie physique)", note: "Principal affluent du Murray ; le système Murray-Darling forme le plus vaste bassin hydrographique du pays." },
    source_location: "Confluence des rivières Culgoa et Barwon, près de Brewarrina (Nouvelle-Galles du Sud)",
    mouth: "Confluence avec le Murray, à Wentworth (Nouvelle-Galles du Sud)",
  },
  {
    name: "Murrumbidgee",
    lengthKm: { value: 1_485, unit: "km", source: "Wikipedia (géographie physique)", note: "Deuxième affluent du Murray par la longueur ; irrigue une importante région agricole (Riverina)." },
    source_location: "Monts Snowy, près de Peppercorn Hill (Nouvelle-Galles du Sud)",
    mouth: "Confluence avec le Murray, près de Boundary Bend (frontière Nouvelle-Galles du Sud/Victoria)",
  },
];
