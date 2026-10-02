import type { Region } from "@/lib/types";

const SRC = "Philippine Statistics Authority (PSA), recensement 2024 (POPCEN)";
const URL = "https://en.wikipedia.org/wiki/Regions_of_the_Philippines";
const AREA = { unit: "km²", source: "Wikipedia (PSA)", sourceUrl: URL };

/**
 * Les 18 régions philippines, codées selon ISO 3166-2:PH, sauf la Région de
 * l'île de Negros (NIR), créée en juin 2024 (Republic Act 12000) et encore
 * sans code ISO : elle reçoit ici le code local « PH-NIR ». PH-14, code
 * historique de l'ARMM, désigne le Bangsamoro (BARMM) qui lui a succédé en
 * 2019. Sulu, exclu du Bangsamoro par la Cour suprême (septembre 2024), est
 * rattaché à la péninsule de Zamboanga (décret présidentiel n° 91, 2025) ;
 * les chiffres de population 2024 en tiennent compte. Superficies omises pour
 * ces deux régions, les sources disponibles ne précisant pas clairement si
 * elles intègrent Sulu.
 *
 * Carte : philippines-regions.json est reconstruit par fusion des provinces
 * Natural Earth 1:10m (scripts/geo/build-philippines-regions.mjs). Deux
 * écarts infra-provinciaux y subsistent : la ville d'Isabela (Région IX)
 * reste dessinée dans la province de Basilan (Bangsamoro), et les 63
 * barangays de la « zone géographique spéciale » du Bangsamoro restent dans
 * la province de Cotabato (Région XII).
 */
export const regions: Region[] = [
  { code: "PH-00", name: "Région capitale nationale (Metro Manila)", population: { value: 14_001_751, year: 2024, source: SRC, sourceUrl: URL, note: "16 villes et une municipalité, dont Manille et Quezon City." }, areaKm2: { value: 636, ...AREA } },
  { code: "PH-15", name: "Région administrative de la Cordillère", population: { value: 1_808_985, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 19_422, ...AREA } },
  { code: "PH-01", name: "Ilocos", population: { value: 5_342_453, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 13_013, ...AREA } },
  { code: "PH-02", name: "Vallée du Cagayan", population: { value: 3_777_608, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 28_229, ...AREA } },
  { code: "PH-03", name: "Luzon central", population: { value: 12_989_074, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 22_015, ...AREA } },
  { code: "PH-40", name: "Calabarzon", population: { value: 16_933_234, year: 2024, source: SRC, sourceUrl: URL, note: "Région la plus peuplée du pays, en périphérie sud de Manille." }, areaKm2: { value: 16_873, ...AREA } },
  { code: "PH-41", name: "Mimaropa", population: { value: 3_245_446, year: 2024, source: SRC, sourceUrl: URL, note: "Comprend Palawan et la municipalité de Kalayaan (îles Spratleys revendiquées)." }, areaKm2: { value: 29_621, ...AREA } },
  { code: "PH-05", name: "Bicol", population: { value: 6_064_426, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 18_156, ...AREA } },
  { code: "PH-06", name: "Visayas occidentales", population: { value: 4_861_911, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 12_751, ...AREA } },
  { code: "PH-NIR", name: "Île de Negros", population: { value: 4_904_944, year: 2024, source: SRC, sourceUrl: URL, note: "Créée en 2024 à partir de Negros occidental (Visayas occidentales), Negros oriental et Siquijor (Visayas centrales)." }, areaKm2: { value: 13_526, ...AREA } },
  { code: "PH-07", name: "Visayas centrales", population: { value: 6_640_875, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 10_115, ...AREA } },
  { code: "PH-08", name: "Visayas orientales", population: { value: 4_625_929, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 23_251, ...AREA } },
  { code: "PH-09", name: "Péninsule de Zamboanga", population: { value: 5_089_934, year: 2024, source: SRC, sourceUrl: URL, note: "Inclut Sulu depuis son exclusion du Bangsamoro." } },
  { code: "PH-10", name: "Mindanao du Nord", population: { value: 5_178_326, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 20_496, ...AREA } },
  { code: "PH-11", name: "Davao", population: { value: 5_389_422, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 20_357, ...AREA } },
  { code: "PH-12", name: "Soccsksargen", population: { value: 4_462_776, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 22_513, ...AREA } },
  { code: "PH-13", name: "Caraga", population: { value: 2_865_196, year: 2024, source: SRC, sourceUrl: URL }, areaKm2: { value: 21_478, ...AREA } },
  { code: "PH-14", name: "Bangsamoro (BARMM)", population: { value: 4_545_486, year: 2024, source: SRC, sourceUrl: URL, note: "Seule région autonome, à majorité musulmane, issue de l'accord de paix de 2014 avec le Front Moro islamique de libération ; premières élections parlementaires le 14 septembre 2026." } },
];
