import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire jordanienne.",
  periods: [
    {
      id: "antiquite-nabateens",
      title: "Des royaumes bibliques aux Nabatéens et aux Romains",
      startYear: -1200,
      endYear: 636,
      summary:
        "Au premier millénaire avant notre ère, les royaumes d'Ammon, de Moab et d'Édom se partagent le territoire. Les Nabatéens, peuple arabe enrichi par le commerce caravanier de l'encens et des épices, creusent dans le grès rose leur capitale, Petra. Rome annexe leur royaume en 106 et développe des villes comme Gerasa (Jerash) et Philadelphia, l'actuelle Amman. Sous Byzance, la région se couvre d'églises aux riches mosaïques.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Jordan",
      events: [
        {
          date: "106",
          title: "Création de la province d'Arabie",
          description: "L'empereur Trajan annexe le royaume nabatéen, qui devient la province romaine d'Arabie pétrée.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Arabia_Petraea",
        },
        {
          date: "VIe siècle",
          title: "Carte de Madaba",
          description: "Cette mosaïque byzantine, dans une église de Madaba, est la plus ancienne carte connue de la Terre sainte.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Madaba_Map",
        },
      ],
    },
    {
      id: "islam-ottomans",
      title: "Conquête arabe, croisés et Ottomans",
      startYear: 636,
      endYear: 1916,
      summary:
        "La victoire arabe sur Byzance au Yarmouk, en 636, fait entrer la région dans le monde musulman. Les califes omeyyades y bâtissent des châteaux du désert, comme Qusayr Amra et ses fresques. Les croisés élèvent au XIIe siècle les forteresses de Kerak et de Shobak, puis la région passe aux Ayyoubides et aux Mamelouks, avant d'être intégrée à l'Empire ottoman en 1516, dont elle reste une périphérie peu peuplée.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Jordan",
      events: [
        {
          date: "août 636",
          title: "Bataille du Yarmouk",
          description: "Les armées du califat battent les Byzantins près de l'actuelle frontière syro-jordanienne et s'ouvrent la Syrie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_the_Yarmuk",
        },
      ],
    },
    {
      id: "revolte-arabe-transjordanie",
      title: "La Révolte arabe et l'émirat de Transjordanie",
      startYear: 1916,
      endYear: 1946,
      summary:
        "En 1916, le chérif Hussein de La Mecque lance la Révolte arabe contre les Ottomans avec l'appui britannique ; ses fils et T. E. Lawrence prennent Aqaba en 1917. Après la guerre, les Britanniques créent en 1921 l'émirat de Transjordanie, confié à son fils Abdallah, sous mandat britannique. Amman, alors petite ville peuplée de Tcherkesses, devient la capitale.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Emirate_of_Transjordan",
      events: [
        {
          date: "6 juillet 1917",
          title: "Prise d'Aqaba",
          description: "Les forces arabes, venues à travers le désert, s'emparent du port ottoman par la terre.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Aqaba",
        },
        {
          date: "11 avril 1921",
          title: "Naissance de l'émirat",
          description: "L'émir Abdallah forme le premier gouvernement de Transjordanie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Emirate_of_Transjordan",
        },
      ],
    },
    {
      id: "royaume-hachemite",
      title: "Indépendance et guerres israélo-arabes",
      startYear: 1946,
      endYear: 1970,
      summary:
        "Le royaume devient indépendant en 1946. Lors de la guerre de 1948, sa Légion arabe prend la Cisjordanie et Jérusalem-Est, annexées en 1950, et le pays accueille des centaines de milliers de réfugiés palestiniens. Abdallah Ier est assassiné à Jérusalem en 1951 ; son petit-fils Hussein règne à partir de 1953. La guerre des Six Jours, en 1967, lui fait perdre la Cisjordanie et provoque un nouvel afflux de réfugiés.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Jordan",
      events: [
        {
          date: "25 mai 1946",
          title: "Indépendance",
          description: "Le traité de Londres met fin au mandat ; Abdallah est proclamé roi. La date est celle de la fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_London_(1946)",
        },
        {
          date: "20 juillet 1951",
          title: "Assassinat du roi Abdallah Ier",
          description: "Il est tué par un militant palestinien sur l'esplanade des Mosquées, devant son petit-fils Hussein.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Abdullah_I_of_Jordan",
        },
      ],
    },
    {
      id: "hussein",
      title: "Le règne d'Hussein, de Septembre noir à la paix",
      startYear: 1970,
      endYear: 1999,
      summary:
        "En septembre 1970, l'armée affronte les organisations palestiniennes armées qui défient l'État et les chasse vers le Liban : c'est « Septembre noir ». En 1988, le roi renonce à ses liens administratifs avec la Cisjordanie au profit de l'OLP. Des émeutes en 1989 le conduisent à rétablir les élections et les partis. Après les accords d'Oslo, il signe la paix avec Israël en 1994. Son fils Abdallah II lui succède à sa mort, en 1999.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Hussein_of_Jordan",
      events: [
        {
          date: "septembre 1970",
          title: "Septembre noir",
          description: "Les combats entre l'armée et les fedayins palestiniens font des milliers de morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Black_September",
        },
        {
          date: "26 octobre 1994",
          title: "Traité de paix avec Israël",
          description: "Signé dans la vallée de l'Arava, il fait de la Jordanie le deuxième pays arabe à reconnaître Israël.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Israel%E2%80%93Jordan_peace_treaty",
        },
      ],
    },
    {
      id: "abdallah-ii",
      title: "Abdallah II, stabilité dans une région en guerre",
      startYear: 1999,
      endYear: "present",
      summary:
        "Abdallah II mise sur la libéralisation économique et l'alliance avec les États-Unis. Le royaume est frappé par le terrorisme, accueille des centaines de milliers de réfugiés syriens à partir de 2011 et participe à la coalition contre l'État islamique. Les réformes politiques restent prudentes : en 2021, l'affaire du prince Hamza, demi-frère du roi accusé de complot, révèle des tensions au sein de la famille royale, et les Frères musulmans sont interdits en 2025.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Abdullah_II_of_Jordan",
      events: [
        {
          date: "9 novembre 2005",
          title: "Attentats d'Amman",
          description: "Al-Qaïda en Irak fait exploser trois hôtels ; une soixantaine de personnes sont tuées, dont de nombreux invités d'un mariage.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2005_Amman_bombings",
        },
        {
          date: "février 2015",
          title: "Assassinat du pilote Moaz al-Kassasbeh",
          description: "La diffusion de la vidéo de sa mise à mort par l'État islamique soulève une vague d'indignation dans tout le pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Muath_al-Kasasbeh",
        },
      ],
    },
  ],
};
