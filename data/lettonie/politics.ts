import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Edgars Rinkēvičs",
    since: "8 juillet 2023",
    source: "Présidence de la République de Lettonie",
    sourceUrl: "https://www.president.lv/en",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Andris Kulbergs",
    since: "28 mai 2026",
    source: "Saeima de la République de Lettonie",
    sourceUrl: "https://www.saeima.lv/en",
  },
  legislature: {
    name: "Saeima (Parlement de la République de Lettonie)",
    chambers: [{ name: "Saeima", seats: 100 }],
  },
  constitution: {
    adopted: "15 février 1922 (Satversme, entrée en vigueur le 7 novembre 1922)",
    source: "Chancellerie du président de la République de Lettonie",
    sourceUrl: "https://www.president.lv/en/constitution-republic-latvia",
  },
  summary:
    "La Lettonie est une République parlementaire monocamérale régie par la Satversme, l'une des plus anciennes constitutions d'Europe encore en vigueur, adoptée en 1922, suspendue durant les occupations autoritaire (1934), soviétique et nazie, puis restaurée en 1991. Le président de la République, élu par la Saeima pour quatre ans, exerce un rôle largement représentatif et diplomatique, tandis que le pouvoir exécutif appartient au Premier ministre et à son gouvernement de coalition, responsables devant le Parlement ; les coalitions gouvernementales, souvent fragiles, se succèdent fréquemment depuis le rétablissement de l'indépendance.",
};
