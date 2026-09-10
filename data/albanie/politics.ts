import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Bajram Begaj",
    since: "24 juillet 2022",
    source: "Assemblée de la République d'Albanie",
    sourceUrl: "https://en.wikipedia.org/wiki/Bajram_Begaj",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Edi Rama",
    since: "10 septembre 2013",
    source: "Conseil des ministres de la République d'Albanie",
    sourceUrl: "https://en.wikipedia.org/wiki/Edi_Rama",
  },
  legislature: {
    name: "Assemblée de la République d'Albanie (Kuvendi)",
    chambers: [{ name: "Assemblée", seats: 140 }],
  },
  constitution: {
    adopted: "28 novembre 1998 (approuvée par référendum le 22 novembre 1998)",
    source: "Assemblée de la République d'Albanie",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Albania",
  },
  summary:
    "L'Albanie est une République parlementaire unicamérale : le président de la République, élu par l'Assemblée pour un mandat de cinq ans, exerce un rôle essentiellement représentatif, tandis que le pouvoir exécutif appartient au Premier ministre et à son gouvernement, responsables devant l'Assemblée. Edi Rama, chef du Parti socialiste, dirige le pays depuis 2013 et a été reconduit pour un quatrième mandat consécutif après les élections législatives de mai 2025.",
};
