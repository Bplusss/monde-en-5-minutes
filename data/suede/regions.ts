import type { Region } from "@/lib/types";

const SRC = "Wikipedia (données SCB)";
const URL = "https://en.wikipedia.org/wiki/Counties_of_Sweden";

/** Les 21 comtés (län) suédois. Populations 2021, dernières données consolidées disponibles. */
export const regions: Region[] = [
  { code: "SE-AB", name: "Stockholm", population: { value: 2_415_139, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_519, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-C", name: "Uppsala", population: { value: 395_026, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_207, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-D", name: "Södermanland", population: { value: 301_801, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_102, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-E", name: "Östergötland", population: { value: 469_704, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 10_602, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-F", name: "Jönköping", population: { value: 367_064, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 10_495, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-G", name: "Kronoberg", population: { value: 203_340, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_466, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-H", name: "Kalmar", population: { value: 247_175, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 11_218, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-I", name: "Gotland", population: { value: 61_001, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_151, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-K", name: "Blekinge", population: { value: 158_937, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_946, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-M", name: "Skåne", population: { value: 1_402_425, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 11_035, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-N", name: "Halland", population: { value: 340_243, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_461, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-O", name: "Västra Götaland", population: { value: 1_744_859, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 23_949, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-S", name: "Värmland", population: { value: 283_196, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 17_591, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-T", name: "Örebro", population: { value: 306_792, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_546, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-U", name: "Västmanland", population: { value: 278_967, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_146, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-W", name: "Dalarna", population: { value: 288_387, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 28_189, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-X", name: "Gävleborg", population: { value: 287_767, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 18_199, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-Y", name: "Västernorrland", population: { value: 244_193, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 21_684, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-Z", name: "Jämtland", population: { value: 132_054, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 49_341, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-AC", name: "Västerbotten", population: { value: 274_563, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 55_186, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "SE-BD", name: "Norrbotten", population: { value: 249_693, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 98_245, unit: "km²", source: SRC, sourceUrl: URL } },
];
