import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République semi-présidentielle",
  headOfState: {
    title: "Président de la République",
    name: "Nicușor Dan",
    since: "26 mai 2025",
    source: "Présidence de la Roumanie (Administrația Prezidențială)",
    sourceUrl: "https://www.presidency.ro/en//president-of-romania",
  },
  headOfGovernment: {
    title: "Premier ministre (par intérim)",
    name: "Ilie Bolojan",
    since: "23 juin 2025",
    source: "Gouvernement de Roumanie",
    sourceUrl: "https://en.wikipedia.org/wiki/Ilie_Bolojan",
  },
  legislature: {
    name: "Parlement de Roumanie",
    chambers: [
      { name: "Chambre des députés", seats: 330 },
      { name: "Sénat", seats: 136 },
    ],
  },
  constitution: {
    adopted: "8 décembre 1991",
    source: "Curtea Constituțională a României",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Romania",
  },
  summary:
    "La Roumanie est une République semi-présidentielle dotée d'un Parlement bicaméral. Le président, élu au suffrage universel direct pour cinq ans, dispose de compétences importantes en politique étrangère et de défense et nomme le Premier ministre, mais le pouvoir exécutif quotidien revient au gouvernement, responsable devant le Parlement. La vie politique reste marquée depuis 2025 par une forte instabilité gouvernementale : le cabinet d'Ilie Bolojan, nommé en juin 2025 pour conduire un programme d'austérité budgétaire, a perdu un vote de confiance en mai 2026 et Bolojan assure depuis lors l'intérim, plusieurs tentatives successives de former un nouveau gouvernement ayant échoué au Parlement.",
};
