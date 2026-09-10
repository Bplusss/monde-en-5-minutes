import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Alar Karis",
    since: "11 octobre 2021",
    source: "Présidence de la République d'Estonie",
    sourceUrl: "https://www.president.ee/en",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Kristen Michal",
    since: "23 juillet 2024",
    source: "Gouvernement de la République d'Estonie",
    sourceUrl: "https://valitsus.ee/en",
  },
  legislature: {
    name: "Riigikogu (Assemblée d'État)",
    chambers: [{ name: "Riigikogu", seats: 101 }],
  },
  constitution: {
    adopted: "28 juin 1992",
    source: "Riigikogu",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Estonia",
  },
  summary:
    "L'Estonie est une République parlementaire monocamérale régie par la Constitution adoptée par référendum en 1992, peu après la restauration de son indépendance. Le président de la République, élu par le Riigikogu ou un collège électoral élargi, exerce un rôle largement représentatif, tandis que le pouvoir exécutif appartient au Premier ministre et à son gouvernement, responsables devant le Parlement. Pionnière de l'administration numérique, l'Estonie permet le vote électronique par Internet lors de ses élections depuis 2005.",
};
