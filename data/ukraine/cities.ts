import type { City } from "@/lib/types";

const SRC = "Service national de statistique d'Ukraine";
const NOTE = "Estimation antérieure à l'invasion de 2022 ; la population réelle de nombreuses villes fluctue fortement depuis (déplacements, retours, proximité du front) et aucun chiffre à jour fiable n'est disponible.";

export const cities: City[] = [
  { name: "Kyiv", lat: 50.4501, lon: 30.5234, isCapital: true, population: { value: 2_952_301, year: 2022, source: SRC, note: NOTE } },
  { name: "Kharkiv", lat: 49.9935, lon: 36.2304, population: { value: 1_421_125, year: 2022, source: SRC, note: `${NOTE} Ville la plus proche de la frontière russe, particulièrement exposée aux bombardements.` } },
  { name: "Odesa", lat: 46.4825, lon: 30.7233, population: { value: 1_010_537, year: 2022, source: SRC, note: NOTE } },
  { name: "Dnipro", lat: 48.4647, lon: 35.0462, population: { value: 968_502, year: 2022, source: SRC, note: NOTE } },
];
