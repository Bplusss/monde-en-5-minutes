import type { City } from "@/lib/types";

const CENSUS = "Philippine Statistics Authority (PSA), recensement 2024 (POPCEN)";
const CENSUS_URL = "https://en.wikipedia.org/wiki/List_of_cities_and_municipalities_in_the_Philippines";

export const cities: City[] = [
  { name: "Manille", lat: 14.5995, lon: 120.9842, isCapital: true, population: { value: 1_902_590, year: 2024, source: CENSUS, sourceUrl: CENSUS_URL, note: "Ville la plus densément peuplée du monde, au cœur de Metro Manila (14 millions d'habitants)." } },
  { name: "Quezon City", lat: 14.6509, lon: 121.0486, population: { value: 3_084_270, year: 2024, source: CENSUS, sourceUrl: CENSUS_URL, note: "Ville la plus peuplée du pays, capitale officielle de 1948 à 1976." } },
  { name: "Davao", lat: 7.0639, lon: 125.6083, population: { value: 1_848_947, year: 2024, source: CENSUS, sourceUrl: CENSUS_URL, note: "Première ville de Mindanao, fief politique de la famille Duterte." } },
  { name: "Caloocan", lat: 14.6571, lon: 120.9841, population: { value: 1_712_945, year: 2024, source: CENSUS, sourceUrl: CENSUS_URL } },
  { name: "Taguig", lat: 14.5176, lon: 121.0509, population: { value: 1_308_085, year: 2024, source: CENSUS, sourceUrl: CENSUS_URL, note: "Accueille le quartier d'affaires de Bonifacio Global City." } },
  { name: "Zamboanga", lat: 6.9214, lon: 122.079, population: { value: 1_018_849, year: 2024, source: CENSUS, sourceUrl: CENSUS_URL, note: "Grand port de l'ouest de Mindanao, foyer du chavacano." } },
  { name: "Cebu", lat: 10.309, lon: 123.893, population: { value: 965_332, year: 2024, source: CENSUS, sourceUrl: CENSUS_URL, note: "Centre des Visayas et première ville fondée par les Espagnols (1565)." } },
  { name: "Cagayan de Oro", lat: 8.4763, lon: 124.6415, population: { value: 741_617, year: 2024, source: CENSUS, sourceUrl: CENSUS_URL } },
];
