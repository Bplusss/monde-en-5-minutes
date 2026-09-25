import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République fédérale semi-présidentielle",
  regime: "Régime autoritaire hyper-présidentialisé, sans alternance réelle depuis 1999-2000 ; classé « non libre » et parmi les régimes les plus fermés au monde par les organisations internationales de défense de la démocratie et des droits humains (Freedom House, V-Dem)",
  headOfState: {
    title: "Président de la Fédération de Russie",
    name: "Vladimir Poutine",
    since: "7 mai 2000 (avec une interruption entre 2008 et 2012, durant laquelle il a occupé le poste de Premier ministre sous la présidence de Dmitri Medvedev)",
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
    adopted: "12 décembre 1993, adoptée par référendum après la crise constitutionnelle de 1993 ; profondément amendée par référendum en juillet 2020 (remise à zéro des mandats présidentiels de Vladimir Poutine, primauté du droit constitutionnel russe sur le droit international, interdiction du mariage homosexuel, entre autres dispositions)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Russia",
  },
  summary:
    "La Constitution russe de 1993 établit formellement une république semi-présidentielle où le président, élu au suffrage universel direct pour six ans, nomme le Premier ministre (sous réserve d'approbation de la Douma) et dispose de pouvoirs très étendus en matière de politique étrangère, de défense et de sécurité, tandis que le gouvernement conduit la politique intérieure et économique au quotidien. Dans la pratique, Vladimir Poutine, au pouvoir sans discontinuer depuis 1999-2000 (à l'exception d'un intermède 2008-2012 comme Premier ministre, période durant laquelle il a conservé l'essentiel du pouvoir réel), a construit au fil des mandats un système de pouvoir personnel appuyé sur les services de sécurité (dont il est issu, ancien officier du KGB puis directeur du FSB), une verticale administrative centralisée et un contrôle étroit des médias et de l'espace politique. La révision constitutionnelle de juillet 2020, approuvée par un référendum contesté, a remis à zéro le compteur de ses mandats présidentiels, lui permettant de se représenter en mars 2024 pour un cinquième mandat (obtenu avec plus de 87 % des voix, dans une élection sans opposant crédible, le principal candidat d'opposition, Alexeï Navalny, étant mort en détention en février 2024 dans des circonstances non élucidées) et de rester théoriquement au pouvoir jusqu'en 2030, voire 2036 s'il se représentait une dernière fois. Les élections législatives de septembre 2026 ont vu le parti au pouvoir, Russie unie, remporter un score et un nombre de sièges (environ 58 % des voix, 355 sièges sur 450) sans précédent depuis le retour au scrutin proportionnel, dans un contexte de guerre en Ukraine, de répression accrue de toute opposition et d'espace politique verrouillé où aucune force critique du pouvoir n'a pu se présenter. Le pays est classé de manière quasi unanime par les organisations internationales de défense des droits humains et de la démocratie parmi les régimes autoritaires les plus fermés au monde, documentant des milliers de poursuites pour délits d'opinion (notamment liées à la loi réprimant la « discréditation » de l'armée depuis 2022), une presse indépendante quasiment éradiquée à l'intérieur du pays et un espace civique extrêmement restreint.",
};
