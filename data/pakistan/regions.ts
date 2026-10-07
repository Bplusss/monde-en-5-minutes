import type { Region } from "@/lib/types";

const SRC = "Pakistan Bureau of Statistics (recensement 2023)";
const URL = "https://www.pbs.gov.pk/digital-census/detailed-results";
const AREA = { unit: "km²", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_units_of_Pakistan" };

/**
 * Les 4 provinces, le territoire de la capitale et les deux territoires
 * administrés par le Pakistan dans l'ancien État princier du Cachemire
 * (Gilgit-Baltistan et Azad Cachemire), dont le statut reste lié au
 * différend avec l'Inde — codes ISO 3166-2:PK. Les anciennes zones tribales
 * (FATA) sont fusionnées dans le Khyber Pakhtunkhwa depuis 2018. Les deux
 * territoires du Cachemire ne font pas partie du recensement national.
 */
export const regions: Region[] = [
  { code: "PK-PB", name: "Pendjab", population: { value: 127_688_922, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 205_344, ...AREA } },
  { code: "PK-SD", name: "Sind", population: { value: 55_696_147, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 140_914, ...AREA } },
  { code: "PK-KP", name: "Khyber Pakhtunkhwa", population: { value: 40_856_097, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 101_741, ...AREA } },
  { code: "PK-BA", name: "Baloutchistan", population: { value: 14_894_402, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 347_190, ...AREA } },
  { code: "PK-IS", name: "Territoire de la capitale Islamabad", population: { value: 2_363_863, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 906, ...AREA } },
  { code: "PK-GB", name: "Gilgit-Baltistan", areaKm2: { value: 72_971, ...AREA } },
  { code: "PK-JK", name: "Azad Cachemire", areaKm2: { value: 13_297, ...AREA } },
];
