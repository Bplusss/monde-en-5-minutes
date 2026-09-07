import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "République parlementaire fédérale",
  headOfState: {
    title: "Président fédéral",
    name: "Alexander Van der Bellen",
    since: "26 janvier 2017",
  },
  headOfGovernment: {
    title: "Chancelier fédéral",
    name: "Christian Stocker",
    since: "3 mars 2025",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Nationalrat", seats: 183 },
      { name: "Bundesrat", seats: 60 },
    ],
  },
  constitution: {
    adopted: "10 novembre 1920",
    source: "Rechtsinformationssystem des Bundes (RIS)",
    sourceUrl: "https://www.ris.bka.gv.at/",
  },
  summary:
    "L'Autriche est une république fédérale parlementaire composée de neuf Länder. Le président fédéral, élu au suffrage universel direct, exerce un rôle largement représentatif, tandis que le chancelier fédéral, responsable devant le Nationalrat, dirige le gouvernement.",
};
