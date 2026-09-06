import type { City } from "@/lib/types";

const SRC = "INSEE";
const URL = "https://www.insee.fr/fr/statistiques/1906659";

export const cities: City[] = [
  { name: "Paris", lat: 48.8566, lon: 2.3522, isCapital: true, population: { value: 2_102_650, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Marseille", lat: 43.2965, lon: 5.3698, population: { value: 873_076, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Lyon", lat: 45.7640, lon: 4.8357, population: { value: 522_250, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Toulouse", lat: 43.6047, lon: 1.4442, population: { value: 511_620, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Nice", lat: 43.7102, lon: 7.2620, population: { value: 342_522, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Nantes", lat: 47.2184, lon: -1.5536, population: { value: 320_732, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Montpellier", lat: 43.6108, lon: 3.8767, population: { value: 302_454, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Strasbourg", lat: 48.5734, lon: 7.7521, population: { value: 291_313, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Bordeaux", lat: 44.8378, lon: -0.5792, population: { value: 261_804, year: 2022, source: SRC, sourceUrl: URL } },
  { name: "Lille", lat: 50.6292, lon: 3.0573, population: { value: 233_098, year: 2022, source: SRC, sourceUrl: URL } },
];
