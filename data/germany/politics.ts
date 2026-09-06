import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "République parlementaire fédérale",
  headOfState: {
    title: "Président fédéral",
    name: "Frank-Walter Steinmeier",
    since: "19 mars 2017 (réélu en 2022)",
  },
  headOfGovernment: {
    title: "Chancelier fédéral",
    name: "Friedrich Merz",
    since: "6 mai 2025",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Bundestag", seats: 630 },
      { name: "Bundesrat", seats: 69 },
    ],
  },
  constitution: {
    adopted: "23 mai 1949",
    source: "Deutscher Bundestag",
    sourceUrl: "https://www.bundestag.de/gg",
  },
  summary:
    "L'Allemagne est une république fédérale parlementaire composée de 16 Länder. Le président fédéral, élu indirectement, exerce un rôle de représentation, tandis que le chancelier fédéral, responsable devant le Bundestag, dirige le gouvernement.",
};
