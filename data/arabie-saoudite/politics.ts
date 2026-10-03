import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "Monarchie absolue unitaire",
  regime: "Monarchie absolue islamique : le roi concentre les pouvoirs exécutif, législatif et judiciaire ; ni parlement élu, ni partis politiques",
  headOfState: {
    title: "Roi d'Arabie saoudite, Serviteur des deux saintes mosquées",
    name: "Salmane ben Abdelaziz Al Saoud",
    since: "23 janvier 2015",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Salman_of_Saudi_Arabia",
  },
  headOfGovernment: {
    title: "Prince héritier et Premier ministre",
    name: "Mohammed ben Salmane",
    since: "27 septembre 2022 (prince héritier depuis le 21 juin 2017)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mohammed_bin_Salman",
  },
  legislature: {
    name: "Conseil consultatif (Majlis al-Choura), nommé par le roi",
    chambers: [{ name: "Majlis al-Choura", seats: 150 }],
  },
  constitution: {
    adopted: "Loi fondamentale de gouvernement promulguée par décret royal le 1er mars 1992 ; elle désigne le Coran et la Sunna comme constitution du royaume",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Basic_Law_of_Saudi_Arabia",
  },
  summary:
    "Le roi, choisi parmi les descendants du fondateur Abdelaziz ibn Saoud, gouverne par décrets ; le Conseil consultatif, dont les membres sont nommés pour quatre ans et qui compte des femmes depuis 2013, n'a qu'un rôle d'avis. Âgé de 90 ans, le roi Salmane a confié l'essentiel du pouvoir à son fils Mohammed ben Salmane, Premier ministre depuis 2022. Il n'existe pas d'élections nationales. Les organisations de défense des droits humains dénoncent la répression des opposants et le nombre élevé d'exécutions.",
};
