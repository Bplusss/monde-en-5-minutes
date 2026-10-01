import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour comprendre un pays né de trois colonisations successives — allemande, puis française et britannique — et d'une réunification partielle en 1961.",
  periods: [
    {
      id: "royaumes-precoloniaux",
      title: "Sao, royaumes des hauts plateaux et lamidats peuls",
      startYear: 500,
      endYear: 1884,
      summary:
        "Au sud du lac Tchad, la civilisation sao, connue pour ses terres cuites, s'efface vers le XVIe siècle sous l'influence du Kanem-Bornou. Sur les hauts plateaux de l'Ouest se constituent des chefferies bamiléké et le royaume bamoun, fondé vers 1394 à Foumban. Les navigateurs portugais, qui atteignent l'estuaire du Wouri en 1472, le baptisent Rio dos Camarões (« rivière des crevettes »), origine du nom du pays. Au début du XIXe siècle, le jihad peul conduit par Modibo Adama fonde l'émirat de l'Adamaoua et ses lamidats, qui islamisent le nord, tandis que les Duala commercent sur la côte avec les Européens.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Cameroon",
      events: [
        {
          date: "1472",
          title: "Les Portugais dans l'estuaire du Wouri",
          description: "Fernão do Pó nomme l'estuaire Rio dos Camarões en raison de l'abondance de crevettes, d'où le nom de Cameroun.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Cameroon",
        },
        {
          date: "1809",
          title: "Fondation de l'émirat de l'Adamaoua",
          description: "Modibo Adama, mandaté par Ousmane dan Fodio, conquiert le plateau qui porte son nom ; Ngaoundéré, Garoua et Maroua deviennent des lamidats.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Adamawa_Emirate",
        },
      ],
    },
    {
      id: "kamerun-allemand",
      title: "Le Kamerun allemand",
      startYear: 1884,
      endYear: 1916,
      summary:
        "En juillet 1884, des chefs duala signent un traité de protectorat avec l'Allemagne, devançant le Royaume-Uni. Le Kamerun s'étend ensuite vers l'intérieur par des campagnes militaires ; l'administration développe plantations sur les pentes du mont Cameroun, routes et premières voies ferrées, au prix du travail forcé. En 1914, Rudolf Duala Manga Bell, roi des Duala, est pendu pour s'être opposé à l'expropriation de son peuple. Pendant la Première Guerre mondiale, les troupes britanniques, françaises et belges conquièrent la colonie, dont les dernières forces allemandes se réfugient en Guinée espagnole début 1916.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Kamerun",
      events: [
        {
          date: "12 juillet 1884",
          title: "Traité germano-duala",
          description: "Les rois duala Ndumbe Lobe Bell et Akwa placent leur territoire sous protectorat allemand ; Gustav Nachtigal hisse le drapeau quelques jours plus tard.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Kamerun",
        },
        {
          date: "8 août 1914",
          title: "Exécution de Rudolf Duala Manga Bell",
          description: "Le roi duala, opposé à l'expulsion de son peuple du plateau Joss à Douala, est pendu pour haute trahison ; il est aujourd'hui un héros national.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Rudolf_Duala_Manga_Bell",
        },
      ],
    },
    {
      id: "mandats-franco-britanniques",
      title: "Mandats français et britannique, lutte pour l'indépendance",
      startYear: 1916,
      endYear: 1960,
      summary:
        "Le territoire est partagé entre la France, qui en administre les quatre cinquièmes depuis Yaoundé, et le Royaume-Uni, qui rattache sa part, deux bandes le long de la frontière nigériane, à sa colonie du Nigeria. Mandats de la Société des Nations en 1922, ils deviennent des territoires sous tutelle de l'ONU en 1946. Fondée en 1948, l'Union des populations du Cameroun (UPC) de Ruben Um Nyobè réclame indépendance et réunification ; interdite en 1955, elle passe à la lutte armée en Sanaga-Maritime et en pays bamiléké. La répression française, qui tue Um Nyobè en 1958, se poursuit après l'indépendance et fait des dizaines de milliers de morts selon les historiens.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/French_Cameroon",
      events: [
        {
          date: "20 juillet 1922",
          title: "Mandats de la Société des Nations",
          description: "La SDN confirme le partage du Cameroun entre un mandat français à l'est et un mandat britannique à l'ouest.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/British_Cameroon",
        },
        {
          date: "13 septembre 1958",
          title: "Mort de Ruben Um Nyobè",
          description: "Le secrétaire général de l'UPC est tué par l'armée française dans le maquis de Sanaga-Maritime.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ruben_Um_Nyob%C3%A8",
        },
      ],
    },
    {
      id: "independance-reunification-ahidjo",
      title: "Indépendance, réunification et régime d'Ahidjo",
      startYear: 1960,
      endYear: 1982,
      summary:
        "Le Cameroun sous tutelle française devient indépendant le 1er janvier 1960 sous la présidence d'Ahmadou Ahidjo. Lors du plébiscite de l'ONU du 11 février 1961, le Cameroun méridional britannique choisit de rejoindre le Cameroun, tandis que le Cameroun septentrional opte pour le Nigeria. La République fédérale du Cameroun naît le 1er octobre 1961, avec deux États fédérés et deux langues officielles. Ahidjo instaure un parti unique en 1966 puis, par référendum, remplace la fédération par un État unitaire le 20 mai 1972, aujourd'hui fête nationale. Il démissionne en 1982 au profit de son Premier ministre, Paul Biya.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Federal_Republic_of_Cameroon",
      events: [
        {
          date: "1er janvier 1960",
          title: "Indépendance du Cameroun oriental",
          description: "L'ancien Cameroun sous tutelle française accède à l'indépendance sous le nom de République du Cameroun.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/French_Cameroon",
        },
        {
          date: "11 février 1961",
          title: "Plébiscite dans le Cameroun britannique",
          description: "Le Cameroun méridional vote à 70 % pour le rattachement au Cameroun ; le Cameroun septentrional choisit le Nigeria.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1961_British_Cameroons_referendum",
        },
        {
          date: "1er octobre 1961",
          title: "Réunification et République fédérale",
          description: "Le Cameroun oriental francophone et le Cameroun occidental anglophone forment une fédération bilingue.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Federal_Republic_of_Cameroon",
        },
        {
          date: "20 mai 1972",
          title: "Fin de la fédération",
          description: "Un référendum crée la République unie du Cameroun, État unitaire ; le statut autonome de l'ancien Cameroun occidental disparaît.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1972_Cameroonian_constitutional_referendum",
        },
      ],
    },
    {
      id: "ere-biya",
      title: "L'ère Biya : multipartisme encadré et crises sécuritaires",
      startYear: 1982,
      endYear: "present",
      summary:
        "Paul Biya succède à Ahidjo le 6 novembre 1982 et déjoue en 1984 une tentative de coup d'État. Le multipartisme est rétabli en 1990, mais le RDPC conserve le pouvoir à toutes les élections, souvent contestées, comme en 1992 face à John Fru Ndi. La révision constitutionnelle de 2008, qui supprime la limitation des mandats, provoque des émeutes réprimées. Depuis 2014, Boko Haram frappe l'Extrême-Nord ; à partir de 2016, des grèves d'avocats et d'enseignants anglophones dégénèrent en conflit armé entre l'armée et des groupes séparatistes. Paul Biya, réélu en 2018 puis en octobre 2025, est le plus âgé des chefs d'État en exercice.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Paul_Biya",
      events: [
        {
          date: "6 novembre 1982",
          title: "Paul Biya devient président",
          description: "Le Premier ministre succède constitutionnellement à Ahmadou Ahidjo, démissionnaire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Paul_Biya",
        },
        {
          date: "14 août 2008",
          title: "Transfert de Bakassi",
          description: "Le Nigeria achève la remise de la péninsule de Bakassi au Cameroun, conformément à l'arrêt de la Cour internationale de justice de 2002.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bakassi",
        },
        {
          date: "1er octobre 2017",
          title: "Proclamation séparatiste de l'« Ambazonie »",
          description: "Des séparatistes proclament symboliquement l'indépendance des régions anglophones ; la répression de la journée ouvre un conflit armé.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Anglophone_Crisis",
        },
        {
          date: "12 octobre 2025",
          title: "Réélection contestée de Paul Biya",
          description: "Proclamé vainqueur avec 53,7 % des voix, Paul Biya entame un huitième mandat ; Issa Tchiroma Bakary revendique la victoire et des manifestations sont réprimées.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2025_Cameroonian_presidential_election",
        },
      ],
    },
  ],
};
