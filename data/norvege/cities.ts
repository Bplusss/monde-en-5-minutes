import type { City } from "@/lib/types";

const SRC = "SSB (Statistisk sentralbyrå)";
const URL = "https://www.ssb.no/en/befolkning/folketall/statistikk/tettsteders-befolkning-og-areal";

export const cities: City[] = [
  { name: "Oslo", lat: 59.9139, lon: 10.7522, isCapital: true, population: { value: 1_082_575, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Bergen", lat: 60.3913, lon: 5.3221, population: { value: 269_548, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Stavanger/Sandnes", lat: 58.97, lon: 5.7331, population: { value: 234_757, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Trondheim", lat: 63.4305, lon: 10.3951, population: { value: 196_948, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Drammen", lat: 59.744, lon: 10.2045, population: { value: 122_955, year: 2024, source: SRC, sourceUrl: URL } },
  { name: "Fredrikstad/Sarpsborg", lat: 59.2181, lon: 10.9298, population: { value: 120_332, year: 2024, source: SRC, sourceUrl: URL } },
];
