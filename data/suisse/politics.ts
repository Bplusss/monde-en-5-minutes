import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Confédération (État fédéral)",
  regime: "Démocratie directe fédérale à exécutif collégial",
  headOfState: {
    title: "Président de la Confédération",
    name: "Guy Parmelin",
    since: "1er janvier 2026 (élu par l'Assemblée fédérale le 10 décembre 2025)",
    source: "Chancellerie fédérale / admin.ch",
    sourceUrl: "https://www.admin.ch/fr/presidence-de-la-confederation-2026",
  },
  headOfGovernment: {
    title: "Conseil fédéral (exécutif collégial de 7 membres)",
    name: "Aucun chef de gouvernement unique : le Conseil fédéral gouverne collégialement ; Guy Parmelin le préside pour 2026 (« primus inter pares »)",
    since: "Système collégial en vigueur depuis 1848",
    source: "Chancellerie fédérale / admin.ch",
    sourceUrl: "https://www.admin.ch/fr/membres-conseil-federal",
  },
  legislature: {
    name: "Assemblée fédérale",
    chambers: [
      { name: "Conseil national", seats: 200 },
      { name: "Conseil des États", seats: 46 },
    ],
  },
  constitution: {
    adopted: "18 avril 1999 (en vigueur depuis le 1ᵉʳ janvier 2000) ; succède à la première Constitution fédérale du 12 septembre 1848",
    source: "Assemblée fédérale (parlament.ch)",
    sourceUrl: "https://www.parlament.ch/fr/%C3%BCber-das-parlament/fonctionnement-du-parlement/droit-parlementaire/constitution-federale",
  },
  summary:
    "La Suisse est une confédération dont l'exécutif fédéral, le Conseil fédéral, est un organe collégial de 7 membres élus par l'Assemblée fédérale : il n'existe pas de président ou de chef de gouvernement unique comparable à d'autres pays. La présidence de la Confédération est une fonction tournante, renouvelée chaque année parmi les conseillers fédéraux, à prépondérance largement protocolaire. Le pays se caractérise en outre par une démocratie directe très développée (référendums et initiatives populaires fréquents).",
};
