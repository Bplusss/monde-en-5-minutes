import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République fédérale",
  regime: "République parlementaire fédérale",
  headOfState: {
    title: "Présidente de l'Inde",
    name: "Droupadi Murmu",
    since: "25 juillet 2022",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/President_of_India",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Narendra Modi",
    since: "26 mai 2014 (entamé un 3ᵉ mandat consécutif le 9 juin 2024)",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Prime_Minister_of_India",
  },
  legislature: {
    name: "Parlement de l'Inde (Sansad)",
    chambers: [
      { name: "Lok Sabha (Chambre du peuple)", seats: 543 },
      { name: "Rajya Sabha (Conseil des États)", seats: 245 },
    ],
  },
  constitution: {
    adopted: "26 novembre 1949 (entrée en vigueur le 26 janvier 1950)",
    source: "Ministry of Law and Justice, Government of India",
    sourceUrl: "https://legislative.gov.in/constitution-of-india/",
  },
  summary:
    "L'Inde est une république fédérale parlementaire réunissant 28 États et 8 territoires de l'Union. La présidente, élue pour cinq ans au suffrage indirect par un collège électoral composé des parlementaires nationaux et des élus des assemblées d'État, exerce une fonction essentiellement représentative et protocolaire. Le pouvoir exécutif réel appartient au Premier ministre, chef du parti ou de la coalition majoritaire à la Lok Sabha, qui dirige le Conseil des ministres et est responsable devant le Parlement. Narendra Modi et son parti, le Bharatiya Janata Party (BJP), dominent la vie politique nationale depuis 2014.",
};
