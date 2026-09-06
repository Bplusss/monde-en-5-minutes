import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République semi-présidentielle",
  headOfState: {
    title: "Président de la République",
    name: "António José Seguro",
    since: "9 mars 2026",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Luís Montenegro",
    since: "29 mai 2025",
  },
  legislature: {
    name: "Assembleia da República",
    chambers: [{ name: "Assembleia da República", seats: 230 }],
  },
  constitution: {
    adopted: "2 avril 1976",
    source: "Assembleia da República",
    sourceUrl: "https://www.parlamento.pt/",
  },
  summary:
    "Le Portugal est une République semi-présidentielle depuis la Constitution de 1976, adoptée après la révolution des Œillets de 1974. Le président de la République, élu au suffrage universel direct, coexiste avec un Premier ministre responsable devant l'Assemblée de la République, chambre unique du Parlement.",
};
