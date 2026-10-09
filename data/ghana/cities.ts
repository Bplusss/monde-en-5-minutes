import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Accra", lat: 5.6037, lon: -0.187, isCapital: true, population: { value: 5_455_692, year: 2021, source: "Ghana Statistical Service (recensement 2021)", sourceUrl: "https://census2021.statsghana.gov.gh/", note: "Région du Grand Accra, qui correspond à l'agglomération de la capitale." } },
  { name: "Kumasi", lat: 6.6885, lon: -1.6244 },
  { name: "Tamale", lat: 9.4008, lon: -0.8393 },
  { name: "Sekondi-Takoradi", lat: 4.934, lon: -1.7137 },
  { name: "Cape Coast", lat: 5.1053, lon: -1.2466 },
  { name: "Sunyani", lat: 7.3349, lon: -2.3123 },
];
