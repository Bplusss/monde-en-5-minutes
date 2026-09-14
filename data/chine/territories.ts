import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "La Chine continentale est divisée en 31 unités provinciales de premier niveau : 22 provinces, 5 régions autonomes (Mongolie-Intérieure, Xinjiang, Tibet, Guangxi, Ningxia — dotées en théorie d'une autonomie renforcée pour leurs minorités ethniques) et 4 municipalités relevant directement du gouvernement central (Pékin, Tianjin, Shanghai, Chongqing). À cela s'ajoutent deux régions administratives spéciales (RAS), Hong Kong (rétrocédée par le Royaume-Uni en 1997) et Macao (rétrocédée par le Portugal en 1999), qui conservent en principe leur propre système économique, juridique et douanier, leur monnaie et une large autonomie politique selon le principe « un pays, deux systèmes » — un cadre dont l'application à Hong Kong s'est nettement resserrée depuis la loi sur la sécurité nationale de 2020. La République populaire de Chine revendique enfin la souveraineté sur Taïwan comme une province chinoise, mais n'y exerce aucune administration effective depuis 1949 ; l'île est gouvernée de facto par la République de Chine, dotée de ses propres institutions démocratiques élues, dans un contexte de non-reconnaissance diplomatique par la grande majorité des États membres de l'ONU (dont la France) et de tensions militaires récurrentes en mer de Chine et dans le détroit de Taïwan.",
  divisions: [
    { name: "Provinces", count: 22, source: "Bureau national de statistique de Chine (NBS)", sourceUrl: "https://www.stats.gov.cn/english/" },
    { name: "Régions autonomes", count: 5, note: "Mongolie-Intérieure, Xinjiang, Tibet, Guangxi, Ningxia — autonomie théorique pour les minorités ethniques concernées (mongole, ouïghoure, tibétaine, zhuang, hui).", source: "Bureau national de statistique de Chine (NBS)", sourceUrl: "https://www.stats.gov.cn/english/" },
    { name: "Municipalités relevant directement du gouvernement central", count: 4, note: "Pékin, Tianjin, Shanghai, Chongqing.", source: "Bureau national de statistique de Chine (NBS)", sourceUrl: "https://www.stats.gov.cn/english/" },
    {
      name: "Régions administratives spéciales",
      count: 2,
      note: "Hong Kong et Macao, régies par le principe « un pays, deux systèmes » (systèmes économique, juridique et douanier propres, monnaies distinctes) jusqu'en 2047 et 2049 respectivement selon les textes fondateurs.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/One_country,_two_systems",
    },
    {
      name: "Taïwan, revendiqué mais non administré",
      count: 1,
      note: "Considérée par Pékin comme une province chinoise ; gouvernée en pratique depuis 1949 par la République de Chine, non reconnue diplomatiquement par la majorité des États membres de l'ONU.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Political_status_of_Taiwan",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
