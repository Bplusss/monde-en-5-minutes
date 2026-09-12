import type { HistoryData } from "@/lib/types";

const NARA = "National Archives";
const NARA_URL = "https://www.archives.gov/founding-docs";
const LOC = "Library of Congress";
const LOC_URL = "https://www.loc.gov/";
const NPS = "National Park Service";
const NPS_URL = "https://www.nps.gov/";
const WIKI = "Wikipédia";
const WIKI_URL = "https://en.wikipedia.org/wiki/History_of_the_United_States";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "avant-independance",
      title: "Peuples autochtones et colonisation européenne",
      startYear: -1000,
      endYear: 1776,
      summary:
        "Le territoire actuel des États-Unis est peuplé depuis des millénaires par plusieurs centaines de nations et peuples amérindiens. Les estimations de la population présente avant le contact européen varient largement, de 2,5 à 7 millions de personnes selon les études au nord du Mexique. À partir du début du XVIIe siècle, des puissances européennes (Espagne, France, Pays-Bas, Angleterre) établissent des colonies sur la côte atlantique.",
      source: NPS,
      sourceUrl: NPS_URL,
      events: [
        {
          date: "1607",
          title: "Fondation de Jamestown",
          description: "Première colonie anglaise permanente en Amérique du Nord, en Virginie.",
          source: NPS,
          sourceUrl: "https://www.nps.gov/jame/index.htm",
        },
        {
          date: "1620",
          title: "Arrivée du Mayflower",
          description: "Des colons puritains fondent la colonie de Plymouth, dans l'actuel Massachusetts.",
          source: NPS,
          sourceUrl: "https://www.nps.gov/plym/index.htm",
        },
        {
          date: "1619 – 1775",
          title: "Développement de l'esclavage colonial",
          description:
            "À partir de 1619, des personnes africaines réduites en esclavage sont amenées dans les colonies britanniques d'Amérique du Nord ; l'esclavage s'y développe et se légalise progressivement colonie par colonie, en particulier dans les colonies du Sud à économie agricole.",
          source: LOC,
          sourceUrl: "https://www.loc.gov/classroom-materials/immigration/african/",
        },
      ],
    },
    {
      id: "independance",
      title: "Indépendance et fondation de la République",
      startYear: 1776,
      endYear: 1789,
      summary:
        "Les treize colonies britanniques d'Amérique se soulèvent et proclament leur indépendance en 1776. La guerre d'indépendance s'achève par la reconnaissance de la souveraineté américaine en 1783, avant l'adoption d'une nouvelle Constitution fédérale en 1787-1789.",
      source: NARA,
      sourceUrl: NARA_URL,
      events: [
        {
          date: "4 juillet 1776",
          title: "Déclaration d'indépendance",
          description: "Le Congrès continental adopte la Déclaration d'indépendance, rédigée principalement par Thomas Jefferson.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/founding-docs/declaration",
        },
        {
          date: "3 septembre 1783",
          title: "Traité de Paris",
          description: "Le Royaume-Uni reconnaît l'indépendance des États-Unis, qui s'étendent alors jusqu'au Mississippi.",
          source: NARA,
          sourceUrl: NARA_URL,
        },
        {
          date: "17 septembre 1787 – 4 mars 1789",
          title: "Adoption de la Constitution fédérale",
          description: "La Convention de Philadelphie rédige la Constitution, ratifiée par les États puis mise en vigueur en 1789 ; George Washington devient le premier président.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/founding-docs/constitution",
        },
      ],
    },
    {
      id: "expansion",
      title: "Expansion territoriale et esclavage",
      startYear: 1789,
      endYear: 1861,
      summary:
        "La jeune République s'étend rapidement vers l'ouest par achats, annexions et guerres, au prix du déplacement forcé des nations amérindiennes. L'esclavage, aboli progressivement dans le Nord, se développe dans le Sud où l'économie repose sur les plantations : le recensement de 1860 dénombre environ 3,95 millions de personnes réduites en esclavage, soit près de 13 % de la population totale du pays.",
      source: LOC,
      sourceUrl: LOC_URL,
      events: [
        {
          date: "1803",
          title: "Achat de la Louisiane",
          description: "Les États-Unis achètent à la France un territoire d'environ 2,1 millions de km², doublant leur superficie.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/education/lessons/louisiana-purchase",
        },
        {
          date: "1830 – 1850",
          title: "Indian Removal Act et déplacements forcés",
          description:
            "La loi de 1830 autorise le déplacement forcé des nations amérindiennes du Sud-Est vers un « territoire indien » à l'ouest du Mississippi. Le « Trail of Tears » qui en résulte pour la nation cherokee (1838) fait environ 4 000 à 8 000 morts sur environ 16 000 personnes déplacées ; l'ensemble des déplacements de la période touche environ 60 000 personnes des Cinq Nations civilisées.",
          source: NPS,
          sourceUrl: "https://www.nps.gov/trte/index.htm",
        },
        {
          date: "1846 – 1848",
          title: "Guerre américano-mexicaine",
          description:
            "À l'issue du conflit, le traité de Guadalupe Hidalgo cède aux États-Unis plus de 1,3 million de km² de territoires mexicains (actuels Californie, Nevada, Utah, Arizona et parties du Nouveau-Mexique, du Colorado et du Wyoming).",
          source: LOC,
          sourceUrl: "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/rise-of-industrial-america-1876-1900/",
        },
      ],
    },
    {
      id: "guerre-secession",
      title: "Guerre de Sécession et Reconstruction",
      startYear: 1861,
      endYear: 1877,
      summary:
        "Onze États esclavagistes du Sud font sécession en 1860-1861 pour former les États confédérés d'Amérique, principalement autour de la question de l'esclavage. La guerre civile qui s'ensuit reste, avec un bilan estimé aujourd'hui entre 620 000 et 750 000 morts, le conflit le plus meurtrier de l'histoire des États-Unis. Elle se conclut par la défaite du Sud, l'abolition de l'esclavage et une période de reconstruction politique et sociale du pays.",
      source: LOC,
      sourceUrl: "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/civil-war-and-reconstruction-1861-1877/",
      events: [
        {
          date: "12 avril 1861",
          title: "Début de la guerre de Sécession",
          description: "Le bombardement de Fort Sumter, en Caroline du Sud, marque le début du conflit entre l'Union et la Confédération.",
          source: NPS,
          sourceUrl: "https://www.nps.gov/fosu/index.htm",
        },
        {
          date: "1er janvier 1863",
          title: "Proclamation d'émancipation",
          description: "Le président Abraham Lincoln déclare libres les personnes réduites en esclavage dans les États en rébellion.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/milestone-documents/emancipation-proclamation",
        },
        {
          date: "9 avril 1865",
          title: "Reddition d'Appomattox",
          description: "La reddition du général confédéré Robert E. Lee marque la fin effective de la guerre.",
          source: NPS,
          sourceUrl: "https://www.nps.gov/apco/index.htm",
        },
        {
          date: "6 décembre 1865",
          title: "13ᵉ amendement — abolition de l'esclavage",
          description: "Le 13ᵉ amendement à la Constitution abolit l'esclavage sur l'ensemble du territoire des États-Unis.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/milestone-documents/13th-amendment",
        },
        {
          date: "1877",
          title: "Fin de la Reconstruction",
          description:
            "Le retrait des troupes fédérales du Sud met fin à la Reconstruction ; les décennies suivantes voient l'instauration des lois de ségrégation raciale (« lois Jim Crow »), qui resteront en vigueur dans le Sud jusqu'aux années 1960.",
          source: LOC,
          sourceUrl: LOC_URL,
        },
      ],
    },
    {
      id: "puissance-mondiale",
      title: "Essor industriel et guerres mondiales",
      startYear: 1877,
      endYear: 1945,
      summary:
        "Industrialisation rapide, vagues massives d'immigration et urbanisation transforment le pays en première puissance industrielle mondiale. Les États-Unis interviennent dans les deux guerres mondiales et sortent de la Seconde Guerre mondiale comme l'une des deux superpuissances, après avoir traversé la Grande Dépression.",
      source: LOC,
      sourceUrl: LOC_URL,
      events: [
        {
          date: "1917 – 1918",
          title: "Entrée en guerre lors de la Première Guerre mondiale",
          description: "Les États-Unis rejoignent les Alliés en 1917 ; environ 116 000 soldats américains meurent durant le conflit.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/United_States_in_World_War_I",
        },
        {
          date: "1920",
          title: "19ᵉ amendement — droit de vote des femmes",
          description: "Le 19ᵉ amendement interdit toute restriction du droit de vote fondée sur le sexe.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/milestone-documents/19th-amendment",
        },
        {
          date: "1929 – 1939",
          title: "Grande Dépression et New Deal",
          description: "Le krach boursier de 1929 ouvre une décennie de crise économique majeure ; le New Deal du président Franklin D. Roosevelt met en place un vaste programme de réformes sociales et économiques à partir de 1933.",
          source: LOC,
          sourceUrl: "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/great-depression-and-world-war-ii-1929-1945/",
        },
        {
          date: "7 décembre 1941",
          title: "Attaque de Pearl Harbor",
          description: "L'attaque japonaise sur la base navale de Pearl Harbor, à Hawaï, précipite l'entrée en guerre des États-Unis.",
          source: NPS,
          sourceUrl: "https://www.nps.gov/valr/index.htm",
        },
        {
          date: "1945",
          title: "Bombardements atomiques et fin de la guerre",
          description: "Les bombardements atomiques d'Hiroshima et de Nagasaki (6 et 9 août) précèdent la capitulation du Japon, qui met fin à la Seconde Guerre mondiale.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
        },
      ],
    },
    {
      id: "guerre-froide-droits-civiques",
      title: "Guerre froide et mouvement des droits civiques",
      startYear: 1945,
      endYear: 1991,
      summary:
        "Les États-Unis mènent, en rivalité avec l'Union soviétique, une confrontation mondiale marquée par la course à l'espace et plusieurs conflits par procuration (Corée, Vietnam). Sur le plan intérieur, le mouvement des droits civiques met fin à la ségrégation légale.",
      source: LOC,
      sourceUrl: LOC_URL,
      events: [
        {
          date: "17 mai 1954",
          title: "Arrêt Brown v. Board of Education",
          description: "La Cour suprême déclare inconstitutionnelle la ségrégation raciale dans les écoles publiques.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/milestone-documents/brown-v-board-of-education",
        },
        {
          date: "2 juillet 1964",
          title: "Civil Rights Act",
          description: "Signée par le président Lyndon B. Johnson, cette loi interdit la discrimination fondée sur la race, la couleur, la religion, le sexe ou l'origine nationale, notamment dans les lieux publics et l'emploi.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/milestone-documents/civil-rights-act",
        },
        {
          date: "6 août 1965",
          title: "Voting Rights Act",
          description: "Cette loi interdit les pratiques discriminatoires (tests d'alphabétisation, etc.) utilisées dans plusieurs États du Sud pour empêcher les Afro-Américains de voter.",
          source: NARA,
          sourceUrl: "https://www.archives.gov/milestone-documents/voting-rights-act",
        },
        {
          date: "20 juillet 1969",
          title: "Premiers pas sur la Lune",
          description: "La mission Apollo 11 pose les premiers hommes sur la Lune, point culminant de la course à l'espace avec l'URSS.",
          source: "NASA",
          sourceUrl: "https://www.nasa.gov/mission/apollo-11/",
        },
        {
          date: "1955 – 1975",
          title: "Guerre du Vietnam",
          description: "L'engagement militaire américain au Vietnam, très contesté sur le plan intérieur à partir du milieu des années 1960, fait environ 58 000 morts parmi les soldats américains.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Vietnam_War",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1991,
      endYear: "present",
      summary:
        "Depuis la fin de la guerre froide, les États-Unis restent la première puissance économique et militaire mondiale, marqués par les attentats du 11 septembre 2001, les guerres en Afghanistan et en Irak, et la crise financière de 2008.",
      source: WIKI,
      sourceUrl: WIKI_URL,
      events: [
        {
          date: "11 septembre 2001",
          title: "Attentats du 11 septembre",
          description: "Des attentats coordonnés contre le World Trade Center à New York et le Pentagone font près de 3 000 morts et entraînent le lancement de la « guerre contre le terrorisme ».",
          source: "9/11 Memorial & Museum",
          sourceUrl: "https://www.911memorial.org/learn/resources/faq-about-9/11",
        },
        {
          date: "2008 – 2009",
          title: "Crise financière mondiale",
          description: "La crise des subprimes, née aux États-Unis, déclenche la plus grave récession économique mondiale depuis la Grande Dépression.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/2007%E2%80%932008_financial_crisis",
        },
        {
          date: "20 janvier 2025",
          title: "Investiture présidentielle",
          description: "Donald Trump entame un second mandat non consécutif à la présidence des États-Unis.",
          source: "The White House",
          sourceUrl: "https://www.whitehouse.gov/administration/",
        },
      ],
    },
  ],
};
