import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "András Baka",
    since: "19 août 2026",
    source: "Présidence de la République de Hongrie",
    sourceUrl: "https://www.keh.hu/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Péter Magyar",
    since: "9 mai 2026",
    source: "Gouvernement hongrois",
    sourceUrl: "https://kormany.hu/",
  },
  legislature: {
    name: "Assemblée nationale (Országgyűlés)",
    chambers: [{ name: "Assemblée nationale", seats: 199 }],
  },
  constitution: {
    adopted: "25 avril 2011",
    source: "Assemblée nationale de Hongrie",
    sourceUrl: "https://en.wikipedia.org/wiki/Fundamental_Law_of_Hungary",
  },
  summary:
    "La Hongrie est une République parlementaire monocamérale régie depuis 2012 par la « Loi fondamentale » de 2011, qui a remplacé la Constitution de l'après-guerre. Le président de la République, élu par l'Assemblée nationale, exerce un rôle largement représentatif, le pouvoir exécutif appartenant au Premier ministre. Après seize années consécutives de gouvernement du Fidesz de Viktor Orbán, l'élection législative d'avril 2026 a porté au pouvoir le parti Tisza de Péter Magyar avec une large majorité parlementaire.",
};
