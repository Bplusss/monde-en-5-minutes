import type { City } from "@/lib/types";

const SRC = "Wikipedia (données Statistics Sweden)";
const URL = "https://en.wikipedia.org/wiki/List_of_urban_areas_in_Sweden_by_population";

export const cities: City[] = [
  { name: "Stockholm", lat: 59.3293, lon: 18.0686, isCapital: true, population: { value: 1_652_895, year: 2023, source: SRC, sourceUrl: URL } },
  { name: "Göteborg", lat: 57.7089, lon: 11.9746, population: { value: 674_529, year: 2023, source: SRC, sourceUrl: URL } },
  { name: "Malmö", lat: 55.6050, lon: 13.0038, population: { value: 339_316, year: 2023, source: SRC, sourceUrl: URL } },
  { name: "Uppsala", lat: 59.8586, lon: 17.6389, population: { value: 174_982, year: 2023, source: SRC, sourceUrl: URL } },
];
