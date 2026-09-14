import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Mandarin standard (putonghua)",
      kind: "officielle",
      sharePercent: { value: 80, unit: "%", year: 2020, source: "Ministère chinois de l'Éducation", sourceUrl: "https://en.wikipedia.org/wiki/Standard_Chinese", note: "Part de la population sachant le parler ; langue maternelle d'environ deux tiers des Chinois, fondée sur le dialecte de Pékin et enseignée dans tout le pays depuis les années 1950." },
    },
    {
      name: "Cantonais",
      kind: "régionale",
      note: "Langue dominante à Hong Kong, Macao et dans une grande partie du Guangdong ; mutuellement inintelligible à l'oral avec le mandarin bien que partageant le même système d'écriture.",
    },
    {
      name: "Wu (dont le shanghaïen), min, hakka, xiang, gan",
      kind: "régionale",
      note: "Autres grandes familles de « dialectes » chinois (fangyan) — en réalité des langues distinctes à l'oral, unifiées à l'écrit par les caractères chinois communs — parlées respectivement dans la région de Shanghai, à Taïwan et au Fujian, dans les communautés hakka dispersées, au Hunan et au Jiangxi.",
    },
    {
      name: "Mongol, tibétain, ouïghour, zhuang et autres langues des minorités",
      kind: "parlée",
      note: "Langues des 55 minorités ethniques officiellement reconnues (environ 9 % de la population), coofficielles à l'échelle locale dans les régions autonomes correspondantes (Mongolie-Intérieure, Tibet, Xinjiang, Guangxi) ; l'ouïghour, langue turcique, et le tibétain, s'écrivent dans leurs propres systèmes d'écriture.",
    },
  ],
  summary:
    "Le mandarin standard (putonghua), fondé sur la prononciation de Pékin, est promu comme langue commune depuis les années 1950 et unifie aujourd'hui l'enseignement et l'administration dans tout le pays, mais la Chine reste linguistiquement très diverse : les « dialectes » chinois (cantonais, wu, min, hakka…) sont en réalité des langues distinctes à l'oral, rendues mutuellement compréhensibles à l'écrit par un système d'écriture logographique commun, les sinogrammes, utilisés dans leur forme simplifiée en Chine continentale depuis les années 1950 (contre les caractères traditionnels toujours en usage à Hong Kong, Macao et Taïwan). Les 55 minorités ethniques officiellement reconnues, concentrées dans les régions autonomes de l'ouest et du nord, parlent par ailleurs des dizaines de langues sans rapport avec le chinois, dont le mongol, le tibétain et l'ouïghour (langue turcique).",
};
