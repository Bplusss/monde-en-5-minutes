import type { City } from "@/lib/types";

const SRC = "General Authority for Statistics (GASTAT), recensement 2022, via citypopulation.de";
const URL = "https://www.citypopulation.de/en/saudiarabia/cities/";

export const cities: City[] = [
  { name: "Riyad", lat: 24.7136, lon: 46.6753, isCapital: true, population: { value: 6_924_566, year: 2022, source: SRC, sourceUrl: URL, note: "Capitale politique et économique, au cœur du Nejd." } },
  { name: "Djeddah", lat: 21.4858, lon: 39.1925, population: { value: 3_712_917, year: 2022, source: SRC, sourceUrl: URL, note: "Premier port de la mer Rouge et porte d'entrée des pèlerins vers La Mecque." } },
  { name: "La Mecque", lat: 21.3891, lon: 39.8579, population: { value: 2_385_509, year: 2022, source: SRC, sourceUrl: URL, note: "Première ville sainte de l'islam, autour de la Kaaba." } },
  { name: "Médine", lat: 24.5247, lon: 39.5692, population: { value: 1_411_599, year: 2022, source: SRC, sourceUrl: URL, note: "Deuxième ville sainte, où se trouve la mosquée du Prophète." } },
  { name: "Dammam", lat: 26.4207, lon: 50.0888, population: { value: 1_386_166, year: 2022, source: SRC, sourceUrl: URL, note: "Capitale de la région de l'Est, centre de l'industrie pétrolière avec Dhahran et Khobar." } },
  { name: "Hofuf", lat: 25.3833, lon: 49.5867, population: { value: 729_606, year: 2022, source: SRC, sourceUrl: URL, note: "Ville de l'oasis d'Al-Ahsa, l'une des plus grandes palmeraies du monde." } },
  { name: "Tabouk", lat: 28.3835, lon: 36.5662, population: { value: 594_350, year: 2022, source: SRC, sourceUrl: URL, note: "Principale ville du nord-ouest, proche du projet NEOM." } },
];
