import type { City } from "@/lib/types";

// Pas de chiffres de population par ville : aucun recensement depuis 1932,
// et les estimations disponibles divergent fortement.
export const cities: City[] = [
  { name: "Beyrouth", lat: 33.8938, lon: 35.5018, isCapital: true },
  { name: "Tripoli", lat: 34.4367, lon: 35.8497 },
  { name: "Saïda", lat: 33.5571, lon: 35.3729 },
  { name: "Jounieh", lat: 33.9808, lon: 35.6178 },
  { name: "Zahlé", lat: 33.8463, lon: 35.902 },
  { name: "Tyr", lat: 33.2705, lon: 35.2038 },
  { name: "Nabatieh", lat: 33.3772, lon: 35.4836 },
  { name: "Baalbek", lat: 34.0047, lon: 36.211 },
  { name: "Byblos (Jbeil)", lat: 34.1236, lon: 35.6511 },
];
