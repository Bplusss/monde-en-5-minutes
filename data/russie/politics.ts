import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République fédérale semi-présidentielle",
  regime: "Régime autoritaire hyper-présidentialisé, sans alternance réelle depuis 1999-2000 ; classé « non libre » par Freedom House et V-Dem",
  headOfState: {
    title: "Président de la Fédération de Russie",
    name: "Vladimir Poutine",
    since: "7 mai 2000 (Premier ministre entre 2008 et 2012, sous Dmitri Medvedev)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Vladimir_Putin",
  },
  headOfGovernment: {
    title: "Premier ministre (président du Gouvernement)",
    name: "Mikhaïl Michoustine",
    since: "16 janvier 2020",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mikhail_Mishustin",
  },
  legislature: {
    name: "Assemblée fédérale de Russie",
    chambers: [
      { name: "Douma d'État (chambre basse)", seats: 450 },
      { name: "Conseil de la Fédération (chambre haute, représentant les sujets fédéraux)", seats: 170 },
    ],
  },
  constitution: {
    adopted: "12 décembre 1993 ; profondément amendée par référendum en juillet 2020 (remise à zéro des mandats présidentiels de Poutine, primauté du droit russe sur le droit international, entre autres)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Russia",
  },
  summary:
    "La Constitution de 1993 établit une république semi-présidentielle où le président, élu pour six ans, dispose de pouvoirs très étendus. Vladimir Poutine, au pouvoir sans discontinuer depuis 1999-2000 (hormis l'intermède 2008-2012 comme Premier ministre, où il a conservé l'essentiel du pouvoir réel), a construit un système de pouvoir personnel appuyé sur les services de sécurité et une verticale administrative centralisée. La révision constitutionnelle de 2020 lui a permis d'être réélu en mars 2024 pour un cinquième mandat (plus de 87 % des voix, sans opposant crédible — Alexeï Navalny étant mort en détention en février 2024), théoriquement jusqu'en 2030 voire 2036. Aux législatives de septembre 2026, Russie unie a remporté un score sans précédent (environ 58 %, 355 sièges sur 450) dans un espace politique verrouillé. Le pays est classé parmi les régimes les plus fermés au monde par les organisations de défense des droits humains, avec une presse indépendante quasiment éradiquée.",
};
