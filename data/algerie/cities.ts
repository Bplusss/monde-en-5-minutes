import type { City } from "@/lib/types";

const ONS = "Office national des statistiques (ONS), recensement du 14 avril 2008 (agglomérations urbaines), via citypopulation.de";
const ONS_URL = "https://www.citypopulation.de/en/algeria/cities/";

export const cities: City[] = [
  { name: "Alger", lat: 36.7538, lon: 3.0588, isCapital: true, population: { value: 2_364_230, year: 2008, source: ONS, sourceUrl: ONS_URL, note: "Capitale et premier port du pays ; dernier recensement publié, la population actuelle est nettement supérieure." } },
  { name: "Oran", lat: 35.6971, lon: -0.6308, population: { value: 803_329, year: 2008, source: ONS, sourceUrl: ONS_URL, note: "Deuxième ville du pays, grand port de l'Ouest et berceau du raï." } },
  { name: "Constantine", lat: 36.365, lon: 6.6147, population: { value: 448_028, year: 2008, source: ONS, sourceUrl: ONS_URL, note: "Ancienne Cirta numide, perchée sur un rocher entaillé par les gorges du Rhumel." } },
  { name: "Annaba", lat: 36.9, lon: 7.7667, population: { value: 342_703, year: 2008, source: ONS, sourceUrl: ONS_URL, note: "Antique Hippone, port de l'Est et pôle sidérurgique (El Hadjar)." } },
  { name: "Blida", lat: 36.47, lon: 2.8277, population: { value: 331_779, year: 2008, source: ONS, sourceUrl: ONS_URL, note: "Au pied de l'Atlas blidéen, au cœur de la plaine agricole de la Mitidja." } },
  { name: "Batna", lat: 35.555, lon: 6.1741, population: { value: 289_504, year: 2008, source: ONS, sourceUrl: ONS_URL, note: "Principale ville des Aurès, proche du site romain de Timgad." } },
  { name: "Djelfa", lat: 34.6728, lon: 3.263, population: { value: 265_833, year: 2008, source: ONS, sourceUrl: ONS_URL, note: "Grande ville des Hauts-Plateaux steppiques." } },
  { name: "Sétif", lat: 36.1911, lon: 5.4137, population: { value: 252_127, year: 2008, source: ONS, sourceUrl: ONS_URL, note: "Carrefour des Hauts-Plateaux de l'Est, à proximité du site romain de Djémila." } },
];
