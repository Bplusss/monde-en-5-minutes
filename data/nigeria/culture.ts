import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Cinéma",
      title: "Nollywood, l'un des tout premiers cinémas du monde en volume",
      description:
        "Née dans les années 1990 d'une production directe en vidéo à très faible coût, Nollywood figure selon l'UNESCO parmi les premières industries cinématographiques mondiales en nombre de films, derrière Bollywood. Elle s'est professionnalisée et exporte dans toute l'Afrique et sa diaspora.",
      source: "UNESCO",
      sourceUrl: "https://uis.unesco.org/en/news/lights-camera-action-what-numbers-tell-us-about-film-industry",
    },
    {
      category: "Musique",
      title: "De l'afrobeat de Fela Kuti à l'afrobeats mondialisé",
      description:
        "L'afrobeat, fusion de jazz, de funk et de rythmes yoruba, a été popularisé dans les années 1970 par Fela Kuti, opposant déclaré aux régimes militaires. Le pays est aujourd'hui l'un des berceaux de l'afrobeats, genre distinct porté à l'international par Burna Boy, Wizkid ou Davido.",
      examples: ["Fela Kuti", "Burna Boy", "Wizkid", "Davido"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Afrobeats",
    },
    {
      category: "Littérature",
      title: "Wole Soyinka, premier prix Nobel de littérature africain",
      description:
        "Wole Soyinka reçoit en 1986 le prix Nobel de littérature, premier lauréat africain. Le roman de Chinua Achebe « Things Fall Apart » (1958), sur le choc entre société igbo et colonisation, est l'une des œuvres africaines les plus lues au monde.",
      examples: ["Wole Soyinka", "Chinua Achebe, Things Fall Apart", "Chimamanda Ngozi Adichie"],
      source: "Fondation Nobel",
      sourceUrl: "https://www.nobelprize.org/prizes/literature/1986/soyinka/facts/",
    },
    {
      category: "Patrimoine",
      title: "Les terres cuites de Nok et les bronzes du Bénin",
      description:
        "La culture de Nok, apparue vers 1500 av. J.-C., a laissé les plus anciennes sculptures figuratives connues d'Afrique subsaharienne. Le royaume du Bénin (sans lien avec l'État voisin) a produit à partir du XIIIe siècle des bronzes, en grande partie pillés par les Britanniques en 1897 et dont la restitution reste débattue.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Benin_Bronzes",
    },
    {
      category: "Gastronomie",
      title: "Jollof rice, suya et soupe d'egusi",
      description:
        "La cuisine nigériane associe riz épicé (jollof rice, disputé avec le Ghana), brochettes grillées (suya) et soupes de graines de courge (egusi), servies avec de l'igname pilée ou du fufu.",
      examples: ["Jollof rice", "Suya", "Soupe d'egusi", "Pounded yam"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nigerian_cuisine",
    },
  ],
};
