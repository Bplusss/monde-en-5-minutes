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
        "Cyrus le Grand fonde vers 550 av. J.-C. l'Empire achéménide, premier grand empire perse, qui s'étend de l'Égypte à l'Indus. Après Alexandre le Grand puis une période hellénistique et parthe, l'Empire sassanide (224-651) restaure la puissance perse et impose le zoroastrisme, avant de s'effondrer face à la conquête arabo-musulmane.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Iran",
      events: [
        {
          date: "vers 550 av. J.-C.",
          title: "Fondation de l'Empire achéménide",
          description: "Cyrus le Grand unifie les Perses et les Mèdes et fonde le premier grand empire perse.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Achaemenid_Empire",
        },
        {
          date: "331 av. J.-C.",
          title: "Conquête par Alexandre le Grand",
          description: "La victoire d'Alexandre à Gaugamèles met fin à l'Empire achéménide.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Alexander_the_Great",
        },
        {
          date: "224-651",
          title: "Empire sassanide",
          description: "Dernier grand empire perse préislamique, rival de Rome puis de Byzance, avant de s'effondrer face aux Arabes.",
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
        "La conquête arabo-musulmane, achevée en 651, islamise progressivement la Perse tout en lui laissant sa langue et son identité propre. Le pays passe ensuite sous des dynasties persanisées (Samanides, Seldjoukides) puis subit les invasions de Gengis Khan et de Tamerlan, avant un âge d'or artistique sous les Ilkhanides.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Iran",
      events: [
        {
          date: "651",
          title: "Fin de l'Empire sassanide",
          description: "La conquête arabo-musulmane met fin au dernier empire perse préislamique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muslim_conquest_of_Persia",
        },
        {
          date: "XIe siècle",
          title: "Le Shahnameh de Ferdowsi",
          description: "Ferdowsi achève cette épopée nationale en vers persans, qui préserve la langue et l'identité perses.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Shahnameh",
        },
        {
          date: "1219-1260",
          title: "Invasions mongoles",
          description: "Les armées de Gengis Khan dévastent de nombreuses villes iraniennes avant l'installation des Ilkhanides.",
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
        "La dynastie safavide (1501-1736) impose l'islam chiite comme religion d'État, forgeant l'identité qui distingue encore l'Iran de ses voisins sunnites. La dynastie qadjare (1789-1925) réunifie le pays mais le voit reculer face aux puissances européennes, jusqu'à la Révolution constitutionnelle de 1905-1911, qui impose un parlement (Majlis).",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Iran",
      events: [
        {
          date: "1501",
          title: "Fondation de la dynastie safavide",
          description: "Ismaïl Ier impose l'islam chiite duodécimain comme religion d'État.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Safavid_dynasty",
        },
        {
          date: "1905-1911",
          title: "Révolution constitutionnelle",
          description: "Un mouvement populaire impose au chah un parlement (Majlis) et une constitution.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Persian_Constitutional_Revolution",
        },
        {
          date: "1908",
          title: "Découverte de pétrole",
          description: "La découverte de gisements exploitables ouvre l'ère des concessions étrangères.",
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
        "Reza Khan renverse la dynastie qadjare en 1925 et engage une modernisation autoritaire inspirée de la Turquie kémaliste ; abdiquant en 1941, il cède le trône à son fils Mohammad Reza Pahlavi. En 1953, le Premier ministre Mossadegh, qui avait nationalisé le pétrole, est renversé par un coup d'État anglo-américain ; le chah engage ensuite la « Révolution blanche » tout en réprimant l'opposition via sa police secrète, la Savak.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Pahlavi_dynasty",
      events: [
        {
          date: "1925",
          title: "Reza Khan fonde la dynastie Pahlavi",
          description: "L'officier Reza Khan renverse la dynastie qadjare et engage une modernisation autoritaire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Reza_Shah",
        },
        {
          date: "1953",
          title: "Coup d'État contre Mossadegh",
          description: "Les services secrets américain et britannique orchestrent la chute de Mossadegh et restaurent le chah.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1953_Iranian_coup_d%27%C3%A9tat",
        },
        {
          date: "1963",
          title: "La Révolution blanche",
          description: "Le chah lance des réformes financées par la rente pétrolière, tout en intensifiant la répression.",
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
        "Un vaste mouvement de contestation, mêlant opposants religieux menés par l'ayatollah Khomeini, gauche marxiste et libéraux, renverse le chah en janvier 1979. Khomeini rentre d'exil et proclame la République islamique le 1er avril, instaurant le « gouvernement du docte » qui donne l'autorité suprême au clergé chiite. La crise des otages de l'ambassade américaine (1979-1981) scelle la rupture avec les États-Unis.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Iranian_Revolution",
      events: [
        {
          date: "16 janvier 1979",
          title: "Départ du chah",
          description: "Mohammad Reza Pahlavi quitte définitivement l'Iran après des mois de contestation populaire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mohammad_Reza_Pahlavi",
        },
        {
          date: "1er avril 1979",
          title: "Proclamation de la République islamique",
          description: "À l'issue d'un référendum, Khomeini proclame la République islamique d'Iran.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ruhollah_Khomeini",
        },
        {
          date: "4 novembre 1979 - 20 janvier 1981",
          title: "Crise des otages américains",
          description: "Des étudiants islamistes retiennent 52 otages américains à Téhéran pendant 444 jours.",
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
        "Profitant du chaos révolutionnaire, l'Irak de Saddam Hussein envahit l'Iran en septembre 1980. Le conflit s'enlise huit ans, marqué par l'usage massif d'armes chimiques irakiennes ; le bilan, estimé entre 500 000 et un million de morts, façonne durablement l'identité du régime, qui érige le sacrifice des martyrs en pilier de sa légitimité.",
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
          description: "Khomeini accepte la résolution 598 de l'ONU, sans vainqueur net.",
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
        "À la mort de Khomeini en 1989, Ali Khamenei lui succède comme Guide suprême, tandis que la présidence passe de pragmatiques à ultraconservateurs sans que le pouvoir réel du Guide ne soit remis en cause. Le programme nucléaire iranien devient le principal point de friction internationale, avec l'accord de Vienne (JCPOA) de 2015 puis son abandon par les États-Unis en 2018. Le régime réprime plusieurs vagues de contestation (Mouvement vert 2009, « Femme, Vie, Liberté » 2022), avant de basculer en guerre ouverte avec Israël et les États-Unis en 2025-2026, qui tue le Guide suprême Ali Khamenei en février 2026 et plonge le pays dans une crise de succession.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Islamic_Republic_of_Iran",
      events: [
        {
          date: "2015",
          title: "Accord de Vienne sur le nucléaire (JCPOA)",
          description: "L'Iran accepte de limiter son enrichissement d'uranium contre une levée progressive des sanctions.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Joint_Comprehensive_Plan_of_Action",
        },
        {
          date: "2018",
          title: "Retrait américain du JCPOA",
          description: "Donald Trump retire unilatéralement les États-Unis de l'accord et rétablit des sanctions sévères.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/United_States_withdrawal_from_the_Joint_Comprehensive_Plan_of_Action",
        },
        {
          date: "Septembre 2022",
          title: "Mouvement « Femme, Vie, Liberté »",
          description: "La mort en détention de Mahsa Amini déclenche plusieurs mois de manifestations sévèrement réprimées.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mahsa_Amini_protests",
        },
        {
          date: "13-24 juin 2025",
          title: "« Guerre des douze jours »",
          description: "Israël puis les États-Unis bombardent les sites nucléaires iraniens avant qu'un cessez-le-feu ne soit conclu.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Twelve-Day_War",
        },
        {
          date: "28 février 2026",
          title: "Reprise de la guerre et mort du Guide suprême",
          description: "De nouvelles frappes israélo-américaines tuent Ali Khamenei ; son fils Mojtaba lui succède début mars.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Iran_war",
        },
      ],
    },
  ],
};
