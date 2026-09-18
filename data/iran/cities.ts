import type { City } from "@/lib/types";

const SRC = "Centre statistique d'Iran (SCI), recensement national de 2016";

export const cities: City[] = [
  { name: "Téhéran", lat: 35.6892, lon: 51.3890, isCapital: true, population: { value: 8_693_706, year: 2016, source: SRC, note: "Capitale et de loin la plus grande ville du pays ; l'agglomération du Grand Téhéran rassemble environ 15 millions d'habitants." } },
  { name: "Mashhad", lat: 36.2605, lon: 59.6168, population: { value: 3_001_184, year: 2016, source: SRC, note: "Deuxième ville du pays, dans le nord-est ; abrite le sanctuaire de l'imam Reza, l'un des principaux lieux de pèlerinage chiites au monde." } },
  { name: "Ispahan (Esfahan)", lat: 32.6546, lon: 51.6680, population: { value: 1_961_260, year: 2016, source: SRC, note: "Ancienne capitale safavide, célèbre pour la place Naghsh-e Jahan, classée au patrimoine mondial de l'UNESCO." } },
  { name: "Karaj", lat: 35.8400, lon: 50.9391, population: { value: 1_592_492, year: 2016, source: SRC, note: "Capitale de la province d'Alborz, aux portes de Téhéran, dont elle est devenue une extension urbaine majeure." } },
  { name: "Chiraz (Shiraz)", lat: 29.5918, lon: 52.5837, population: { value: 1_565_572, year: 2016, source: SRC, note: "Ville des poètes Hafez et Saadi, porte d'entrée du site antique de Persépolis." } },
  { name: "Tabriz", lat: 38.0800, lon: 46.2919, population: { value: 1_558_693, year: 2016, source: SRC, note: "Principale ville de l'Azerbaïdjan iranien, historique carrefour commercial sur la route de la soie." } },
];
