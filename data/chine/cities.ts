import type { City } from "@/lib/types";

const SRC = "Bureau national de statistique de Chine (NBS), septième recensement national (2020)";

export const cities: City[] = [
  { name: "Pékin", lat: 39.9042, lon: 116.4074, isCapital: true, population: { value: 21_893_095, year: 2020, source: SRC, note: "Population de l'ensemble de la municipalité, équivalente à une province." } },
  { name: "Shanghai", lat: 31.2304, lon: 121.4737, population: { value: 24_870_895, year: 2020, source: SRC, note: "Ville la plus peuplée de Chine ; principal centre économique et financier du pays." } },
  { name: "Chongqing", lat: 29.5630, lon: 106.5516, population: { value: 32_054_159, year: 2020, source: SRC, note: "Municipalité la plus étendue du pays (environ 82 000 km²), dont l'essentiel reste rural ; la zone urbaine centrale rassemble environ 10 millions d'habitants." } },
  { name: "Guangzhou (Canton)", lat: 23.1291, lon: 113.2644, population: { value: 18_676_605, year: 2020, source: SRC, note: "Capitale de la province du Guangdong, cœur historique du commerce extérieur chinois." } },
  { name: "Shenzhen", lat: 22.5431, lon: 114.0579, population: { value: 17_560_061, year: 2020, source: SRC, note: "Simple village de pêcheurs avant 1980, devenue l'un des principaux pôles technologiques mondiaux." } },
  { name: "Chengdu", lat: 30.5728, lon: 104.0668, population: { value: 20_937_757, year: 2020, source: SRC, note: "Capitale du Sichuan, centre de conservation du panda géant." } },
];
