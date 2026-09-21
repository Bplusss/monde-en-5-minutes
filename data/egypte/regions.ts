import type { Region } from "@/lib/types";

const SRC = "Central Agency for Public Mobilization and Statistics (CAPMAS), estimation de novembre 2023, via Wikipedia";
const URL = "https://en.wikipedia.org/wiki/Governorates_of_Egypt";

/** Les 27 gouvernorats égyptiens (muhafazat), codés selon ISO 3166-2:EG. */
export const regions: Region[] = [
  { code: "EG-C", name: "Le Caire", population: { value: 10_456_284, year: 2023, source: SRC, sourceUrl: URL, note: "Gouvernorat le plus peuplé du pays, cœur de la mégapole du Grand Caire." }, areaKm2: { value: 3_085, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-GZ", name: "Gizeh", population: { value: 9_534_283, year: 2023, source: SRC, sourceUrl: URL, note: "Abrite le plateau des pyramides de Gizeh, aux portes du Caire." }, areaKm2: { value: 13_184, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-SHR", name: "Charkia", population: { value: 8_032_683, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 4_911, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-DK", name: "Dakahlia", population: { value: 7_058_212, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_538, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-BH", name: "Beheira", population: { value: 6_940_234, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 9_826, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-MN", name: "Minya", population: { value: 6_332_918, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 32_279, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-KB", name: "Qalyubiyya", population: { value: 6_137_896, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_124, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-ALX", name: "Alexandrie", population: { value: 5_703_824, year: 2023, source: SRC, sourceUrl: URL, note: "Deuxième ville du pays, principal port méditerranéen." }, areaKm2: { value: 2_300, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-SHG", name: "Sohag", population: { value: 5_714_903, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 11_022, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-GH", name: "Gharbia", population: { value: 5_483_000, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 1_942, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-AST", name: "Assiout", population: { value: 5_071_485, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 25_926, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-MNF", name: "Monoufia", population: { value: 4_743_341, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 2_499, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-FYM", name: "Fayoum", population: { value: 4_141_222, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 6_068, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-KFS", name: "Kafr el-Cheikh", population: { value: 3_731_540, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 3_467, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-BNS", name: "Beni Souef", population: { value: 3_618_395, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 10_954, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-KN", name: "Qena", population: { value: 3_651_215, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 10_798, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-ASN", name: "Assouan", population: { value: 1_698_201, year: 2023, source: SRC, sourceUrl: URL, note: "Abrite le haut barrage d'Assouan et le lac Nasser." }, areaKm2: { value: 62_726, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-DT", name: "Damiette", population: { value: 2_023_380, year: 2023, source: SRC, sourceUrl: URL }, areaKm2: { value: 910, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-IS", name: "Ismaïlia", population: { value: 1_482_999, year: 2023, source: SRC, sourceUrl: URL, note: "Ville-siège historique de la Compagnie du canal de Suez." }, areaKm2: { value: 5_067, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-LX", name: "Louxor", population: { value: 1_429_385, year: 2023, source: SRC, sourceUrl: URL, note: "Site de l'antique Thèbes : temple de Karnak et Vallée des Rois." }, areaKm2: { value: 460, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-SUZ", name: "Suez", population: { value: 843_385, year: 2023, source: SRC, sourceUrl: URL, note: "Ville portuaire à l'extrémité sud du canal de Suez." }, areaKm2: { value: 9_002, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-PTS", name: "Port-Saïd", population: { value: 835_193, year: 2023, source: SRC, sourceUrl: URL, note: "Ville portuaire à l'extrémité nord du canal de Suez." }, areaKm2: { value: 1_345, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-MT", name: "Matrouh", population: { value: 580_304, year: 2023, source: SRC, sourceUrl: URL, note: "Étroite bande côtière méditerranéenne à l'ouest, dont la station balnéaire de Marsa Matrouh." }, areaKm2: { value: 166_563, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-SIN", name: "Sinaï-Nord", population: { value: 544_494, year: 2023, source: SRC, sourceUrl: URL, note: "Frontalier de la bande de Gaza ; théâtre d'une insurrection djihadiste depuis les années 2010." }, areaKm2: { value: 28_992, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-BA", name: "Mer Rouge", population: { value: 409_394, year: 2023, source: SRC, sourceUrl: URL, note: "Littoral de la mer Rouge, dont les stations balnéaires d'Hurghada et de Marsa Alam." }, areaKm2: { value: 119_099, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-WAD", name: "Nouvelle Vallée", population: { value: 324_600, year: 2023, source: SRC, sourceUrl: URL, note: "De loin le plus vaste gouvernorat (plus de 40 % du territoire national), quasi désertique, dans le désert Occidental." }, areaKm2: { value: 440_098, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
  { code: "EG-JS", name: "Sinaï-Sud", population: { value: 145_934, year: 2023, source: SRC, sourceUrl: URL, note: "Comprend le mont Sainte-Catherine, point culminant du pays, et les stations balnéaires de Charm el-Cheikh et Dahab sur la mer Rouge." }, areaKm2: { value: 31_272, unit: "km²", source: "Wikipedia", sourceUrl: URL } },
];
