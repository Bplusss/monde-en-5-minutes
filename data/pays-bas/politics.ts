import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie",
  regime: "Monarchie constitutionnelle parlementaire",
  headOfState: {
    title: "Roi",
    name: "Willem-Alexander",
    since: "30 avril 2013",
    source: "Wikidata",
    sourceUrl: "https://www.wikidata.org/wiki/Q55",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Rob Jetten",
    since: "23 février 2026",
    source: "Wikidata",
    sourceUrl: "https://www.wikidata.org/wiki/Q55",
  },
  legislature: {
    name: "États généraux",
    chambers: [
      { name: "Tweede Kamer (Chambre des représentants)", seats: 150 },
      { name: "Eerste Kamer (Sénat)", seats: 75 },
    ],
  },
  constitution: {
    adopted: "1848 (révision fondatrice du régime parlementaire actuel)",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/States_General_of_the_Netherlands",
  },
  summary:
    "Les Pays-Bas sont une monarchie constitutionnelle parlementaire : le roi exerce un rôle largement cérémoniel, tandis que le gouvernement, dirigé par le Premier ministre et responsable devant la Tweede Kamer, exerce le pouvoir exécutif. Amsterdam est la capitale constitutionnelle, mais le gouvernement et le Parlement siègent à La Haye.",
};
