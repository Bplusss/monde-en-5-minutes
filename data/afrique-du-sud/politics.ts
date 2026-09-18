import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République parlementaire unitaire",
  regime: "Démocratie multipartite ; gouvernement de coalition (Gouvernement d'union nationale) depuis 2024",
  headOfState: {
    title: "Président de la République d'Afrique du Sud",
    name: "Cyril Ramaphosa",
    since: "25 mai 2019 (réélu pour un second mandat le 14 juin 2024)",
    source: "La Présidence de la République d'Afrique du Sud",
    sourceUrl: "https://www.thepresidency.gov.za/",
  },
  headOfGovernment: {
    title: "Président de la République d'Afrique du Sud (l'Afrique du Sud n'a pas de Premier ministre distinct : le président, chef de l'État, est aussi chef du gouvernement ; il est cependant élu par l'Assemblée nationale et non directement par les électeurs)",
    name: "Cyril Ramaphosa",
    since: "25 mai 2019 (réélu le 14 juin 2024)",
    source: "La Présidence de la République d'Afrique du Sud",
    sourceUrl: "https://www.thepresidency.gov.za/",
  },
  legislature: {
    name: "Parlement d'Afrique du Sud",
    chambers: [
      { name: "Assemblée nationale", seats: 400 },
      { name: "Conseil national des provinces", seats: 90 },
    ],
  },
  constitution: {
    adopted: "8 mai 1996 (Constitution définitive post-apartheid, entrée en vigueur le 4 février 1997)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_South_Africa",
  },
  summary:
    "L'Afrique du Sud est une république parlementaire où le président, chef de l'État et du gouvernement, est élu non pas directement par les citoyens mais par l'Assemblée nationale parmi ses membres, à l'issue de chaque élection législative — une différence notable avec des présidences élues au suffrage universel direct comme en Iran ou en Corée du Sud. De 1994, année des premières élections multiraciales qui ont mis fin à l'apartheid, à 2024, le Congrès national africain (ANC) de Nelson Mandela a gouverné sans discontinuer avec une majorité absolue des sièges, dans un système à parti dominant. Ce monopole a pris fin lors des élections générales du 29 mai 2024 : l'ANC, avec seulement 40,2 % des voix (159 sièges sur 400), a perdu pour la première fois sa majorité absolue, achevant trente ans d'hégémonie électorale sur fond de mécontentement lié aux coupures d'électricité chroniques, à la corruption et au chômage de masse. Faute de majorité, l'ANC a formé un Gouvernement d'union nationale (GNU) avec plusieurs partis, au premier rang desquels l'Alliance démocratique (DA, centriste, 87 sièges) ainsi que l'Inkatha Freedom Party (IFP) et plusieurs formations plus petites, réunissant ensemble environ 68 % des sièges de l'Assemblée nationale ; l'Umkhonto weSizwe (MK, scission de l'ANC menée par l'ex-président Jacob Zuma) et les radicaux de l'Economic Freedom Fighters (EFF) sont restés dans l'opposition. Cette coalition inédite depuis la fin de l'apartheid reste, à l'été 2026, fragile mais en place — la DA a réaffirmé son maintien dans le gouvernement malgré des tensions récurrentes avec l'ANC sur des dossiers sensibles (réforme foncière, politiques de discrimination positive, éducation), tandis que le petit parti Patriotic Alliance l'a quittée fin septembre 2025 — dans un climat d'incertitude renforcé par l'absence prolongée pour raisons de santé, depuis l'été 2026, du vice-président Paul Mashatile.",
};
