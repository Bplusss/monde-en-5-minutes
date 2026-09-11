import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Français",
      kind: "officielle",
      note: "Seule langue officielle, utilisée dans l'administration, l'enseignement et la vie courante, reflet des liens étroits avec la France voisine.",
    },
    {
      name: "Monégasque",
      kind: "régionale",
      note: "Dialecte ligure traditionnel de la principauté, aujourd'hui langue patrimoniale enseignée à l'école mais très minoritaire dans les usages quotidiens.",
    },
    {
      name: "Italien",
      kind: "parlée",
      note: "Largement parlé au sein de l'importante communauté italienne et par les nombreux travailleurs transfrontaliers venus de Ligurie.",
    },
    {
      name: "Anglais",
      kind: "parlée",
      note: "Très présent dans les affaires, la finance et le tourisme international, auprès d'une population résidente elle-même très cosmopolite.",
    },
  ],
  summary:
    "Le français est la seule langue officielle, mais la population résidente très internationale — moins d'un quart de nationalité monégasque — fait cohabiter au quotidien l'italien, l'anglais et le monégasque traditionnel, ce dernier activement préservé par l'enseignement bien que peu parlé en dehors du cadre scolaire.",
};
