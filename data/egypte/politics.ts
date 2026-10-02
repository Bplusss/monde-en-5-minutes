import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République semi-présidentielle unitaire",
  regime: "Régime dominé par le président et l'appareil militaro-sécuritaire, dans un cadre multipartite très contraint ; classé « non libre » par plusieurs organisations de défense des droits humains et de la démocratie",
  headOfState: {
    title: "Président de la République arabe d'Égypte",
    name: "Abdel Fattah al-Sissi",
    since: "8 juin 2014",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Abdel_Fattah_el-Sisi",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Mostafa Madbouly",
    since: "14 juin 2018",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mostafa_Madbouly",
  },
  legislature: {
    name: "Parlement égyptien",
    chambers: [
      { name: "Chambre des représentants (Majlis al-Nuwwab)", seats: 568 },
      { name: "Sénat (Majlis al-Shuyukh, chambre consultative)", seats: 300 },
    ],
  },
  constitution: {
    adopted: "18 janvier 2014, approuvée par référendum après la destitution de Mohamed Morsi ; amendée en avril 2019 (extension des mandats présidentiels, rétablissement du Sénat)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Egypt",
  },
  summary:
    "Élu au suffrage universel direct, le président concentre l'essentiel du pouvoir : il nomme le gouvernement, contrôle de facto l'armée et les services de sécurité et peut dissoudre le Parlement. Abdel Fattah al-Sissi a été réélu en décembre 2023 avec plus de 89 % des voix, sans adversaire crédible ; la réforme de 2019 a porté le mandat de quatre à six ans, jusqu'en 2030. Presse et espace civique sont sévèrement restreints.",
};
