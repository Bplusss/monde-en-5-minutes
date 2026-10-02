import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "Depuis le 1er juillet 2025, le Vietnam est administré sur deux niveaux seulement : 34 unités provinciales et 3 321 communes, l'échelon du district ayant été supprimé. Les 63 anciennes provinces ont été fusionnées par provinces entières, onze restant inchangées. Le pays ne possède aucun territoire ultramarin. Il revendique en revanche les archipels des Paracels (Hoàng Sa) et des Spratleys (Trường Sa), rattachés sur le papier aux zones spéciales de Da Nang et de Khánh Hòa, mais dont la souveraineté n'est pas internationalement établie : ils ne figurent pas sur la carte (voir ci-dessous).",
  divisions: [
    {
      name: "Unités provinciales",
      count: 34,
      note: "25 provinces et 9 villes relevant directement du gouvernement central : Hanoï, Hô Chi Minh-Ville, Haïphong, Da Nang, Cần Thơ, Hué (depuis la réforme de 2025), puis Đồng Nai (30 avril 2026), Quảng Ninh (1er septembre 2026) et Bắc Ninh (20 septembre 2026).",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Provinces_of_Vietnam",
    },
    {
      name: "Unités communales (communes, quartiers, zones spéciales)",
      count: 3_321,
      note: "2 621 communes, 687 quartiers urbains (phường) et 13 zones spéciales (đặc khu), surtout insulaires, au 1er juillet 2025 — contre 10 035 unités avant la réforme.",
      source: "Vietnam News",
      sourceUrl: "https://vietnamnews.vn/politics-laws/1719423/na-passes-historic-resolution-to-cut-provinces-and-centrally-run-cities-from-63-to-34.html",
    },
    {
      name: "Paracels (Hoàng Sa), revendiquées mais non administrées",
      count: 1,
      note: "Archipel entièrement contrôlé par la Chine depuis la bataille de janvier 1974 contre la marine sud-vietnamienne ; revendiqué aussi par Taïwan.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Paracel_Islands",
    },
    {
      name: "Spratleys (Trường Sa), archipel disputé",
      count: 1,
      note: "Revendiqué en tout ou partie par le Vietnam, la Chine, Taïwan, les Philippines, la Malaisie et Brunei. Le Vietnam occupe le plus grand nombre de récifs et îlots ; un affrontement avec la marine chinoise y a fait 64 morts vietnamiens en 1988.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Spratly_Islands_dispute",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
