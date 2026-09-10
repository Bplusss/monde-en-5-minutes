import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Catalan",
      kind: "officielle",
      note: "Seule langue officielle du pays, langue historique et identitaire, bien que devenue minoritaire dans les usages quotidiens face à l'importante population immigrée.",
    },
    {
      name: "Espagnol",
      kind: "parlée",
      note: "Langue la plus parlée au quotidien, du fait de la forte proportion de résidents espagnols et hispanophones.",
    },
    {
      name: "Portugais",
      kind: "parlée",
      note: "Langue de l'importante communauté portugaise, l'une des principales populations immigrées du pays.",
    },
    {
      name: "Français",
      kind: "parlée",
      note: "Largement compris et utilisé dans les échanges avec la France voisine et dans le système scolaire français présent en Andorre.",
    },
  ],
  summary:
    "Le catalan est la seule langue officielle, enseignée à tous les élèves andorrans, mais la population résidente étant majoritairement étrangère, l'espagnol reste la langue la plus parlée au quotidien, suivi du portugais et du français.",
};
