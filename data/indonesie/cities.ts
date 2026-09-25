import type { City } from "@/lib/types";

const CENSUS = "Badan Pusat Statistik (BPS), recensement 2020";
const CENSUS_URL = "https://en.wikipedia.org/wiki/List_of_Indonesian_cities_by_population";

export const cities: City[] = [
  { name: "Jakarta", lat: -6.2088, lon: 106.8456, isCapital: true, population: { value: 10_562_088, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Cœur de Jabodetabek, aire métropolitaine dépassant 30 millions d'habitants." } },
  { name: "Surabaya", lat: -7.2575, lon: 112.7521, population: { value: 2_874_314, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Deuxième ville du pays, principal port et centre industriel de l'est de Java." } },
  { name: "Bandung", lat: -6.9175, lon: 107.6191, population: { value: 2_444_160, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale de Java-Ouest, surnommée « Paris de Java » pour son architecture Art déco." } },
  { name: "Medan", lat: 3.5952, lon: 98.6722, population: { value: 2_435_252, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Plus grande ville de Sumatra." } },
  { name: "Palembang", lat: -2.9761, lon: 104.7754, population: { value: 1_668_848, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Ancienne capitale du royaume de Srivijaya." } },
  { name: "Semarang", lat: -6.9932, lon: 110.4203, population: { value: 1_653_524, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale de Java central, important port historique." } },
  { name: "Makassar", lat: -5.1477, lon: 119.4327, population: { value: 1_423_877, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Principale ville de Sulawesi." } },
  { name: "Denpasar", lat: -8.6705, lon: 115.2126, population: { value: 725_314, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Capitale de Bali, porte d'entrée touristique de l'île." } },
];
