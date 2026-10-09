import type { Region } from "@/lib/types";

const SRC = "National Bureau of Statistics (recensement 2022)";
const URL = "https://www.nbs.go.tz/";

/**
 * Les 31 régions — 26 sur le continent et 5 dans l'archipel de Zanzibar
 * (TZ-06, 07, 10, 11, 15) — codes ISO 3166-2:TZ. Population du recensement
 * 2022. Pas de superficie : les sources officielles ne comptent que les
 * terres émergées, alors que les régions riveraines des grands lacs en
 * incluent une large part sur la carte.
 */
export const regions: Region[] = [
  { code: "TZ-01", name: "Arusha", population: { value: 2_356_255, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-02", name: "Dar es Salaam", population: { value: 5_383_728, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-03", name: "Dodoma", population: { value: 3_085_625, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-04", name: "Iringa", population: { value: 1_192_728, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-05", name: "Kagera", population: { value: 2_989_299, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-06", name: "Pemba-Nord", population: { value: 272_091, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-07", name: "Zanzibar-Nord", population: { value: 257_290, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-08", name: "Kigoma", population: { value: 2_470_967, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-09", name: "Kilimandjaro", population: { value: 1_861_934, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-10", name: "Pemba-Sud", population: { value: 271_350, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-11", name: "Zanzibar-Sud et Centre", population: { value: 195_873, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-12", name: "Lindi", population: { value: 1_194_028, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-13", name: "Mara", population: { value: 2_372_015, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-14", name: "Mbeya", population: { value: 2_343_754, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-15", name: "Zanzibar-Ouest", population: { value: 893_169, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-16", name: "Morogoro", population: { value: 3_197_104, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-17", name: "Mtwara", population: { value: 1_634_947, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-18", name: "Mwanza", population: { value: 3_699_872, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-19", name: "Pwani", population: { value: 2_024_947, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-20", name: "Rukwa", population: { value: 1_540_519, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-21", name: "Ruvuma", population: { value: 1_848_794, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-22", name: "Shinyanga", population: { value: 2_241_299, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-23", name: "Singida", population: { value: 2_008_058, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-24", name: "Tabora", population: { value: 3_391_679, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-25", name: "Tanga", population: { value: 2_615_597, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-26", name: "Manyara", population: { value: 1_892_502, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-27", name: "Geita", population: { value: 2_977_608, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-28", name: "Katavi", population: { value: 1_152_958, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-29", name: "Njombe", population: { value: 889_946, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-30", name: "Simiyu", population: { value: 2_140_497, year: 2022, source: SRC, sourceUrl: URL } },
  { code: "TZ-31", name: "Songwe", population: { value: 1_344_687, year: 2022, source: SRC, sourceUrl: URL } },
];
