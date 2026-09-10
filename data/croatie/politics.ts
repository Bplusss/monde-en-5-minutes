import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Zoran Milanović",
    since: "18 février 2025",
    source: "Présidence de la République de Croatie",
    sourceUrl: "https://www.predsjednik.hr/en/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Andrej Plenković",
    since: "19 octobre 2016",
    source: "Gouvernement de la République de Croatie",
    sourceUrl: "https://vlada.gov.hr/the-prime-minister/14973",
  },
  legislature: {
    name: "Sabor (Assemblée croate)",
    chambers: [{ name: "Assemblée", seats: 151 }],
  },
  constitution: {
    adopted: "22 décembre 1990",
    source: "Sabor (Assemblée croate)",
    sourceUrl: "https://www.sabor.hr/en/about-parliament/history/important-dates/22-december-christmas-constitution-first-constitution",
  },
  summary:
    "La Croatie est une République parlementaire monocamérale depuis une réforme constitutionnelle de 2000, qui a réduit les pouvoirs d'un président initialement plus fort dans la Constitution de 1990. Le président de la République, élu au suffrage universel direct pour cinq ans, dispose de prérogatives limitées (diplomatie, défense) et cohabite avec un Premier ministre responsable devant le Sabor, qui détient l'essentiel du pouvoir exécutif.",
};
