import type { Region } from "@/lib/types";

const SRC = "Instituto Nacional de Estadística (recensement 2011)";
const URL = "http://www.ine.gob.ve/";
const NOTE = "Dernier recensement disponible ; les chiffres actuels ont été fortement réduits par l'émigration.";
const AREA = { unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/States_of_Venezuela" };

/**
 * Les 23 États, le District capital et les Dépendances fédérales — codes
 * ISO 3166-2:VE. Population du recensement 2011, le dernier réalisé.
 */
export const regions: Region[] = [
  { code: "VE-A", name: "District capital", population: { value: 1_943_901, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 433, ...AREA } },
  { code: "VE-B", name: "Anzoátegui", population: { value: 1_469_747, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 43_300, ...AREA } },
  { code: "VE-C", name: "Apure", population: { value: 459_025, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 76_500, ...AREA } },
  { code: "VE-D", name: "Aragua", population: { value: 1_630_308, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 7_014, ...AREA } },
  { code: "VE-E", name: "Barinas", population: { value: 816_264, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 35_200, ...AREA } },
  { code: "VE-F", name: "Bolívar", population: { value: 1_410_964, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 238_000, ...AREA } },
  { code: "VE-G", name: "Carabobo", population: { value: 2_245_744, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 4_650, ...AREA } },
  { code: "VE-H", name: "Cojedes", population: { value: 323_165, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 14_800, ...AREA } },
  { code: "VE-I", name: "Falcón", population: { value: 902_847, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 24_800, ...AREA } },
  { code: "VE-J", name: "Guárico", population: { value: 747_739, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 64_986, ...AREA } },
  { code: "VE-K", name: "Lara", population: { value: 1_774_867, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 19_800, ...AREA } },
  { code: "VE-L", name: "Mérida", population: { value: 828_592, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 11_300, ...AREA } },
  { code: "VE-M", name: "Miranda", population: { value: 2_675_165, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 7_950, ...AREA } },
  { code: "VE-N", name: "Monagas", population: { value: 905_443, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 28_930, ...AREA } },
  { code: "VE-O", name: "Nueva Esparta", population: { value: 491_610, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 1_150, ...AREA } },
  { code: "VE-P", name: "Portuguesa", population: { value: 876_496, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 15_200, ...AREA } },
  { code: "VE-R", name: "Sucre", population: { value: 896_291, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 11_800, ...AREA } },
  { code: "VE-S", name: "Táchira", population: { value: 1_168_908, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 11_100, ...AREA } },
  { code: "VE-T", name: "Trujillo", population: { value: 686_367, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 7_400, ...AREA } },
  { code: "VE-U", name: "Yaracuy", population: { value: 600_852, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 7_100, ...AREA } },
  { code: "VE-V", name: "Zulia", population: { value: 3_704_404, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 63_100, ...AREA } },
  { code: "VE-W", name: "Dépendances fédérales", population: { value: 2_155, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 342, ...AREA } },
  { code: "VE-X", name: "La Guaira", population: { value: 352_920, year: 2011, source: SRC, sourceUrl: URL, note: NOTE } },
  { code: "VE-Y", name: "Delta Amacuro", population: { value: 167_676, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 40_200, ...AREA } },
  { code: "VE-Z", name: "Amazonas", population: { value: 146_480, year: 2011, source: SRC, sourceUrl: URL, note: NOTE }, areaKm2: { value: 180_145, ...AREA } },
];
