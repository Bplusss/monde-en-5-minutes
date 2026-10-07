import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire pakistanaise.",
  periods: [
    {
      id: "indus-gandhara",
      title: "De la civilisation de l'Indus au Gandhara",
      startYear: -2600,
      endYear: 711,
      summary:
        "La vallée de l'Indus voit naître vers 2600 av. J.-C. l'une des premières civilisations urbaines, avec les villes planifiées de Mohenjo-daro et Harappa, leurs rues à angle droit et leurs réseaux d'égouts. La région passe ensuite sous la domination perse, puis Alexandre le Grand y mène campagne en 326 av. J.-C. Autour de Taxila et de Peshawar, le royaume du Gandhara devient un foyer du bouddhisme, où naît un art mêlant influences grecques et indiennes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Pakistan",
      events: [
        {
          date: "vers 2600 av. J.-C.",
          title: "Essor de Mohenjo-daro",
          description: "La plus grande cité de la civilisation de l'Indus, inscrite au patrimoine mondial en 1980.",
          source: "UNESCO",
          sourceUrl: "https://whc.unesco.org/fr/list/138",
        },
        {
          date: "326 av. J.-C.",
          title: "Alexandre le Grand sur l'Hydaspe",
          description: "Il bat le roi Poros sur les rives du Jhelum, à l'extrémité orientale de ses conquêtes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_the_Hydaspes",
        },
      ],
    },
    {
      id: "islam-moghols",
      title: "L'islam, des sultanats aux Moghols et aux Sikhs",
      startYear: 711,
      endYear: 1849,
      summary:
        "Les Arabes conquièrent le Sind en 711, puis des dynasties venues d'Afghanistan et d'Asie centrale implantent l'islam dans le Pendjab. Au XVIe siècle, l'Empire moghol fait de Lahore l'une de ses capitales et la couvre de jardins, de forts et de mosquées. Après son déclin, le maharaja sikh Ranjit Singh bâtit au début du XIXe siècle un puissant royaume centré sur Lahore.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Pakistan",
      events: [
        {
          date: "711-712",
          title: "Conquête du Sind",
          description: "Le général arabe Muhammad ibn al-Qasim prend Debal et le Sind pour le califat omeyyade.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muhammad_ibn_al-Qasim",
        },
        {
          date: "1673",
          title: "Mosquée Badshahi de Lahore",
          description: "Construite sous l'empereur Aurangzeb, elle fut longtemps la plus grande mosquée du monde.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Badshahi_Mosque",
        },
      ],
    },
    {
      id: "raj-partition",
      title: "Raj britannique et naissance du Pakistan",
      startYear: 1849,
      endYear: 1947,
      summary:
        "Les Britanniques annexent le Pendjab en 1849 et contrôlent tout le territoire actuel. Face au Congrès national indien, la Ligue musulmane, fondée en 1906, réclame en 1940 un État pour les musulmans du sous-continent. Sous la direction de Muhammad Ali Jinnah, le Pakistan naît le 14 août 1947, en deux ailes séparées par l'Inde. La partition provoque l'un des plus grands déplacements de population de l'histoire, environ 15 millions de personnes, et des massacres qui font des centaines de milliers de morts.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Partition_of_India",
      events: [
        {
          date: "23 mars 1940",
          title: "Résolution de Lahore",
          description: "La Ligue musulmane demande des États indépendants pour les régions à majorité musulmane ; la date est celle de la fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Lahore_Resolution",
        },
        {
          date: "14 août 1947",
          title: "Indépendance",
          description: "Jinnah devient gouverneur général du nouvel État, dont Karachi est la première capitale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Pakistan_Movement",
        },
      ],
    },
    {
      id: "generaux-secession",
      title: "Guerres, généraux et sécession du Bangladesh",
      startYear: 1947,
      endYear: 1977,
      summary:
        "Dès 1947, l'Inde et le Pakistan se disputent le Cachemire, objet de guerres en 1947-1948 et en 1965. Le général Ayub Khan prend le pouvoir en 1958 et fait construire Islamabad, nouvelle capitale. Dominé par l'ouest, le Pakistan oriental se soulève en 1971 : la répression de l'armée et l'intervention indienne aboutissent à l'indépendance du Bangladesh. Zulfikar Ali Bhutto dirige ensuite le pays, fait adopter la Constitution de 1973 et lance le programme nucléaire.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Pakistan",
      events: [
        {
          date: "7 octobre 1958",
          title: "Premier coup d'État militaire",
          description: "La loi martiale est proclamée ; le général Ayub Khan s'empare du pouvoir quelques semaines plus tard.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1958_Pakistani_military_coup",
        },
        {
          date: "16 décembre 1971",
          title: "Capitulation de Dacca",
          description: "L'armée pakistanaise se rend aux forces indiennes ; le Bangladesh devient indépendant.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bangladesh_Liberation_War",
        },
      ],
    },
    {
      id: "zia-bhutto-musharraf",
      title: "Islamisation, alternances et puissance nucléaire",
      startYear: 1977,
      endYear: 2008,
      summary:
        "Le général Zia ul-Haq renverse Bhutto en 1977, le fait pendre et islamise le droit, tout en servant de base arrière à la résistance afghane contre l'URSS. Après sa mort en 1988, Benazir Bhutto et Nawaz Sharif alternent au pouvoir. Le Pakistan devient puissance nucléaire en 1998, puis le général Pervez Musharraf prend le pouvoir en 1999 et s'allie aux États-Unis après le 11 septembre 2001.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Pakistan",
      events: [
        {
          date: "2 décembre 1988",
          title: "Benazir Bhutto Première ministre",
          description: "Fille de Zulfikar Ali Bhutto, elle est la première femme à diriger le gouvernement d'un pays à majorité musulmane.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Benazir_Bhutto",
        },
        {
          date: "28 mai 1998",
          title: "Essais nucléaires",
          description: "En réponse aux essais indiens, le Pakistan fait exploser ses premières bombes dans les montagnes du Baloutchistan.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Chagai-I",
        },
        {
          date: "27 décembre 2007",
          title: "Assassinat de Benazir Bhutto",
          description: "Elle est tuée à Rawalpindi lors d'un meeting de campagne.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Benazir_Bhutto",
        },
      ],
    },
    {
      id: "democratie-sous-tutelle",
      title: "Une démocratie sous tutelle militaire",
      startYear: 2008,
      endYear: "present",
      summary:
        "Le retour des civils en 2008 s'accompagne d'une vague d'attentats des talibans pakistanais, combattus par l'armée dans les zones tribales, rattachées au Khyber Pakhtunkhwa en 2018. En 2013, un gouvernement élu passe pour la première fois le relais à un autre. L'ancien champion de cricket Imran Khan, Premier ministre en 2018, est renversé en 2022 puis emprisonné. En mai 2025, un attentat au Cachemire indien déclenche quatre jours d'affrontements avec l'Inde, les plus graves depuis des décennies.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Pakistan",
      events: [
        {
          date: "2 mai 2011",
          title: "Mort d'Oussama ben Laden",
          description: "Le chef d'Al-Qaïda est tué par un commando américain à Abbottabad, près d'une académie militaire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Killing_of_Osama_bin_Laden",
        },
        {
          date: "16 décembre 2014",
          title: "Attaque de l'école de Peshawar",
          description: "Les talibans pakistanais tuent près de 150 personnes, en majorité des enfants, dans une école de l'armée.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2014_Peshawar_school_massacre",
        },
        {
          date: "7-10 mai 2025",
          title: "Conflit avec l'Inde",
          description: "Frappes de missiles et de drones de part et d'autre, jusqu'à un cessez-le-feu le 10 mai.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2025_India%E2%80%93Pakistan_conflict",
        },
      ],
    },
  ],
};
