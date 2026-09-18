import type { City } from "@/lib/types";

const SRC = "Statistiques Corée (KOSIS), registre de la population résidente, estimation 2023";

export const cities: City[] = [
  { name: "Séoul", lat: 37.5665, lon: 126.9780, isCapital: true, population: { value: 9_386_034, year: 2023, source: SRC, note: "Capitale et cité spéciale ; cœur d'une région métropolitaine (avec Incheon et le Gyeonggi) qui rassemble plus de la moitié de la population du pays." } },
  { name: "Busan", lat: 35.1796, lon: 129.0756, population: { value: 3_293_362, year: 2023, source: SRC, note: "Deuxième ville et premier port du pays, sur la côte sud-est." } },
  { name: "Incheon", lat: 37.4563, lon: 126.7052, population: { value: 2_997_410, year: 2023, source: SRC, note: "Principale porte aérienne (aéroport international d'Incheon) et portuaire du pays." } },
  { name: "Daegu", lat: 35.8714, lon: 128.6014, population: { value: 2_363_691, year: 2023, source: SRC, note: "Grand centre industriel textile historique du sud-est." } },
  { name: "Daejeon", lat: 36.3504, lon: 127.3845, population: { value: 1_440_387, year: 2023, source: SRC, note: "Pôle national de la recherche scientifique et technologique (Daedeok Innopolis)." } },
  { name: "Gwangju", lat: 35.1595, lon: 126.8526, population: { value: 1_414_157, year: 2023, source: SRC, note: "Principal centre urbain de la région du Jeolla, foyer du soulèvement démocratique de 1980." } },
];
