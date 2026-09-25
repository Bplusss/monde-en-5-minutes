import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République présidentielle unitaire",
  regime: "Démocratie représentative multipartite",
  headOfState: {
    title: "Président de la République d'Indonésie",
    name: "Prabowo Subianto",
    since: "20 octobre 2024",
    source: "Présidence de la République d'Indonésie",
    sourceUrl: "https://en.wikipedia.org/wiki/Prabowo_Subianto",
  },
  headOfGovernment: {
    title: "Président de la République d'Indonésie (pas de poste de Premier ministre distinct : le président cumule chef de l'État et chef du gouvernement)",
    name: "Prabowo Subianto",
    since: "20 octobre 2024",
    source: "Présidence de la République d'Indonésie",
    sourceUrl: "https://en.wikipedia.org/wiki/Prabowo_Subianto",
  },
  legislature: {
    name: "Assemblée consultative du peuple (Majelis Permusyawaratan Rakyat, MPR)",
    chambers: [
      { name: "Chambre des représentants (Dewan Perwakilan Rakyat, DPR)", seats: 580 },
      { name: "Conseil régional des représentants (Dewan Perwakilan Daerah, DPD)", seats: 152 },
    ],
  },
  constitution: {
    adopted: "18 août 1945 (UUD 1945), rétablie par décret présidentiel en 1959 après une suspension de fait ; amendée à quatre reprises entre 1999 et 2002",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Indonesia",
  },
  summary:
    "L'Indonésie est une république présidentielle où le président, élu pour cinq ans renouvelable une fois, cumule chef de l'État et chef du gouvernement sans Premier ministre distinct — un exécutif fort encadré depuis les réformes constitutionnelles de 1999-2002 qui ont suivi la chute de Suharto. Le pouvoir législatif est partagé entre la Chambre des représentants (DPR) et le Conseil régional des représentants (DPD), réunis occasionnellement en Assemblée consultative du peuple (MPR). Prabowo Subianto, ancien général controversé pour son passé sous la dictature de Suharto, a remporté l'élection de février 2024 dès le premier tour avec Gibran Rakabuming Raka, fils de son prédécesseur Joko Widodo, comme vice-président. Depuis son investiture en octobre 2024, il a ralenti le projet de capitale Nusantara, rejoint les BRICS (janvier 2025) et fait face à de vastes manifestations à l'été 2025 contre le train de vie des parlementaires.",
};
