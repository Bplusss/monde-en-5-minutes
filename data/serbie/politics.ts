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
    "Adoptée par référendum en 2006, peu après la dissolution de l'union avec le Monténégro, la Constitution serbe institue une république parlementaire unitaire dotée d'une Assemblée nationale monocamérale de 250 députés élus à la proportionnelle. Le président de la République, élu au suffrage universel direct, dispose de pouvoirs qui dépassent en pratique le cadre strictement cérémoniel prévu par le texte constitutionnel. La Constitution qualifie le Kosovo de province autonome faisant partie intégrante de la Serbie ; dans les faits, Belgrade n'y exerce aucune administration depuis 1999 (voir la section Territoires). Le pays est candidat à l'adhésion à l'Union européenne depuis 2012, avec des négociations ouvertes depuis 2014 mais largement à l'arrêt depuis 2022.",
};
