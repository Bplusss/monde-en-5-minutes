import type { Region } from "@/lib/types";

const SRC = "Statistiques Corée (KOSIS), registre de la population résidente, estimation 2023";
const URL = "https://kosis.kr/eng/";

/** Les 17 divisions administratives de premier niveau de la Corée du Sud. Codes ISO 3166-2:KR. */
export const regions: Region[] = [
  { code: "KR-11", name: "Séoul", population: { value: 9_386_034, year: 2023, source: SRC, sourceUrl: URL, note: "Cité spéciale, capitale." } },
  { code: "KR-26", name: "Busan", population: { value: 3_293_362, year: 2023, source: SRC, sourceUrl: URL, note: "Deuxième ville et premier port du pays." } },
  { code: "KR-27", name: "Daegu", population: { value: 2_363_691, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-28", name: "Incheon", population: { value: 2_997_410, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-29", name: "Gwangju", population: { value: 1_414_157, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-30", name: "Daejeon", population: { value: 1_440_387, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-31", name: "Ulsan", population: { value: 1_099_913, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-50", name: "Sejong", population: { value: 386_525, year: 2023, source: SRC, sourceUrl: URL, note: "Cité spéciale autonome créée en 2012." } },
  { code: "KR-41", name: "Gyeonggi", population: { value: 13_630_821, year: 2023, source: SRC, sourceUrl: URL, note: "Province la plus peuplée du pays." } },
  { code: "KR-42", name: "Gangwon", population: { value: 1_527_807, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-43", name: "Chungcheong du Nord", population: { value: 1_593_469, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-44", name: "Chungcheong du Sud", population: { value: 2_123_037, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-45", name: "Jeolla du Nord", population: { value: 1_742_231, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-46", name: "Jeolla du Sud", population: { value: 1_803_044, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-47", name: "Gyeongsang du Nord", population: { value: 2_550_499, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-48", name: "Gyeongsang du Sud", population: { value: 3_251_158, year: 2023, source: SRC, sourceUrl: URL } },
  { code: "KR-49", name: "Jeju", population: { value: 675_252, year: 2023, source: SRC, sourceUrl: URL, note: "Île volcanique classée au patrimoine mondial de l'UNESCO." } },
];
