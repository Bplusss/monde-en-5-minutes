import type { Region } from "@/lib/types";

const SRC = "Assemblée nationale du Vietnam, résolution 202/2025/QH15 (« échelle de population » incluant les résidents temporaires : le total des 34 unités, 113,6 millions, dépasse la population nationale de 102,3 millions)";
const AREA_SRC = "Assemblée nationale du Vietnam, résolution 202/2025/QH15";
const URL = "https://en.wikipedia.org/wiki/Provinces_of_Vietnam";

/**
 * Les 34 unités provinciales issues de la réforme du 1er juillet 2025
 * (résolution 202/2025/QH15), qui a fusionné les 63 anciennes provinces en
 * réunissant des provinces entières. 9 sont des villes relevant du
 * gouvernement central (Đồng Nai, Quảng Ninh et Bắc Ninh ont reçu ce statut en
 * 2026, sans changement de limites).
 *
 * Codes : la norme ISO 3166-2:VN n'a pas encore été mise à jour (elle liste
 * toujours les 63 anciennes unités). Chaque unité fusionnée ayant repris le nom
 * de l'une de ses composantes, elle conserve ici le code ISO de cette ancienne
 * province (ex. Tuyên Quang + Hà Giang → VN-07, code de Tuyên Quang).
 *
 * Carte : vietnam-regions.json est reconstruit par
 * scripts/geo/build-vietnam-regions.mjs comme union exacte des polygones
 * Natural Earth des anciennes provinces.
 */
