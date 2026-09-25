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
    title: "Président de la République d'Afrique du Sud (pas de Premier ministre distinct ; élu par l'Assemblée nationale, non directement par les électeurs)",
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
    "Le président, chef de l'État et du gouvernement, est élu par l'Assemblée nationale et non directement par les citoyens. De 1994 à 2024, le Congrès national africain (ANC) de Nelson Mandela a gouverné sans discontinuer avec la majorité absolue, dans un système à parti dominant. Ce monopole a pris fin aux élections du 29 mai 2024 : l'ANC, avec 40,2 % des voix, a dû former un Gouvernement d'union nationale (GNU) avec l'Alliance démocratique (DA) et d'autres partis, tandis que le MK de Jacob Zuma et l'Economic Freedom Fighters (EFF) sont restés dans l'opposition. Cette coalition inédite reste, à l'été 2026, fragile mais en place, malgré des tensions récurrentes sur la réforme foncière et la discrimination positive.",
};
