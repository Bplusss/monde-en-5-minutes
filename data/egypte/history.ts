import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire égyptienne, l'une des plus longues et des mieux documentées au monde — pas un résumé exhaustif de plus de cinq millénaires d'histoire, déjà largement traités par ailleurs.",
  periods: [
    {
      id: "egypte-antique",
      title: "L'Égypte antique : unification, pharaons et pyramides",
      startYear: -3100,
      endYear: -332,
      summary:
        "Vers 3100 av. J.-C., la légendaire unification de la Haute et de la Basse-Égypte, traditionnellement attribuée au roi Narmer, fonde l'une des plus anciennes civilisations étatiques de l'histoire humaine, qui perdurera, avec des hauts et des bas, pendant près de trois millénaires sous une trentaine de dynasties pharaoniques. L'Ancien Empire (vers 2686-2181 av. J.-C.) voit l'édification des grandes pyramides de Gizeh, dont la pyramide de Khéops, plus haute construction humaine pendant près de 3 800 ans, et du Grand Sphinx ; le Moyen Empire (vers 2055-1650 av. J.-C.) puis le Nouvel Empire (vers 1550-1070 av. J.-C.) marquent l'apogée territoriale et culturelle du pays sous des souverains comme Thoutmôsis III, Akhenaton (bref épisode de monothéisme centré sur le dieu solaire Aton), Toutânkhamon (dont la tombe quasi intacte, découverte en 1922 par Howard Carter dans la Vallée des Rois, reste l'une des plus grandes découvertes archéologiques de tous les temps) et Ramsès II, grand bâtisseur (temples d'Abou Simbel) au règne exceptionnellement long. Après une lente décadence marquée par des dominations étrangères successives (nubienne, assyrienne, perse), l'Égypte pharaonique s'achève avec la conquête d'Alexandre le Grand en 332 av. J.-C., qui fonde Alexandrie et ouvre la période hellénistique sous la dynastie ptolémaïque, dont la dernière représentante, Cléopâtre VII, voit le pays annexé par Rome en 30 av. J.-C. après sa défaite face à Octave (futur Auguste).",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Ancient_Egypt",
      events: [
        {
          date: "vers 3100 av. J.-C.",
          title: "Unification de la Haute et de la Basse-Égypte",
          description: "Le roi Narmer unifie traditionnellement les deux royaumes du Nil, fondant l'État égyptien et sa première dynastie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Narmer",
        },
        {
          date: "vers 2560 av. J.-C.",
          title: "Construction de la grande pyramide de Khéops",
          description: "Plus grande des pyramides de Gizeh, elle reste la plus haute construction humaine pendant près de 3 800 ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
        },
        {
          date: "332 av. J.-C.",
          title: "Conquête par Alexandre le Grand",
          description: "Alexandre le Grand conquiert l'Égypte et fonde Alexandrie, ouvrant la période hellénistique ptolémaïque.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ptolemaic_Kingdom",
        },
        {
          date: "30 av. J.-C.",
          title: "Annexion romaine",
          description: "Après la mort de Cléopâtre VII, dernière souveraine ptolémaïque, l'Égypte devient une province de Rome.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Cleopatra",
        },
      ],
    },
    {
      id: "conquete-islamique-ottomane",
      title: "Conquête islamique, dynasties médiévales et domination ottomane",
      startYear: 641,
      endYear: 1882,
      summary:
        "L'Égypte, devenue province romaine puis byzantine et largement christianisée (foi copte), est conquise en 639-641 par les armées arabo-musulmanes, qui fondent Fustat (près du futur Caire) ; l'islamisation et l'arabisation progressives du pays s'étalent sur plusieurs siècles, sans faire totalement disparaître la minorité copte. Sous la dynastie fatimide, la ville du Caire est fondée en 969 et devient un grand centre intellectuel et commercial du monde islamique, tandis que l'université-mosquée d'Al-Azhar, fondée la même année, s'impose durablement comme l'une des plus hautes autorités de l'islam sunnite. Les Mamelouks, ancienne caste d'esclaves-soldats d'origine turco-circassienne, prennent le pouvoir en 1250 et dirigent l'Égypte pendant plus de deux siècles et demi, repoussant notamment l'invasion mongole (bataille d'Aïn Djalout, 1260) ; en 1517, l'Empire ottoman conquiert l'Égypte, qui devient une province ottomane dirigée en pratique par les mêmes élites mamelouke sous suzeraineté du sultan d'Istanbul. L'expédition militaire française de Bonaparte (1798-1801), brève mais retentissante, réintroduit l'Égypte antique dans la conscience européenne (déchiffrement ultérieur des hiéroglyphes grâce à la pierre de Rosette) ; à sa suite, Méhémet Ali, officier ottoman d'origine albanaise, s'empare du pouvoir en 1805 et engage une modernisation autoritaire du pays (armée, industrie, agriculture du coton) qui fonde la dynastie régnant, avec un degré d'autonomie croissant vis-à-vis d'Istanbul, jusqu'à la révolution de 1952.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Islamic_Egypt",
      events: [
        {
          date: "639-641",
          title: "Conquête arabo-musulmane",
          description: "Les armées arabes conquièrent l'Égypte byzantine, ouvrant la période islamique du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muslim_conquest_of_Egypt",
        },
        {
          date: "969",
          title: "Fondation du Caire et d'Al-Azhar",
          description: "La dynastie fatimide fonde la ville du Caire et l'université-mosquée d'Al-Azhar, appelée à devenir une autorité majeure de l'islam sunnite.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Al-Azhar_University",
        },
        {
          date: "1517",
          title: "Conquête ottomane",
          description: "L'Empire ottoman renverse le sultanat mamelouk et fait de l'Égypte une province ottomane.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ottoman_Egypt",
        },
        {
          date: "1805",
          title: "Prise de pouvoir de Méhémet Ali",
          description: "Cet officier ottoman engage une modernisation autoritaire de l'Égypte et fonde une dynastie régnante autonome vis-à-vis d'Istanbul.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muhammad_Ali_of_Egypt",
        },
      ],
    },
    {
      id: "canal-suez-protectorat-britannique",
      title: "Canal de Suez et protectorat britannique",
      startYear: 1859,
      endYear: 1952,
      summary:
        "Le canal de Suez, construit par la compagnie franco-égyptienne de Ferdinand de Lesseps et inauguré en 1869, place définitivement l'Égypte au centre des enjeux géostratégiques mondiaux mais plonge le pays dans un endettement massif auprès des puissances européennes ; l'insolvabilité qui en résulte pousse le Royaume-Uni à occuper militairement le pays dès 1882, sous couvert du maintien de l'ordre, tout en laissant formellement subsister la souveraineté du khédive sous suzeraineté ottomane. L'Égypte est officiellement proclamée protectorat britannique en 1914 après l'entrée en guerre de l'Empire ottoman aux côtés des puissances centrales ; une indépendance largement nominale est accordée en 1922 sous la monarchie du roi Fouad Ier puis de son fils Farouk, le Royaume-Uni conservant le contrôle de la défense, des affaires étrangères et surtout du canal de Suez en vertu du traité anglo-égyptien de 1936. La défaite humiliante des armées arabes, dont l'égyptienne, lors de la première guerre israélo-arabe de 1948 discrédite durablement la monarchie déjà minée par la corruption, ouvrant la voie au coup d'État militaire du Mouvement des officiers libres en juillet 1952, qui renverse le roi Farouk et met fin à près de 150 ans de dynastie issue de Méhémet Ali.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Egypt_under_the_Muhammad_Ali_dynasty",
      events: [
        {
          date: "17 novembre 1869",
          title: "Inauguration du canal de Suez",
          description: "Le canal, reliant directement la Méditerranée à la mer Rouge, est inauguré en grande pompe et fait de l'Égypte un point de passage stratégique mondial.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Suez_Canal",
        },
        {
          date: "1882",
          title: "Occupation militaire britannique",
          description: "Le Royaume-Uni occupe militairement l'Égypte, officiellement pour rétablir l'ordre et garantir le remboursement de sa dette.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Egypt_under_the_British",
        },
        {
          date: "1922",
          title: "Indépendance nominale et royaume d'Égypte",
          description: "Le Royaume-Uni reconnaît une indépendance largement formelle, tout en conservant le contrôle de la défense et du canal de Suez.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Kingdom_of_Egypt",
        },
        {
          date: "23 juillet 1952",
          title: "Révolution des officiers libres",
          description: "Un coup d'État militaire mené par Gamal Abdel Nasser et Mohammed Naguib renverse le roi Farouk et proclame la République.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Egyptian_revolution_of_1952",
        },
      ],
    },
    {
      id: "nasser-sadate-moubarak",
      title: "République nassérienne, Sadate et l'ère Moubarak",
      startYear: 1952,
      endYear: 2011,
      summary:
        "Gamal Abdel Nasser, figure dominante de la révolution de 1952, devient président en 1956 et nationalise la même année le canal de Suez, provoquant la crise de Suez (attaque conjointe franco-britannique et israélienne, finalement retirée sous pression américano-soviétique) qui l'auréole d'un immense prestige panarabe et tiers-mondiste. Son socialisme arabe autoritaire (nationalisations, réforme agraire, construction du haut barrage d'Assouan avec l'aide soviétique) est cependant assombri par la défaite désastreuse de la guerre des Six Jours face à Israël en juin 1967, qui coûte à l'Égypte le Sinaï. Son successeur Anouar el-Sadate lance la guerre du Kippour en octobre 1973 (succès initial suivi d'un retournement militaire, mais victoire politique et psychologique permettant de relancer les négociations), puis opère un spectaculaire revirement diplomatique en se rendant à Jérusalem en 1977 et en signant les accords de Camp David (1978) puis le traité de paix israélo-égyptien de 1979, qui restitue le Sinaï à l'Égypte mais lui vaut d'être exclue de la Ligue arabe pendant une décennie ; Sadate est assassiné en 1981 par des islamistes radicaux opposés à ce rapprochement. Hosni Moubarak, son vice-président, dirige le pays pendant près de trente ans (1981-2011) sous l'état d'urgence permanent instauré après l'assassinat de Sadate, combinant stabilité macroéconomique relative, alliance stratégique étroite avec les États-Unis, répression systématique des Frères musulmans et de toute opposition organisée, et corruption endémique associée à l'enrichissement de son entourage.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Egypt_under_Gamal_Abdel_Nasser",
      events: [
        {
          date: "1956",
          title: "Nationalisation du canal de Suez et crise de Suez",
          description: "Nasser nationalise le canal, provoquant une intervention militaire franco-britannique et israélienne finalement retirée sous pression internationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Suez_Crisis",
        },
        {
          date: "juin 1967",
          title: "Guerre des Six Jours",
          description: "L'Égypte perd le Sinaï face à Israël lors d'une défaite militaire majeure pour les armées arabes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Six-Day_War",
        },
        {
          date: "1978-1979",
          title: "Accords de Camp David et traité de paix avec Israël",
          description: "Sadate et le Premier ministre israélien Menahem Begin signent la paix, restituant le Sinaï à l'Égypte, qui devient le premier pays arabe à reconnaître Israël.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Egypt%E2%80%93Israel_peace_treaty",
        },
        {
          date: "6 octobre 1981",
          title: "Assassinat d'Anouar el-Sadate",
          description: "Le président Sadate est assassiné par des militants islamistes lors d'un défilé militaire, à cause notamment de la paix conclue avec Israël.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Anwar_Sadat",
        },
      ],
    },
    {
      id: "printemps-arabe-sissi",
      title: "Révolution de 2011, transition chaotique et ère Sissi",
      startYear: 2011,
      endYear: "present",
      summary:
        "Le Printemps arabe atteint l'Égypte en janvier-février 2011 : des manifestations massives, centrées sur la place Tahrir au Caire, contraignent Hosni Moubarak à démissionner après dix-huit jours de mobilisation, portées par un mécontentement social et politique accumulé sur des décennies. La transition qui suit est chaotique : après une période de transition militaire, l'élection présidentielle de 2012 porte au pouvoir Mohamed Morsi, candidat des Frères musulmans et premier président civil et islamiste élu démocratiquement du pays, dont le mandat est marqué par des tensions croissantes avec l'opposition laïque et libérale, l'armée et la justice, sur fond de crise économique persistante. Face à de nouvelles manifestations de masse à l'été 2013, le général Abdel Fattah al-Sissi, alors ministre de la Défense, destitue Morsi lors d'un coup d'État militaire en juillet 2013, suivi d'une répression très meurtrière des Frères musulmans (dont le massacre de la place Rabaa al-Adawiya en août 2013, l'un des épisodes de répression les plus meurtriers de l'histoire égyptienne récente) et de leur interdiction comme organisation terroriste. Sissi se fait élire président en 2014, puis réélire en 2018 et en décembre 2023, consolidant un régime fortement sécuritaire qui a mené d'importants projets d'infrastructure (doublement partiel du canal de Suez en 2015, nouvelle capitale administrative à l'est du Caire) tout en gérant une grave crise économique et monétaire depuis 2022, en partie liée aux répercussions régionales de la guerre en Ukraine puis du conflit à Gaza voisine depuis octobre 2023.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Egyptian_revolution_of_2011",
      events: [
        {
          date: "25 janvier - 11 février 2011",
          title: "Révolution égyptienne",
          description: "Des manifestations massives place Tahrir contraignent Hosni Moubarak à démissionner après près de trente ans au pouvoir.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Egyptian_revolution_of_2011",
        },
        {
          date: "juin 2012",
          title: "Élection de Mohamed Morsi",
          description: "Le candidat des Frères musulmans devient le premier président civil élu démocratiquement d'Égypte.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mohamed_Morsi",
        },
        {
          date: "3 juillet 2013",
          title: "Coup d'État militaire contre Morsi",
          description: "Le général Abdel Fattah al-Sissi destitue le président Morsi à la suite de manifestations de masse, ouvrant une répression sévère des Frères musulmans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2013_Egyptian_coup_d%27%C3%A9tat",
        },
        {
          date: "8 juin 2014",
          title: "Investiture d'Abdel Fattah al-Sissi",
          description: "Sissi devient président de la République, réélu depuis en 2018 puis en décembre 2023.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Abdel_Fattah_el-Sisi",
        },
      ],
    },
  ],
};
