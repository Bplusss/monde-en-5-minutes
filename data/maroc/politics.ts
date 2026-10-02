import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle unitaire",
  regime: "Monarchie parlementaire où le roi conserve des pouvoirs étendus (religion, armée, diplomatie, nomination aux postes stratégiques), avec un multipartisme et des élections régulières",
  headOfState: {
    title: "Roi du Maroc",
    name: "Mohammed VI",
    since: "23 juillet 1999",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mohammed_VI_of_Morocco",
  },
  headOfGovernment: {
    title: "Cheffe du gouvernement",
    name: "Fatima Ezzahra El Mansouri",
    since: "29 septembre 2026",
    source: "France 24 / Wikipedia",
    sourceUrl: "https://www.france24.com/fr/info-en-continu/20260930-au-maroc-fatima-ezzahra-el-mansouri-devient-la-premi%C3%A8re-cheffe-du-gouvernement",
  },
  legislature: {
    name: "Parlement du Maroc",
    chambers: [
      { name: "Chambre des représentants", seats: 395 },
      { name: "Chambre des conseillers", seats: 120 },
    ],
  },
  constitution: {
    adopted: "29 juillet 2011, après son approbation par référendum le 1er juillet 2011, dans le contexte des manifestations du « Mouvement du 20-Février »",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Morocco",
  },
  summary:
    "Le roi Mohammed VI est chef de l'État, Commandeur des croyants et chef des armées ; il préside le Conseil des ministres et fixe les orientations stratégiques. Depuis 2011, il nomme le chef du gouvernement au sein du parti arrivé en tête aux législatives. Celles du 23 septembre 2026 (participation de 38 %) ont placé le Parti authenticité et modernité (PAM) en tête avec 97 sièges sur 395, devant le RNI d'Aziz Akhannouch (66), l'Istiqlal (65) et le PJD (54). Fatima Ezzahra El Mansouri, dirigeante du PAM, doit former une coalition, aucun parti n'ayant la majorité absolue.",
};
