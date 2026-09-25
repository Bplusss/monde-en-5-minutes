import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de plus de deux mille ans d'histoire chinoise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "empire-dynastique",
      title: "L'empire dynastique, de l'unification à la chute des Qing",
      startYear: -221,
      endYear: 1912,
      summary:
        "En 221 av. J.-C., Qin Shi Huang unifie les royaumes rivaux et fonde le premier empire chinois. Se succèdent ensuite plus de deux millénaires de dynasties (Han, Tang, Song, Yuan, Ming, Qing), marqués par l'essor du confucianisme et des innovations majeures (papier, imprimerie, boussole, poudre à canon). Affaiblie au XIXe siècle par les guerres de l'Opium et la révolte des Taiping, la dynastie Qing s'effondre en 1911, mettant fin au régime impérial.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_China",
      events: [
        {
          date: "221 av. J.-C.",
          title: "Unification de la Chine par Qin Shi Huang",
          description: "Le roi de Qin unifie les royaumes rivaux et fonde le premier empire chinois, donnant son nom (« Qin ») au pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Qin_Shi_Huang",
        },
        {
          date: "1839-1860",
          title: "Guerres de l'Opium",
          description: "Deux conflits contre le Royaume-Uni imposent des traités inégaux, l'ouverture forcée de ports au commerce et la cession de Hong Kong.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Opium_Wars",
        },
        {
          date: "10 octobre 1911",
          title: "Révolution de Xinhai",
          description: "Un soulèvement militaire déclenche la chute de la dynastie Qing, mettant fin à plus de deux mille ans d'empire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Xinhai_Revolution",
        },
      ],
    },
    {
      id: "republique-guerre-civile",
      title: "République, seigneurs de la guerre et invasion japonaise",
      startYear: 1912,
      endYear: 1949,
      summary:
        "La République de Chine, proclamée en 1912, se fragmente entre seigneurs de la guerre puis se réunifie partiellement sous le Guomindang de Chiang Kai-shek. Le Parti communiste, fondé en 1921, survit à la répression nationaliste et à la Longue Marche avant que les deux camps forment un front commun face à l'invasion japonaise (1937-1945). La guerre civile reprend ensuite jusqu'à la victoire communiste de 1949.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Republic_of_China",
      events: [
        {
          date: "1934-1935",
          title: "La Longue Marche",
          description: "L'Armée rouge communiste, encerclée, se retire sur environ 9 000 km ; Mao y consolide son autorité sur le Parti.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Long_March",
        },
        {
          date: "1937-1945",
          title: "Guerre sino-japonaise",
          description: "L'invasion japonaise, marquée par le massacre de Nankin, fait plusieurs millions de morts avant la capitulation du Japon en 1945.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Second_Sino-Japanese_War",
        },
        {
          date: "1945-1949",
          title: "Reprise et issue de la guerre civile",
          description: "Le Parti communiste l'emporte ; le Guomindang se replie avec son gouvernement sur l'île de Taïwan.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Chinese_Civil_War",
        },
      ],
    },
    {
      id: "ere-maoiste",
      title: "La fondation de la République populaire et l'ère maoïste",
      startYear: 1949,
      endYear: 1976,
      summary:
        "Mao Zedong proclame la République populaire de Chine le 1er octobre 1949. Le Grand Bond en avant (1958-1962), tentative de collectivisation accélérée, provoque la plus grande famine de l'histoire moderne (15 à 55 millions de morts selon les sources). La Révolution culturelle (1966-1976), lancée par Mao pour éliminer ses rivaux, plonge le pays dans un chaos politique et social prolongé jusqu'à la mort de Mao en 1976.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_People%27s_Republic_of_China_(1949%E2%80%931976)",
      events: [
        {
          date: "1er octobre 1949",
          title: "Proclamation de la République populaire de Chine",
          description: "Mao Zedong proclame la fondation du nouveau régime depuis la place Tian'anmen, à Pékin.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Proclamation_of_the_People%27s_Republic_of_China",
        },
        {
          date: "1958-1962",
          title: "Grand Bond en avant et grande famine",
          description: "La collectivisation forcée et la priorité donnée à la sidérurgie provoquent une famine massive, estimée à plusieurs dizaines de millions de morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Great_Chinese_Famine",
        },
        {
          date: "1966-1976",
          title: "Révolution culturelle",
          description: "Mao mobilise la jeunesse (Gardes rouges) contre ses rivaux, provoquant une décennie de purges et de chaos social.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Cultural_Revolution",
        },
      ],
    },
    {
      id: "reforme-ouverture",
      title: "Réforme et ouverture : de Deng Xiaoping à l'entrée à l'OMC",
      startYear: 1978,
      endYear: 2001,
      summary:
        "Après la mort de Mao, Deng Xiaoping lance à partir de 1978 la politique de « réforme et ouverture » : décollectivisation, zones économiques spéciales et libéralisation graduelle sous contrôle politique inchangé du Parti communiste. Le mouvement étudiant de la place Tian'anmen est réprimé en juin 1989. La croissance s'accélère ensuite, marquée par le retour de Hong Kong en 1997 et l'entrée à l'OMC en 2001.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Reform_and_opening_up",
      events: [
        {
          date: "1978",
          title: "Lancement de la réforme et de l'ouverture",
          description: "Deng Xiaoping engage la libéralisation économique progressive, préservant le monopole politique du Parti.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Deng_Xiaoping",
        },
        {
          date: "3-4 juin 1989",
          title: "Répression de la place Tian'anmen",
          description: "L'armée met fin par la force à des semaines de manifestations étudiantes à Pékin ; le bilan humain reste disputé.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1989_Tiananmen_Square_protests_and_massacre",
        },
        {
          date: "1er juillet 1997",
          title: "Rétrocession de Hong Kong",
          description: "Le Royaume-Uni rétrocède Hong Kong, qui devient région administrative spéciale sous « un pays, deux systèmes ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Handover_of_Hong_Kong",
        },
        {
          date: "11 décembre 2001",
          title: "Entrée à l'Organisation mondiale du commerce",
          description: "L'adhésion à l'OMC accélère l'intégration de la Chine au commerce international.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Accession_of_China_to_the_World_Trade_Organization",
        },
      ],
    },
    {
      id: "chine-puissance-mondiale",
      title: "La Chine puissance mondiale, de Hu Jintao à Xi Jinping",
      startYear: 2002,
      endYear: "present",
      summary:
        "Sous Hu Jintao (2003-2013), la Chine devient en 2010 la deuxième économie mondiale. Xi Jinping accède au pouvoir en 2012-2013 et concentre une autorité inédite depuis Mao, supprimant en 2018 la limite des mandats présidentiels. Sa présidence est marquée par les « Nouvelles routes de la soie » (2013), l'internement massif de Ouïghours au Xinjiang, la loi de sécurité nationale imposée à Hong Kong (2020) et la politique de « zéro-Covid », abandonnée fin 2022.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_People%27s_Republic_of_China_(2012%E2%80%93present)",
      events: [
        {
          date: "2008",
          title: "Jeux olympiques de Pékin",
          description: "La Chine organise les Jeux d'été, présentés comme la consécration de son ascension économique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2008_Summer_Olympics",
        },
        {
          date: "2013",
          title: "Xi Jinping devient président et lance les Nouvelles routes de la soie",
          description: "Xi Jinping prend la présidence et engage la Belt and Road Initiative, programme mondial d'investissements en infrastructures.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Belt_and_Road_Initiative",
        },
        {
          date: "2020",
          title: "Loi sur la sécurité nationale à Hong Kong",
          description: "Pékin impose une loi réprimant la dissidence à Hong Kong, après les manifestations massives de 2019.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Hong_Kong_national_security_law",
        },
        {
          date: "Décembre 2022",
          title: "Fin de la politique « zéro-Covid »",
          description: "Après un mouvement de protestation inédit (« manifestations du papier blanc »), le gouvernement met fin à trois ans de restrictions sanitaires.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/COVID-19_pandemic_in_China",
        },
      ],
    },
  ],
};
