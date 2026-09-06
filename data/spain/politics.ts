import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie",
  regime: "Monarchie parlementaire",
  headOfState: {
    title: "Roi d'Espagne",
    name: "Felipe VI",
    since: "19 juin 2014",
  },
  headOfGovernment: {
    title: "Président du gouvernement",
    name: "Pedro Sánchez",
    since: "2 juin 2018",
  },
  legislature: {
    name: "Cortes Generales",
    chambers: [
      { name: "Congrès des députés", seats: 350 },
      { name: "Sénat", seats: 266 },
    ],
  },
  constitution: {
    adopted: "6 décembre 1978",
    source: "Congreso de los Diputados",
    sourceUrl: "https://www.congreso.es/",
  },
  summary:
    "L'Espagne est une monarchie parlementaire depuis la Constitution de 1978, adoptée après la fin du régime franquiste. Le roi exerce une fonction essentiellement symbolique et d'arbitrage, tandis que le président du gouvernement, responsable devant le Congrès des députés, dirige l'exécutif.",
};
