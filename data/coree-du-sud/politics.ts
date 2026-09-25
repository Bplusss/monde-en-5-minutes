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
    title: "Président de la République de Corée (le Premier ministre, Kim Min-seok, coordonne l'administration sans pouvoir exécutif propre)",
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
    "République présidentielle démocratique consolidée depuis 1987 : le président, élu au suffrage direct pour un mandat unique de cinq ans, cumule chef de l'État et du gouvernement. L'Assemblée nationale peut le destituer par impeachment validé par la Cour constitutionnelle — utilisé deux fois en une décennie (Park Geun-hye en 2017, Yoon Suk-yeol en 2025, après une brève loi martiale). L'élection anticipée de juin 2025 a porté au pouvoir Lee Jae-myung.",
};
