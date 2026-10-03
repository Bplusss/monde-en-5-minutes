import type { City } from "@/lib/types";

const TUIK = "Institut turc de la statistique (TÜİK), ADNKS, population de la province métropolitaine au 31 décembre 2025";
const TUIK_URL = "https://veriportali.tuik.gov.tr/tr/press/53899";

export const cities: City[] = [
  { name: "Istanbul", lat: 41.0082, lon: 28.9784, population: { value: 15_754_053, year: 2025, source: TUIK, sourceUrl: TUIK_URL, note: "Ancienne Byzance puis Constantinople, capitale ottomane jusqu'en 1922 ; première ville et centre économique du pays." } },
  { name: "Ankara", lat: 39.9334, lon: 32.8597, isCapital: true, population: { value: 5_910_320, year: 2025, source: TUIK, sourceUrl: TUIK_URL, note: "Capitale depuis 1923, au centre du plateau anatolien ; abrite le mausolée d'Atatürk (Anıtkabir)." } },
  { name: "Izmir", lat: 38.4237, lon: 27.1428, population: { value: 4_504_185, year: 2025, source: TUIK, sourceUrl: TUIK_URL, note: "Ancienne Smyrne, grand port de la mer Égée." } },
  { name: "Bursa", lat: 40.1885, lon: 29.061, population: { value: 3_263_011, year: 2025, source: TUIK, sourceUrl: TUIK_URL, note: "Première capitale ottomane ; principal centre de l'industrie automobile turque." } },
  { name: "Antalya", lat: 36.8969, lon: 30.7133, population: { value: 2_777_677, year: 2025, source: TUIK, sourceUrl: TUIK_URL, note: "Capitale du tourisme balnéaire sur la côte méditerranéenne." } },
  { name: "Konya", lat: 37.8746, lon: 32.4932, population: { value: 2_343_409, year: 2025, source: TUIK, sourceUrl: TUIK_URL, note: "Ancienne capitale seldjoukide, ville de Mevlana." } },
  { name: "Gaziantep", lat: 37.0662, lon: 37.3833, population: { value: 2_222_415, year: 2025, source: TUIK, sourceUrl: TUIK_URL, note: "Pôle industriel du Sud-Est, réputé pour sa gastronomie et ses pistaches." } },
  { name: "Diyarbakır", lat: 37.9144, lon: 40.2306, population: { value: 1_852_356, year: 2025, source: TUIK, sourceUrl: TUIK_URL, note: "Principale ville à majorité kurde, entourée de remparts sur le Tigre." } },
];
