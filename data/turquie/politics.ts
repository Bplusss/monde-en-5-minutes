import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République présidentielle unitaire",
  regime: "Régime présidentiel à forte concentration des pouvoirs, multipartite mais marqué par la répression judiciaire de l'opposition ; classé « non libre » par Freedom House depuis 2018",
  headOfState: {
    title: "Président de la République de Turquie",
    name: "Recep Tayyip Erdoğan",
    since: "28 août 2014",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Recep_Tayyip_Erdo%C4%9Fan",
  },
  headOfGovernment: {
    title: "Président de la République (chef du gouvernement depuis la suppression du poste de Premier ministre)",
    name: "Recep Tayyip Erdoğan",
    since: "9 juillet 2018",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Prime_Minister_of_Turkey",
  },
  legislature: {
    name: "Grande Assemblée nationale de Turquie (TBMM)",
    chambers: [{ name: "Grande Assemblée nationale", seats: 600 }],
  },
  constitution: {
    adopted: "7 novembre 1982, par référendum après le coup d'État de 1980 ; profondément révisée par le référendum du 16 avril 2017, qui a instauré le régime présidentiel en vigueur depuis 2018",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Turkey",
  },
  summary:
    "Depuis 2018, le président élu au suffrage universel est à la fois chef de l'État et du gouvernement : il nomme les ministres et le vice-président (Cevdet Yılmaz depuis 2023) et gouverne par décrets. Recep Tayyip Erdoğan, au pouvoir depuis 2003, a été réélu le 28 mai 2023 au second tour avec 52,2 % des voix ; son parti, l'AKP, gouverne avec le MHP nationaliste. L'opposition est la cible de poursuites : le maire d'Istanbul Ekrem İmamoğlu, candidat désigné du CHP, est détenu depuis mars 2025 ; en mai 2026, une cour d'appel a annulé l'élection de la direction du CHP et réinstallé Kemal Kılıçdaroğlu, poussant Özgür Özel et 90 autres députés à fonder en juillet le Nouveau Parti (Yeni Parti), rejoint par İmamoğlu. Les prochaines élections sont prévues au plus tard en 2028.",
};
