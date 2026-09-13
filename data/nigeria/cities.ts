import type { City } from "@/lib/types";

const CENSUS = "Recensement national du Nigeria (NPC)";
const CENSUS_NOTE_LAGOS =
  "Population de l'agglomération lors du dernier recensement national fiable ; les estimations actuelles, très disputées entre l'État de Lagos et l'administration fédérale faute de nouveau recensement, vont de 11 à plus de 20 millions d'habitants pour le Grand Lagos.";

export const cities: City[] = [
  { name: "Lagos", lat: 6.4541, lon: 3.3947, population: { value: 8_048_430, year: 2006, source: CENSUS, note: CENSUS_NOTE_LAGOS } },
  { name: "Abuja", lat: 9.0667, lon: 7.4833, isCapital: true, population: { value: 776_298, year: 2006, source: CENSUS, note: "Ville nouvelle planifiée, devenue capitale fédérale en 1991 ; sa population a été estimée à plus de 3,7 millions d'habitants pour l'agglomération en 2022 selon des projections démographiques, en l'absence de recensement plus récent." } },
  { name: "Kano", lat: 12.0, lon: 8.5167, population: { value: 2_828_861, year: 2006, source: CENSUS, note: "2ᵉ ville du pays et principal centre urbain du nord musulman." } },
  { name: "Ibadan", lat: 7.3964, lon: 3.9167, population: { value: 2_559_853, year: 2006, source: CENSUS, note: "Plus grande ville du pays yoruba par sa superficie historique." } },
  { name: "Port Harcourt", lat: 4.8242, lon: 7.0336, population: { value: 1_005_904, year: 2006, source: CENSUS, note: "Principal centre urbain et portuaire du delta du Niger, cœur de l'industrie pétrolière nigériane." } },
];
