import type { City } from "@/lib/types";

const INS = "Institut national de la statistique (INS), estimation 2023 (municipalités), via citypopulation.de";
const INS_URL = "https://www.citypopulation.de/en/tunisia/cities/";

export const cities: City[] = [
  { name: "Tunis", lat: 36.8065, lon: 10.1815, isCapital: true, population: { value: 599_368, year: 2023, source: INS, sourceUrl: INS_URL, note: "Commune centre d'une agglomération (Grand Tunis : gouvernorats de Tunis, Ariana, Ben Arous et La Manouba) de près de 2,9 millions d'habitants au recensement de 2024." } },
  { name: "Sfax", lat: 34.7406, lon: 10.7603, population: { value: 286_636, year: 2023, source: INS, sourceUrl: INS_URL, note: "Deuxième ville et principal centre industriel et commercial du pays ; port d'exportation des phosphates et de l'huile d'olive." } },
  { name: "Sousse", lat: 35.8256, lon: 10.6411, population: { value: 250_540, year: 2023, source: INS, sourceUrl: INS_URL, note: "Capitale du Sahel et grande station balnéaire ; médina inscrite à l'UNESCO." } },
  { name: "Bizerte", lat: 37.2744, lon: 9.8739, population: { value: 154_300, year: 2023, source: INS, sourceUrl: INS_URL, note: "Port le plus septentrional d'Afrique, ancienne base navale française évacuée en 1963." } },
  { name: "Kairouan", lat: 35.6781, lon: 10.0963, population: { value: 153_900, year: 2023, source: INS, sourceUrl: INS_URL, note: "Première capitale musulmane du Maghreb, fondée en 670." } },
  { name: "Gabès", lat: 33.8815, lon: 10.0982, population: { value: 107_634, year: 2023, source: INS, sourceUrl: INS_URL, note: "Oasis littorale et pôle de l'industrie chimique des phosphates." } },
  { name: "Gafsa", lat: 34.425, lon: 8.7842, population: { value: 103_400, year: 2023, source: INS, sourceUrl: INS_URL, note: "Centre du bassin minier des phosphates." } },
];
