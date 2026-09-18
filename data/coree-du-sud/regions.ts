import type { Region } from "@/lib/types";

const SRC = "Statistiques Corée (KOSIS), registre de la population résidente, estimation 2023";
const URL = "https://kosis.kr/eng/";

/**
 * Les 17 divisions administratives de premier niveau de la Corée du Sud :
 * 1 cité spéciale (Séoul), 6 villes métropolitaines, 1 cité spéciale
 * autonome (Sejong), 6 provinces (do) et 3 provinces spéciales autonomes
 * (Gangwon, Jeonbuk et Jeju). Codes ISO 3166-2:KR, identiques à ceux du
 * jeu de données Natural Earth sous-jacent (public/geo/coree-du-sud-regions.json) —
 * aucune anomalie de code relevée, y compris pour Sejong (KR-50), pourtant
 * la plus récente des 17 divisions (créée en 2012).
 */
export const regions: Region[] = [
  { code: "KR-11", name: "Séoul", population: { value: 9_386_034, year: 2023, source: SRC, sourceUrl: URL, note: "Cité spéciale, capitale du pays ; la région métropolitaine élargie (Séoul, Incheon, Gyeonggi) rassemble plus de la moitié de la population sud-coréenne." } },
  { code: "KR-26", name: "Busan", population: { value: 3_293_362, year: 2023, source: SRC, sourceUrl: URL, note: "Deuxième ville et premier port du pays." } },
  { code: "KR-27", name: "Daegu", population: { value: 2_363_691, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-28", name: "Incheon", population: { value: 2_997_410, year: 2023, source: SRC, sourceUrl: URL, note: "Principale porte aérienne et portuaire du pays, aux portes de Séoul." } },
  { code: "KR-29", name: "Gwangju", population: { value: 1_414_157, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-30", name: "Daejeon", population: { value: 1_440_387, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-31", name: "Ulsan", population: { value: 1_099_913, year: 2023, source: SRC, sourceUrl: URL, note: "Grand pôle industriel (automobile, construction navale, pétrochimie)." } },
  { code: "KR-50", name: "Sejong", population: { value: 386_525, year: 2023, source: SRC, sourceUrl: URL, note: "Cité spéciale autonome créée en 2012 pour accueillir une partie de l'administration centrale délocalisée de Séoul ; la plus récente et la moins peuplée des 17 divisions." } },
  { code: "KR-41", name: "Gyeonggi", population: { value: 13_630_821, year: 2023, source: SRC, sourceUrl: URL, note: "Province la plus peuplée du pays, elle encercle Séoul et Incheon." } },
  { code: "KR-42", name: "Gangwon", population: { value: 1_527_807, year: 2023, source: SRC, sourceUrl: URL, note: "Devenue « province spéciale autonome de Gangwon » en juin 2023, avec des compétences élargies notamment en matière de développement régional et de tourisme." } },
  { code: "KR-43", name: "Chungcheong du Nord", population: { value: 1_593_469, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-44", name: "Chungcheong du Sud", population: { value: 2_123_037, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-45", name: "Jeolla du Nord", population: { value: 1_742_231, year: 2023, source: SRC, sourceUrl: URL, note: "Devenue « province spéciale autonome de Jeonbuk » en janvier 2024." } },
  { code: "KR-46", name: "Jeolla du Sud", population: { value: 1_803_044, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-47", name: "Gyeongsang du Nord", population: { value: 2_550_499, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-48", name: "Gyeongsang du Sud", population: { value: 3_251_158, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-49", name: "Jeju", population: { value: 675_252, year: 2023, source: SRC, sourceUrl: URL, note: "Province spéciale autonome depuis 2006 ; île volcanique classée au patrimoine mondial de l'UNESCO." } },
];
