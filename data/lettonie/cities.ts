import type { City } from "@/lib/types";

const SRC = "CSP (Centrālā statistikas pārvalde)";
const URL = "https://www.citypopulation.de/en/latvia/cities/";

export const cities: City[] = [
  { name: "Riga", lat: 56.9496, lon: 24.1052, isCapital: true, population: { value: 591_882, year: 2025, source: SRC, sourceUrl: URL, note: "Estimation au 1ᵉʳ janvier 2025." } },
  { name: "Daugavpils", lat: 55.8748, lon: 26.5361, population: { value: 78_112, year: 2025, source: SRC, sourceUrl: URL, note: "Ville à forte majorité russophone, dans l'est du pays (Latgale)." } },
  { name: "Liepāja", lat: 56.5053, lon: 21.0107, population: { value: 67_398, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Jelgava", lat: 56.6511, lon: 23.7214, population: { value: 54_821, year: 2025, source: SRC, sourceUrl: URL } },
  { name: "Jūrmala", lat: 56.9680, lon: 23.7704, population: { value: 51_933, year: 2025, source: SRC, sourceUrl: URL, note: "Station balnéaire sur le golfe de Riga, seule grande ville lettone en croissance démographique." } },
];
