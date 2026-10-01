import type { City } from "@/lib/types";

const HCP = "Haut-Commissariat au Plan (HCP), recensement du 1er septembre 2024, via citypopulation.de";
const HCP_URL = "https://www.citypopulation.de/en/morocco/cities/";

export const cities: City[] = [
  { name: "Rabat", lat: 34.0209, lon: -6.8416, isCapital: true, population: { value: 515_619, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Capitale politique et administrative, au cœur d'une agglomération qui comprend Salé et Témara." } },
  { name: "Casablanca", lat: 33.5731, lon: -7.5898, population: { value: 3_218_036, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Plus grande ville et capitale économique du pays, premier port et place financière." } },
  { name: "Tanger", lat: 35.7595, lon: -5.834, population: { value: 1_275_428, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Sur le détroit de Gibraltar ; pôle industriel et portuaire en forte croissance." } },
  { name: "Fès", lat: 34.0181, lon: -5.0078, population: { value: 1_182_963, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Capitale des Idrissides, centre religieux et intellectuel, avec la médina de Fès el-Bali." } },
  { name: "Marrakech", lat: 31.6295, lon: -7.9811, population: { value: 1_014_813, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Fondée par les Almoravides ; première destination touristique du pays." } },
  { name: "Salé", lat: 34.0331, lon: -6.7985, population: { value: 945_101, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Face à Rabat, sur l'autre rive du Bouregreg." } },
  { name: "Meknès", lat: 33.8935, lon: -5.5473, population: { value: 556_512, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Ville impériale de Moulay Ismaïl, au cœur d'une région agricole." } },
  { name: "Oujda", lat: 34.6814, lon: -1.9086, population: { value: 506_224, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Principale ville de l'Oriental, près de la frontière algérienne, fermée depuis 1994." } },
  { name: "Agadir", lat: 30.4278, lon: -9.5981, population: { value: 504_768, year: 2024, source: HCP, sourceUrl: HCP_URL, note: "Reconstruite après le séisme de 1960 ; station balnéaire et port de pêche du Souss." } },
];
