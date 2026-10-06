import type { City } from "@/lib/types";

/**
 * Sans recensement depuis 2007, l'Éthiopie ne dispose pas de populations
 * urbaines officielles récentes : les villes sont listées sans chiffre plutôt
 * qu'avec des estimations hétérogènes.
 */
export const cities: City[] = [
  { name: "Addis-Abeba", lat: 9.0301, lon: 38.7404, isCapital: true },
  { name: "Dire Dawa", lat: 9.6009, lon: 41.8501 },
  { name: "Mekele", lat: 13.4967, lon: 39.4753 },
  { name: "Gondar", lat: 12.6, lon: 37.4667 },
  { name: "Bahir Dar", lat: 11.5742, lon: 37.3614 },
  { name: "Hawassa", lat: 7.0621, lon: 38.4764 },
];
