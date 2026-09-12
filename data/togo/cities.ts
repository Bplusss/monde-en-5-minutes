import type { City } from "@/lib/types";

const INSEED = "INSEED (RGPH-5)";
const WIKI = "Wikipedia";

export const cities: City[] = [
  { name: "Lomé", lat: 6.1375, lon: 1.2125, isCapital: true, population: { value: 1_305_681, year: 2022, source: INSEED, note: "Commune de Lomé ; l'agglomération du Grand Lomé compte environ 2,19 millions d'habitants." } },
  { name: "Sokodé", lat: 8.9833, lon: 1.1333, population: { value: 118_852, year: 2010, source: WIKI, sourceUrl: "https://fr.wikipedia.org/wiki/Sokod%C3%A9" } },
  { name: "Kara", lat: 9.55, lon: 1.19, population: { value: 158_090, year: 2022, source: INSEED, sourceUrl: "https://fr.wikipedia.org/wiki/Kara_(Togo)" } },
  { name: "Atakpamé", lat: 7.5289, lon: 1.1269, population: { value: 84_979, year: 2012, source: WIKI, sourceUrl: "https://fr.wikipedia.org/wiki/Atakpam%C3%A9" } },
  { name: "Kpalimé", lat: 6.91, lon: 0.6281, population: { value: 75_084, year: 2010, source: WIKI, sourceUrl: "https://fr.wikipedia.org/wiki/Kpalim%C3%A9" } },
  { name: "Dapaong", lat: 10.8678, lon: 0.2036, population: { value: 117_675, year: 2023, source: WIKI, sourceUrl: "https://fr.wikipedia.org/wiki/Dapaong" } },
];
