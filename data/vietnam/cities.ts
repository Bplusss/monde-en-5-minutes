import type { City } from "@/lib/types";

// Depuis la réforme de 2025, seules les villes relevant directement du
// gouvernement central ont encore le statut de « ville » (les anciennes villes
// provinciales comme Nha Trang ou Biên Hòa ont été découpées en quartiers).
// Leurs populations sont celles de leur territoire actuel, souvent très
// étendu et en partie rural.
const SRC = "Assemblée nationale du Vietnam, résolution 202/2025/QH15 (« échelle de population » incluant les résidents temporaires : le total des 34 unités, 113,6 millions, dépasse la population nationale de 102,3 millions)";
const SRC_URL = "https://en.wikipedia.org/wiki/Provinces_of_Vietnam";

export const cities: City[] = [
  { name: "Hô Chi Minh-Ville", lat: 10.7769, lon: 106.7009, population: { value: 14_002_598, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Ancienne Saïgon, capitale économique ; inclut depuis 2025 Bình Dương et Bà Rịa-Vũng Tàu." } },
  { name: "Hanoï", lat: 21.0285, lon: 105.8542, isCapital: true, population: { value: 8_807_523, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Fondée sous le nom de Thăng Long en 1010 ; capitale du Vietnam réunifié depuis 1976." } },
  { name: "Haïphong", lat: 20.8449, lon: 106.6881, population: { value: 4_664_124, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Principal port du Nord ; a absorbé la province de Hải Dương en 2025." } },
  { name: "Đồng Nai", lat: 10.9574, lon: 106.8429, population: { value: 4_491_408, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Ville relevant du gouvernement central depuis le 30 avril 2026, centrée sur l'ancienne Biên Hòa." } },
  { name: "Cần Thơ", lat: 10.0452, lon: 105.7469, population: { value: 4_199_824, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Principale ville du delta du Mékong, connue pour ses marchés flottants." } },
  { name: "Bắc Ninh", lat: 21.2731, lon: 106.1946, population: { value: 3_619_433, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Ville relevant du gouvernement central depuis le 20 septembre 2026." } },
  { name: "Da Nang", lat: 16.0544, lon: 108.2022, population: { value: 3_065_628, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Grand port du Centre ; inclut depuis 2025 l'ancienne province de Quảng Nam et Hội An." } },
  { name: "Quảng Ninh", lat: 20.9599, lon: 107.0425, population: { value: 1_497_477, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Ville relevant du gouvernement central depuis le 1er septembre 2026, centrée sur Hạ Long." } },
  { name: "Hué", lat: 16.4637, lon: 107.5909, population: { value: 1_432_986, year: 2025, source: SRC, sourceUrl: SRC_URL, note: "Capitale impériale des Nguyễn (1802-1945)." } },
];
