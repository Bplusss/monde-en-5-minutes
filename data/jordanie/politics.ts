import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle unitaire",
  regime: "Monarchie parlementaire où le roi conserve l'essentiel du pouvoir exécutif",
  headOfState: {
    title: "Roi de Jordanie",
    name: "Abdallah II",
    since: "7 février 1999",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Abdullah_II_of_Jordan",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Jafar Hassan",
    since: "15 septembre 2024",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Jafar_Hassan",
  },
  legislature: {
    name: "Assemblée nationale (Majlis al-Umma)",
    chambers: [
      { name: "Chambre des députés", seats: 138 },
      { name: "Sénat (nommé par le roi)", seats: 69 },
    ],
  },
  constitution: {
    adopted: "8 janvier 1952, plusieurs fois révisée, notamment en 2011 et en 2022",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Jordan",
  },
  summary:
    "Le roi nomme le Premier ministre et les sénateurs, peut dissoudre la Chambre des députés et commande l'armée ; les gouvernements changent fréquemment à sa discrétion. Les députés sont élus, et une réforme de 2022 a réservé pour la première fois une partie des sièges aux listes de partis. Aux élections de septembre 2024, le Front d'action islamique, branche politique des Frères musulmans, est arrivé en tête avec 31 sièges ; la confrérie a été interdite en avril 2025. Allié des États-Unis et lié à Israël par un traité de paix depuis 1994, le royaume reste très attaché à la cause palestinienne, sensible pour une population en grande partie d'origine palestinienne.",
};
