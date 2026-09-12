import type { City } from "@/lib/types";

const SRC = "Office statistique de la République de Serbie (RZS), recensement 2022";
const URL = "https://popis2022.stat.gov.rs/en-us/";

export const cities: City[] = [
  { name: "Belgrade", lat: 44.7866, lon: 20.4489, isCapital: true, population: { value: 1_681_405, year: 2022, source: SRC, sourceUrl: URL, note: "Ensemble de la Ville de Belgrade (17 municipalités urbaines et rurales)." } },
  { name: "Novi Sad", lat: 45.2671, lon: 19.8335, population: { value: 368_967, year: 2022, source: SRC, sourceUrl: URL, note: "Capitale de la province de Voïvodine ; ensemble de la ville, municipalités incluses." } },
  { name: "Niš", lat: 43.3209, lon: 21.8958, population: { value: 183_164, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Kragujevac", lat: 44.0128, lon: 20.9114, population: { value: 171_186, year: 2022, source: SRC, sourceUrl: URL, note: "Ancienne capitale de la principauté de Serbie au XIXᵉ siècle ; important centre industriel (automobile)." } },
  { name: "Subotica", lat: 46.1008, lon: 19.6650, population: { value: 123_952, year: 2022, source: SRC, sourceUrl: URL, note: "Proche de la frontière hongroise, au cœur de la Voïvodine multiethnique." } },
];
