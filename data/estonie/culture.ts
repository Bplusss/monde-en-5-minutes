import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "La vieille ville de Tallinn",
      description:
        "L'un des ensembles urbains médiévaux hanséatiques les mieux conservés d'Europe du Nord, avec ses remparts, ses tours et son hôtel de ville gothique du XVᵉ siècle, est inscrit au patrimoine mondial de l'UNESCO depuis 1997.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/822/",
    },
    {
      category: "Musique",
      title: "Le Festival de la chanson, tradition classée à l'UNESCO",
      description:
        "Organisé tous les cinq ans à Tallinn depuis 1869, le Festival de la chanson estonien réunit des dizaines de milliers de choristes amateurs devant un public encore plus nombreux ; cette tradition chorale, partagée avec la Lettonie et la Lituanie, est inscrite au patrimoine culturel immatériel de l'UNESCO.",
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/festivite-de-la-chanson-et-de-la-danse-baltique-00087",
    },
    {
      category: "Histoire récente",
      title: "La « Révolution chantante »",
      description:
        "Entre 1987 et 1991, des rassemblements populaires massifs de chants patriotiques, en marge des Festivals de la chanson, ont accompagné le mouvement pacifique pour la restauration de l'indépendance estonienne, sans effusion de sang.",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/R%C3%A9volution_chantante",
    },
    {
      category: "Numérique",
      title: "L'e-Estonia, laboratoire de l'État numérique",
      description:
        "Depuis les années 2000, quasiment toutes les démarches administratives (fiscalité, santé, vote) sont accessibles en ligne grâce à la carte d'identité électronique et au système X-Road, qui font de l'Estonie une référence mondiale en matière de gouvernement numérique.",
      source: "e-Estonia Briefing Centre",
      sourceUrl: "https://e-estonia.com/",
    },
    {
      category: "Cuisine",
      title: "Une cuisine de tradition paysanne et baltique",
      description:
        "Marquée par le seigle, le porc, le hareng et les produits laitiers, la cuisine estonienne traditionnelle a intégré des influences allemandes, scandinaves et russes au fil des siècles de domination étrangère.",
      examples: ["Pain noir (must leib)", "Verivorst (boudin noir de sarrasin)", "Kama"],
      source: "Office estonien du tourisme (Visit Estonia)",
      sourceUrl: "https://www.visitestonia.com/fr",
    },
    {
      category: "Innovation",
      title: "Skype, née à Tallinn",
      description:
        "Le logiciel de téléphonie et de visioconférence par Internet Skype a été développé à Tallinn par des ingénieurs estoniens en 2003, avant son rachat par eBay puis Microsoft ; il est resté un symbole fondateur de l'écosystème des start-ups technologiques estoniennes.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Skype",
    },
  ],
};
