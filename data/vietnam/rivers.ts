import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Mékong",
    lengthKm: {
      value: 4_350,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Mekong",
      note: "Longueur totale ; au Vietnam, le fleuve (Cửu Long, « Neuf Dragons ») se divise en plusieurs bras formant un delta d'environ 40 000 km², grenier à riz du pays.",
    },
    source_location: "Plateau tibétain (Qinghai, Chine)",
    mouth: "Mer de Chine méridionale, par le delta du Mékong",
  },
  {
    name: "Fleuve Rouge",
    lengthKm: {
      value: 1_149,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Red_River_(Asia)",
      note: "Sông Hồng, coloré par ses limons ; il traverse Hanoï, et son delta est le berceau historique de la nation viet.",
    },
    source_location: "Province du Yunnan (Chine)",
    mouth: "Golfe du Tonkin, embouchure de Ba Lạt (entre Hưng Yên et Ninh Bình)",
  },
  {
    name: "Rivière Noire",
    lengthKm: {
      value: 910,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Black_River_(Asia)",
      note: "Sông Đà, principal affluent du fleuve Rouge ; ses barrages de Hòa Bình et de Sơn La comptent parmi les plus puissants d'Asie du Sud-Est.",
    },
    source_location: "Province du Yunnan (Chine)",
    mouth: "Fleuve Rouge, en amont de Hanoï (province de Phú Thọ)",
  },
  {
    name: "Đồng Nai",
    lengthKm: {
      value: 568,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/%C4%90%E1%BB%93ng_Nai_River",
      note: "Plus long fleuve entièrement vietnamien ; il alimente Hô Chi Minh-Ville en eau.",
    },
    source_location: "Plateau de Lâm Viên, près de Đà Lạt (Lâm Đồng)",
    mouth: "Mer de Chine méridionale, par la mangrove de Cần Giờ",
  },
  {
    name: "Cả",
    lengthKm: {
      value: 512,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/C%E1%BA%A3_River",
      note: "Aussi appelé sông Lam, principal fleuve du Centre-Nord, qui arrose Nghệ An et Hà Tĩnh.",
    },
    source_location: "Province de Xieng Khouang (Laos)",
    mouth: "Golfe du Tonkin, près de Vinh",
  },
];
