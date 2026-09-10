import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République présidentielle",
  headOfState: {
    title: "Président de la République",
    name: "Alexandre Loukachenko",
    since: "20 juillet 1994",
    source: "Présidence de la République de Biélorussie",
    sourceUrl: "http://president.gov.by/en/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Alexandre Tourtchine",
    since: "10 mars 2025",
    source: "Conseil des ministres de Biélorussie",
    sourceUrl: "https://government.gov.by/en/",
  },
  legislature: {
    name: "Assemblée nationale (Natsyyanal'ny skhod)",
    chambers: [
      { name: "Chambre des représentants", seats: 110 },
      { name: "Conseil de la République", seats: 64 },
    ],
  },
  constitution: {
    adopted: "15 mars 1994",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Belarus",
  },
  summary:
    "Formellement une République présidentielle dotée d'un Parlement bicaméral, la Biélorussie concentre en pratique l'essentiel du pouvoir entre les mains du président Alexandre Loukachenko, à la tête du pays sans interruption depuis 1994. La Constitution de 1994 a été profondément amendée par référendum en 1996, en 2004 (suppression de la limitation du nombre de mandats présidentiels) puis en 2022. Les organisations internationales de surveillance électorale (OSCE, Union européenne) considèrent qu'aucune élection présidentielle biélorusse depuis 1994 n'a répondu aux standards internationaux de scrutin libre et équitable, un constat renforcé après la contestation massive de la réélection de 2020 et la répression qui a suivi.",
};
