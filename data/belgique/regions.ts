import type { Region } from "@/lib/types";

const SRC = "Statbel";
const URL = "https://statbel.fgov.be/fr";

/** Les 10 provinces belges (la Région de Bruxelles-Capitale n'est pas divisée en provinces). */
export const regions: Region[] = [
  { code: "VAN", name: "Anvers", population: { value: 1_926_522, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_876, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "VLI", name: "Limbourg", population: { value: 900_098, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_427, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "VOV", name: "Flandre-Orientale", population: { value: 1_572_002, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_007, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "VBR", name: "Brabant flamand", population: { value: 1_196_773, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_118, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "VWV", name: "Flandre-Occidentale", population: { value: 1_226_375, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_197, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "WBR", name: "Brabant wallon", population: { value: 414_130, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_097, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "WHT", name: "Hainaut", population: { value: 1_360_074, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_813, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "WLG", name: "Liège", population: { value: 1_119_038, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_857, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "WLX", name: "Luxembourg", population: { value: 295_146, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_459, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "WNA", name: "Namur", population: { value: 503_895, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_675, unit: "km²", source: SRC, sourceUrl: URL } },
];
