import type { Region } from "@/lib/types";

const SRC = "Danmarks Statistik";
const URL = "https://www.dst.dk/da/Statistik/emner/borgere/befolkning/befolkningstal";

/** Les 5 régions administratives danoises (réforme de 2007), compétentes notamment en matière de santé. */
export const regions: Region[] = [
  { code: "HOV", name: "Hovedstaden", population: { value: 1_862_294, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SJÆ", name: "Sjælland", population: { value: 845_155, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "SYD", name: "Syddanmark", population: { value: 1_244_998, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "MID", name: "Midtjylland", population: { value: 1_344_723, year: 2025, source: SRC, sourceUrl: URL } },
  { code: "NOR", name: "Nordjylland", population: { value: 591_411, year: 2025, source: SRC, sourceUrl: URL } },
];
