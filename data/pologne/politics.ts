import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Karol Nawrocki",
    since: "6 août 2025",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Donald Tusk",
    since: "13 décembre 2023",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Sejm", seats: 460 },
      { name: "Sénat", seats: 100 },
    ],
  },
  constitution: {
    adopted: "2 avril 1997 (entrée en vigueur le 17 octobre 1997)",
    source: "Wikipedia (d'après le texte constitutionnel polonais)",
  },
  summary:
    "La Pologne est une République parlementaire dont le président, élu au suffrage universel direct, partage le pouvoir exécutif avec un Premier ministre responsable devant le Sejm, chambre basse d'un Parlement bicaméral complété par le Sénat.",
};
