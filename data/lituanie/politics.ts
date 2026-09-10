import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République semi-présidentielle",
  headOfState: {
    title: "Président de la République",
    name: "Gitanas Nausėda",
    since: "12 juillet 2019",
    source: "Présidence de la République de Lituanie",
    sourceUrl: "https://www.lrp.lt/en",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Mindaugas Sinkevičius",
    since: "14 juillet 2026",
    source: "Gouvernement de la République de Lituanie",
    sourceUrl: "https://lrv.lt/en/",
  },
  legislature: {
    name: "Seimas (Parlement de la République de Lituanie)",
    chambers: [{ name: "Seimas", seats: 141 }],
  },
  constitution: {
    adopted: "25 octobre 1992 (référendum)",
    source: "Seimas de la République de Lituanie",
    sourceUrl: "https://www.constituteproject.org/constitution/Lithuania_2019",
  },
  summary:
    "La Lituanie est une République semi-présidentielle : le président, élu au suffrage universel direct pour cinq ans, dirige la politique étrangère et de défense, tandis que le gouvernement, issu du Seimas monocaméral élu pour quatre ans, conduit la politique intérieure et économique. La Constitution, adoptée par référendum en 1992 peu après le rétablissement de l'indépendance, a depuis été modifiée à plusieurs reprises, notamment pour permettre l'adhésion à l'Union européenne.",
};
