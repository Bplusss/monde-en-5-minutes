import type { City } from "@/lib/types";

const SRC = "Statistique Canada (recensement de 2021)";
const URL = "https://en.wikipedia.org/wiki/List_of_the_largest_census_metropolitan_areas_in_Canada";

export const cities: City[] = [
  { name: "Toronto", lat: 43.6532, lon: -79.3832, population: { value: 6_202_225, year: 2021, source: SRC, sourceUrl: URL, note: "Région métropolitaine de recensement (RMR)." } },
  { name: "Montréal", lat: 45.5019, lon: -73.5674, population: { value: 4_291_732, year: 2021, source: SRC, sourceUrl: URL, note: "RMR ; plus grande ville à majorité francophone d'Amérique du Nord." } },
  { name: "Vancouver", lat: 49.2827, lon: -123.1207, population: { value: 2_642_825, year: 2021, source: SRC, sourceUrl: URL, note: "RMR." } },
  { name: "Ottawa", lat: 45.4215, lon: -75.6972, isCapital: true, population: { value: 1_488_307, year: 2021, source: SRC, sourceUrl: URL, note: "RMR Ottawa-Gatineau." } },
  { name: "Calgary", lat: 51.0447, lon: -114.0719, population: { value: 1_481_806, year: 2021, source: SRC, sourceUrl: URL, note: "RMR." } },
  { name: "Edmonton", lat: 53.5461, lon: -113.4938, population: { value: 1_418_118, year: 2021, source: SRC, sourceUrl: URL, note: "RMR." } },
  { name: "Québec", lat: 46.8139, lon: -71.2080, population: { value: 839_311, year: 2021, source: SRC, sourceUrl: URL, note: "RMR ; capitale de la province du Québec." } },
  { name: "Winnipeg", lat: 49.8951, lon: -97.1384, population: { value: 834_678, year: 2021, source: SRC, sourceUrl: URL, note: "RMR." } },
];
