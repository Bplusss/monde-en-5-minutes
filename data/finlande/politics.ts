import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Alexander Stubb",
    since: "1er mars 2024",
    source: "Présidence de la République de Finlande",
    sourceUrl: "https://www.presidentti.fi/en/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Petteri Orpo",
    since: "20 juin 2023",
    source: "Gouvernement finlandais",
    sourceUrl: "https://valtioneuvosto.fi/en/frontpage",
  },
  legislature: {
    name: "Eduskunta (Parlement)",
    chambers: [{ name: "Eduskunta", seats: 200 }],
  },
  constitution: {
    adopted: "11 juin 1999",
    source: "Eduskunta",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Finland",
  },
  summary:
    "La Finlande est une République parlementaire monocamérale, régie depuis mars 2000 par une Constitution qui a réduit les pouvoirs auparavant importants du président au profit du Premier ministre et de l'Eduskunta. Le président conserve toutefois un rôle central en matière de politique étrangère et de sécurité, particulièrement visible depuis l'adhésion du pays à l'OTAN en 2023.",
};
