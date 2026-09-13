import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Présidente des États-Unis mexicains",
    name: "Claudia Sheinbaum",
    since: "1er octobre 2024",
    source: "Gouvernement du Mexique (Gobierno de México)",
    sourceUrl: "https://www.gob.mx/presidencia",
  },
  headOfGovernment: {
    title: "Présidente des États-Unis mexicains",
    name: "Claudia Sheinbaum",
    since: "1er octobre 2024",
    source: "Gouvernement du Mexique (Gobierno de México)",
    sourceUrl: "https://www.gob.mx/presidencia",
  },
  legislature: {
    name: "Congrès de l'Union",
    chambers: [
      { name: "Chambre des députés", seats: 500 },
      { name: "Sénat", seats: 128 },
    ],
  },
  constitution: {
    adopted: "5 février 1917 (Constitution de Querétaro)",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Mexico",
  },
  summary:
    "Le Mexique est une république fédérale à régime présidentiel : comme aux États-Unis ou au Brésil, la présidente cumule les fonctions de cheffe de l'État et de cheffe du gouvernement, mais elle est élue au suffrage universel direct pour un mandat unique de six ans (le « sexenio »), non renouvelable, sans vice-président. Claudia Sheinbaum, ancienne cheffe du gouvernement de Mexico, est devenue en 2024 la première femme élue à la présidence du pays. Le pouvoir législatif appartient à un Congrès de l'Union bicaméral, et les 31 États fédérés ainsi que Mexico, la capitale, disposent chacun de leur propre constitution, gouverneur (ou cheffe de gouvernement pour Mexico) et congrès local.",
};
