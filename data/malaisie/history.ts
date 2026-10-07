import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire malaisienne.",
  periods: [
    {
      id: "royaumes-malacca",
      title: "Des royaumes hindo-bouddhistes au sultanat de Malacca",
      startYear: 100,
      endYear: 1511,
      summary:
        "Situés sur la route maritime entre l'Inde et la Chine, les ports de la péninsule malaise commercent très tôt avec les deux mondes ; au premier millénaire, des royaumes hindo-bouddhistes s'y développent, comme dans la vallée de Bujang, au Kedah. Vers 1400, un prince venu de Sumatra fonde Malacca, qui se convertit à l'islam et devient le premier port de l'Asie du Sud-Est, où se croisent marchands arabes, indiens, chinois et javanais.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Malaysia",
      events: [
        {
          date: "vers 1400",
          title: "Fondation de Malacca",
          description: "Le prince Parameswara fonde la cité, qui contrôle bientôt le détroit auquel elle donne son nom.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Malacca_Sultanate",
        },
        {
          date: "1405-1433",
          title: "Visites de l'amiral Zheng He",
          description: "Les flottes chinoises font escale à Malacca, placée sous la protection des empereurs Ming.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Zheng_He",
        },
      ],
    },
    {
      id: "comptoirs-europeens",
      title: "Portugais, Hollandais et Britanniques",
      startYear: 1511,
      endYear: 1874,
      summary:
        "Les Portugais s'emparent de Malacca en 1511, puis les Hollandais en 1641. Les Britanniques s'installent à Penang en 1786 et à Singapour en 1819 ; le traité anglo-néerlandais de 1824 partage la région, laissant la péninsule aux Britanniques et Sumatra aux Néerlandais, une frontière qui préfigure celle de la Malaisie et de l'Indonésie. À Bornéo, l'aventurier britannique James Brooke devient en 1841 le premier « rajah blanc » du Sarawak.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Malaysia",
      events: [
        {
          date: "1511",
          title: "Prise de Malacca par les Portugais",
          description: "Afonso de Albuquerque conquiert la cité, dont le dernier sultan se réfugie au Johor.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Capture_of_Malacca_(1511)",
        },
        {
          date: "17 mars 1824",
          title: "Traité anglo-néerlandais",
          description: "Il fixe les zones d'influence britannique et néerlandaise de part et d'autre du détroit de Malacca.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Anglo-Dutch_Treaty_of_1824",
        },
      ],
    },
    {
      id: "malaisie-britannique",
      title: "Malaisie britannique, étain et caoutchouc",
      startYear: 1874,
      endYear: 1957,
      summary:
        "À partir de 1874, les Britanniques imposent des « résidents » auprès des sultans malais. L'exploitation de l'étain, puis des plantations d'hévéas, attire des centaines de milliers de travailleurs chinois et indiens, à l'origine de la société multiethnique actuelle. Le Japon occupe le pays de 1941 à 1945. Après la guerre, une insurrection communiste, surtout soutenue par des Chinois, est combattue par les Britanniques pendant l'« état d'urgence » (1948-1960).",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/British_Malaya",
      events: [
        {
          date: "1874",
          title: "Traité de Pangkor",
          description: "Le sultan de Perak accepte un résident britannique, premier pas vers le protectorat sur les États malais.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Pangkor_Treaty_of_1874",
        },
        {
          date: "8 décembre 1941",
          title: "Débarquement japonais à Kota Bharu",
          description: "Les troupes japonaises envahissent la péninsule, quelques heures avant l'attaque de Pearl Harbor.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Japanese_occupation_of_Malaya",
        },
      ],
    },
    {
      id: "independance-federation",
      title: "Indépendance et naissance de la Malaisie",
      startYear: 1957,
      endYear: 1971,
      summary:
        "La Fédération de Malaisie devient indépendante le 31 août 1957 sous la conduite de Tunku Abdul Rahman. Le 16 septembre 1963, elle s'unit à Singapour, au Sabah et au Sarawak pour former la Malaisie, malgré l'hostilité armée de l'Indonésie. Singapour, à majorité chinoise, en est exclue dès 1965. Les émeutes raciales du 13 mai 1969 à Kuala Lumpur conduisent le pouvoir à adopter une politique de rattrapage économique en faveur des Malais.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Malaysia",
      events: [
        {
          date: "31 août 1957",
          title: "Indépendance (Merdeka)",
          description: "Tunku Abdul Rahman proclame l'indépendance au stade Merdeka de Kuala Lumpur ; c'est la fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Malayan_Declaration_of_Independence",
        },
        {
          date: "9 août 1965",
          title: "Séparation de Singapour",
          description: "Après deux ans de tensions politiques et raciales, Singapour quitte la fédération et devient indépendante.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Singapore_in_Malaysia",
        },
      ],
    },
    {
      id: "decollage-mahathir",
      title: "Décollage économique et ère Mahathir",
      startYear: 1971,
      endYear: 2003,
      summary:
        "La Nouvelle Politique économique, lancée en 1971, réserve aux Bumiputera des quotas dans l'emploi public, l'université et le capital des entreprises. Premier ministre de 1981 à 2003, Mahathir Mohamad industrialise le pays, crée la voiture nationale Proton et fait bâtir les tours Petronas et la ville administrative de Putrajaya. Lors de la crise asiatique de 1997, il refuse l'aide du FMI ; son limogeage de son dauphin Anwar Ibrahim, ensuite emprisonné, déclenche le mouvement d'opposition « Reformasi ».",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mahathir_Mohamad",
      events: [
        {
          date: "1971",
          title: "Nouvelle Politique économique",
          description: "Elle vise à réduire la pauvreté et à faire passer à 30 % la part des Bumiputera dans le capital des entreprises.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Malaysian_New_Economic_Policy",
        },
        {
          date: "2 septembre 1998",
          title: "Limogeage d'Anwar Ibrahim",
          description: "Le vice-Premier ministre est démis puis condamné, déclenchant de grandes manifestations.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Reformasi_(Malaysia)",
        },
      ],
    },
    {
      id: "alternances",
      title: "Scandales et premières alternances",
      startYear: 2003,
      endYear: "present",
      summary:
        "Le détournement de plusieurs milliards de dollars du fonds souverain 1MDB, révélé en 2015, entraîne la première défaite du Barisan Nasional en 2018 ; Mahathir, revenu à 92 ans à la tête de l'opposition, redevient Premier ministre. La coalition éclate en 2020, et le pays connaît trois Premiers ministres en quatre ans. En 2022, Anwar Ibrahim accède enfin au pouvoir à la tête d'un gouvernement d'union.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Malaysia",
      events: [
        {
          date: "8 mars 2014",
          title: "Disparition du vol MH370",
          description: "Le Boeing de Malaysia Airlines, avec 239 personnes à bord, disparaît entre Kuala Lumpur et Pékin ; l'épave n'a jamais été retrouvée.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370",
        },
        {
          date: "9 mai 2018",
          title: "Première alternance",
          description: "L'alliance Pakatan Harapan l'emporte, mettant fin à 61 ans de pouvoir du Barisan Nasional.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2018_Malaysian_general_election",
        },
        {
          date: "24 novembre 2022",
          title: "Anwar Ibrahim Premier ministre",
          description: "Après un scrutin sans majorité, le roi le nomme à la tête d'un gouvernement d'union.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2022_Malaysian_general_election",
        },
      ],
    },
  ],
};
