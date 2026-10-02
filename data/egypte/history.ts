import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire égyptienne — pas un résumé exhaustif de plus de cinq millénaires.",
  periods: [
    {
      id: "egypte-antique",
      title: "L'Égypte antique : unification, pharaons et pyramides",
      startYear: -3100,
      endYear: -332,
      summary:
        "L'une des plus anciennes civilisations étatiques perdure près de trois millénaires sous une trentaine de dynasties. L'Ancien Empire édifie les pyramides de Gizeh ; le Nouvel Empire marque l'apogée du pays sous Thoutmôsis III, Akhenaton, Toutânkhamon et Ramsès II. Après Alexandre le Grand, l'Égypte ptolémaïque s'achève avec l'annexion romaine.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Ancient_Egypt",
      events: [
        {
          date: "vers 3100 av. J.-C.",
          title: "Unification de la Haute et de la Basse-Égypte",
          description: "Le roi Narmer unifie traditionnellement les deux royaumes du Nil.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Narmer",
        },
        {
          date: "vers 2560 av. J.-C.",
          title: "Construction de la grande pyramide de Khéops",
          description: "Elle reste la plus haute construction humaine pendant près de 3 800 ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
        },
        {
          date: "332 av. J.-C.",
          title: "Conquête par Alexandre le Grand",
          description: "Alexandre le Grand conquiert l'Égypte et fonde Alexandrie, ouvrant la période ptolémaïque.",
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
        "Après la conquête arabe, l'Égypte byzantine s'islamise et s'arabise progressivement, tout en conservant sa minorité copte. Les Mamelouks dirigent le pays de 1250 à 1517, puis il devient une province ottomane. L'expédition de Bonaparte (1798-1801) réintroduit l'Égypte antique en Europe ; Méhémet Ali fonde ensuite une dynastie qui règne jusqu'en 1952.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Islamic_Egypt",
      events: [
        {
          date: "639-641",
          title: "Conquête arabo-musulmane",
          description: "Les armées arabes conquièrent l'Égypte byzantine.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muslim_conquest_of_Egypt",
        },
        {
          date: "969",
          title: "Fondation du Caire et d'Al-Azhar",
          description: "La dynastie fatimide fonde la ville du Caire et l'université-mosquée d'Al-Azhar.",
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
          description: "Cet officier ottoman engage une modernisation autoritaire du pays.",
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
        "Le canal de Suez place l'Égypte au cœur des enjeux mondiaux mais l'endette lourdement, ce qui conduit à l'occupation britannique. Protectorat en 1914, le pays devient un royaume sous Fouad Ier puis Farouk. La défaite de 1948 face à Israël discrédite une monarchie déjà minée par la corruption.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Egypt_under_the_Muhammad_Ali_dynasty",
      events: [
        {
          date: "17 novembre 1869",
          title: "Inauguration du canal de Suez",
          description: "Le canal relie directement la Méditerranée à la mer Rouge.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Suez_Canal",
        },
        {
          date: "1882",
          title: "Occupation militaire britannique",
          description: "Le Royaume-Uni occupe l'Égypte, officiellement pour garantir le remboursement de sa dette.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Egypt_under_the_British",
        },
        {
          date: "1922",
          title: "Indépendance nominale et royaume d'Égypte",
          description: "Londres garde le contrôle de la défense et du canal de Suez.",
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
        "Nasser acquiert un immense prestige panarabe avec la crise de Suez, mais son socialisme arabe autoritaire est assombri par la défaite de 1967. Anouar el-Sadate fait la paix avec Israël, qui restitue le Sinaï, ce qui vaut à l'Égypte d'être exclue de la Ligue arabe. Hosni Moubarak gouverne ensuite de 1981 à 2011 sous état d'urgence permanent, allié des États-Unis.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Egypt_under_Gamal_Abdel_Nasser",
      events: [
        {
          date: "1956",
          title: "Nationalisation du canal de Suez et crise de Suez",
          description: "Nasser nationalise le canal ; l'intervention franco-britannique et israélienne est retirée sous pression internationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Suez_Crisis",
        },
        {
          date: "juin 1967",
          title: "Guerre des Six Jours",
          description: "L'Égypte perd le Sinaï face à Israël.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Six-Day_War",
        },
        {
          date: "1978-1979",
          title: "Accords de Camp David et traité de paix avec Israël",
          description: "Avec Menahem Begin, Sadate fait de l'Égypte le premier pays arabe à reconnaître Israël.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Egypt%E2%80%93Israel_peace_treaty",
        },
        {
          date: "6 octobre 1981",
          title: "Assassinat d'Anouar el-Sadate",
          description: "Sadate est assassiné par des islamistes lors d'un défilé militaire.",
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
        "Le Printemps arabe chasse Moubarak en 2011. Élu en 2012, Mohamed Morsi est renversé dès 2013 par l'armée, qui réprime durement les Frères musulmans. Président depuis 2014, Abdel Fattah al-Sissi lance de grands projets (doublement du canal de Suez, nouvelle capitale administrative) dans un contexte de grave crise économique depuis 2022.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Egyptian_revolution_of_2011",
      events: [
        {
          date: "25 janvier - 11 février 2011",
          title: "Révolution égyptienne",
          description: "Les manifestations de la place Tahrir contraignent Moubarak à démissionner.",
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
          description: "Le général Abdel Fattah al-Sissi destitue le président Morsi.",
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
