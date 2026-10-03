import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine religieux",
      title: "Jérusalem, ville sainte des trois monothéismes",
      description:
        "Le mur des Lamentations, le Saint-Sépulcre et l'esplanade des Mosquées (mont du Temple) se trouvent dans la Vieille Ville, à Jérusalem-Est. Inscrite par l'UNESCO en 1981 à la demande de la Jordanie, elle figure sur la liste du patrimoine en péril. À Jérusalem-Ouest, le mémorial Yad Vashem est consacré à la Shoah.",
      examples: ["Mur des Lamentations", "Saint-Sépulcre", "Dôme du Rocher", "Yad Vashem"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/148/",
    },
    {
      category: "Patrimoine mondial",
      title: "Massada, Acre et la « Ville blanche » de Tel-Aviv",
      description:
        "Parmi les sites inscrits par l'UNESCO figurent la forteresse de Massada, dernier bastion des insurgés juifs contre Rome (73-74), la vieille ville d'Acre, les jardins baha'is de Haïfa et la « Ville blanche » de Tel-Aviv, vaste ensemble d'architecture Bauhaus des années 1930.",
      examples: ["Massada", "Vieille ville d'Acre", "Jardins baha'is de Haïfa", "Ville blanche de Tel-Aviv"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/il",
    },
    {
      category: "Littérature",
      title: "Une littérature en hébreu moderne",
      description:
        "Shmuel Yosef Agnon reçoit le prix Nobel en 1966 ; Amos Oz, A. B. Yehoshua et David Grossman sont traduits dans le monde entier. Des auteurs arabes israéliens, comme Emile Habibi ou Sayed Kashua, écrivent en arabe ou en hébreu.",
      examples: ["S. Y. Agnon", "Amos Oz", "David Grossman", "Emile Habibi"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Hebrew_literature",
    },
    {
      category: "Société",
      title: "Le kibboutz, utopie collectiviste",
      description:
        "Communautés agricoles fondées sur la propriété collective, les kibboutz ont joué un rôle central dans l'implantation sioniste et la formation des élites ; la plupart ont été privatisés depuis les années 1990. Be'eri et Nir Oz, près de Gaza, ont été ravagés le 7 octobre 2023.",
      examples: ["Degania (1910, premier kibboutz)", "Be'eri", "Nir Oz"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Kibbutz",
    },
    {
      category: "Gastronomie",
      title: "Une cuisine levantine et d'immigration",
      description:
        "La cuisine israélienne mêle les traditions des immigrants (Europe de l'Est, Maghreb, Irak, Yémen) et la cuisine arabe levantine, dont le houmous et le falafel, revendiqués aussi par les Palestiniens et les Libanais.",
      examples: ["Houmous", "Falafel", "Chakchouka", "Sabich"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Israeli_cuisine",
    },
  ],
};
