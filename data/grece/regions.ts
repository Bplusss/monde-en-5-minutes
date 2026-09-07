import type { Region } from "@/lib/types";

const SRC = "ELSTAT / Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Regions_of_Greece";

/** Les 13 régions administratives (périphéries) grecques. */
export const regions: Region[] = [
  { code: "ATT", name: "Attique", population: { value: 3_784_565, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_808, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "CGR", name: "Grèce-Centrale", population: { value: 505_073, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 15_549, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "CMA", name: "Macédoine-Centrale", population: { value: 1_778_896, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 18_811, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "CRE", name: "Crète", population: { value: 622_491, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_336, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "EMT", name: "Macédoine-Orientale-et-Thrace", population: { value: 561_834, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 14_157, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "EPI", name: "Épire", population: { value: 321_108, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_203, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "ION", name: "Îles-Ioniennes", population: { value: 200_642, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_307, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "NAE", name: "Égée-du-Nord", population: { value: 201_007, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_836, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "PEL", name: "Péloponnèse", population: { value: 531_598, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 15_490, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SAE", name: "Égée-du-Sud", population: { value: 327_246, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_286, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "THE", name: "Thessalie", population: { value: 678_747, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 14_037, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "WGR", name: "Grèce-Occidentale", population: { value: 640_243, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 11_350, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "WMA", name: "Macédoine-Occidentale", population: { value: 247_270, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_451, unit: "km²", source: SRC, sourceUrl: URL } },
];
