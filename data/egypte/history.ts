import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire égyptienne, l'une des plus longues et des mieux documentées au monde — pas un résumé exhaustif de plus de cinq millénaires d'histoire.",
  periods: [
    {
      id: "egypte-antique",
      title: "L'Égypte antique : unification, pharaons et pyramides",
      startYear: -3100,
      endYear: -332,
      summary:
        "Vers 3100 av. J.-C., l'unification de la Haute et de la Basse-Égypte par le roi Narmer fonde l'une des plus anciennes civilisations étatiques, qui perdure près de trois millénaires sous une trentaine de dynasties. L'Ancien Empire édifie les pyramides de Gizeh, le Nouvel Empire marque l'apogée du pays sous Thoutmôsis III, Akhenaton, Toutânkhamon et Ramsès II. Conquise par Alexandre le Grand en 332 av. J.-C., l'Égypte hellénistique s'achève avec son annexion par Rome en 30 av. J.-C., après la mort de Cléopâtre VII.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Ancient_Egypt",
      events: [
        {
          date: "vers 3100 av. J.-C.",
          title: "Unification de la Haute et de la Basse-Égypte",
          description: "Le roi Narmer unifie traditionnellement les deux royaumes du Nil, fondant l'État égyptien.",
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
        "Conquise par les armées arabo-musulmanes en 639-641, l'Égypte byzantine et christianisée s'islamise et s'arabise progressivement, sans faire disparaître sa minorité copte. Sous les Fatimides, Le Caire est fondé en 969 avec la mosquée-université Al-Azhar, l'une des plus hautes autorités de l'islam sunnite. Les Mamelouks dirigent le pays de 1250 à 1517, année où l'Empire ottoman en fait une province. L'expédition de Bonaparte (1798-1801) réintroduit l'Égypte antique en Europe ; Méhémet Ali, qui prend le pouvoir en 1805, engage une modernisation autoritaire et fonde la dynastie régnante jusqu'en 1952.",
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
          description: "Cet officier ottoman engage une modernisation autoritaire de l'Égypte et fonde une dynastie régnante.",
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
        "Le canal de Suez, inauguré en 1869, place l'Égypte au centre des enjeux géostratégiques mondiaux mais l'endette lourdement, poussant le Royaume-Uni à l'occuper militairement dès 1882. Le pays devient protectorat britannique en 1914, puis obtient une indépendance largement nominale en 1922 sous la monarchie de Fouad Ier puis Farouk, Londres gardant le contrôle de la défense et du canal. La défaite arabe de 1948 face à Israël discrédite la monarchie, déjà minée par la corruption, ouvrant la voie au coup d'État du Mouvement des officiers libres en juillet 1952.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Egypt_under_the_Muhammad_Ali_dynasty",
      events: [
        {
          date: "17 novembre 1869",
          title: "Inauguration du canal de Suez",
          description: "Le canal, reliant directement la Méditerranée à la mer Rouge, fait de l'Égypte un point de passage stratégique mondial.",
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
        "Gamal Abdel Nasser, président dès 1956, nationalise la même année le canal de Suez, déclenchant la crise de Suez et acquérant un immense prestige panarabe. Son socialisme arabe autoritaire est assombri par la défaite de la guerre des Six Jours (1967), qui coûte à l'Égypte le Sinaï. Son successeur Anouar el-Sadate signe la paix avec Israël (Camp David 1978, traité de 1979), qui restitue le Sinaï mais vaut à l'Égypte d'être exclue de la Ligue arabe ; il est assassiné en 1981 par des islamistes. Hosni Moubarak dirige ensuite le pays pendant près de trente ans (1981-2011), sous état d'urgence permanent, alliance étroite avec les États-Unis et répression des Frères musulmans.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Egypt_under_Gamal_Abdel_Nasser",
      events: [
        {
          date: "1956",
          title: "Nationalisation du canal de Suez et crise de Suez",
          description: "Nasser nationalise le canal, provoquant une intervention militaire franco-britannique et israélienne, finalement retirée sous pression internationale.",
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
          description: "Sadate et le Premier ministre israélien Menahem Begin signent la paix ; l'Égypte devient le premier pays arabe à reconnaître Israël.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Egypt%E2%80%93Israel_peace_treaty",
        },
        {
          date: "6 octobre 1981",
          title: "Assassinat d'Anouar el-Sadate",
          description: "Le président Sadate est assassiné par des militants islamistes lors d'un défilé militaire.",
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
        "Le Printemps arabe atteint l'Égypte en janvier 2011 : des manifestations massives place Tahrir contraignent Hosni Moubarak à démissionner après dix-huit jours de mobilisation. L'élection de 2012 porte au pouvoir Mohamed Morsi, candidat des Frères musulmans, destitué par le général Abdel Fattah al-Sissi lors d'un coup d'État en juillet 2013, suivi d'une répression meurtrière des Frères musulmans. Sissi est élu président en 2014, réélu en 2018 puis en 2023, menant d'importants projets d'infrastructure (doublement du canal de Suez, nouvelle capitale administrative) tout en gérant une grave crise économique depuis 2022.",
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
          description: "Le général Abdel Fattah al-Sissi destitue le président Morsi, ouvrant une répression sévère des Frères musulmans.",
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
