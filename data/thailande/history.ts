import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire thaïlandaise.",
  periods: [
    {
      id: "sukhothai-ayutthaya",
      title: "Les royaumes de Sukhothai et d'Ayutthaya",
      startYear: 1238,
      endYear: 1767,
      summary:
        "Venus du sud de la Chine, les peuples taï s'émancipent de la tutelle khmère au XIIIe siècle et fondent le royaume de Sukhothai, considéré comme le berceau de la nation. Ayutthaya lui succède et domine la région pendant quatre siècles, commerçant avec la Chine, le Japon et l'Europe, jusqu'à sa destruction par les Birmans.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Thailand",
      events: [
        {
          date: "vers 1238",
          title: "Fondation du royaume de Sukhothai",
          description: "Des chefs taï chassent la garnison khmère et fondent Sukhothai ; la tradition attribue au roi Ramkhamhaeng la création de l'écriture thaïe.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sukhothai_Kingdom",
        },
        {
          date: "1351",
          title: "Fondation d'Ayutthaya",
          description: "Le roi Ramathibodi Ier fonde Ayutthaya, qui absorbe Sukhothai et devient l'une des grandes cités marchandes d'Asie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ayutthaya_Kingdom",
        },
        {
          date: "7 avril 1767",
          title: "Chute d'Ayutthaya",
          description: "Les armées birmanes prennent et détruisent la capitale, mettant fin au royaume après plus de quatre siècles.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Fall_of_Ayutthaya",
        },
      ],
    },
    {
      id: "chakri",
      title: "La dynastie Chakri et un Siam jamais colonisé",
      startYear: 1767,
      endYear: 1932,
      summary:
        "Après la reconquête de Taksin, Rama Ier fonde en 1782 la dynastie Chakri, toujours régnante, et la capitale de Bangkok. Au XIXe siècle, les rois Mongkut (Rama IV) et Chulalongkorn (Rama V) modernisent l'État et jouent la Grande-Bretagne contre la France : le Siam reste le seul pays d'Asie du Sud-Est jamais colonisé, au prix de cessions territoriales au Laos, au Cambodge et en Malaisie actuels.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Rattanakosin_Kingdom_(1782%E2%80%931932)",
      events: [
        {
          date: "1782",
          title: "Fondation de Bangkok et de la dynastie Chakri",
          description: "Rama Ier installe la capitale sur la rive est du Chao Phraya, autour du Grand Palais.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Phutthayotfa_Chulalok",
        },
        {
          date: "1893",
          title: "Crise franco-siamoise",
          description: "Après un blocus naval de Bangkok, le Siam cède à la France la rive gauche du Mékong (l'actuel Laos) ; d'autres cessions suivront en 1904-1907 (Cambodge) et 1909 (États malais au Royaume-Uni).",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Franco-Siamese_crisis",
        },
      ],
    },
    {
      id: "coups-monarchie",
      title: "Fin de la monarchie absolue et cycle des coups d'État",
      startYear: 1932,
      endYear: 2001,
      summary:
        "La révolution de 1932 instaure une monarchie constitutionnelle, mais l'armée domine la vie politique. Le pays prend le nom de Thaïlande en 1939, s'allie au Japon pendant la guerre, puis devient un allié des États-Unis durant la guerre du Viêt Nam. Sous le long règne de Bhumibol Adulyadej (1946-2016), soulèvements étudiants, massacres et coups d'État alternent, tandis que le pays s'industrialise rapidement jusqu'à la crise de 1997.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Thailand_(1932%E2%80%931973)",
      events: [
        {
          date: "24 juin 1932",
          title: "Révolution siamoise",
          description: "Un groupe d'officiers et de fonctionnaires, le Khana Ratsadon, renverse la monarchie absolue sans effusion de sang.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Siamese_revolution_of_1932",
        },
        {
          date: "14 octobre 1973 et 6 octobre 1976",
          title: "Soulèvement étudiant puis massacre de Thammasat",
          description: "Une révolte étudiante chasse la dictature militaire en 1973 ; trois ans plus tard, la répression sanglante de l'université Thammasat ramène l'armée au pouvoir.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/6_October_1976_massacre",
        },
        {
          date: "2 juillet 1997",
          title: "Flottement du baht et crise financière asiatique",
          description: "L'effondrement du baht déclenche une crise qui gagne toute l'Asie et met fin à une décennie de croissance à deux chiffres.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1997_Asian_financial_crisis",
        },
      ],
    },
    {
      id: "thaksin-crise",
      title: "L'ère Thaksin et la crise politique contemporaine",
      startYear: 2001,
      endYear: "present",
      summary:
        "L'élection du milliardaire Thaksin Shinawatra en 2001 ouvre un affrontement durable entre ses partisans, surtout ruraux du Nord et de l'Isan (« chemises rouges »), et l'establishment royaliste et militaire (« chemises jaunes »). Deux coups d'État (2006, 2014) et plusieurs décisions de justice écartent les gouvernements pro-Thaksin. Depuis 2020, une jeunesse contestataire réclame la réforme de la monarchie, tandis que les gouvernements se succèdent au gré des décisions de la Cour constitutionnelle.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Thai_political_crisis_(2005%E2%80%932014)",
      events: [
        {
          date: "19 septembre 2006",
          title: "Coup d'État contre Thaksin",
          description: "L'armée renverse Thaksin Shinawatra, qui s'exile ; ses partis successifs continueront pourtant de gagner les élections.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2006_Thai_coup_d%27%C3%A9tat",
        },
        {
          date: "22 mai 2014",
          title: "Coup d'État du général Prayut Chan-o-cha",
          description: "L'armée renverse le gouvernement de Yingluck Shinawatra ; la junte fait adopter la constitution de 2017 et Prayut reste Premier ministre jusqu'en 2023.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2014_Thai_coup_d%27%C3%A9tat",
        },
        {
          date: "13 octobre 2016",
          title: "Mort du roi Bhumibol Adulyadej",
          description: "Après 70 ans de règne, le plus long de l'histoire thaïlandaise, Bhumibol meurt ; son fils Vajiralongkorn lui succède.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bhumibol_Adulyadej",
        },
        {
          date: "29 août 2025",
          title: "Destitution de Paetongtarn Shinawatra",
          description: "La Cour constitutionnelle destitue la Première ministre, fille de Thaksin, pour un appel téléphonique avec l'ancien dirigeant cambodgien Hun Sen divulgué en pleine crise frontalière.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Paetongtarn_Shinawatra",
        },
        {
          date: "8 février 2026",
          title: "Victoire de Bhumjaithai aux législatives",
          description: "Le parti du Premier ministre Anutin Charnvirakul arrive largement en tête, devant le Parti du peuple ; le même jour, un référendum approuve la rédaction d'une nouvelle constitution.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Thai_general_election",
        },
      ],
    },
  ],
};
