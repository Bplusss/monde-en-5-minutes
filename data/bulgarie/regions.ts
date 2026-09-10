import type { Region } from "@/lib/types";

const SRC = "NSI (recensement 2021) / Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Provinces_of_Bulgaria";

/** Les 28 provinces (oblasti) bulgares. Population et superficie : recensement 2021. */
export const regions: Region[] = [
  { code: "BG-01", name: "Blagoevgrad", population: { value: 292_227, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_449.47, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-02", name: "Bourgas", population: { value: 380_286, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 7_748.07, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-03", name: "Varna", population: { value: 432_198, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_819.47, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-04", name: "Veliko Tarnovo", population: { value: 207_371, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_661.57, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-05", name: "Vidin", population: { value: 75_408, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_032.88, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-06", name: "Vratsa", population: { value: 152_813, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_619.77, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-07", name: "Gabrovo", population: { value: 98_387, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_023.01, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-08", name: "Dobritch", population: { value: 150_146, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_719.71, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-09", name: "Kardjali", population: { value: 141_177, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_209.11, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-10", name: "Kyustendil", population: { value: 111_736, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_051.52, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-11", name: "Lovech", population: { value: 116_394, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_128.76, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-12", name: "Montana", population: { value: 119_950, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_635.38, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-13", name: "Pazardjik", population: { value: 229_814, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_456.92, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-14", name: "Pernik", population: { value: 114_162, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_394.22, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-15", name: "Pleven", population: { value: 226_120, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_653.32, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-16", name: "Plovdiv", population: { value: 634_497, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_972.89, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-17", name: "Razgrad", population: { value: 103_223, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_639.74, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-18", name: "Roussé", population: { value: 193_483, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_803.36, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-19", name: "Silistra", population: { value: 97_770, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_846.29, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-20", name: "Sliven", population: { value: 172_690, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_544.07, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-21", name: "Smolyan", population: { value: 96_284, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_192.85, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-22", name: "Sofia-Ville", population: { value: 1_274_290, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_348.90, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-23", name: "Sofia", population: { value: 231_989, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 7_062.33, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-24", name: "Stara Zagora", population: { value: 296_507, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_151.12, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-25", name: "Targovichté", population: { value: 98_144, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_558.53, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-26", name: "Haskovo", population: { value: 211_565, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_533.29, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-27", name: "Choumen", population: { value: 151_465, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_389.68, unit: "km²", source: SRC, sourceUrl: URL } },
  { code: "BG-28", name: "Yambol", population: { value: 109_693, year: 2021, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_355.48, unit: "km²", source: SRC, sourceUrl: URL } },
];
