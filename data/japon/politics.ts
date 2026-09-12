import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle",
  regime: "Monarchie parlementaire",
  headOfState: {
    title: "Empereur",
    name: "Naruhito",
    since: "1 mai 2019",
    source: "Wikidata",
    sourceUrl: "https://www.wikidata.org/wiki/Q17",
  },
  headOfGovernment: {
    title: "Première ministre",
    name: "Sanae Takaichi",
    since: "21 octobre 2025",
    source: "Wikidata",
    sourceUrl: "https://www.wikidata.org/wiki/Q17",
  },
  legislature: {
    name: "Diète nationale (Kokkai)",
    chambers: [
      { name: "Chambre des représentants", seats: 465 },
      { name: "Chambre des conseillers", seats: 248 },
    ],
  },
  constitution: {
    adopted: "Promulguée le 3 novembre 1946, en vigueur depuis le 3 mai 1947",
    source: "National Diet Library",
    sourceUrl: "https://www.ndl.go.jp/constitution/e/",
  },
  summary:
    "Le Japon est une monarchie constitutionnelle parlementaire dans laquelle le rôle de l'empereur est, depuis la Constitution de 1947, strictement circonscrit. Son article 1 définit l'empereur comme « le symbole de l'État et de l'unité du peuple », et son article 4 précise qu'il « n'a pas de pouvoirs relatifs au gouvernement » : il se borne à accomplir des actes protocolaires en matière d'État — promulgation des lois, convocation de la Diète, nomination formelle du Premier ministre désigné par le Parlement — sur avis et approbation obligatoires du Cabinet, sans aucune marge de décision personnelle. C'est une rupture nette avec la Constitution Meiji de 1889, qui faisait de l'empereur un souverain « sacré et inviolable ». Le pouvoir exécutif revient entièrement au Premier ministre et à son Cabinet, responsables devant la Diète nationale, dont la vie politique est dominée depuis 1955 par le Parti libéral-démocrate (PLD), à l'exception de deux brèves interruptions (1993-1994 et 2009-2012).",
};
