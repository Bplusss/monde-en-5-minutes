import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Japan";
const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du Japon moderne — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "japon-ancien-feodal",
      title: "Japon ancien, cour impériale et shogunats féodaux",
      startYear: -14000,
      endYear: 1868,
      summary:
        "Après les cultures Jōmon puis Yayoi, un État unifié émerge sous le clan Yamato ; la cour de Nara puis de Heian (VIIIᵉ-XIIᵉ siècle), très influencée par la Chine, cède ensuite le pouvoir réel à des shoguns militaires. Trois shogunats se succèdent : Kamakura (1185-1333), Muromachi (1338-1573), marqué par les guerres civiles (Sengoku), puis Tokugawa (1603-1868), qui impose deux siècles et demi de paix sous un régime d'isolement quasi total (sakoku). L'empereur, retiré à Kyoto, ne garde qu'une autorité symbolique.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "ere-meiji",
      title: "L'ère Meiji : restauration impériale et modernisation accélérée",
      startYear: 1868,
      endYear: 1912,
      summary:
        "L'escadre du commodore américain Matthew Perry force en 1853 l'ouverture du Japon et précipite la chute du shogunat. La restauration Meiji de 1868 lance une modernisation tous azimuts — industrie, armée, école, Constitution en 1889 — qui fait du Japon la première puissance industrielle non occidentale, bientôt engagée dans l'expansion coloniale.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "3 janvier 1868",
          title: "Restauration Meiji",
          description: "De jeunes samouraïs réformateurs renversent le shogunat Tokugawa et restaurent formellement le pouvoir de l'empereur.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Meiji_Restoration",
        },
        {
          date: "1904-1905",
          title: "Guerre russo-japonaise",
          description: "Après une première victoire sur la Chine (1894-1895), le Japon bat l'Empire russe : première défaite d'une grande puissance européenne face à un État asiatique à l'ère moderne.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Russo-Japanese_War",
        },
        {
          date: "22 août 1910",
          title: "Annexion de la Corée",
          description: "Le Japon annexe formellement la Corée, qui reste une colonie japonaise jusqu'en 1945.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Korea_under_Japanese_rule",
        },
      ],
    },
    {
      id: "expansion-imperiale-guerre",
      title: "Militarisme, expansion impériale et Seconde Guerre mondiale",
      startYear: 1912,
      endYear: 1945,
      summary:
        "Après une brève ouverture démocratique sous l'ère Taishō (1912-1926), l'armée prend une place croissante dans la vie politique à partir des années 1930. L'expansion en Chine puis la guerre du Pacifique s'achèvent en 1945 par les bombardements atomiques et la capitulation.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "18 septembre 1931",
          title: "Incident de Moukden et invasion de la Mandchourie",
          description: "Un attentat organisé par l'armée japonaise sert de prétexte à l'invasion de la Mandchourie, où est installé l'État fantoche du Mandchoukouo.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mukden_incident",
        },
        {
          date: "7 juillet 1937",
          title: "Début de la seconde guerre sino-japonaise",
          description: "L'incident du pont Marco Polo, près de Pékin, déclenche une guerre totale contre la Chine, marquée par des exactions massives contre les civils, dont le massacre de Nankin (décembre 1937-mars 1938) : la plupart des historiens retiennent 100 000 à 200 000 victimes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nanjing_Massacre",
        },
        {
          date: "7-8 décembre 1941",
          title: "Attaque de Pearl Harbor",
          description: "L'aviation japonaise frappe par surprise la flotte américaine du Pacifique, provoquant l'entrée en guerre des États-Unis.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor",
        },
        {
          date: "6 et 9 août 1945",
          title: "Bombardements atomiques d'Hiroshima et de Nagasaki",
          description:
            "Les deux seuls emplois d'armes nucléaires dans un conflit armé à ce jour. Selon les estimations, 90 000 à 166 000 morts à Hiroshima et 60 000 à 80 000 à Nagasaki d'ici fin 1945, décès dus aux radiations compris.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
        },
        {
          date: "15 août et 2 septembre 1945",
          title: "Reddition du Japon",
          description: "L'empereur Hirohito annonce par radio la reddition le 15 août ; l'acte de capitulation est signé à bord de l'USS Missouri le 2 septembre 1945.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Surrender_of_Japan",
        },
      ],
    },
    {
      id: "occupation-miracle-economique",
      title: "Occupation alliée, nouvelle Constitution et miracle économique",
      startYear: 1945,
      endYear: 1989,
      summary:
        "De 1945 à 1952, le Japon est occupé par les Alliés sous l'autorité du général Douglas MacArthur : démilitarisation, réforme agraire et nouvelle Constitution pacifiste. Le traité de San Francisco (1951) rétablit la souveraineté en 1952. Le « miracle économique », porté par l'industrie lourde puis l'électronique et l'automobile, fait du Japon la deuxième économie mondiale dès les années 1960-1970, jusqu'à la bulle spéculative de la fin des années 1980.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "3 mai 1947",
          title: "Entrée en vigueur de la Constitution pacifiste",
          description: "Rédigée sous supervision américaine, elle fait de l'empereur un symbole sans pouvoir politique et inscrit à l'article 9 le renoncement à la guerre.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Japan",
        },
        {
          date: "1964",
          title: "Jeux olympiques de Tokyo et premier Shinkansen",
          description: "Les premiers Jeux olympiques organisés en Asie coïncident avec l'inauguration du Tōkaidō Shinkansen, symboles de la reconstruction.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Shinkansen",
        },
      ],
    },
    {
      id: "japon-contemporain",
      title: "Le Japon contemporain : décennies perdues, catastrophes et vieillissement",
      startYear: 1989,
      endYear: "present",
      summary:
        "L'éclatement de la bulle en 1991 ouvre une longue période de croissance atone et de déflation, les « décennies perdues ». Le pays subit des catastrophes majeures, dont l'accident de Fukushima Daiichi en 2011 — le plus grave depuis Tchernobyl —, qui entraîne l'arrêt temporaire de la quasi-totalité du parc nucléaire.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "17 janvier 1995",
          title: "Séisme de Kobe",
          description: "Le grand séisme de Hanshin-Awaji fait plus de 6 000 morts et révèle les failles des normes parasismiques.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Great_Hanshin_earthquake",
        },
        {
          date: "11 mars 2011",
          title: "Séisme, tsunami de Tōhoku et accident nucléaire de Fukushima",
          description:
            "Un séisme de magnitude 9,0-9,1 déclenche un tsunami sur la côte nord-est : environ 19 750 morts et plus de 2 500 disparus. L'accident de Fukushima Daiichi a son bilan propre : 2 313 décès liés à l'évacuation selon l'agence japonaise de la reconstruction, tandis que l'UNSCEAR n'a identifié aucun effet sanitaire attribuable aux radiations dans la population, hormis un décès de travailleur reconnu en 2018.",
          source: "UNSCEAR / World Nuclear Association",
          sourceUrl: "https://world-nuclear.org/information-library/safety-and-security/safety-of-plants/fukushima-daiichi-accident",
        },
        {
          date: "1 mai 2019",
          title: "Abdication d'Akihito et intronisation de Naruhito",
          description: "Akihito, premier empereur à abdiquer depuis plus de deux siècles, cède le trône à son fils Naruhito, qui ouvre l'ère Reiwa.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Naruhito",
        },
        {
          date: "21 octobre 2025",
          title: "Sanae Takaichi, première femme Première ministre",
          description: "Élue à la tête du Parti libéral-démocrate, Sanae Takaichi devient la première femme à diriger le gouvernement japonais.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sanae_Takaichi",
        },
      ],
    },
  ],
};
