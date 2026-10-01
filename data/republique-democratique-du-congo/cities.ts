import type { City } from "@/lib/types";

// Faute de recensement depuis 1984, il n'existe pas de population officielle fiable par ville :
// seule Kinshasa, qui forme une province à part entière, dispose d'une estimation de l'INS.
export const cities: City[] = [
  {
    name: "Kinshasa",
    lat: -4.3217,
    lon: 15.3125,
    isCapital: true,
    population: {
      value: 13_916_000,
      year: 2019,
      source: "Institut national de la statistique (INS), Annuaire statistique 2020, via Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Provinces_of_the_Democratic_Republic_of_the_Congo",
      note: "Estimation pour la ville-province. Fait face à Brazzaville, de l'autre côté du fleuve.",
    },
  },
  { name: "Lubumbashi", lat: -11.6609, lon: 27.4794 },
  { name: "Mbuji-Mayi", lat: -6.136, lon: 23.5898 },
  { name: "Kisangani", lat: 0.5153, lon: 25.191 },
  { name: "Kananga", lat: -5.8962, lon: 22.4166 },
  { name: "Goma", lat: -1.6792, lon: 29.2228 },
  { name: "Bukavu", lat: -2.5083, lon: 28.8608 },
  { name: "Kolwezi", lat: -10.7148, lon: 25.4667 },
  { name: "Matadi", lat: -5.8167, lon: 13.45 },
];
