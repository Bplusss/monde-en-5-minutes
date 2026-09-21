import type { City } from "@/lib/types";

const CAPMAS = "Central Agency for Public Mobilization and Statistics (CAPMAS), estimation au 1er juillet 2023, via citypopulation.de";
const CAPMAS_URL = "https://www.citypopulation.de/en/egypt/cities/";

export const cities: City[] = [
  { name: "Le Caire", lat: 30.0444, lon: 31.2357, isCapital: true, population: { value: 9_801_536, year: 2023, source: CAPMAS, sourceUrl: CAPMAS_URL, note: "Capitale du pays et de la plus grande agglomération d'Afrique et du monde arabe (Grand Caire), qui dépasse 22 millions d'habitants en intégrant Gizeh et les banlieues environnantes." } },
  { name: "Alexandrie", lat: 31.2001, lon: 29.9187, population: { value: 5_362_517, year: 2023, source: CAPMAS, sourceUrl: CAPMAS_URL, note: "Deuxième ville du pays, fondée par Alexandre le Grand en 331 av. J.-C. ; principal port méditerranéen et ancien centre du savoir antique (Grande Bibliothèque, phare d'Alexandrie)." } },
  { name: "Gizeh", lat: 30.0131, lon: 31.2089, population: { value: 4_458_135, year: 2023, source: CAPMAS, sourceUrl: CAPMAS_URL, note: "Contiguë au Caire sur la rive ouest du Nil ; abrite le plateau des pyramides et le Grand Sphinx." } },
  { name: "Port-Saïd", lat: 31.2653, lon: 32.3019, population: { value: 791_749, year: 2023, source: CAPMAS, sourceUrl: CAPMAS_URL, note: "Ville portuaire fondée en 1859 à l'extrémité nord (méditerranéenne) du canal de Suez." } },
  { name: "Suez", lat: 29.9668, lon: 32.5498, population: { value: 716_458, year: 2023, source: CAPMAS, sourceUrl: CAPMAS_URL, note: "Ville portuaire à l'extrémité sud (mer Rouge) du canal de Suez, important centre pétrochimique et industriel." } },
  { name: "Assouan", lat: 24.0889, lon: 32.8998, population: { value: 401_890, year: 2023, source: CAPMAS, sourceUrl: CAPMAS_URL, note: "Ville de Haute-Égypte au bord du lac Nasser, près du haut barrage d'Assouan ; ancienne frontière méridionale de l'Égypte pharaonique vers la Nubie." } },
  { name: "Louxor", lat: 25.6872, lon: 32.6396, population: { value: 284_952, year: 2023, source: CAPMAS, sourceUrl: CAPMAS_URL, note: "Bâtie sur le site de l'antique Thèbes, capitale religieuse de l'Égypte pharaonique ; abrite le temple de Karnak et fait face à la Vallée des Rois." } },
];
