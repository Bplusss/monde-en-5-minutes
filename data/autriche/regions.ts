import type { Region } from "@/lib/types";

/** Les 9 Länder autrichiens, noms français usuels. */
export const regions: Region[] = [
  { code: "AT-1", name: "Burgenland", population: { value: 297_583, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
  { code: "AT-2", name: "Carinthie", population: { value: 564_513, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
  { code: "AT-3", name: "Basse-Autriche", population: { value: 1_698_796, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
  { code: "AT-4", name: "Haute-Autriche", population: { value: 1_505_140, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
  { code: "AT-5", name: "Salzbourg (Land)", population: { value: 560_710, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
  { code: "AT-6", name: "Styrie", population: { value: 1_252_922, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
  { code: "AT-7", name: "Tyrol", population: { value: 764_102, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
  { code: "AT-8", name: "Vorarlberg", population: { value: 401_647, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
  { code: "AT-9", name: "Vienne", population: { value: 1_931_593, year: 2022, source: "Statistik Austria", sourceUrl: "https://www.statistik.at/" } },
];
