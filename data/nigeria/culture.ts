import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Cinéma",
      title: "Nollywood, l'un des tout premiers cinémas du monde en volume",
      description:
        "Avec plusieurs milliers de films produits chaque année, l'industrie cinématographique nigériane surnommée « Nollywood » figure, selon l'UNESCO, parmi les toutes premières industries cinématographiques mondiales en nombre de films produits, derrière Bollywood (Inde). Née dans les années 1990 d'une production essentiellement directe en vidéo à très faible coût, elle s'est depuis largement professionnalisée et exporte ses productions dans toute l'Afrique et sa diaspora.",
      source: "UNESCO",
      sourceUrl: "https://uis.unesco.org/en/news/lights-camera-action-what-numbers-tell-us-about-film-industry",
    },
    {
      category: "Musique",
      title: "De l'afrobeat de Fela Kuti à l'afrobeats mondialisé",
      description:
        "Le Nigeria a donné naissance à l'afrobeat, fusion de jazz, de funk et de rythmes yoruba popularisée dans les années 1970 par Fela Kuti, musicien également connu pour son engagement politique frontal contre les régimes militaires. Le pays est aujourd'hui l'un des berceaux de l'afrobeats contemporain, genre distinct porté à l'international par des artistes comme Burna Boy, Wizkid ou Davido.",
      examples: ["Fela Kuti", "Burna Boy", "Wizkid", "Davido"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Afrobeats",
    },
    {
      category: "Littérature",
      title: "Wole Soyinka, premier prix Nobel de littérature africain",
      description:
        "L'écrivain et dramaturge nigérian Wole Soyinka reçoit en 1986 le prix Nobel de littérature, devenant le premier lauréat africain de cette distinction. Le pays a également donné Chinua Achebe, dont le roman « Things Fall Apart » (1958), sur le choc entre société igbo traditionnelle et colonisation britannique, est l'une des œuvres de littérature africaine les plus lues et traduites au monde.",
      examples: ["Wole Soyinka", "Chinua Achebe, Things Fall Apart", "Chimamanda Ngozi Adichie"],
      source: "Fondation Nobel",
      sourceUrl: "https://www.nobelprize.org/prizes/literature/1986/soyinka/facts/",
    },
    {
      category: "Patrimoine",
      title: "Les terres cuites de Nok et les bronzes du Bénin",
      description:
        "La culture de Nok, apparue vers 1500 av. J.-C. sur le plateau du même nom, a laissé les plus anciennes sculptures figuratives connues d'Afrique subsaharienne. Plus tardif, le royaume du Bénin (sud du Nigeria actuel, sans lien avec la République du Bénin voisine) a produit à partir du XIIIe siècle des bronzes et ivoires d'une grande sophistication technique, en grande partie pillés en 1897 lors d'une expédition punitive britannique et aujourd'hui conservés dans des musées occidentaux — un sujet de restitution encore débattu aujourd'hui.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Benin_Bronzes",
    },
    {
      category: "Gastronomie",
      title: "Jollof rice, suya et soupe d'egusi",
      description:
        "La cuisine nigériane s'articule autour de plats à base de riz épicé (jollof rice, dont la « paternité » fait l'objet d'une rivalité culinaire régionale avec le Ghana voisin), de brochettes de viande épicée grillées (suya) et de soupes consistantes à base de graines de courge moulues (egusi) ou de feuilles (soupe amère), le plus souvent accompagnées d'igname pilée (pounded yam) ou de fufu.",
      examples: ["Jollof rice", "Suya", "Soupe d'egusi", "Pounded yam"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nigerian_cuisine",
    },
  ],
};
