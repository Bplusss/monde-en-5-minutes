import type { Region } from "@/lib/types";

const SRC = "Agence nationale de la statistique et de la démographie (ANSD), RGPH-5 2023";
const URL = "https://www.ansd.sn/sites/default/files/recensements/rapport/Chapitre%201-%20ETAT-STRUCTURE-POPULATION-Rapport-Provisoire-RGPH5_juillet2024_0.pdf";

const pop = (value: number, note?: string) => ({ value, year: 2023, source: SRC, sourceUrl: URL, ...(note ? { note } : {}) });
const area = (value: number) => ({ value, unit: "km²", year: 2023, source: SRC, sourceUrl: URL });

/** Les 14 régions administratives du Sénégal, codées selon ISO 3166-2:SN. */
export const regions: Region[] = [
  { code: "SN-DK", name: "Dakar", population: pop(4_004_426, "22 % de la population nationale sur 0,3 % du territoire (7 478 hab./km²)."), areaKm2: area(535) },
  { code: "SN-TH", name: "Thiès", population: pop(2_463_677), areaKm2: area(6_586) },
  { code: "SN-DB", name: "Diourbel", population: pop(2_080_333, "Comprend Touba, ville sainte du mouridisme et deuxième agglomération du pays."), areaKm2: area(4_860) },
  { code: "SN-KL", name: "Kaolack", population: pop(1_336_720), areaKm2: area(5_310) },
  { code: "SN-SL", name: "Saint-Louis", population: pop(1_202_441), areaKm2: area(19_010) },
  { code: "SN-LG", name: "Louga", population: pop(1_125_908), areaKm2: area(25_619) },
  { code: "SN-TC", name: "Tambacounda", population: pop(987_152, "Région la plus vaste (21,7 % du territoire), la moins dense après Kédougou."), areaKm2: area(42_613) },
  { code: "SN-KD", name: "Kolda", population: pop(914_798), areaKm2: area(13_752) },
  { code: "SN-FK", name: "Fatick", population: pop(906_918), areaKm2: area(7_010) },
  { code: "SN-MT", name: "Matam", population: pop(831_630), areaKm2: area(28_830) },
  { code: "SN-KA", name: "Kaffrine", population: pop(820_405, "Détachée de Kaolack en 2008."), areaKm2: area(11_057) },
  { code: "SN-ZG", name: "Ziguinchor", population: pop(617_567, "Basse-Casamance, foyer du conflit casamançais."), areaKm2: area(7_329) },
  { code: "SN-SE", name: "Sédhiou", population: pop(589_266, "Détachée de Kolda en 2008."), areaKm2: area(7_353) },
  { code: "SN-KE", name: "Kédougou", population: pop(245_147, "Détachée de Tambacounda en 2008 ; région aurifère et point culminant du pays."), areaKm2: area(16_904) },
];
