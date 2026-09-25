import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Mandarin standard (putonghua)",
      kind: "officielle",
      sharePercent: { value: 80, unit: "%", year: 2020, source: "Ministère chinois de l'Éducation", sourceUrl: "https://en.wikipedia.org/wiki/Standard_Chinese", note: "Part de la population sachant le parler ; fondée sur le dialecte de Pékin et enseignée dans tout le pays depuis les années 1950." },
    },
    {
      name: "Cantonais",
      kind: "régionale",
      note: "Langue dominante à Hong Kong, Macao et dans le Guangdong ; mutuellement inintelligible à l'oral avec le mandarin bien que partageant le même système d'écriture.",
    },
    {
      name: "Wu (dont le shanghaïen), min, hakka, xiang, gan",
      kind: "régionale",
      note: "Autres grandes familles de « dialectes » chinois (fangyan) — en réalité des langues distinctes à l'oral, unifiées à l'écrit par les caractères communs.",
    },
    {
      name: "Mongol, tibétain, ouïghour, zhuang et autres langues des minorités",
      kind: "parlée",
      note: "Langues des 55 minorités ethniques officiellement reconnues (environ 9 % de la population), coofficielles dans les régions autonomes correspondantes.",
    },
  ],
  summary:
    "Le mandarin standard (putonghua) est promu comme langue commune depuis les années 1950 et unifie l'enseignement et l'administration, mais la Chine reste linguistiquement très diverse : les « dialectes » (cantonais, wu, min, hakka…) sont en réalité des langues distinctes à l'oral, unifiées à l'écrit par les sinogrammes. Les 55 minorités ethniques reconnues parlent par ailleurs des dizaines de langues sans rapport avec le chinois, dont le mongol, le tibétain et l'ouïghour.",
};
