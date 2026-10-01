import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non un inventaire des quelque 250 cultures que compte le pays.",
  items: [
    {
      category: "Musique",
      title: "Makossa et bikutsi",
      description:
        "Le makossa, né dans les milieux duala de Douala, devient un genre connu dans le monde entier avec Soul Makossa de Manu Dibango (1972). Le bikutsi, rythme beti de la région de Yaoundé, s'est électrifié dans les années 1970-1980.",
      examples: ["Manu Dibango", "Soul Makossa", "Les Têtes Brûlées (bikutsi)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Makossa",
    },
    {
      category: "Sport",
      title: "Les Lions indomptables",
      description:
        "L'équipe nationale de football a remporté cinq Coupes d'Afrique des nations (1984, 1988, 2000, 2002, 2017) et fut en 1990, avec Roger Milla, la première sélection africaine à atteindre les quarts de finale d'une Coupe du monde. Samuel Eto'o, élu à la tête de la fédération en 2021, en reste le meilleur buteur.",
      examples: ["Roger Milla", "Samuel Eto'o", "Coupe du monde 1990"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cameroon_national_football_team",
    },
    {
      category: "Chefferies et royaumes",
      title: "Royaume bamoun et chefferies de l'Ouest",
      description:
        "Les chefferies bamiléké et le royaume bamoun conservent un rôle social et rituel important. Au début du XXe siècle, le sultan Njoya fit créer à Foumban une écriture propre, le shü-mom, et un palais qui abrite aujourd'hui un musée royal.",
      examples: ["Palais royal de Foumban", "Écriture bamoun", "Chefferie de Bandjoun"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bamum_script",
    },
    {
      category: "Littérature",
      title: "Une littérature bilingue",
      description:
        "Mongo Beti et Ferdinand Oyono ont dénoncé dans les années 1950 la colonisation et la mission ; Calixthe Beyala et Léonora Miano, prix Femina 2013, ont prolongé cette tradition francophone, tandis qu'Imbolo Mbue écrit en anglais.",
      examples: ["Le Pauvre Christ de Bomba (Mongo Beti)", "Une vie de boy (Ferdinand Oyono)", "La Saison de l'ombre (Léonora Miano)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cameroonian_literature",
    },
    {
      category: "Gastronomie",
      title: "Ndolé, eru et poulet DG",
      description:
        "Le ndolé, ragoût de feuilles amères à l'arachide et à la viande ou aux crevettes, est souvent présenté comme le plat national ; l'eru est la spécialité du Sud-Ouest et le poulet DG, aux plantains frits, un plat de fête urbain. Le manioc se consomme en bâtons (miondo, bobolo).",
      examples: ["Ndolé", "Eru", "Poulet DG", "Bâtons de manioc"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cameroonian_cuisine",
    },
    {
      category: "Patrimoine mondial",
      title: "Réserve du Dja, Sangha trinationale et Diy-Gid-Biy",
      description:
        "Le pays compte trois sites inscrits par l'UNESCO : la réserve de faune du Dja, forêt dense quasi intacte (1987) ; le Trinational de la Sangha, partagé avec le Congo et la Centrafrique (2012) ; et le paysage culturel de Diy-Gid-Biy, ensemble de sites bâtis en pierre sèche des monts Mandara (2024).",
      examples: ["Réserve de faune du Dja", "Parc national de Lobéké", "Monts Mandara"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/cm",
    },
  ],
};
