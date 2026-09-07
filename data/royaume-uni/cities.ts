import type { City } from "@/lib/types";

const SRC = "ONS — Recensement 2011";
const URL = "https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_United_Kingdom";
const NOTE = "Aire urbaine ; l'ONS n'a pas republié d'équivalent après le recensement de 2021.";

export const cities: City[] = [
  { name: "Londres", lat: 51.5074, lon: -0.1278, isCapital: true, population: { value: 9_787_426, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Manchester", lat: 53.4808, lon: -2.2426, population: { value: 2_553_379, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Birmingham", lat: 52.4862, lon: -1.8904, population: { value: 2_440_986, year: 2011, source: SRC, sourceUrl: URL, note: "Aire urbaine des West Midlands ; " + NOTE } },
  { name: "Glasgow", lat: 55.8642, lon: -4.2518, population: { value: 957_620, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Liverpool", lat: 53.4084, lon: -2.9916, population: { value: 864_122, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Sheffield", lat: 53.3811, lon: -1.4701, population: { value: 685_368, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Bristol", lat: 51.4545, lon: -2.5879, population: { value: 617_280, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Édimbourg", lat: 55.9533, lon: -3.1883, population: { value: 482_270, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Cardiff", lat: 51.4816, lon: -3.1791, population: { value: 447_287, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
];
