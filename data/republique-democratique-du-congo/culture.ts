import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive de la culture de plus de 200 peuples.",
  items: [
    {
      category: "Musique",
      title: "La rumba congolaise",
      description:
        "Née à Kinshasa et Brazzaville dans les années 1940 de la rencontre entre rythmes locaux et musiques cubaines, la rumba congolaise et ses dérivés (soukous, ndombolo) ont dominé la musique populaire africaine pendant des décennies. Elle est inscrite depuis 2021 au patrimoine culturel immatériel de l'UNESCO, à la demande conjointe des deux Congo.",
      examples: ["Franco et le TPOK Jazz", "Tabu Ley Rochereau", "Papa Wemba", "Koffi Olomide", "Fally Ipupa"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/congolese-rumba-01711",
    },
    {
      category: "Arts",
      title: "Arts traditionnels et peinture populaire",
      description:
        "Masques et statuaires luba, kuba, songye ou tshokwe figurent parmi les arts africains les plus collectionnés au monde. Depuis les années 1970, la peinture populaire de Kinshasa commente avec ironie la vie politique et sociale.",
      examples: ["Masques kuba", "Statuaire luba", "Chéri Samba"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Art_of_the_Democratic_Republic_of_the_Congo",
    },
    {
      category: "Gastronomie",
      title: "Fufu, pondu et moambe",
      description:
        "Le fufu, pâte de manioc ou de maïs, accompagne le pondu (feuilles de manioc pilées), le poulet à la moambe (sauce de noix de palme) ou le poisson cuit en liboke, en papillote de feuilles.",
      examples: ["Fufu", "Pondu", "Poulet à la moambe", "Liboke"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Congolese_cuisine",
    },
    {
      category: "Patrimoine naturel",
      title: "Virunga et les sites du patrimoine mondial",
      description:
        "Le pays compte cinq sites naturels inscrits au patrimoine mondial de l'UNESCO, dont quatre figurent sur la liste du patrimoine en péril en raison des conflits et du braconnage (la Salonga en a été retirée en 2021). Le parc des Virunga, créé en 1925, est le plus ancien parc national d'Afrique et abrite des gorilles de montagne.",
      examples: ["Parc national des Virunga", "Parc national de Kahuzi-Biega", "Parc national de la Salonga", "Réserve de faune à okapis"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/cd",
    },
    {
      category: "Sport",
      title: "Football et « Rumble in the Jungle »",
      description:
        "Les Léopards ont remporté la Coupe d'Afrique des nations en 1968 et 1974, et le TP Mazembe de Lubumbashi cinq Ligues des champions africaines. En 1974, Kinshasa a accueilli le combat Mohamed Ali-George Foreman.",
      examples: ["Léopards (équipe nationale)", "TP Mazembe", "AS Vita Club"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/The_Rumble_in_the_Jungle",
    },
  ],
};
