import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Suédois",
      kind: "officielle",
      note: "Langue officielle depuis la loi sur les langues (Språklag) de 2009 — auparavant simple langue de fait sans statut légal formel.",
    },
    {
      name: "Finnois, meänkieli, sami, romani chib, yiddish",
      kind: "régionale",
      note: "Cinq langues minoritaires nationales reconnues par la même loi de 2009, bénéficiant de protections spécifiques (enseignement, services publics dans certaines communes).",
    },
    {
      name: "Anglais",
      kind: "parlée",
      note: "Très largement parlé comme langue seconde, enseigné dès le primaire.",
    },
  ],
  summary:
    "Le suédois est la seule langue officielle du pays, un statut consacré seulement en 2009. Cinq langues minoritaires nationales — finnois, meänkieli, sami, romani chib et yiddish — bénéficient d'une reconnaissance légale distincte, héritée des minorités historiques du royaume.",
};
