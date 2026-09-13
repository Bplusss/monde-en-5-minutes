import type { City } from "@/lib/types";

const SRC = "Recensement de l'Inde (2011)";
const URL = "https://en.wikipedia.org/wiki/List_of_cities_in_India_by_population";
const NOTE = "Population de la municipalité proprement dite (hors agglomération élargie) au dernier recensement complet ; le recensement suivant, prévu en 2021, a été reporté sine die.";

export const cities: City[] = [
  { name: "New Delhi", lat: 28.6139, lon: 77.2090, isCapital: true, population: { value: 11_034_555, year: 2011, source: SRC, sourceUrl: URL, note: "Chiffre pour l'ensemble du Territoire de la capitale nationale (Delhi) ; New Delhi proprement dite n'est qu'un district administratif de quelques centaines de milliers d'habitants au sein de cette agglomération." } },
  { name: "Mumbai", lat: 19.0760, lon: 72.8777, population: { value: 12_442_373, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Bengaluru", lat: 12.9716, lon: 77.5946, population: { value: 8_443_675, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Hyderabad", lat: 17.3850, lon: 78.4867, population: { value: 6_993_262, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Chennai", lat: 13.0827, lon: 80.2707, population: { value: 6_748_026, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Ahmedabad", lat: 23.0225, lon: 72.5714, population: { value: 5_577_940, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Kolkata", lat: 22.5726, lon: 88.3639, population: { value: 4_496_694, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { name: "Srinagar", lat: 34.0837, lon: 74.7973, population: { value: 1_273_312, year: 2011, source: SRC, sourceUrl: URL, note: "Capitale d'été du territoire de l'Union du Jammu-et-Cachemire." } },
];
