import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de plus de 2 500 ans d'histoire iranienne — pas un résumé exhaustif d'une civilisation déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "empires-perses-antiques",
      title: "Les empires perses antiques, de Cyrus aux Sassanides",
      startYear: -550,
      endYear: 651,
      summary:
        "Cyrus le Grand fonde vers 550 av. J.-C. l'Empire achéménide, premier grand empire perse, qui s'étend à son apogée de l'Égypte à l'Indus et invente une administration impériale multiethnique tolérante — le Cylindre de Cyrus, découvert à Babylone, est parfois présenté comme l'une des premières déclarations connues de droits humains, une lecture contestée par certains historiens mais largement diffusée en Iran comme symbole national. Après la conquête d'Alexandre le Grand (334-330 av. J.-C.) et une période de domination hellénistique puis parthe, l'Empire sassanide (224-651) restaure la puissance perse et fait du zoroastrisme la religion d'État, avant de s'effondrer face à la conquête arabo-musulmane au VIIe siècle, qui met fin à plus d'un millénaire d'empires perses préislamiques.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Iran",
      events: [
        {
          date: "vers 550 av. J.-C.",
          title: "Fondation de l'Empire achéménide",
          description: "Cyrus le Grand unifie les Perses et les Mèdes et fonde le premier grand empire perse, qui s'étendra de la vallée de l'Indus à la Méditerranée.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Achaemenid_Empire",
        },
        {
          date: "331 av. J.-C.",
          title: "Conquête par Alexandre le Grand",
          description: "La victoire d'Alexandre à Gaugamèles met fin à l'Empire achéménide et ouvre une période de domination hellénistique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Alexander_the_Great",
        },
        {
          date: "224-651",
          title: "Empire sassanide",
          description: "Dernier grand empire perse préislamique, rival de Rome puis de Byzance, qui érige le zoroastrisme en religion d'État avant de s'effondrer face aux armées arabo-musulmanes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sasanian_Empire",
        },
      ],
    },
    {
      id: "conquete-islamique-dynasties",
      title: "Conquête islamique et grandes dynasties médiévales",
      startYear: 651,
      endYear: 1501,
      summary:
        "La conquête arabo-musulmane, achevée en 651, islamise progressivement la Perse tout en lui laissant conserver sa langue et une bonne part de son identité culturelle propre — une singularité au sein du monde musulman qui distingue durablement l'Iran de ses voisins arabes. Le pays passe ensuite sous la coupe de dynasties successives, souvent d'origine turque ou mongole mais culturellement persanisées : les Samanides et Bouyides (Xe siècle), qui président à une renaissance de la langue et de la littérature persanes (le poète épique Ferdowsi y compose son Shahnameh) ; les Seldjoukides turcs (XIe-XIIe siècles) ; puis l'invasion dévastatrice des Mongols de Gengis Khan puis de Tamerlan (XIIIe-XIVe siècles), qui ravage nombre de grandes villes iraniennes tout en donnant naissance, sous les Ilkhanides, à un âge d'or de la miniature et de l'architecture persanes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Iran",
      events: [
        {
          date: "651",
          title: "Fin de l'Empire sassanide",
          description: "La conquête arabo-musulmane met fin au dernier empire perse préislamique et ouvre la voie à l'islamisation progressive du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muslim_conquest_of_Persia",
        },
        {
          date: "XIe siècle",
          title: "Le Shahnameh de Ferdowsi",
          description: "Le poète Ferdowsi achève cette épopée nationale en vers persans, qui contribue à préserver la langue et l'identité perses face à l'arabisation environnante.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Shahnameh",
        },
        {
          date: "1219-1260",
          title: "Invasions mongoles",
          description: "Les armées de Gengis Khan puis de ses successeurs dévastent de nombreuses villes iraniennes avant que les Ilkhanides mongols ne s'y installent durablement.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mongol_invasions_of_Iran",
        },
      ],
    },
    {
      id: "safavides-qajars",
      title: "Des Safavides aux Qajars : l'Iran chiite moderne",
      startYear: 1501,
      endYear: 1925,
      summary:
        "La dynastie safavide (1501-1736) marque un tournant décisif : en imposant l'islam chiite duodécimain comme religion d'État, elle forge l'identité confessionnelle qui distingue encore aujourd'hui l'Iran de la plupart de ses voisins à majorité sunnite, et fait de sa capitale Ispahan, sous le règne de Shah Abbas Ier, l'une des plus grandes villes du monde. Après une période de fragmentation, la dynastie qadjare (1789-1925) réunifie le pays mais le voit reculer face aux puissances européennes : traités inégaux imposés par la Russie et le Royaume-Uni, pertes territoriales dans le Caucase, et mise sous tutelle économique croissante symbolisée par la concession pétrolière accordée en 1901 à une compagnie britannique, ancêtre de BP, qui fait de la Perse l'un des tout premiers pays producteurs de pétrole du Moyen-Orient. La Révolution constitutionnelle de 1905-1911 impose au chah qadjar un parlement (Majlis) et une constitution, sans parvenir à endiguer durablement l'influence étrangère.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Iran",
      events: [
        {
          date: "1501",
          title: "Fondation de la dynastie safavide",
          description: "Ismaïl Ier fonde la dynastie safavide et impose l'islam chiite duodécimain comme religion d'État, forgeant l'identité confessionnelle durable de l'Iran.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Safavid_dynasty",
        },
        {
          date: "1905-1911",
          title: "Révolution constitutionnelle",
          description: "Un mouvement populaire impose au chah qadjar la création d'un parlement (Majlis) et l'adoption d'une constitution.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Persian_Constitutional_Revolution",
        },
        {
          date: "1908",
          title: "Découverte de pétrole",
          description: "La découverte de gisements pétroliers exploitables ouvre l'ère des concessions pétrolières étrangères, qui domineront l'économie iranienne pendant des décennies.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Anglo-Persian_Oil_Company",
        },
      ],
    },
    {
      id: "pahlavi",
      title: "La dynastie Pahlavi et la modernisation autoritaire",
      startYear: 1925,
      endYear: 1979,
      summary:
        "L'officier Reza Khan renverse la dynastie qadjare en 1925 et se proclame chah sous le nom de Reza Shah Pahlavi, engageant une modernisation autoritaire du pays inspirée de la Turquie kémaliste : laïcisation partielle, développement des infrastructures et de l'enseignement, affaiblissement des tribus et du clergé. Contraint à l'abdication par les Alliés en 1941 en raison de sa proximité avec l'Allemagne nazie, il cède le trône à son fils Mohammad Reza Pahlavi. En 1953, le Premier ministre nationaliste Mohammad Mossadegh, qui avait nationalisé l'industrie pétrolière en 1951, est renversé par un coup d'État orchestré par les services secrets britanniques et américains (opération Ajax), un épisode qui laisse une empreinte durable sur la méfiance iranienne envers les puissances occidentales. Le chah, revenu au pouvoir, engage dans les années 1960 la « Révolution blanche » (réforme agraire, droit de vote des femmes, industrialisation) financée par la rente pétrolière, tout en réprimant durement toute opposition politique via sa police secrète, la Savak.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Pahlavi_dynasty",
      events: [
        {
          date: "1925",
          title: "Reza Khan fonde la dynastie Pahlavi",
          description: "L'officier Reza Khan renverse la dynastie qadjare et engage une modernisation autoritaire du pays sur le modèle turc.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Reza_Shah",
        },
        {
          date: "1953",
          title: "Coup d'État contre Mossadegh",
          description: "Les services secrets américain et britannique orchestrent la chute du Premier ministre Mossadegh, qui avait nationalisé le pétrole iranien, et restaurent l'autorité pleine du chah.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1953_Iranian_coup_d%27%C3%A9tat",
        },
        {
          date: "1963",
          title: "La Révolution blanche",
          description: "Le chah lance un programme de réformes (agraire, sociale, industrielle) financé par la rente pétrolière, tout en intensifiant la répression policière de l'opposition.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/White_Revolution",
        },
      ],
    },
    {
      id: "revolution-1979",
      title: "La révolution islamique de 1979",
      startYear: 1978,
      endYear: 1979,
      summary:
        "Un vaste mouvement de contestation, mêlant opposants religieux menés depuis l'exil par l'ayatollah Rouhollah Khomeini, gauche marxiste et libéraux, converge en 1978 contre l'autoritarisme du chah, la corruption de son entourage et une modernisation à marche forcée jugée déconnectée de la société iranienne. Après des mois de grèves générales et de manifestations massives réprimées dans le sang, le chah quitte le pays en janvier 1979 ; Khomeini rentre d'exil le 1er février 1979 et proclame la République islamique d'Iran le 1er avril, à l'issue d'un référendum. Les différentes factions révolutionnaires, un temps unies contre le chah, s'affrontent ensuite pour le contrôle du nouveau régime, remporté par les partisans de Khomeini et de son concept de « gouvernement du docte » (velayat-e faqih), qui institutionnalise l'autorité suprême du clergé chiite sur l'État. La crise des otages de l'ambassade américaine à Téhéran (novembre 1979 - janvier 1981, 52 diplomates retenus 444 jours) scelle durablement la rupture avec les États-Unis.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Iranian_Revolution",
      events: [
        {
          date: "16 janvier 1979",
          title: "Départ du chah",
          description: "Mohammad Reza Pahlavi quitte définitivement l'Iran après des mois de contestation populaire massive.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mohammad_Reza_Pahlavi",
        },
        {
          date: "1er avril 1979",
          title: "Proclamation de la République islamique",
          description: "À l'issue d'un référendum, l'ayatollah Khomeini proclame la République islamique d'Iran, fondée sur le principe du « gouvernement du docte ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ruhollah_Khomeini",
        },
        {
          date: "4 novembre 1979 - 20 janvier 1981",
          title: "Crise des otages américains",
          description: "Des étudiants islamistes prennent d'assaut l'ambassade des États-Unis à Téhéran et retiennent 52 otages pendant 444 jours, rompant durablement les relations irano-américaines.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Iran_hostage_crisis",
        },
      ],
    },
    {
      id: "guerre-iran-irak",
      title: "La guerre Iran-Irak",
      startYear: 1980,
      endYear: 1988,
      summary:
        "Profitant du chaos de la révolution, l'Irak de Saddam Hussein envahit l'Iran en septembre 1980, espérant une victoire rapide et cherchant à contenir l'influence révolutionnaire chiite sur sa propre population. Le conflit s'enlise pendant huit ans dans une guerre de tranchées meurtrière, marquée par l'utilisation massive d'armes chimiques par l'Irak (largement tolérée par les puissances occidentales, alors soutiens de Bagdad) et par l'envoi au front de très jeunes volontaires iraniens, parfois utilisés pour le déminage. Le bilan humain, estimé entre 500 000 et un million de morts au total, façonne durablement l'identité du régime révolutionnaire, qui érige le sacrifice des martyrs de cette guerre en pilier de sa légitimité. Le conflit s'achève en 1988 par un cessez-le-feu accepté par Khomeini sans gain territorial notable pour aucun des deux camps, ce qu'il décrira comme devoir « boire à la coupe de poison ».",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Iran%E2%80%93Iraq_War",
      events: [
        {
          date: "22 septembre 1980",
          title: "Invasion irakienne",
          description: "L'Irak de Saddam Hussein envahit l'Iran, déclenchant huit ans de guerre.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Iran%E2%80%93Iraq_War",
        },
        {
          date: "1988",
          title: "Cessez-le-feu",
          description: "Khomeini accepte la résolution 598 de l'ONU, mettant fin à un conflit particulièrement meurtrier sans vainqueur net.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Iran%E2%80%93Iraq_War",
        },
      ],
    },
    {
      id: "republique-islamique-contemporaine",
      title: "La République islamique contemporaine et la crise de 2026",
      startYear: 1989,
      endYear: "present",
      summary:
        "À la mort de Khomeini en 1989, Ali Khamenei lui succède comme Guide suprême tandis que la présidence est occupée successivement par des dirigeants pragmatiques (Rafsandjani), réformateurs (Khatami), puis ultraconservateurs (Ahmadinejad), sans que le pouvoir réel du Guide ne soit jamais remis en cause. Le programme nucléaire iranien, engagé dès les années 2000, devient le principal point de friction avec la communauté internationale, aboutissant à l'accord de Vienne (JCPOA) de 2015 limitant l'enrichissement d'uranium contre une levée des sanctions — accord dont le retrait unilatéral décidé par les États-Unis en 2018 relance la confrontation. Le régime traverse par ailleurs plusieurs vagues de contestation interne sévèrement réprimées : le Mouvement vert de 2009 après une élection présidentielle contestée, les manifestations économiques de 2017-2019, puis surtout le mouvement « Femme, Vie, Liberté » de 2022 déclenché par la mort en détention de Mahsa Amini, arrêtée pour port « incorrect » du voile. La situation bascule dans une confrontation ouverte en juin 2025, lorsqu'Israël puis les États-Unis frappent directement les principales installations nucléaires iraniennes (Fordo, Natanz, Ispahan) lors de la « guerre des douze jours », suivie d'une trêve fragile puis de la reprise des hostilités fin février 2026, marquée par l'assassinat du Guide suprême Ali Khamenei et de plusieurs dizaines de hauts responsables du régime — plongeant le pays dans une crise de succession et une guerre encore en cours à l'été 2026.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Islamic_Republic_of_Iran",
      events: [
        {
          date: "2015",
          title: "Accord de Vienne sur le nucléaire (JCPOA)",
          description: "L'Iran accepte de limiter fortement son programme d'enrichissement d'uranium en échange d'une levée progressive des sanctions internationales.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Joint_Comprehensive_Plan_of_Action",
        },
        {
          date: "2018",
          title: "Retrait américain du JCPOA",
          description: "Le président Donald Trump retire unilatéralement les États-Unis de l'accord et rétablit des sanctions extraterritoriales sévères contre l'Iran.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/United_States_withdrawal_from_the_Joint_Comprehensive_Plan_of_Action",
        },
        {
          date: "Septembre 2022",
          title: "Mouvement « Femme, Vie, Liberté »",
          description: "La mort en détention de Mahsa Amini déclenche plusieurs mois de manifestations antigouvernementales inédites, sévèrement réprimées.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mahsa_Amini_protests",
        },
        {
          date: "13-24 juin 2025",
          title: "« Guerre des douze jours »",
          description: "Israël puis les États-Unis bombardent directement les sites nucléaires iraniens de Fordo, Natanz et Ispahan ; l'Iran riposte par des tirs de missiles avant qu'un cessez-le-feu ne soit conclu.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Twelve-Day_War",
        },
        {
          date: "28 février 2026",
          title: "Reprise de la guerre et mort du Guide suprême",
          description: "Une nouvelle vague de frappes israélo-américaines tue le Guide suprême Ali Khamenei et plusieurs dizaines de responsables iraniens ; son fils Mojtaba Khamenei lui succède début mars dans un climat de crise institutionnelle inédite.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Iran_war",
        },
      ],
    },
  ],
};
