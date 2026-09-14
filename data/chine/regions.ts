import type { Region } from "@/lib/types";

const SRC = "Bureau national de statistique de Chine (NBS), septième recensement national (2020)";
const URL = "https://www.stats.gov.cn/english/";

/**
 * Les 31 divisions provinciales de Chine continentale (22 provinces, 5 régions
 * autonomes, 4 municipalités relevant directement du gouvernement central) —
 * codes ISO 3166-2:CN. Hong Kong, Macao (régions administratives spéciales)
 * et Taïwan (revendiqué, non administré) ne sont pas comptés ici — voir
 * « Territoires ». Population du septième recensement national (2020).
 */
export const regions: Region[] = [
  { code: "CN-BJ", name: "Pékin", population: { value: 21_893_095, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-TJ", name: "Tianjin", population: { value: 13_866_009, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-HE", name: "Hebei", population: { value: 74_610_235, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-SX", name: "Shanxi", population: { value: 34_915_616, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-NM", name: "Mongolie-Intérieure", population: { value: 24_049_155, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-LN", name: "Liaoning", population: { value: 42_591_407, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-JL", name: "Jilin", population: { value: 24_073_453, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-HL", name: "Heilongjiang", population: { value: 31_850_088, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-SH", name: "Shanghai", population: { value: 24_870_895, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-JS", name: "Jiangsu", population: { value: 84_748_016, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-ZJ", name: "Zhejiang", population: { value: 64_567_588, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-AH", name: "Anhui", population: { value: 61_027_171, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-FJ", name: "Fujian", population: { value: 41_540_086, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-JX", name: "Jiangxi", population: { value: 45_188_635, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-SD", name: "Shandong", population: { value: 101_527_453, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-HA", name: "Henan", population: { value: 99_365_519, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-HB", name: "Hubei", population: { value: 57_752_557, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-HN", name: "Hunan", population: { value: 66_444_864, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-GD", name: "Guangdong", population: { value: 126_012_510, year: 2020, source: SRC, sourceUrl: URL, note: "Province la plus peuplée de Chine." } },
  { code: "CN-GX", name: "Guangxi", population: { value: 50_126_804, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-HI", name: "Hainan", population: { value: 10_081_232, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-CQ", name: "Chongqing", population: { value: 32_054_159, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-SC", name: "Sichuan", population: { value: 83_674_866, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-GZ", name: "Guizhou", population: { value: 38_562_148, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-YN", name: "Yunnan", population: { value: 47_209_277, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-XZ", name: "Tibet", population: { value: 3_648_100, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-SN", name: "Shaanxi", population: { value: 39_528_999, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-GS", name: "Gansu", population: { value: 25_019_831, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-QH", name: "Qinghai", population: { value: 5_923_957, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-NX", name: "Ningxia", population: { value: 7_202_654, year: 2020, source: SRC, sourceUrl: URL } },
  { code: "CN-XJ", name: "Xinjiang", population: { value: 25_852_345, year: 2020, source: SRC, sourceUrl: URL } },
];
