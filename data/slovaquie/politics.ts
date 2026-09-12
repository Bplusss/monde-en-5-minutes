import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Peter Pellegrini",
    since: "15 juin 2024",
    source: "Présidence de la République slovaque",
    sourceUrl: "https://www.prezident.sk/en/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Robert Fico",
    since: "25 octobre 2023",
    source: "Gouvernement de la République slovaque",
    sourceUrl: "https://www.vlada.gov.sk/en/",
  },
  legislature: {
    name: "Conseil national de la République slovaque (Národná rada)",
    chambers: [{ name: "Conseil national (Národná rada)", seats: 150 }],
  },
  constitution: {
    adopted: "1er septembre 1992",
    source: "Conseil national de la République slovaque",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Slovakia",
  },
  summary:
    "La Slovaquie est une République parlementaire monocamérale, régie par une Constitution adoptée quelques mois avant la partition pacifique de la Tchécoslovaquie, effective le 1ᵉʳ janvier 1993. Le président de la République, élu au suffrage universel direct depuis 1999, exerce des pouvoirs essentiellement représentatifs et diplomatiques, tandis que le gouvernement, responsable devant le Conseil national, détient l'essentiel du pouvoir exécutif.",
};
