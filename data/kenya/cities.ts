import type { City } from "@/lib/types";

const SRC = "KNBS (recensement 2019)";
const URL = "https://www.knbs.or.ke/2019-kenya-population-and-housing-census-results/";

export const cities: City[] = [
  { name: "Nairobi", lat: -1.2921, lon: 36.8219, isCapital: true, population: { value: 4_397_073, year: 2019, source: SRC, sourceUrl: URL, note: "Comté de Nairobi, qui se confond avec la ville ; siège de nombreuses organisations internationales, dont le Programme des Nations unies pour l'environnement." } },
  { name: "Mombasa", lat: -4.0435, lon: 39.6682, population: { value: 1_208_333, year: 2019, source: SRC, sourceUrl: URL, note: "Premier port d'Afrique de l'Est, porte d'entrée maritime de l'Ouganda, du Rwanda et du Soudan du Sud." } },
  { name: "Nakuru", lat: -0.3031, lon: 36.08, population: { value: 570_674, year: 2019, source: SRC, sourceUrl: URL } },
  { name: "Eldoret", lat: 0.5143, lon: 35.2698, population: { value: 475_716, year: 2019, source: SRC, sourceUrl: URL } },
  { name: "Kisumu", lat: -0.0917, lon: 34.768, population: { value: 397_957, year: 2019, source: SRC, sourceUrl: URL, note: "Principale ville kényane sur les rives du lac Victoria." } },
  { name: "Lamu", lat: -2.2717, lon: 40.902 },
];
