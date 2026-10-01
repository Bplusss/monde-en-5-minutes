import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire congolaise, des royaumes précoloniaux au conflit actuel dans l'est — pas un résumé exhaustif.",
  periods: [
    {
      id: "royaumes-precoloniaux",
      title: "Royaumes précoloniaux et traite atlantique",
      startYear: 1390,
      endYear: 1884,
      summary:
        "Le bassin du Congo, peuplé de longue date par des sociétés bantoues, voit naître plusieurs États structurés : le royaume Kongo à l'embouchure du fleuve, puis les royaumes Luba et Lunda au Katanga et le royaume Kuba au Kasaï. Le Kongo entre en contact avec les Portugais à la fin du XVe siècle et se christianise, mais la traite atlantique des esclaves, puis la traite arabo-swahilie dans l'est au XIXe siècle, ravagent la région.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Kingdom_of_Kongo",
      events: [
        {
          date: "1482",
          title: "Arrivée des Portugais à l'embouchure du Congo",
          description: "Le navigateur Diogo Cão atteint l'estuaire du fleuve et entre en contact avec le royaume Kongo.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Diogo_C%C3%A3o",
        },
      ],
    },
    {
      id: "etat-independant-congo",
      title: "L'État indépendant du Congo de Léopold II, puis le Congo belge",
      startYear: 1885,
      endYear: 1960,
      summary:
        "En 1885, la conférence de Berlin reconnaît l'État indépendant du Congo, propriété personnelle du roi des Belges Léopold II. Le travail forcé imposé pour la récolte du caoutchouc s'accompagne d'exactions massives (otages, mutilations) et d'une chute démographique que les historiens chiffrent en millions de morts. Le scandale international contraint Léopold II à céder le territoire à la Belgique en 1908. Le Congo belge repose ensuite sur l'administration, les compagnies minières du Katanga et les missions catholiques ; les Congolais restent exclus de la vie politique jusqu'aux années 1950.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Congo_Free_State",
      events: [
        {
          date: "1884-1885",
          title: "Conférence de Berlin",
          description: "Les puissances européennes reconnaissent l'État indépendant du Congo, placé sous la souveraineté personnelle de Léopold II.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Berlin_Conference",
        },
        {
          date: "15 novembre 1908",
          title: "Annexion par la Belgique",
          description: "Le Congo devient une colonie de l'État belge, le Congo belge.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Belgian_Congo",
        },
        {
          date: "4 janvier 1959",
          title: "Émeutes de Léopoldville",
          description: "La répression d'un rassemblement de l'Abako déclenche des émeutes qui poussent Bruxelles à accepter l'indépendance.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Leopoldville_riots",
        },
      ],
    },
    {
      id: "independance-crise-congolaise",
      title: "Indépendance et crise congolaise",
      startYear: 1960,
      endYear: 1965,
      summary:
        "Le pays devient indépendant le 30 juin 1960, avec Joseph Kasa-Vubu comme président et Patrice Lumumba comme Premier ministre. Il bascule aussitôt dans le chaos : mutinerie de l'armée, intervention belge, sécession du Katanga soutenue par des intérêts miniers belges, déploiement d'une force de l'ONU. Destitué, Lumumba est livré aux sécessionnistes katangais et assassiné en janvier 1961.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Congo_Crisis",
      events: [
        {
          date: "30 juin 1960",
          title: "Indépendance",
          description: "Le discours de Lumumba dénonçant la colonisation marque la cérémonie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Patrice_Lumumba",
        },
        {
          date: "17 janvier 1961",
          title: "Assassinat de Patrice Lumumba",
          description: "Le Premier ministre destitué est exécuté au Katanga, en présence d'officiers belges.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Patrice_Lumumba",
        },
      ],
    },
    {
      id: "mobutu-zaire",
      title: "Mobutu et le Zaïre",
      startYear: 1965,
      endYear: 1997,
      summary:
        "Le général Mobutu prend le pouvoir en 1965 et instaure un régime de parti unique soutenu par les Occidentaux pendant la guerre froide. Sa politique d'« authenticité » rebaptise le pays Zaïre en 1971. Corruption systémique et effondrement des cours du cuivre ruinent l'État dans les années 1980.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mobutu_Sese_Seko",
      events: [
        {
          date: "24 novembre 1965",
          title: "Coup d'État de Mobutu",
          description: "Le chef de l'armée renverse le président Kasa-Vubu et s'installe au pouvoir pour 32 ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mobutu_Sese_Seko",
        },
      ],
    },
    {
      id: "guerres-du-congo",
      title: "Les guerres du Congo",
      startYear: 1996,
      endYear: 2003,
      summary:
        "Après le génocide des Tutsi au Rwanda (1994), l'afflux de réfugiés et de miliciens hutu déstabilise l'est. Une rébellion menée par Laurent-Désiré Kabila et appuyée par le Rwanda et l'Ouganda renverse Mobutu en 1997. Dès 1998, une deuxième guerre implique neuf pays africains ; violences, famines et épidémies font plusieurs millions de morts. Kabila est assassiné en 2001 ; son fils Joseph lui succède, et les accords de 2002 ouvrent une transition en 2003.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Second_Congo_War",
      events: [
        {
          date: "17 mai 1997",
          title: "Chute de Mobutu",
          description: "Les troupes de l'AFDL entrent à Kinshasa ; Laurent-Désiré Kabila se proclame président et rebaptise le pays République démocratique du Congo.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/First_Congo_War",
        },
      ],
    },
    {
      id: "transition-conflit-est",
      title: "Transition démocratique et conflits dans l'est",
      startYear: 2003,
      endYear: "present",
      summary:
        "Les élections de 2006, premières élections pluralistes depuis 1960, confirment Joseph Kabila, mais des dizaines de groupes armés restent actifs dans l'est. La présidentielle de 2018 porte Félix Tshisekedi au pouvoir, réélu en 2023. Résurgente depuis 2021, la rébellion du M23, alliée à l'Alliance Fleuve Congo (AFC) et soutenue par le Rwanda selon les experts de l'ONU, prend Goma et Bukavu début 2025. L'accord de Washington avec le Rwanda (juin 2025) et l'accord-cadre de Doha avec l'AFC/M23 (novembre 2025) n'ont pas mis fin aux combats en 2026.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/2025_DRC%E2%80%93Rwanda_peace_agreement",
      events: [
        {
          date: "24 janvier 2019",
          title: "Première alternance pacifique",
          description: "Félix Tshisekedi succède à Joseph Kabila, au terme d'une élection aux résultats contestés.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/F%C3%A9lix_Tshisekedi",
        },
        {
          date: "janvier-février 2025",
          title: "Prise de Goma et de Bukavu par l'AFC/M23",
          description: "Les capitales du Nord-Kivu et du Sud-Kivu tombent aux mains de la rébellion, provoquant des milliers de morts et des déplacements massifs.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2025_Goma_offensive",
        },
        {
          date: "27 juin 2025",
          title: "Accord de paix de Washington",
          description: "La RDC et le Rwanda signent un accord sous médiation américaine, entériné par les deux présidents le 4 décembre 2025 ; sa mise en œuvre reste partielle.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2025_DRC%E2%80%93Rwanda_peace_agreement",
        },
      ],
    },
  ],
};
