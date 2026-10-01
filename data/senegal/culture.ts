import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive.",
  items: [
    {
      category: "Mémoire et patrimoine",
      title: "Île de Gorée et île de Saint-Louis",
      description:
        "Gorée, au large de Dakar, ancien comptoir de la traite atlantique, est devenue un lieu de mémoire de l'esclavage ; elle figure parmi les premiers sites inscrits au patrimoine mondial de l'UNESCO (1978). L'île de Saint-Louis, première capitale coloniale, conserve son plan régulier et son architecture du XIXe siècle (inscrite en 2000).",
      examples: ["Maison des Esclaves de Gorée", "Pont Faidherbe (Saint-Louis)"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/26/",
    },
    {
      category: "Gastronomie",
      title: "Le thiéboudienne",
      description:
        "Plat national à base de riz, de poisson et de légumes cuits dans une sauce tomate, originaire de Saint-Louis, inscrit au patrimoine culturel immatériel de l'UNESCO en 2021. Le yassa (poulet ou poisson aux oignons et citron) et le mafé (sauce d'arachide) sont également répandus ; la teranga, l'hospitalité, est revendiquée comme valeur nationale.",
      examples: ["Thiéboudienne", "Yassa", "Mafé", "Bissap"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/le-ceebu-jn-art-culinaire-du-senegal-01748",
    },
    {
      category: "Musique",
      title: "Le mbalax",
      description:
        "Né dans les années 1970 du mélange des percussions sabar wolof avec les musiques afro-cubaines et la pop, le mbalax domine la musique populaire. Youssou N'Dour en est la figure la plus connue internationalement ; l'Orchestra Baobab et Baaba Maal ont aussi porté la musique sénégalaise à l'étranger.",
      examples: ["Youssou N'Dour", "Orchestra Baobab", "Baaba Maal"],
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Mbalax",
    },
    {
      category: "Lettres et cinéma",
      title: "De la négritude à Sembène",
      description:
        "Léopold Sédar Senghor, cofondateur du mouvement de la négritude, est le premier Africain élu à l'Académie française (1983). Ousmane Sembène, souvent présenté comme le père du cinéma africain, et Mariama Bâ, autrice d'« Une si longue lettre », comptent parmi les grandes figures culturelles du pays. En 2021, Mohamed Mbougar Sarr reçoit le prix Goncourt.",
      examples: ["Léopold Sédar Senghor", "Ousmane Sembène", "Mariama Bâ", "Mohamed Mbougar Sarr"],
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Litt%C3%A9rature_s%C3%A9n%C3%A9galaise",
    },
    {
      category: "Sport",
      title: "Lutte sénégalaise et football",
      description:
        "La lutte avec frappe (laamb), mêlant combat, chants et rituels, remplit les stades et rivalise en popularité avec le football. L'équipe nationale, les « Lions de la Teranga », a remporté la Coupe d'Afrique des nations en 2022. Dakar accueille du 31 octobre au 13 novembre 2026 les Jeux olympiques de la jeunesse, premier événement olympique organisé en Afrique.",
      examples: ["Laamb", "Lions de la Teranga", "JOJ Dakar 2026"],
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Lutte_s%C3%A9n%C3%A9galaise",
    },
    {
      category: "Religion et spiritualité",
      title: "Le Grand Magal de Touba",
      description:
        "Chaque année, des millions de fidèles mourides convergent vers Touba pour commémorer le départ en exil de Cheikh Ahmadou Bamba en 1895 ; c'est le plus grand rassemblement religieux du pays.",
      examples: ["Grande mosquée de Touba", "Gamou de Tivaouane"],
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Magal_de_Touba",
    },
  ],
};
