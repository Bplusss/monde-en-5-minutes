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
    title: "Président de la République d'Indonésie (l'Indonésie n'a pas de poste de Premier ministre : le président, élu au suffrage universel direct, est à la fois chef de l'État et chef du gouvernement, à la tête d'un cabinet de ministres qui ne répondent que devant lui)",
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
    adopted: "18 août 1945 (Constitution de 1945, UUD 1945), suspendue de fait sous la Constitution provisoire de 1950 puis rétablie par décret présidentiel en 1959 ; amendée à quatre reprises entre 1999 et 2002 pour instaurer l'élection directe du président et limiter ses pouvoirs",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Indonesia",
  },
  summary:
    "L'Indonésie est une république présidentielle où le président, élu au suffrage universel direct pour un mandat de cinq ans renouvelable une fois, cumule les fonctions de chef de l'État et de chef du gouvernement, sans Premier ministre distinct — un exécutif fort hérité en partie des décennies autoritaires de Sukarno puis de Suharto, mais encadré depuis les réformes constitutionnelles de 1999-2002 qui ont suivi la chute de ce dernier en 1998. Le pouvoir législatif est partagé entre la Chambre des représentants (DPR), qui vote les lois et le budget, et le Conseil régional des représentants (DPD), chargé des intérêts des provinces mais aux pouvoirs plus limités ; les deux chambres se réunissent occasionnellement en Assemblée consultative du peuple (MPR), notamment pour amender la Constitution. Prabowo Subianto, ancien général controversé pour son passé sous la dictature de Suharto (dont il était le gendre) et pour des accusations d'enlèvements de militants pro-démocratie en 1998 jamais élucidées devant la justice, a remporté dès le premier tour l'élection présidentielle de février 2024 avec près de 60 % des voix, en s'alliant à Gibran Rakabuming Raka — fils du président sortant Joko Widodo, alors trop jeune pour se présenter selon la loi électorale avant qu'une décision controversée de la Cour constitutionnelle (présidée à l'époque par un parent par alliance de Widodo) n'abaisse l'âge minimum requis. Investi le 20 octobre 2024, Prabowo a hérité de l'ambitieux projet de sa capitale, Nusantara, mais l'a en pratique ralenti et rétrogradé au rang de simple future « capitale politique », tout en poursuivant une politique étrangère plus affirmée (adhésion aux BRICS effective en janvier 2025) et une politique intérieure marquée par des tensions sociales récurrentes, dont de vastes manifestations à l'été 2025 contre le train de vie des parlementaires et les violences policières.",
};
