import type { Region } from "@/lib/types";

const SRC = "Badan Pusat Statistik (BPS), projections de population de mi-année 2025, et Badan Informasi Geospasial (superficies)";
const URL = "https://en.wikipedia.org/wiki/Provinces_of_Indonesia";

/**
 * Les 38 provinces indonésiennes, codées selon ISO 3166-2:ID. Les quatre
 * dernières provinces de Papouasie (Papouasie du Sud, Papouasie centrale,
 * Papouasie des hautes terres, Papouasie du Sud-Ouest) résultent du
 * redécoupage de 2022 de l'ancienne province de Papouasie et de la
 * Papouasie occidentale — voir territories.ts.
 *
 * Écart connu et documenté avec la carte : le jeu de données Natural Earth
 * 1:10m utilisé pour générer indonesie-regions.json ne couvre que les 33
 * provinces telles qu'elles existaient avant le découpage du Kalimantan-Nord
 * (2012) et celui de la Papouasie (2022). Le Kalimantan-Nord (ID-KU) et les
 * quatre nouvelles provinces de Papouasie (ID-PS, ID-PT, ID-PE, ID-PD)
 * figurent donc ci-dessous avec des données réelles et sourcées, mais
 * n'apparaissent pas comme polygones distincts sur la carte (fondus dans les
 * anciens contours de Kalimantan-Est/Papouasie/Papouasie occidentale) tant
 * qu'aucune source géographique plus récente n'est intégrée.
 */
export const regions: Region[] = [
  { code: "ID-AC", name: "Aceh", population: { value: 5_626_000, year: 2025, source: SRC, sourceUrl: URL, note: "Seule province appliquant la charia dans le cadre de son statut d'autonomie spéciale (2005)." }, areaKm2: { value: 56_835, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-SU", name: "Sumatra du Nord", population: { value: 15_785_800, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 72_438, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-SB", name: "Sumatra de l'Ouest", population: { value: 5_914_300, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 42_108, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-RI", name: "Riau", population: { value: 6_811_200, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 89_901, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-JA", name: "Jambi", population: { value: 3_768_500, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 49_023, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-SS", name: "Sumatra du Sud", population: { value: 8_928_500, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 86_772, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-BE", name: "Bengkulu", population: { value: 2_138_000, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 20_122, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-LA", name: "Lampung", population: { value: 9_522_900, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 33_571, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-BB", name: "Îles Bangka Belitung", population: { value: 1_550_800, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 16_690, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-KR", name: "Îles Riau", population: { value: 2_213_500, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 8_170, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-JK", name: "Jakarta", population: { value: 10_678_000, year: 2025, source: SRC, sourceUrl: URL, note: "Région spéciale de la capitale (DKI Jakarta) ; en cours de transformation en simple province ordinaire à mesure que le statut de capitale se transfère vers Nusantara." }, areaKm2: { value: 662, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-JB", name: "Java de l'Ouest", population: { value: 50_759_000, year: 2025, source: SRC, sourceUrl: URL, note: "Province la plus peuplée du pays." }, areaKm2: { value: 37_053, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-JT", name: "Java central", population: { value: 38_233_900, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 34_347, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-YO", name: "Yogyakarta", population: { value: 3_781_500, year: 2025, source: SRC, sourceUrl: URL, note: "Région spéciale dirigée par le sultan de Yogyakarta, seule monarchie traditionnelle conservant un pouvoir exécutif reconnu par l'État indonésien." }, areaKm2: { value: 3_170, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-JI", name: "Java de l'Est", population: { value: 42_089_300, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 48_056, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-BT", name: "Banten", population: { value: 12_537_400, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_356, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-BA", name: "Bali", population: { value: 4_461_300, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 5_583, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-NB", name: "Nusa Tenggara occidentales", population: { value: 5_731_100, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 19_632, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-NT", name: "Nusa Tenggara orientales", population: { value: 5_742_600, year: 2025, source: SRC, sourceUrl: URL, note: "Comprend la partie occidentale de l'île de Timor, frontalière du Timor oriental." }, areaKm2: { value: 46_378, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-KB", name: "Kalimantan de l'Ouest", population: { value: 5_766_000, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 147_018, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-KT", name: "Kalimantan central", population: { value: 2_845_000, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 153_430, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-KS", name: "Kalimantan du Sud", population: { value: 4_323_300, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 37_125, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-KI", name: "Kalimantan de l'Est", population: { value: 4_267_600, year: 2025, source: SRC, sourceUrl: URL, note: "Accueille, à cheval sur les régences de Penajam Paser Nord et Kutai Kartanegara, le chantier de la future capitale Nusantara." }, areaKm2: { value: 126_952, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-KU", name: "Kalimantan du Nord", population: { value: 749_400, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 69_901, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-SA", name: "Sulawesi du Nord", population: { value: 2_721_400, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 14_488, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-ST", name: "Sulawesi central", population: { value: 3_156_100, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 61_497, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-SN", name: "Sulawesi du Sud", population: { value: 9_563_100, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 45_324, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-SG", name: "Sulawesi du Sud-Est", population: { value: 2_836_700, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 36_139, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-GO", name: "Gorontalo", population: { value: 1_242_200, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 12_025, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-SR", name: "Sulawesi de l'Ouest", population: { value: 1_525_300, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 16_591, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-MA", name: "Moluques", population: { value: 1_970_600, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 46_134, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-MU", name: "Moluques du Nord", population: { value: 1_373_800, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 31_466, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-PA", name: "Papouasie", population: { value: 1_073_600, year: 2025, source: SRC, sourceUrl: URL, note: "Province réduite à son périmètre autour de Jayapura depuis le redécoupage de 2022 ; bénéficie, comme les autres provinces de Papouasie, d'un statut d'autonomie spéciale depuis 2001." }, areaKm2: { value: 81_383, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-PB", name: "Papouasie occidentale", population: { value: 587_600, year: 2025, source: SRC, sourceUrl: URL }, areaKm2: { value: 60_309, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-PS", name: "Papouasie du Sud", population: { value: 549_700, year: 2025, source: SRC, sourceUrl: URL, note: "Créée en 2022 par scission de l'ancienne province de Papouasie." }, areaKm2: { value: 117_859, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-PT", name: "Papouasie centrale", population: { value: 1_492_300, year: 2025, source: SRC, sourceUrl: URL, note: "Créée en 2022 par scission de l'ancienne province de Papouasie." }, areaKm2: { value: 61_080, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-PE", name: "Papouasie des hautes terres", population: { value: 1_484_900, year: 2025, source: SRC, sourceUrl: URL, note: "Créée en 2022 par scission de l'ancienne province de Papouasie." }, areaKm2: { value: 52_509, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "ID-PD", name: "Papouasie du Sud-Ouest", population: { value: 636_400, year: 2025, source: SRC, sourceUrl: URL, note: "Créée en 2022 par scission de l'ancienne province de Papouasie occidentale." }, areaKm2: { value: 39_103, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
];
