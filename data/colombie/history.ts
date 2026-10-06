import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire colombienne.",
  periods: [
    {
      id: "conquete-nouvelle-grenade",
      title: "Peuples précolombiens et Nouvelle-Grenade espagnole",
      startYear: 1499,
      endYear: 1810,
      summary:
        "Le territoire est peuplé de sociétés agricoles comme les Muiscas des hauts plateaux, dont les rites d'offrandes en or inspirent la légende de l'El Dorado, ou les Tayronas de la Sierra Nevada. Les Espagnols fondent Santa Marta en 1525, Carthagène des Indes en 1533 et Bogota en 1538. Carthagène devient l'un des principaux ports de la traite esclavagiste, et Bogota la capitale de la vice-royauté de Nouvelle-Grenade au XVIIIe siècle.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Colombia",
      events: [
        {
          date: "6 août 1538",
          title: "Fondation de Bogota",
          description: "Gonzalo Jiménez de Quesada fonde Santa Fe de Bogotá sur le plateau muisca.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bogot%C3%A1",
        },
        {
          date: "1717",
          title: "Création de la vice-royauté de Nouvelle-Grenade",
          description: "Supprimée puis rétablie en 1739, elle englobe la Colombie, le Venezuela, l'Équateur et le Panama actuels.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Viceroyalty_of_New_Granada",
        },
      ],
    },
    {
      id: "independance",
      title: "Indépendance, Grande Colombie et guerres civiles",
      startYear: 1810,
      endYear: 1903,
      summary:
        "Le soulèvement de Bogota en 1810 ouvre une longue guerre d'indépendance, remportée par Simón Bolívar à Boyacá en 1819. La Grande Colombie qu'il fonde se disloque en 1830. Le XIXe siècle est rythmé par l'affrontement entre libéraux, fédéralistes et anticléricaux, et conservateurs, centralistes et proches de l'Église, jusqu'à la sanglante guerre des Mille Jours (1899-1902), suivie de la sécession du Panama.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Colombia",
      events: [
        {
          date: "20 juillet 1810",
          title: "Cri d'indépendance",
          description: "Une junte prend le pouvoir à Bogota ; la date est aujourd'hui la fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Colombian_Declaration_of_Independence",
        },
        {
          date: "7 août 1819",
          title: "Bataille de Boyacá",
          description: "La victoire de Simón Bolívar sur les troupes espagnoles scelle l'indépendance.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Boyac%C3%A1",
        },
        {
          date: "3 novembre 1903",
          title: "Sécession du Panama",
          description: "Soutenu par les États-Unis, qui veulent construire le canal, le Panama proclame son indépendance.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Separation_of_Panama_from_Colombia",
        },
      ],
    },
    {
      id: "violencia-front-national",
      title: "La Violencia et le Front national",
      startYear: 1948,
      endYear: 1974,
      summary:
        "L'assassinat du dirigeant libéral Jorge Eliécer Gaitán en 1948 provoque l'émeute du « Bogotazo » et plonge les campagnes dans la Violencia, une guerre entre libéraux et conservateurs qui fait environ 200 000 morts. Pour y mettre fin, les deux partis se partagent le pouvoir dans le Front national (1958-1974), un système qui exclut les autres forces politiques et favorise la naissance des guérillas.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/La_Violencia",
      events: [
        {
          date: "9 avril 1948",
          title: "Bogotazo",
          description: "L'assassinat de Gaitán déclenche des émeutes qui détruisent une partie du centre de Bogota.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bogotazo",
        },
        {
          date: "1964",
          title: "Naissance des FARC et de l'ELN",
          description: "Deux guérillas marxistes apparaissent dans les zones rurales, ouvrant un conflit de plus d'un demi-siècle.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Revolutionary_Armed_Forces_of_Colombia",
        },
      ],
    },
    {
      id: "conflit-narcotrafic",
      title: "Conflit armé, cartels et paramilitaires",
      startYear: 1974,
      endYear: 2002,
      summary:
        "Guérillas, cartels de la drogue de Medellín et de Cali et groupes paramilitaires d'extrême droite s'affrontent et terrorisent la population. Pablo Escobar mène une guerre ouverte contre l'État jusqu'à sa mort en 1993. Au milieu de cette violence, une assemblée constituante adopte en 1991 une nouvelle Constitution, plus démocratique et pluraliste.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Colombian_conflict",
      events: [
        {
          date: "6-7 novembre 1985",
          title: "Prise du palais de justice",
          description: "L'assaut de l'armée contre la guérilla M-19 qui occupe le palais fait une centaine de morts, dont onze juges de la Cour suprême.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Palace_of_Justice_siege",
        },
        {
          date: "4 juillet 1991",
          title: "Nouvelle Constitution",
          description: "Elle remplace celle de 1886 et reconnaît le caractère pluriethnique et pluriculturel de la nation.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Colombian_Constitution_of_1991",
        },
        {
          date: "2 décembre 1993",
          title: "Mort de Pablo Escobar",
          description: "Le chef du cartel de Medellín est abattu par la police à Medellín.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Pablo_Escobar",
        },
      ],
    },
    {
      id: "securite-paix",
      title: "Reprise en main sécuritaire et accord de paix",
      startYear: 2002,
      endYear: 2016,
      summary:
        "Le président Álvaro Uribe (2002-2010), avec l'appui américain du Plan Colombie, repousse militairement les FARC et démobilise les paramilitaires, au prix de graves violations des droits humains, comme les exécutions extrajudiciaires de civils présentés comme guérilleros. Son successeur Juan Manuel Santos négocie à La Havane un accord de paix avec les FARC, qui déposent les armes en 2017.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Colombian_peace_process",
      events: [
        {
          date: "2 octobre 2016",
          title: "Rejet de l'accord par référendum",
          description: "Le « non » l'emporte avec 50,2 % des voix ; un accord renégocié est adopté par le Congrès.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2016_Colombian_peace_agreement_referendum",
        },
        {
          date: "24 novembre 2016",
          title: "Signature de l'accord de paix final",
          description: "L'accord avec les FARC, signé au théâtre Colón de Bogota, vaut à Juan Manuel Santos le prix Nobel de la paix.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Colombian_peace_process",
        },
      ],
    },
    {
      id: "apres-accord",
      title: "L'après-accord de paix",
      startYear: 2016,
      endYear: "present",
      summary:
        "La paix avec les FARC n'a pas mis fin à la violence : l'ELN, des dissidences des FARC et le Clan del Golfe se disputent les territoires de la cocaïne et des mines illégales, et des centaines de leaders sociaux sont assassinés. En 2022, Gustavo Petro, ancien guérillero du M-19, devient le premier président de gauche du pays et lance une politique de « paix totale » aux résultats limités. En 2026, l'électorat porte au pouvoir Abelardo de la Espriella, partisan d'une ligne dure.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Presidency_of_Gustavo_Petro",
      events: [
        {
          date: "7 août 2022",
          title: "Investiture de Gustavo Petro",
          description: "Premier président de gauche, avec Francia Márquez, première vice-présidente afro-colombienne.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Inauguration_of_Gustavo_Petro",
        },
        {
          date: "21 juin 2026",
          title: "Élection d'Abelardo de la Espriella",
          description: "Le candidat de droite l'emporte de 250 000 voix au second tour, avec une participation record.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Inauguration_of_Abelardo_de_la_Espriella",
        },
      ],
    },
  ],
};
