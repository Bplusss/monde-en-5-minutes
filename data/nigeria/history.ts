import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire nigériane, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "colonisation-amalgamation",
      title: "De la colonie de Lagos à l'amalgamation coloniale",
      startYear: 1861,
      endYear: 1960,
      summary:
        "Le Royaume-Uni annexe Lagos en 1861 puis étend progressivement son contrôle sur l'intérieur, établissant en 1900 deux entités distinctes, le protectorat du Nigeria du Nord et le protectorat du Nigeria du Sud (auquel s'ajoute la colonie de Lagos). Le 1er janvier 1914, le gouverneur Frederick Lugard fusionne administrativement ces territoires aux caractéristiques religieuses, culturelles et économiques très différentes en une seule entité, le Nigeria britannique, essentiellement pour des raisons budgétaires (le Nord étant déficitaire et le Sud excédentaire) — une décision dont les effets sur l'équilibre politique nord-sud du pays se font encore sentir aujourd'hui. Le territoire accède à l'indépendance le 1er octobre 1960, sous un régime parlementaire calqué sur le modèle britannique, avec la reine Élisabeth II comme chef de l'État.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Colonial_Nigeria",
      events: [
        {
          date: "1er janvier 1914",
          title: "Amalgamation des protectorats du Nord et du Sud",
          description: "Le gouverneur britannique Frederick Lugard fusionne le protectorat du Nigeria du Nord et celui du Nigeria du Sud (avec la colonie de Lagos) en une seule colonie, le Nigeria britannique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Amalgamation_of_Nigeria",
        },
        {
          date: "1er octobre 1960",
          title: "Indépendance du Nigeria",
          description: "Le Nigeria devient indépendant du Royaume-Uni sous un régime parlementaire, avec Abubakar Tafawa Balewa comme Premier ministre.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nigeria",
        },
      ],
    },
    {
      id: "premiere-republique",
      title: "La Première République et sa chute",
      startYear: 1960,
      endYear: 1966,
      summary:
        "Le Nigeria devient une république au sein du Commonwealth le 1er octobre 1963, avec Nnamdi Azikiwe comme premier président (poste largement cérémoniel) et Abubakar Tafawa Balewa toujours Premier ministre. Le régime, fondé sur une fragile coalition entre partis à assise essentiellement régionale et ethnique (Nord haoussa-peul, Ouest yoruba, Est igbo), est miné par des tensions croissantes, des élections régionales contestées et des violences, notamment dans la Région occidentale en 1965. Il s'effondre le 15 janvier 1966 lors d'un coup d'État militaire.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/First_Nigerian_Republic",
      events: [
        {
          date: "1er octobre 1963",
          title: "Proclamation de la République",
          description: "Le Nigeria devient une république au sein du Commonwealth ; Nnamdi Azikiwe en est le premier président.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/First_Nigerian_Republic",
        },
        {
          date: "15 janvier 1966",
          title: "Premier coup d'État militaire",
          description: "Un groupe d'officiers renverse le gouvernement civil et tue le Premier ministre Abubakar Tafawa Balewa ; le général Johnson Aguiyi-Ironsi prend la tête de l'État.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1966_Nigerian_coup_d%27%C3%A9tat",
        },
      ],
    },
    {
      id: "guerre-civile-biafra",
      title: "Contre-coup, pogroms et guerre civile du Biafra",
      startYear: 1966,
      endYear: 1970,
      summary:
        "Un contre-coup militaire, mené le 29 juillet 1966 par des officiers du Nord, renverse et tue Aguiyi-Ironsi et porte au pouvoir le lieutenant-colonel Yakubu Gowon. Il s'accompagne, dans les mois qui suivent, de pogroms anti-igbo dans le nord du pays, qui font plusieurs dizaines de milliers de morts selon les estimations et provoquent la fuite de plus d'un million d'Igbos vers leur région d'origine, à l'est. Le 30 mai 1967, le gouverneur militaire de la Région orientale, le lieutenant-colonel Chukwuemeka Odumegwu Ojukwu, proclame l'indépendance de cette région sous le nom de République du Biafra, majoritairement peuplée d'Igbos. La guerre civile qui s'ensuit, du 6 juillet 1967 au 15 janvier 1970, se solde par la défaite du Biafra et sa réintégration au Nigeria ; elle a fait, selon les estimations, entre plusieurs centaines de milliers et jusqu'à deux à trois millions de morts, en très grande majorité des civils biafrais morts de famine du fait du blocus imposé par les forces fédérales aux zones tenues par les sécessionnistes — l'ampleur exacte du bilan humain, faute de recensement fiable dans une zone de guerre coupée du monde, reste débattue par les historiens.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Nigerian_Civil_War",
      events: [
        {
          date: "30 mai 1967",
          title: "Proclamation de la République du Biafra",
          description: "Le colonel Odumegwu Ojukwu déclare l'indépendance de la Région orientale, à majorité igbo, sous le nom de République du Biafra.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Republic_of_Biafra",
        },
        {
          date: "6 juillet 1967 – 15 janvier 1970",
          title: "Guerre civile du Biafra",
          description: "Le conflit entre le gouvernement fédéral et les sécessionnistes biafrais fait, selon les estimations, entre plusieurs centaines de milliers et 2 à 3 millions de morts, majoritairement des civils morts de faim du fait du blocus fédéral, avant la reddition du Biafra.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nigerian_Civil_War",
        },
      ],
    },
    {
      id: "regimes-militaires",
      title: "Trois décennies dominées par les régimes militaires",
      startYear: 1970,
      endYear: 1999,
      summary:
        "Après la guerre civile, le général Gowon reste au pouvoir jusqu'à son renversement sans effusion de sang en 1975 par le général Murtala Mohammed, assassiné dès février 1976 lors d'une tentative de coup avortée ; son successeur, le général Olusegun Obasanjo, organise le retour à un pouvoir civil en 1979 (Seconde République, présidence de Shehu Shagari). Ce régime civil est à son tour renversé le 31 décembre 1983 par le général Muhammadu Buhari, lui-même remplacé en 1985 par le général Ibrahim Babangida. Ce dernier annule les résultats de l'élection présidentielle du 12 juin 1993 — largement considérée comme remportée par l'homme d'affaires Moshood Abiola — provoquant une grave crise politique ; après une brève transition civile confiée à Ernest Shonekan, le général Sani Abacha prend le pouvoir en novembre 1993 et instaure un régime autoritaire répressif jusqu'à sa mort en juin 1998. Son successeur, le général Abdulsalami Abubakar, organise une transition rapide vers un régime civil, aboutissant à l'élection présidentielle de février 1999.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Nigeria",
      events: [
        {
          date: "31 décembre 1983",
          title: "Coup d'État de Muhammadu Buhari",
          description: "Le général Muhammadu Buhari renverse le gouvernement civil de la Seconde République et prend le pouvoir.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muhammadu_Buhari",
        },
        {
          date: "12 juin 1993",
          title: "Annulation de l'élection présidentielle",
          description: "Le général Ibrahim Babangida annule les résultats de l'élection présidentielle, largement considérée comme remportée par Moshood Abiola, déclenchant une grave crise politique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1993_Nigerian_presidential_election",
        },
        {
          date: "Juin 1998",
          title: "Mort du général Sani Abacha",
          description: "Le décès du chef de l'État Sani Abacha ouvre la voie à une transition rapide vers un régime civil, pilotée par son successeur Abdulsalami Abubakar.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sani_Abacha",
        },
      ],
    },
    {
      id: "quatrieme-republique",
      title: "La Quatrième République et l'insurrection de Boko Haram",
      startYear: 1999,
      endYear: "present",
      summary:
        "Olusegun Obasanjo, ancien chef militaire de la fin des années 1970, est élu président en février 1999 sous une nouvelle Constitution, inaugurant la Quatrième République et la plus longue période de gouvernement civil ininterrompu de l'histoire du pays. Depuis, l'alternance s'est faite par les urnes : Umaru Musa Yar'Adua (2007, décédé en cours de mandat en 2010), Goodluck Jonathan (qui lui succède), Muhammadu Buhari (élu en 2015, marquant la première défaite électorale d'un président sortant) puis Bola Tinubu, élu en 2023. Depuis 2009, le nord-est du pays est le théâtre d'une insurrection islamiste menée par le groupe Boko Haram (et sa branche dissidente affiliée à l'État islamique, l'ISWAP), marquée notamment par l'enlèvement de 276 lycéennes à Chibok (État de Borno) dans la nuit du 14 au 15 avril 2014, un événement qui suscite une mobilisation internationale (mouvement #BringBackOurGirls) ; dix ans plus tard, en avril 2024, 82 d'entre elles demeuraient toujours portées disparues. Selon les estimations, le conflit a fait environ 350 000 morts (morts directes et indirectes, notamment par famine et manque de soins liés aux déplacements de population) depuis 2009 et déplacé plus de 2,4 millions de personnes, principalement dans les États de Borno, Yobe et Adamawa.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Boko_Haram_insurgency",
      events: [
        {
          date: "29 mai 1999",
          title: "Retour à un régime civil",
          description: "Olusegun Obasanjo est investi président sous la nouvelle Constitution de 1999, inaugurant la Quatrième République.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Fourth_Nigerian_Republic",
        },
        {
          date: "2009",
          title: "Début de l'insurrection de Boko Haram",
          description: "Le groupe islamiste Boko Haram lance une insurrection armée dans le nord-est du pays après la répression sanglante de son fondateur Mohammed Yusuf par les forces de sécurité.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Boko_Haram_insurgency",
        },
        {
          date: "14-15 avril 2014",
          title: "Enlèvement des lycéennes de Chibok",
          description: "Boko Haram enlève 276 lycéennes dans leur internat de Chibok (État de Borno) ; dix ans plus tard, 82 d'entre elles restaient portées disparues.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Chibok_schoolgirls_kidnapping",
        },
        {
          date: "29 mai 2023",
          title: "Investiture de Bola Tinubu",
          description: "Bola Ahmed Tinubu devient président de la République à l'issue de l'élection de février 2023.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bola_Tinubu",
        },
      ],
    },
  ],
};
