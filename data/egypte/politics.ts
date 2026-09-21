import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République semi-présidentielle unitaire",
  regime: "Régime dominé par le président et l'appareil militaro-sécuritaire, dans un cadre multipartite très contraint ; classé « non libre » par plusieurs organisations internationales de défense des droits humains et de la démocratie",
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
    adopted: "18 janvier 2014, approuvée par référendum après la destitution de Mohamed Morsi ; amendée en avril 2019 (extension des mandats présidentiels et rétablissement d'une seconde chambre, le Sénat)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Egypt",
  },
  summary:
    "L'Égypte est une république où le président, élu au suffrage universel direct, concentre l'essentiel du pouvoir exécutif — nomination et révocation du Premier ministre et du gouvernement, contrôle de facto de l'armée et des services de sécurité, droit de dissoudre le Parlement dans certaines conditions — tandis que le Premier ministre dirige l'administration quotidienne sous son autorité. Abdel Fattah al-Sissi, ancien ministre de la Défense qui avait destitué le président islamiste Mohamed Morsi lors d'un coup d'État militaire en juillet 2013 avant de se faire élire président en 2014, a été réélu en 2018 puis en décembre 2023 (avec plus de 89 % des voix, face à une opposition jugée par de nombreux observateurs internationaux privée de candidats crédibles) ; l'amendement constitutionnel de 2019, adopté par référendum contesté, a porté la durée du mandat présidentiel de quatre à six ans et lui a permis de se représenter en 2024, avec un mandat actuel courant en principe jusqu'en 2030. Mostafa Madbouly, ancien ministre du Logement, est Premier ministre depuis juin 2018 et a été reconduit à ce poste après chaque élection présidentielle depuis lors, dont la plus récente reconduction début juin 2024, après l'investiture de Sissi pour son troisième mandat. Le pays reste régulièrement classé parmi les régimes autoritaires par les organisations de défense des droits humains et de la démocratie (dont Freedom House), qui documentent des restrictions sévères sur la liberté de la presse, de nombreux prisonniers politiques et un espace civique très réduit depuis la répression qui a suivi l'arrivée au pouvoir du maréchal Sissi.",
};
