import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République présidentielle unitaire",
  regime: "Démocratie représentative multipartite",
  headOfState: {
    title: "Président de la République de Corée",
    name: "Lee Jae-myung",
    since: "4 juin 2025",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Lee_Jae-myung",
  },
  headOfGovernment: {
    title: "Président de la République de Corée (régime présidentiel : le Premier ministre, actuellement Kim Min-seok, coordonne l'administration sous son autorité sans pouvoir exécutif propre)",
    name: "Lee Jae-myung",
    since: "4 juin 2025",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Lee_Jae-myung",
  },
  legislature: {
    name: "Assemblée nationale (Gukhoe)",
    chambers: [{ name: "Assemblée nationale", seats: 300 }],
  },
  constitution: {
    adopted: "17 juillet 1948, révisée à neuf reprises (dernière révision majeure en 1987)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_South_Korea",
  },
  summary:
    "La Corée du Sud est une république présidentielle dotée d'un régime démocratique multipartite consolidé depuis la démocratisation de 1987, marquée par un exécutif fort : le président, élu au suffrage universel direct pour un mandat unique de cinq ans non renouvelable — une règle instaurée en 1987 précisément pour empêcher tout retour à l'autoritarisme des décennies précédentes —, cumule les fonctions de chef de l'État et de chef du gouvernement. L'Assemblée nationale, monocamérale et élue pour quatre ans, partage le pouvoir législatif avec l'exécutif et dispose depuis 2004 du pouvoir de destituer un président par une procédure de mise en accusation (impeachment) validée par la Cour constitutionnelle — une procédure utilisée avec succès à deux reprises en un peu plus d'une décennie (Park Geun-hye en 2017, Yoon Suk-yeol en 2025). Le président Yoon Suk-yeol a en effet été démis de ses fonctions le 4 avril 2025 par la Cour constitutionnelle, après avoir proclamé le 3 décembre 2024 une loi martiale de courte durée qui a plongé le pays dans sa plus grave crise politique depuis la démocratisation ; l'élection présidentielle anticipée du 3 juin 2025 a porté au pouvoir Lee Jae-myung, du Parti démocrate, investi dès le lendemain de son élection en l'absence de période de transition prévue par la Constitution dans ce cas de figure.",
};
