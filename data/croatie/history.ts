import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Croatia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire croate, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "royaume-medieval",
      title: "Principautés et royaume médiéval croate",
      startYear: 625,
      endYear: 1102,
      summary:
        "Les tribus slaves croates s'installent dans l'actuelle Croatie au VIIe siècle. Le duché de Croatie obtient la reconnaissance papale de sa souveraineté en 879, avant l'unification des principautés côtière et pannonienne sous Tomislav, couronné premier roi de Croatie vers 925.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "7 juin 879",
          title: "Reconnaissance pontificale du duché de Croatie",
          description: "Le pape Jean VIII reconnaît la souveraineté du duc Branimir et de son peuple, marquant l'entrée de la Croatie dans l'Europe chrétienne.",
          source: "Wikipedia (d'après les lettres pontificales, Epistolae Ioannis VIII)",
          sourceUrl: "https://en.wikipedia.org/wiki/Branimir_of_Croatia",
        },
        {
          date: "vers 925",
          title: "Couronnement de Tomislav, premier roi de Croatie",
          description: "Tomislav unifie les territoires croates de la côte dalmate et de l'arrière-pays pannonien sous une même couronne, après avoir repoussé les incursions hongroises et bulgares.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "union-hongroise",
      title: "Union avec le royaume de Hongrie",
      startYear: 1102,
      endYear: 1527,
      summary:
        "À la suite d'une crise de succession, le royaume de Croatie entre en union personnelle avec la Hongrie en 1102, sous le règne du roi Coloman. La noblesse croate conserve ses terres et une large autonomie, mais le pays est de plus en plus menacé par l'avancée ottomane à partir du XVe siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1102",
          title: "Union personnelle avec la Hongrie",
          description: "Le couronnement de Coloman de Hongrie comme roi de Croatie ouvre une union personnelle entre les deux royaumes, formalisée selon la tradition par les « Pacta conventa ».",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Pacta_conventa_(Croatia)",
        },
        {
          date: "1493",
          title: "Défaite de Krbava",
          description: "La lourde défaite de la noblesse croate face aux Ottomans à Krbava Field annonce plusieurs décennies de guerres frontalières et de pertes territoriales.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "habsbourg",
      title: "Sous la couronne des Habsbourg",
      startYear: 1527,
      endYear: 1918,
      summary:
        "Face à la menace ottomane, la noblesse croate élit en 1527 l'archiduc Ferdinand de Habsbourg comme roi, plaçant la Croatie sous administration autrichienne puis austro-hongroise jusqu'en 1918. Une zone frontalière militarisée, la « Confins militaires », est administrée directement par Vienne pendant plus de trois siècles.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1ᵉʳ janvier 1527",
          title: "Élection de Ferdinand de Habsbourg",
          description: "Réunie à Cetin, la noblesse croate élit Ferdinand Iᵉʳ de Habsbourg roi de Croatie, en échange d'une protection militaire contre l'Empire ottoman.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/1527_election_in_Cetin",
        },
        {
          date: "1848",
          title: "Le ban Josip Jelačić et le printemps des peuples",
          description: "Le ban (gouverneur) de Croatie Josip Jelačić s'oppose aux velléités d'indépendance hongroises et obtient en retour un statut plus autonome pour la Croatie au sein de l'Empire.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1868",
          title: "Compromis croato-hongrois (Nagodba)",
          description: "Cet accord crée le royaume de Croatie-Slavonie et lui reconnaît une autonomie interne (langue, éducation, justice) au sein de la moitié hongroise de l'Autriche-Hongrie.",
          source: "Encyclopaedia Britannica",
          sourceUrl: "https://www.britannica.com/event/Nagodba",
        },
      ],
    },
    {
      id: "yougoslavie",
      title: "Dans les deux Yougoslavies",
      startYear: 1918,
      endYear: 1990,
      summary:
        "À la chute de l'Autriche-Hongrie, la Croatie rejoint en 1918 le royaume des Serbes, Croates et Slovènes, rebaptisé Yougoslavie en 1929. Après l'occupation de l'Axe et la période sombre de l'État indépendant de Croatie (1941-1945), régime fasciste satellite responsable de crimes de masse contre les Serbes, les Juifs et les Roms, la Croatie devient l'une des six républiques de la Yougoslavie socialiste de Tito.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1ᵉʳ décembre 1918",
          title: "Formation du royaume des Serbes, Croates et Slovènes",
          description: "La Croatie rejoint le nouveau royaume unifié sous la dynastie serbe des Karađorđević, qui prendra le nom de Yougoslavie en 1929.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "10 avril 1941 – mai 1945",
          title: "État indépendant de Croatie (NDH)",
          description: "Proclamé sous la protection de l'Allemagne nazie et de l'Italie fasciste, ce régime ustacha dirigé par Ante Pavelić persécute et extermine des dizaines de milliers de Serbes, de Juifs et de Roms, notamment au camp de Jasenovac.",
          source: "Encyclopaedia Britannica",
          sourceUrl: "https://www.britannica.com/place/Croatia/World-War-II",
        },
        {
          date: "1967-1971",
          title: "Le « Printemps croate »",
          description: "Ce mouvement réformiste réclamant plus d'autonomie linguistique et économique pour la Croatie au sein de la Yougoslavie est réprimé par Tito fin 1971, entraînant purges et emprisonnements.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Croatian_Spring",
        },
      ],
    },
    {
      id: "guerre-independance",
      title: "Indépendance et guerre de 1991-1995",
      startYear: 1990,
      endYear: 1995,
      summary:
        "Les premières élections multipartites de 1990 sont suivies de la déclaration d'indépendance du 25 juin 1991, qui déclenche la guerre d'indépendance croate contre l'armée populaire yougoslave et les milices serbes locales. Le conflit se conclut par la reconquête militaire de la majeure partie du territoire en 1995 et par la réintégration pacifique de la région du Danube croate en 1998.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "25 juin 1991",
          title: "Déclaration d'indépendance",
          description: "Le Sabor proclame l'indépendance de la Croatie vis-à-vis de la République fédérale socialiste de Yougoslavie.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "25 août – 18 novembre 1991",
          title: "Bataille de Vukovar",
          description: "Le siège de 87 jours de la ville de Vukovar par l'armée populaire yougoslave et des forces paramilitaires serbes en fait l'un des symboles les plus douloureux de la guerre.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Vukovar",
        },
        {
          date: "15 janvier 1992",
          title: "Reconnaissance internationale",
          description: "La Communauté européenne reconnaît officiellement l'indépendance de la Croatie ; le pays est admis à l'ONU en mai 1992.",
          source: "Parlement croate (Sabor)",
          sourceUrl: "https://www.sabor.hr/en/about-parliament/history/important-dates/15-january-day-international-recognition-republic-croatia",
        },
        {
          date: "4-7 août 1995",
          title: "Opération Tempête (Oluja)",
          description: "Cette offensive militaire, la dernière grande bataille de la guerre, permet à la Croatie de reprendre le contrôle de la quasi-totalité de son territoire.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Operation_Storm",
        },
        {
          date: "15 janvier 1998",
          title: "Réintégration pacifique de la Slavonie orientale",
          description: "L'accord d'Erdut de 1995 aboutit à la réintégration pacifique, sous supervision de l'ONU, des dernières régions du Danube croate restées sous contrôle serbe.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Erdut_Agreement",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1995,
      endYear: "present",
      summary:
        "La reconstruction d'après-guerre est suivie d'un long processus de rapprochement européen : adhésion à l'Union européenne en 2013, puis entrée simultanée dans l'espace Schengen et la zone euro au 1ᵉʳ janvier 2023, qui achève l'intégration de la Croatie dans les structures occidentales.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1ᵉʳ juillet 2013",
          title: "Adhésion à l'Union européenne",
          description: "La Croatie devient le 28ᵉ État membre de l'UE, dix ans après le dépôt de sa candidature.",
          source: "Commission européenne",
          sourceUrl: "https://ec.europa.eu/commission/presscorner/detail/en/ip_22_7907",
        },
        {
          date: "1ᵉʳ janvier 2023",
          title: "Entrée dans l'espace Schengen et adoption de l'euro",
          description: "La Croatie devient le 27ᵉ pays de l'espace Schengen et le 20ᵉ membre de la zone euro, remplaçant le kuna par l'euro au taux de 7,53450 kunas pour un euro.",
          source: "Banque centrale européenne",
          sourceUrl: "https://www.ecb.europa.eu/press/economic-bulletin/focus/2023/html/ecb.ebbox202208_02~15fd36600a.en.html",
        },
      ],
    },
  ],
};
