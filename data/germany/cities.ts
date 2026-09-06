import type { City } from "@/lib/types";

const SRC = "Destatis";
const URL = "https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/_inhalt.html";

export const cities: City[] = [
  { name: "Berlin", lat: 52.52, lon: 13.405, isCapital: true, population: { value: 3_913_644, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Hambourg", lat: 53.5511, lon: 9.9937, population: { value: 1_860_000, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Munich", lat: 48.1351, lon: 11.582, population: { value: 1_612_429, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Cologne", lat: 50.9375, lon: 6.9603, population: { value: 1_090_473, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Francfort-sur-le-Main", lat: 50.1109, lon: 8.6821, population: { value: 776_843, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Stuttgart", lat: 48.7758, lon: 9.1829, population: { value: 612_700, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Düsseldorf", lat: 51.2277, lon: 6.7735, population: { value: 618_700, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Leipzig", lat: 51.3397, lon: 12.3731, population: { value: 633_592, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Dortmund", lat: 51.5136, lon: 7.4653, population: { value: 612_165, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Essen", lat: 51.4556, lon: 7.0116, population: { value: 586_608, year: 2023, source: SRC, sourceUrl: URL } },
];
