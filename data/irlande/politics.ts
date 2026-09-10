import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Présidente de la République",
    name: "Catherine Connolly",
    since: "11 novembre 2025",
    source: "Présidence de l'Irlande",
    sourceUrl: "https://president.ie/en/",
  },
  headOfGovernment: {
    title: "Taoiseach (Premier ministre)",
    name: "Micheál Martin",
    since: "23 janvier 2025",
    source: "Department of the Taoiseach",
    sourceUrl: "https://www.gov.ie/en/department-of-the-taoiseach/",
  },
  legislature: {
    name: "Oireachtas",
    chambers: [
      { name: "Dáil Éireann (Chambre des représentants)", seats: 174 },
      { name: "Seanad Éireann (Sénat)", seats: 60 },
    ],
  },
  constitution: {
    adopted: "1er juillet 1937",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Ireland",
  },
  summary:
    "L'Irlande est une République parlementaire bicamérale régie par le Bunreacht na hÉireann, adopté par référendum en 1937. La présidente, élue au suffrage universel direct pour un rôle avant tout représentatif, cohabite avec un Taoiseach responsable devant le Dáil, qui détient l'essentiel du pouvoir exécutif ; le Sénat, en partie nommé et en partie élu par des collèges vocationnels, joue un rôle plus consultatif.",
};
