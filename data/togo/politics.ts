import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "République parlementaire (Ve République togolaise, depuis la Constitution du 6 mai 2024)",
  headOfState: {
    title: "Président de la République",
    name: "Jean-Lucien Kwame Savi de Tové",
    since: "3 mai 2025",
    source: "Assemblée nationale du Togo",
    sourceUrl: "https://fr.wikipedia.org/wiki/Pr%C3%A9sident_de_la_R%C3%A9publique_togolaise",
  },
  headOfGovernment: {
    title: "Président du Conseil des ministres",
    name: "Faure Gnassingbé",
    since: "3 mai 2025",
    source: "Présidence du Conseil des ministres du Togo",
    sourceUrl: "https://fr.wikipedia.org/wiki/Faure_Gnassingb%C3%A9",
  },
  legislature: {
    name: "Parlement du Togo",
    chambers: [
      { name: "Assemblée nationale", seats: 113 },
      { name: "Sénat", seats: 61 },
    ],
  },
  constitution: {
    adopted: "Adoptée par le Parlement le 19 avril 2024, promulguée le 6 mai 2024",
    source: "Assemblée nationale du Togo",
    sourceUrl: "https://fr.wikipedia.org/wiki/Constitution_du_Togo",
  },
  summary:
    "Une révision constitutionnelle profonde, adoptée par les seuls députés (sans référendum) en avril 2024 et entrée en vigueur le 6 mai 2024, a fait basculer le Togo d'un régime présidentiel vers un régime parlementaire, inaugurant ce que ses partisans appellent la « Ve République ». Le pouvoir exécutif réel appartient désormais au Président du Conseil des ministres, chef du gouvernement obligatoirement issu du parti ou de la coalition majoritaire à l'Assemblée nationale et désigné par elle sans limite du nombre de mandats : c'est Faure Gnassingbé, jusque-là président de la République depuis 2005, qui occupe cette fonction depuis le 3 mai 2025. Le poste de Président de la République, élu pour quatre ans renouvelables une fois par un collège de parlementaires (Assemblée nationale et Sénat réunis en Congrès) et non plus au suffrage universel direct, devient largement honorifique, chargé de représenter l'unité nationale ; il est occupé depuis la même date par Jean-Lucien Kwame Savi de Tové. Le Parlement est désormais bicaméral : à l'Assemblée nationale, élue en avril 2024, s'ajoute un Sénat dont l'installation, prévue dès 2002 mais restée lettre morte pendant plus de vingt ans, s'est enfin concrétisée avec des élections en février 2025 (41 sénateurs élus par les collectivités locales, 20 nommés par le président du Conseil des ministres). La famille Gnassingbé dirige ainsi le pays sans discontinuer depuis le coup d'État de 1967, d'abord à travers Gnassingbé Eyadéma (1967-2005) puis son fils Faure Gnassingbé, dont la réforme de 2024 a été dénoncée par l'opposition et une partie de la société civile comme un moyen de prolonger indéfiniment son exercice du pouvoir en écartant la limite de deux mandats présidentiels à laquelle il aurait dû faire face en 2025.",
};
