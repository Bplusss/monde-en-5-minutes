import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Écriture",
      title: "Le hangeul, un alphabet créé pour le peuple",
      description:
        "Conçu sous le règne du roi Sejong le Grand et promulgué en 1446, le hangeul est un alphabet phonétique dont chaque lettre reproduit schématiquement la position de la langue et des lèvres à la prononciation ; il est aujourd'hui célébré comme une source de fierté nationale et fait l'objet d'un jour férié dédié, le Hangeul-nal (9 octobre). L'UNESCO en a fait le nom d'un prix international récompensant depuis 1990 des actions exemplaires d'alphabétisation dans le monde.",
      examples: ["Hangeul-nal (9 octobre)", "Prix international UNESCO King Sejong", "Musée national du hangeul (Séoul)"],
      source: "UNESCO",
      sourceUrl: "https://www.unesco.org/en/prizes/literacy/king-sejong",
    },
    {
      category: "Musique et audiovisuel",
      title: "La Hallyu, ou vague coréenne",
      description:
        "Depuis la fin des années 1990, la Corée du Sud a bâti une industrie culturelle exportatrice de premier plan : la K-pop, portée par des groupes façonnés par des agences de management très structurées (BTS, Blackpink…), les séries télévisées (K-dramas) diffusées mondialement sur les plateformes de streaming, et un cinéma salué par la critique internationale, couronné par la Palme d'or (Parasite, 2019) puis les Oscars (Parasite, meilleur film 2020) ainsi que par le succès mondial de séries comme Squid Game.",
      examples: ["BTS, Blackpink", "Parasite (Bong Joon-ho)", "Squid Game"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Korean_Wave",
    },
    {
      category: "Gastronomie",
      title: "Le kimchi et la culture du partage des plats",
      description:
        "Le kimchi, légumes (chou chinois, radis…) fermentés avec du piment, de l'ail et du gingembre, est l'aliment emblématique de la table coréenne, préparé traditionnellement en grande quantité à l'automne (kimjang, inscrit au patrimoine immatériel de l'UNESCO). Les repas coréens se composent traditionnellement d'un plat principal accompagné d'une multitude de petits accompagnements partagés (banchan), et le barbecue coréen (grillades de viande à table) comme le bibimbap comptent parmi les exportations culinaires les plus connues à l'étranger.",
      examples: ["Kimchi et kimjang", "Bibimbap", "Barbecue coréen (gogigui)"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/kimjang-making-and-sharing-kimchi-in-the-republic-of-korea-00881",
    },
    {
      category: "Philosophie et vie sociale",
      title: "L'héritage confucéen",
      description:
        "Adopté comme doctrine d'État sous la dynastie Joseon, le confucianisme a profondément marqué les hiérarchies sociales, le respect dû à l'âge et à l'autorité, l'importance accordée à l'éducation et à la réussite scolaire (concours d'entrée à l'université extrêmement compétitifs, le suneung) et la centralité de la famille dans la société sud-coréenne contemporaine, malgré une sécularisation religieuse par ailleurs très avancée.",
      examples: ["Suneung (examen national d'entrée à l'université)", "Confucianisme d'État sous Joseon", "Sanctuaire confucéen de Jongmyo (Séoul)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Confucianism_in_Korea",
    },
    {
      category: "Patrimoine",
      title: "Palais royaux et sites naturels classés",
      description:
        "Gyeongbokgung, principal palais de la dynastie Joseon à Séoul, illustre l'architecture palatiale coréenne traditionnelle, restaurée après sa destruction partielle durant l'occupation japonaise. L'île volcanique de Jeju, avec ses tunnels de lave et le volcan-cratère de Seongsan Ilchulbong, est classée au patrimoine mondial de l'UNESCO au titre de sa géologie, tandis que plusieurs temples bouddhistes de montagne (dont Bulguksa) et les tumulus royaux de Gyeongju témoignent de l'ancienneté du royaume de Silla.",
      examples: ["Gyeongbokgung (Séoul)", "Île volcanique et tunnels de lave de Jeju", "Grotte de Seokguram et temple de Bulguksa"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/kr",
    },
    {
      category: "Traditions vivantes",
      title: "Taekwondo et fêtes du calendrier lunaire",
      description:
        "Le taekwondo, art martial codifié en Corée au XXe siècle et discipline olympique depuis 2000, reste un vecteur culturel largement diffusé dans le monde. Le Nouvel An lunaire (Seollal) et la fête des récoltes de la mi-automne (Chuseok) restent les deux plus grandes fêtes familiales du calendrier coréen, donnant lieu à d'importants déplacements de population à travers le pays.",
      examples: ["Taekwondo", "Seollal (Nouvel An lunaire)", "Chuseok (fête des récoltes)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Culture_of_South_Korea",
    },
  ],
};
