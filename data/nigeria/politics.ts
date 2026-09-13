import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "Régime présidentiel",
  headOfState: {
    title: "Président de la République fédérale du Nigeria",
    name: "Bola Ahmed Tinubu",
    since: "29 mai 2023",
    source: "State House (présidence du Nigeria)",
    sourceUrl: "https://statehouse.gov.ng/",
  },
  headOfGovernment: {
    title: "Président de la République fédérale du Nigeria",
    name: "Bola Ahmed Tinubu",
    since: "29 mai 2023",
    source: "State House (présidence du Nigeria)",
    sourceUrl: "https://statehouse.gov.ng/",
  },
  legislature: {
    name: "Assemblée nationale",
    chambers: [
      { name: "Chambre des représentants", seats: 360 },
      { name: "Sénat", seats: 109 },
    ],
  },
  constitution: {
    adopted: "29 mai 1999",
    source: "Assemblée nationale du Nigeria",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Nigeria",
  },
  summary:
    "Le Nigeria est une république fédérale à régime présidentiel : comme aux États-Unis ou au Brésil, le président cumule les fonctions de chef de l'État et de chef du gouvernement, est élu au suffrage universel direct pour un mandat de quatre ans renouvelable une fois, et n'est pas responsable devant l'Assemblée nationale. Le pouvoir législatif appartient à une Assemblée nationale bicamérale (Sénat et Chambre des représentants), et les 36 États fédérés, ainsi que le Territoire de la capitale fédérale (Abuja), disposent chacun de leur propre gouverneur et assemblée législative. La Constitution actuelle, adoptée en 1999, a instauré la « Quatrième République » à l'issue d'une transition pilotée par la junte militaire sortante et marque, à ce jour, la plus longue période de gouvernement civil continu de l'histoire du pays depuis l'indépendance.",
};
