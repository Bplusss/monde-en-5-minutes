import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Président de la République",
    name: "John Dramani Mahama",
    since: "7 janvier 2025 (déjà président de 2012 à 2017)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/John_Mahama",
  },
  headOfGovernment: {
    title: "Président de la République",
    name: "John Dramani Mahama",
    since: "7 janvier 2025",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/John_Mahama",
  },
  legislature: {
    name: "Parlement",
    chambers: [{ name: "Parlement", seats: 276 }],
  },
  constitution: {
    adopted: "Approuvée par référendum le 28 avril 1992, en vigueur depuis le 7 janvier 1993 (Quatrième République)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Ghana",
  },
  summary:
    "Après une succession de coups d'État entre 1966 et 1981, le Ghana est devenu l'une des démocraties les plus stables d'Afrique. Le président, élu au suffrage universel pour quatre ans et pour deux mandats au plus, dirige le gouvernement ; il doit choisir la majorité de ses ministres parmi les députés. Deux partis alternent au pouvoir depuis 1992 : le Congrès national démocratique (NDC, centre gauche) et le Nouveau Parti patriotique (NPP, centre droit). Élu en décembre 2024 avec 56,6 % des voix, John Mahama a succédé à Nana Akufo-Addo ; Jane Naana Opoku-Agyemang est la première femme vice-présidente du pays. Les chefs traditionnels, comme l'Asantehene, roi des Ashantis, conservent une forte autorité morale.",
};