export const regions: Region[] = [
  { code: "VN-HN", name: "Hanoï", population: { value: 8_807_523, year: 2025, source: SRC, sourceUrl: URL, note: "Ville centrale ; limites inchangées par la réforme de 2025." }, areaKm2: { value: 3_360, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-SG", name: "Hô Chi Minh-Ville", population: { value: 14_002_598, year: 2025, source: SRC, sourceUrl: URL, note: "Ville centrale ; fusion avec Bình Dương et Bà Rịa-Vũng Tàu. Unité la plus peuplée du pays." }, areaKm2: { value: 6_773, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-HP", name: "Haïphong", population: { value: 4_664_124, year: 2025, source: SRC, sourceUrl: URL, note: "Ville centrale ; fusion avec Hải Dương." }, areaKm2: { value: 3_195, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-DN", name: "Da Nang", population: { value: 3_065_628, year: 2025, source: SRC, sourceUrl: URL, note: "Ville centrale ; fusion avec Quảng Nam. Les Paracels y sont rattachées sur le papier (zone spéciale de Hoàng Sa)." }, areaKm2: { value: 11_860, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-CT", name: "Cần Thơ", population: { value: 4_199_824, year: 2025, source: SRC, sourceUrl: URL, note: "Ville centrale ; fusion avec Sóc Trăng et Hậu Giang." }, areaKm2: { value: 6_361, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-26", name: "Hué", population: { value: 1_432_986, year: 2025, source: SRC, sourceUrl: URL, note: "Ville centrale depuis 2025 (ex-province de Thừa Thiên-Huế), limites inchangées." }, areaKm2: { value: 4_947, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-39", name: "Đồng Nai", population: { value: 4_491_408, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Bình Phước ; ville centrale depuis le 30 avril 2026." }, areaKm2: { value: 12_737, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-13", name: "Quảng Ninh", population: { value: 1_497_477, year: 2025, source: SRC, sourceUrl: URL, note: "Limites inchangées ; ville centrale depuis le 1er septembre 2026." }, areaKm2: { value: 6_208, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-56", name: "Bắc Ninh", population: { value: 3_619_433, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Bắc Giang ; ville centrale depuis le 20 septembre 2026." }, areaKm2: { value: 4_719, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-04", name: "Cao Bằng", population: { value: 573_119, year: 2025, source: SRC, sourceUrl: URL, note: "Inchangée." }, areaKm2: { value: 6_700, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-09", name: "Lạng Sơn", population: { value: 881_384, year: 2025, source: SRC, sourceUrl: URL, note: "Inchangée." }, areaKm2: { value: 8_310, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-68", name: "Phú Thọ", population: { value: 4_022_638, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Vĩnh Phúc et Hòa Bình." }, areaKm2: { value: 9_361, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-69", name: "Thái Nguyên", population: { value: 1_799_489, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Bắc Kạn." }, areaKm2: { value: 8_375, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-07", name: "Tuyên Quang", population: { value: 1_865_270, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Hà Giang." }, areaKm2: { value: 13_796, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-02", name: "Lào Cai", population: { value: 1_778_785, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Yên Bái." }, areaKm2: { value: 13_257, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-71", name: "Điện Biên", population: { value: 673_091, year: 2025, source: SRC, sourceUrl: URL, note: "Inchangée." }, areaKm2: { value: 9_540, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-01", name: "Lai Châu", population: { value: 512_601, year: 2025, source: SRC, sourceUrl: URL, note: "Inchangée ; unité la moins peuplée." }, areaKm2: { value: 9_069, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-05", name: "Sơn La", population: { value: 1_404_587, year: 2025, source: SRC, sourceUrl: URL, note: "Inchangée." }, areaKm2: { value: 14_109, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-66", name: "Hưng Yên", population: { value: 3_567_943, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Thái Bình ; plus petite unité par la superficie." }, areaKm2: { value: 2_515, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-18", name: "Ninh Bình", population: { value: 4_412_464, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Hà Nam et Nam Định." }, areaKm2: { value: 3_943, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-21", name: "Thanh Hóa", population: { value: 4_324_783, year: 2025, source: SRC, sourceUrl: URL, note: "Inchangée." }, areaKm2: { value: 11_115, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-22", name: "Nghệ An", population: { value: 3_831_694, year: 2025, source: SRC, sourceUrl: URL, note: "Inchangée." }, areaKm2: { value: 16_487, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-23", name: "Hà Tĩnh", population: { value: 1_622_901, year: 2025, source: SRC, sourceUrl: URL, note: "Inchangée." }, areaKm2: { value: 5_994, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-25", name: "Quảng Trị", population: { value: 1_870_845, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Quảng Bình." }, areaKm2: { value: 12_700, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-29", name: "Quảng Ngãi", population: { value: 2_161_755, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Kon Tum." }, areaKm2: { value: 14_833, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-30", name: "Gia Lai", population: { value: 3_583_693, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Bình Định ; chef-lieu à Quy Nhơn." }, areaKm2: { value: 21_577, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-33", name: "Đắk Lắk", population: { value: 3_346_853, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Phú Yên." }, areaKm2: { value: 18_096, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-34", name: "Khánh Hòa", population: { value: 2_243_554, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Ninh Thuận. Les Spratleys y sont rattachées sur le papier (zone spéciale de Trường Sa)." }, areaKm2: { value: 8_556, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-35", name: "Lâm Đồng", population: { value: 3_872_999, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Đắk Nông et Bình Thuận ; plus vaste unité du pays." }, areaKm2: { value: 24_233, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-37", name: "Tây Ninh", population: { value: 3_254_170, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Long An." }, areaKm2: { value: 8_536, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-45", name: "Đồng Tháp", population: { value: 4_370_046, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Tiền Giang." }, areaKm2: { value: 5_939, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-49", name: "Vĩnh Long", population: { value: 4_257_581, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Bến Tre et Trà Vinh." }, areaKm2: { value: 6_296, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-44", name: "An Giang", population: { value: 4_952_238, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Kiên Giang, dont l'île de Phú Quốc." }, areaKm2: { value: 9_889, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
  { code: "VN-59", name: "Cà Mau", population: { value: 2_606_672, year: 2025, source: SRC, sourceUrl: URL, note: "Fusion avec Bạc Liêu." }, areaKm2: { value: 7_942, unit: "km²", source: AREA_SRC, sourceUrl: URL } },
];
