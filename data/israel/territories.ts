import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "Israël est divisé en six districts (mehozot) et 15 sous-districts. Conformément aux frontières reconnues, la carte s'arrête à la ligne d'armistice de 1949 (« ligne verte ») : le plateau du Golan et Jérusalem-Est, annexés par Israël, n'y figurent pas, pas plus que la Cisjordanie et la bande de Gaza, que l'ONU considère comme territoire palestinien occupé. Les chiffres du Bureau central des statistiques (CBS) couvrent en revanche Jérusalem-Est, le Golan et les colonies de Cisjordanie.",
  divisions: [
    { name: "Districts (mehozot)", count: 6, note: "Nord, Haïfa, Centre, Tel-Aviv, Jérusalem et Sud. Sans institutions élues, ils relèvent du ministère de l'Intérieur.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Districts_of_Israel" },
    {
      name: "Plateau du Golan, annexé par Israël, hors carte",
      count: 1,
      note: "Territoire syrien conquis en 1967 et annexé en 1981. Le Conseil de sécurité de l'ONU a jugé cette annexion « nulle et non avenue » (résolution 497) ; seuls de rares États, dont les États-Unis (2019) et la Colombie (août 2026), reconnaissent la souveraineté israélienne. Depuis la chute de Bachar el-Assad en décembre 2024, l'armée israélienne occupe aussi la zone tampon surveillée par l'ONU côté syrien.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Golan_Heights",
    },
    {
      name: "Jérusalem-Est, annexée par Israël, hors carte",
      count: 1,
      note: "Conquise en 1967, intégrée à la municipalité de Jérusalem puis proclamée partie de la capitale « entière et réunifiée » par une loi fondamentale de 1980, que le Conseil de sécurité a déclarée nulle (résolution 478). Elle comprend la Vieille Ville ; les Palestiniens y voient la capitale de leur futur État. Environ 40 % des habitants de la ville sont palestiniens, la plupart résidents permanents sans citoyenneté israélienne.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/East_Jerusalem",
    },
    {
      name: "Cisjordanie, sous occupation israélienne depuis 1967, hors carte",
      count: 1,
      note: "Environ 3 millions de Palestiniens et, selon le CBS, quelque 515 000 colons israéliens fin 2024 (hors Jérusalem-Est). La zone C (environ 60 %) reste sous plein contrôle israélien. Le Conseil de sécurité (résolution 2334, 2016) et la Cour internationale de justice, dans son avis consultatif du 19 juillet 2024, jugent les colonies illégales ; la CIJ estime que l'occupation elle-même est illicite et doit cesser. Israël conteste ces positions et parle de « Judée-Samarie ». Des propositions de loi d'annexion ont été examinées par la Knesset en 2025-2026, sans adoption définitive connue.",
      source: "Cour internationale de justice / Wikipedia",
      sourceUrl: "https://www.icj-cij.org/case/186",
    },
    {
      name: "Bande de Gaza, hors carte",
      count: 1,
      note: "Gouvernée par le Hamas depuis 2007. Depuis le cessez-le-feu du 10 octobre 2025, l'armée israélienne contrôle encore environ la moitié du territoire, derrière la « ligne jaune » du plan américain. L'administration civile du Hamas a démissionné en juillet 2026 ; son désarmement reste en négociation.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Gaza_war",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
