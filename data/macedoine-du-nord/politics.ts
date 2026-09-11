import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République parlementaire unitaire",
  regime: "Démocratie parlementaire",
  headOfState: {
    title: "Présidente de la République",
    name: "Gordana Siljanovska-Davkova",
    since: "12 mai 2024",
    source: "Présidence de Macédoine du Nord",
    sourceUrl: "https://en.wikipedia.org/wiki/Gordana_Siljanovska-Davkova",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Hristijan Mickoski",
    since: "24 juin 2024",
    source: "Gouvernement de Macédoine du Nord",
    sourceUrl: "https://vlada.mk/",
  },
  legislature: {
    name: "Sobranie (Собрание)",
    chambers: [{ name: "Sobranie", seats: 120 }],
  },
  constitution: {
    adopted: "17 novembre 1991",
    source: "Sobranie",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_North_Macedonia",
  },
  summary:
    "La République de Macédoine du Nord a adopté sa Constitution actuelle peu après son indépendance pacifique de la Yougoslavie en 1991. D'importants amendements constitutionnels sont intervenus en 2001, à la suite de l'accord-cadre d'Ohrid qui a mis fin au conflit intercommunautaire de la même année en accordant des droits élargis à la minorité albanaise, puis en 2019 pour officialiser le changement de nom du pays convenu avec la Grèce dans l'accord de Prespa. Le pouvoir exécutif appartient au gouvernement, responsable devant le Sobranie, tandis que la présidence exerce des fonctions essentiellement représentatives.",
};
