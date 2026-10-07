import type { Region } from "@/lib/types";

const SRC = "Department of Statistics Malaysia (recensement 2020)";
const URL = "https://www.dosm.gov.my/portal-main/release-content/key-findings-population-and-housing-census-of-malaysia-2020";
const AREA = { unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/States_and_federal_territories_of_Malaysia" };

/** Les 13 États et les 3 territoires fédéraux — codes ISO 3166-2:MY. Population du recensement 2020. */
export const regions: Region[] = [
  { code: "MY-01", name: "Johor", population: { value: 4_009_670, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 19_210, ...AREA } },
  { code: "MY-02", name: "Kedah", population: { value: 2_131_427, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_500, ...AREA } },
  { code: "MY-03", name: "Kelantan", population: { value: 1_792_501, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 15_099, ...AREA } },
  { code: "MY-04", name: "Malacca", population: { value: 998_428, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_664, ...AREA } },
  { code: "MY-05", name: "Negeri Sembilan", population: { value: 1_199_974, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_686, ...AREA } },
  { code: "MY-06", name: "Pahang", population: { value: 1_591_295, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 36_137, ...AREA } },
  { code: "MY-07", name: "Penang", population: { value: 1_740_405, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_048, ...AREA } },
  { code: "MY-08", name: "Perak", population: { value: 2_496_041, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 21_035, ...AREA } },
  { code: "MY-09", name: "Perlis", population: { value: 284_885, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 821, ...AREA } },
  { code: "MY-10", name: "Selangor", population: { value: 6_994_423, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_104, ...AREA } },
  { code: "MY-11", name: "Terengganu", population: { value: 1_149_440, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 13_035, ...AREA } },
  { code: "MY-12", name: "Sabah", population: { value: 3_418_785, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 73_631, ...AREA } },
  { code: "MY-13", name: "Sarawak", population: { value: 2_453_677, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 124_450, ...AREA } },
  { code: "MY-14", name: "Kuala Lumpur", population: { value: 1_982_112, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 243, ...AREA } },
  { code: "MY-15", name: "Labuan", population: { value: 95_120, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 91, ...AREA } },
  { code: "MY-16", name: "Putrajaya", population: { value: 109_202, year: 2020, source: SRC, sourceUrl: URL }, areaKm2: { value: 49, ...AREA } },
];
