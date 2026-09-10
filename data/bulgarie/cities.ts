import type { City } from "@/lib/types";

const SRC = "NSI (recensement 2021)";
const URL = "https://www.nsi.bg/sites/default/files/files/pressreleases/Census2021_population_en.pdf";

export const cities: City[] = [
  { name: "Sofia", lat: 42.6977, lon: 23.3219, isCapital: true, population: { value: 1_183_454, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Plovdiv", lat: 42.1354, lon: 24.7453, population: { value: 319_612, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Varna", lat: 43.2141, lon: 27.9147, population: { value: 310_664, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Bourgas", lat: 42.5048, lon: 27.4626, population: { value: 189_741, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Roussé", lat: 43.8564, lon: 25.9536, population: { value: 124_787, year: 2021, source: SRC, sourceUrl: URL } },
  { name: "Stara Zagora", lat: 42.4258, lon: 25.6345, population: { value: 122_536, year: 2021, source: SRC, sourceUrl: URL } },
];
