import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire tanzanienne.",
  periods: [
    {
      id: "cote-swahilie",
      title: "Les cités marchandes de la côte swahilie",
      startYear: 800,
      endYear: 1500,
      summary:
        "Sur la côte et les îles, des cités marchandes commercent avec l'Arabie, la Perse, l'Inde et la Chine à travers l'océan Indien, au rythme des moussons. De ces échanges naissent la culture et la langue swahilies, ainsi qu'un islam côtier. Kilwa domine au XIIIe et au XIVe siècle le commerce de l'or venu du Zimbabwe, tandis que l'intérieur du pays est peuplé d'agriculteurs et d'éleveurs bantous, nilotiques et couchitiques.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Swahili_coast",
      events: [
        {
          date: "1331",
          title: "Ibn Battûta à Kilwa",
          description: "Le voyageur marocain décrit Kilwa comme « l'une des villes les plus belles et les mieux construites ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Kilwa_Sultanate",
        },
      ],
    },
    {
      id: "portugais-omanais",
      title: "Portugais, Omanais et sultanat de Zanzibar",
      startYear: 1500,
      endYear: 1885,
      summary:
        "Les Portugais s'emparent de la côte au début du XVIe siècle, avant d'en être chassés par les Omanais à la fin du XVIIe. En 1840, le sultan d'Oman installe sa capitale à Zanzibar, qui devient le premier exportateur mondial de clous de girofle et le grand marché de la traite des esclaves en Afrique de l'Est. Les caravanes partent vers l'intérieur jusqu'au lac Tanganyika chercher ivoire et captifs.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Sultanate_of_Zanzibar",
      events: [
        {
          date: "1873",
          title: "Fermeture du marché aux esclaves de Zanzibar",
          description: "Sous la pression britannique, le sultan Barghash interdit la traite maritime ; une cathédrale anglicane est bâtie sur le site du marché.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Zanzibar_slave_trade",
        },
      ],
    },
    {
      id: "colonisation",
      title: "Afrique-Orientale allemande et Tanganyika britannique",
      startYear: 1885,
      endYear: 1961,
      summary:
        "L'Allemagne fait du continent une colonie, l'Afrique-Orientale allemande, tandis que Zanzibar devient un protectorat britannique en 1890. La révolte des Maji-Maji, de 1905 à 1907, est écrasée au prix de dizaines de milliers de morts, victimes surtout de la famine provoquée par la répression. Après la Première Guerre mondiale, le Tanganyika passe sous mandat britannique. Julius Nyerere fonde en 1954 la TANU, qui mène le pays à l'indépendance sans violence.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Tanganyika_Territory",
      events: [
        {
          date: "1905-1907",
          title: "Révolte des Maji-Maji",
          description: "Des peuples du Sud se soulèvent contre le travail forcé dans les plantations de coton, persuadés qu'une eau sacrée les protège des balles.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Maji_Maji_Rebellion",
        },
      ],
    },
    {
      id: "nyerere-ujamaa",
      title: "Nyerere, l'union et le socialisme ujamaa",
      startYear: 1961,
      endYear: 1985,
      summary:
        "Le Tanganyika devient indépendant le 9 décembre 1961. À Zanzibar, indépendant depuis un mois, une révolution renverse le sultan en janvier 1964 ; trois mois plus tard, les deux pays s'unissent. Nyerere, surnommé « Mwalimu » (le maître), lance en 1967 le socialisme africain « ujamaa » : nationalisations et regroupement forcé des paysans en villages collectifs. Le projet unifie la nation mais ruine l'économie. En 1979, l'armée tanzanienne renverse le dictateur ougandais Idi Amin.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Julius_Nyerere",
      events: [
        {
          date: "26 avril 1964",
          title: "Union du Tanganyika et de Zanzibar",
          description: "Nyerere et Abeid Karume signent l'acte d'union ; le pays prend le nom de Tanzanie en octobre.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Union_Day_(Tanzania)",
        },
        {
          date: "5 février 1967",
          title: "Déclaration d'Arusha",
          description: "Nyerere y définit le socialisme ujamaa et l'autosuffisance comme fondements de la nation.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Arusha_Declaration",
        },
      ],
    },
    {
      id: "liberalisation",
      title: "Libéralisation et multipartisme",
      startYear: 1985,
      endYear: "present",
      summary:
        "Nyerere quitte volontairement la présidence en 1985. Ses successeurs libéralisent l'économie et rétablissent le multipartisme en 1992, sans que le CCM perde jamais le pouvoir. John Magufuli, élu en 2015, lance de grands travaux mais restreint les libertés ; il meurt en 2021, en pleine pandémie de Covid-19, dont il niait la gravité. Sa vice-présidente, Samia Suluhu Hassan, devient la première femme à diriger le pays.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Tanzania",
      events: [
        {
          date: "19 mars 2021",
          title: "Samia Suluhu Hassan, première présidente",
          description: "Deux jours après la mort de John Magufuli, la vice-présidente, originaire de Zanzibar, prête serment.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Samia_Suluhu_Hassan",
        },
        {
          date: "29 octobre 2025",
          title: "Élections contestées",
          description: "Sans véritable opposition, la présidente est réélue ; les manifestations sont réprimées par les forces de l'ordre, sous coupure d'Internet, faisant de nombreux morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2025_Tanzanian_general_election",
        },
      ],
    },
  ],
};
