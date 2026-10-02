import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Aleksandar Vučić",
    since: "31 mai 2017",
    source: "Présidence de la République de Serbie",
    sourceUrl: "https://en.wikipedia.org/wiki/President_of_Serbia",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Đuro Macut",
    since: "16 avril 2025",
    source: "Gouvernement de la République de Serbie",
    sourceUrl: "https://en.wikipedia.org/wiki/Cabinet_of_%C4%90uro_Macut",
  },
  legislature: {
    name: "Assemblée nationale (Narodna skupština)",
    chambers: [{ name: "Assemblée nationale", seats: 250 }],
  },
  constitution: {
    adopted: "8 novembre 2006",
    source: "Constitution de la République de Serbie",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Serbia",
  },
  summary:
    "Adoptée par référendum en 2006, la Constitution institue une république parlementaire unitaire dotée d'une Assemblée nationale monocamérale de 250 députés élus à la proportionnelle. Le président, élu au suffrage universel direct, exerce en pratique des pouvoirs qui dépassent le cadre cérémoniel prévu par le texte. La Constitution qualifie le Kosovo de province autonome de la Serbie, où Belgrade n'exerce pourtant aucune administration depuis 1999. Candidat à l'Union européenne depuis 2012, le pays négocie son adhésion depuis 2014, mais les discussions sont largement à l'arrêt depuis 2022.",
};
