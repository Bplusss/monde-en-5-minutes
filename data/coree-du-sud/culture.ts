import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Écriture",
      title: "Le hangeul, un alphabet créé pour le peuple",
      description:
        "Alphabet phonétique promulgué en 1446 par le roi Sejong le Grand, célébré comme source de fierté nationale, avec son propre jour férié et un prix UNESCO d'alphabétisation à son nom.",
      examples: ["Hangeul-nal (9 octobre)", "Prix UNESCO King Sejong"],
      source: "UNESCO",
      sourceUrl: "https://www.unesco.org/en/prizes/literacy/king-sejong",
    },
    {
      category: "Musique et audiovisuel",
      title: "La Hallyu, ou vague coréenne",
      description:
        "Depuis la fin des années 1990, la Corée du Sud a bâti une industrie culturelle exportatrice de premier plan : K-pop, K-dramas en streaming, et un cinéma salué à l'international (Palme d'or et Oscar pour Parasite, succès mondial de Squid Game).",
      examples: ["BTS, Blackpink", "Parasite", "Squid Game"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Korean_Wave",
    },
    {
      category: "Gastronomie",
      title: "Le kimchi et la culture du partage des plats",
      description:
        "Le kimchi, légumes fermentés au piment, ail et gingembre, est l'aliment emblématique du pays, préparé en grande quantité à l'automne (kimjang, patrimoine immatériel UNESCO) et servi avec de multiples accompagnements partagés (banchan).",
      examples: ["Kimjang", "Bibimbap", "Barbecue coréen"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/kimjang-making-and-sharing-kimchi-in-the-republic-of-korea-00881",
    },
    {
      category: "Philosophie et vie sociale",
      title: "L'héritage confucéen",
      description:
        "Doctrine d'État sous Joseon, le confucianisme marque toujours les hiérarchies sociales, la centralité de la famille et l'importance de la réussite scolaire, incarnée par le concours d'entrée à l'université (suneung).",
      examples: ["Suneung", "Sanctuaire confucéen de Jongmyo"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Confucianism_in_Korea",
    },
    {
      category: "Patrimoine",
      title: "Palais royaux et sites naturels classés",
      description:
        "Gyeongbokgung, principal palais Joseon à Séoul, illustre l'architecture palatiale coréenne. L'île volcanique de Jeju et les tumulus royaux de Gyeongju, héritage du royaume de Silla, sont classés au patrimoine mondial UNESCO.",
      examples: ["Gyeongbokgung", "Île de Jeju", "Temple de Bulguksa"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/kr",
    },
    {
      category: "Traditions vivantes",
      title: "Taekwondo et fêtes du calendrier lunaire",
      description:
        "Le taekwondo, discipline olympique depuis 2000, reste un vecteur culturel diffusé dans le monde entier. Seollal (Nouvel An lunaire) et Chuseok (fête des récoltes) restent les deux plus grandes fêtes familiales du pays.",
      examples: ["Taekwondo", "Seollal", "Chuseok"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Culture_of_South_Korea",
    },
  ],
};
