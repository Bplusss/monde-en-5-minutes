import type { Region } from "@/lib/types";

const SRC = "ONEI (Anuario Demográfico de Cuba 2024)";
const URL = "https://www.onei.gob.cu/";
const AREA = { unit: "km²", source: "ONEI", sourceUrl: "https://www.onei.gob.cu/" };

/**
 * Les 15 provinces et la municipalité spéciale de l'île de la Jeunesse,
 * dans le découpage de 2011 (création d'Artemisa et de Mayabeque) — codes
 * ISO 3166-2:CU. Population effective au 31 décembre 2024.
 */
export const regions: Region[] = [
  { code: "CU-01", name: "Pinar del Río", population: { value: 515_208, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_884, ...AREA } },
  { code: "CU-15", name: "Artemisa", population: { value: 452_430, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_003, ...AREA } },
  { code: "CU-03", name: "La Havane", population: { value: 1_749_964, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 728, ...AREA } },
  { code: "CU-16", name: "Mayabeque", population: { value: 330_260, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_744, ...AREA } },
  { code: "CU-04", name: "Matanzas", population: { value: 619_159, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 11_792, ...AREA } },
  { code: "CU-06", name: "Cienfuegos", population: { value: 342_709, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_189, ...AREA } },
  { code: "CU-05", name: "Villa Clara", population: { value: 665_447, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_442, ...AREA } },
  { code: "CU-07", name: "Sancti Spíritus", population: { value: 404_037, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_777, ...AREA } },
  { code: "CU-08", name: "Ciego de Ávila", population: { value: 376_919, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_972, ...AREA } },
  { code: "CU-09", name: "Camagüey", population: { value: 653_203, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 15_386, ...AREA } },
  { code: "CU-10", name: "Las Tunas", population: { value: 475_343, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_593, ...AREA } },
  { code: "CU-11", name: "Holguín", population: { value: 911_674, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_216, ...AREA } },
  { code: "CU-12", name: "Granma", population: { value: 749_289, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_374, ...AREA } },
  { code: "CU-13", name: "Santiago de Cuba", population: { value: 963_915, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_228, ...AREA } },
  { code: "CU-14", name: "Guantánamo", population: { value: 465_429, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_168, ...AREA } },
  { code: "CU-99", name: "Île de la Jeunesse", population: { value: 73_021, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_419, ...AREA } },
];
