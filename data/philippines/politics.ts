import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République présidentielle unitaire",
  regime: "Démocratie représentative multipartite",
  headOfState: {
    title: "Président de la République des Philippines",
    name: "Ferdinand « Bongbong » Marcos Jr.",
    since: "30 juin 2022",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Bongbong_Marcos",
  },
  headOfGovernment: {
    title: "Président de la République des Philippines (pas de Premier ministre : le président cumule chef de l'État et chef du gouvernement)",
    name: "Ferdinand « Bongbong » Marcos Jr.",
    since: "30 juin 2022",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Bongbong_Marcos",
  },
  legislature: {
    name: "Congrès des Philippines",
    chambers: [
      { name: "Chambre des représentants", seats: 317 },
      { name: "Sénat", seats: 24 },
    ],
  },
  constitution: {
    adopted: "2 février 1987, par référendum, après la chute de Ferdinand Marcos (1986)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_the_Philippines",
  },
  summary:
    "Calquées sur le modèle américain, les institutions reposent sur un président élu pour un mandat unique de six ans, un vice-président élu séparément, un Sénat de 24 membres élus au niveau national et une Chambre des représentants de 317 sièges. La vie politique est dominée par de grandes familles (Marcos, Duterte, Aquino…) plus que par des partis. Élu en 2022 avec Sara Duterte comme vice-présidente, Ferdinand Marcos Jr. a rompu avec le clan Duterte : l'ancien président Rodrigo Duterte a été remis à la Cour pénale internationale en mars 2025. Les élections de mi-mandat de mai 2025 ont été favorables aux alliés des Duterte au Sénat. Mise en accusation par la Chambre le 11 mai 2026, après une première procédure annulée par la Cour suprême en 2025, Sara Duterte est jugée en destitution par le Sénat depuis juillet 2026. Prochaine présidentielle : mai 2028.",
};
