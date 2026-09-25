import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "La Chine continentale compte 31 unités provinciales de premier niveau : 22 provinces, 5 régions autonomes et 4 municipalités centrales. S'y ajoutent deux régions administratives spéciales, Hong Kong et Macao, régies par le principe « un pays, deux systèmes » — un cadre resserré à Hong Kong depuis la loi de sécurité nationale de 2020. Pékin revendique enfin Taïwan comme province chinoise sans y exercer d'administration effective depuis 1949 (voir le détail ci-dessous).",
  divisions: [
    { name: "Provinces", count: 22, source: "Bureau national de statistique de Chine (NBS)", sourceUrl: "https://www.stats.gov.cn/english/" },
    { name: "Régions autonomes", count: 5, note: "Mongolie-Intérieure, Xinjiang, Tibet, Guangxi, Ningxia — autonomie théorique pour leurs minorités ethniques.", source: "Bureau national de statistique de Chine (NBS)", sourceUrl: "https://www.stats.gov.cn/english/" },
    { name: "Municipalités relevant directement du gouvernement central", count: 4, note: "Pékin, Tianjin, Shanghai, Chongqing.", source: "Bureau national de statistique de Chine (NBS)", sourceUrl: "https://www.stats.gov.cn/english/" },
    {
      name: "Régions administratives spéciales",
      count: 2,
      note: "Hong Kong et Macao, régies par le principe « un pays, deux systèmes » (système économique, juridique et monnaie propres) jusqu'en 2047 et 2049.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/One_country,_two_systems",
    },
    {
      name: "Taïwan, revendiqué mais non administré",
      count: 1,
      note: "Considérée par Pékin comme une province chinoise ; gouvernée en pratique depuis 1949 par la République de Chine, non reconnue diplomatiquement par la majorité des États de l'ONU.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Political_status_of_Taiwan",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
