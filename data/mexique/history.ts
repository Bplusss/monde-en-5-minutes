import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";
const WIKIPEDIA_HISTORY = "https://en.wikipedia.org/wiki/History_of_Mexico";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire mexicaine, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "civilisations-precolombiennes",
      title: "Civilisations précolombiennes",
      startYear: -1200,
      endYear: 1521,
      summary:
        "Le territoire mexicain a vu se succéder plusieurs grandes civilisations mésoaméricaines : les Olmèques, considérés comme la « culture mère » de la région dès environ 1200 avant notre ère, la civilisation maya, qui développa dans le Sud-Est (Yucatán, Chiapas) une écriture, une astronomie et une architecture monumentale sophistiquées, ou encore la cité de Teotihuacan, dont la population dépassait peut-être 100 000 habitants à son apogée (Ier-VIIe siècle). Les Mexicas (Aztèques) fondent en 1325 leur capitale, Tenochtitlan, sur un îlot du lac Texcoco, et dominent au XVe siècle, via la Triple Alliance conclue en 1428 avec Texcoco et Tlacopan, un vaste empire tributaire de plusieurs millions d'habitants en Mésoamérique centrale.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Aztec_Empire",
      events: [
        {
          date: "1325",
          title: "Fondation de Tenochtitlan",
          description: "Les Mexicas fondent leur capitale sur un îlot du lac Texcoco, futur site de Mexico.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Tenochtitlan",
        },
        {
          date: "1428",
          title: "Formation de la Triple Alliance",
          description: "Tenochtitlan, Texcoco et Tlacopan s'allient et bâtissent l'empire aztèque, qui contrôle environ 220 000 km² et six millions d'habitants à son apogée.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Aztec_Empire",
        },
      ],
    },
    {
      id: "conquete-et-nouvelle-espagne",
      title: "Conquête espagnole et vice-royauté de Nouvelle-Espagne",
      startYear: 1519,
      endYear: 1821,
      summary:
        "L'expédition de Hernán Cortés débarque au Yucatán en 1519 avec environ 630 hommes et progresse vers Tenochtitlan, où l'empereur Moctezuma II les accueille d'abord pacifiquement. Après l'épisode de la « Noche Triste » (30 juin 1520), où les Espagnols sont chassés de la ville, une épidémie de variole — maladie contre laquelle les populations amérindiennes n'avaient aucune immunité — décime la capitale, tuant selon les estimations plus de la moitié de sa population, dont l'empereur Cuitláhuac ; Tenochtitlan tombe finalement le 13 août 1521. La conquête et surtout les épidémies successives (variole, rougeole, typhus) provoquent, sur l'ensemble du XVIe siècle, l'un des effondrements démographiques les plus massifs de l'histoire : la population du Mexique central, estimée entre 15 et 25 millions d'habitants avant contact, tombe à environ un million au début du XVIIe siècle selon les estimations des historiens Cook et Borah. Le territoire, rebaptisé Nouvelle-Espagne, devient pendant trois siècles l'une des colonies les plus riches de l'empire espagnol, grâce notamment à l'argent extrait des mines de Zacatecas et de Guanajuato, avant que le prêtre Miguel Hidalgo ne lance, par son « Grito de Dolores » du 16 septembre 1810, le mouvement d'indépendance, achevé en 1821.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Spanish_conquest_of_the_Aztec_Empire",
      events: [
        {
          date: "1519",
          title: "Débarquement de Hernán Cortés",
          description: "L'expédition espagnole conduite par Hernán Cortés débarque au Yucatán et entame sa marche vers Tenochtitlan.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Hern%C3%A1n_Cort%C3%A9s",
        },
        {
          date: "13 août 1521",
          title: "Chute de Tenochtitlan",
          description: "Après un long siège et une épidémie de variole ayant décimé la ville, la capitale aztèque tombe aux mains des forces menées par Cortés et de leurs alliés indigènes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan",
        },
        {
          date: "16 septembre 1810",
          title: "Grito de Dolores",
          description: "Le prêtre Miguel Hidalgo appelle à l'insurrection contre l'autorité coloniale espagnole, marquant le début de la guerre d'indépendance ; cette date est depuis célébrée comme fête nationale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Grito_de_Dolores",
        },
        {
          date: "27 septembre 1821",
          title: "Indépendance du Mexique",
          description: "L'armée des Trois Garanties entre dans Mexico et consomme l'indépendance vis-à-vis de l'Espagne, reconnue par le traité de Córdoba.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mexican_War_of_Independence",
        },
      ],
    },
    {
      id: "xixe-siecle-pertes-territoriales",
      title: "Indépendance, guerre avec les États-Unis et intervention française",
      startYear: 1821,
      endYear: 1876,
      summary:
        "Le jeune État mexicain, instable, connaît de nombreux coups d'État et pronunciamientos, ainsi que la sécession du Texas en 1836. Le différend sur l'annexion du Texas par les États-Unis en 1845 dégénère en guerre américano-mexicaine (1846-1848), conclue par le traité de Guadalupe Hidalgo du 2 février 1848 : le Mexique y cède aux États-Unis environ 1,36 million de km², soit un peu plus de la moitié de son territoire d'avant-guerre, correspondant aujourd'hui à la totalité ou une partie de la Californie, du Nevada, de l'Utah, de l'Arizona, du Nouveau-Mexique, du Colorado et du Wyoming. Profitant ensuite de l'endettement du pays, la France envahit le Mexique en 1862 et y installe un empire éphémère sous Maximilien de Habsbourg (1864-1867), renversé et fusillé après la victoire des forces républicaines de Benito Juárez, qui avait entre-temps engagé d'importantes réformes libérales et anticléricales (la « Reforma »).",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Guadalupe_Hidalgo",
      events: [
        {
          date: "2 février 1848",
          title: "Traité de Guadalupe Hidalgo",
          description: "Le Mexique cède aux États-Unis environ 1,36 million de km² (près de 55 % de son territoire d'avant-guerre), à l'issue de la guerre américano-mexicaine de 1846-1848.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Guadalupe_Hidalgo",
        },
        {
          date: "1864-1867",
          title: "Second Empire mexicain",
          description: "Soutenu par la France de Napoléon III, l'archiduc autrichien Maximilien de Habsbourg règne sur le Mexique avant d'être capturé et exécuté par les forces républicaines de Benito Juárez.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Second_Mexican_Empire",
        },
      ],
    },
    {
      id: "porfiriat-et-revolution",
      title: "Porfiriat et Révolution mexicaine",
      startYear: 1876,
      endYear: 1929,
      summary:
        "Le général Porfirio Díaz domine la vie politique mexicaine pendant environ 35 ans (1876-1911), une période de modernisation économique et d'ouverture aux capitaux étrangers connue sous le nom de « Porfiriat », mais marquée par l'absence de démocratie réelle et de fortes inégalités. Sa réélection contestée en 1910 déclenche la Révolution mexicaine, guerre civile complexe et meurtrière (estimée à plus d'un million de morts) qui voit s'affronter et parfois s'allier des figures comme Francisco Madero, Pancho Villa, Emiliano Zapata et Venustiano Carranza. Elle débouche sur l'adoption, le 5 février 1917, d'une nouvelle Constitution à Querétaro, toujours en vigueur, qui instaure la réforme agraire, les droits du travail et la mainmise de l'État sur le sous-sol.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mexican_Revolution",
      events: [
        {
          date: "1876-1911",
          title: "Le Porfiriat",
          description: "Porfirio Díaz dirige le pays pendant environ trois décennies et demie, modernisant l'économie mais concentrant le pouvoir politique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Porfirio_D%C3%ADaz",
        },
        {
          date: "20 novembre 1910",
          title: "Déclenchement de la Révolution mexicaine",
          description: "Francisco Madero appelle à l'insurrection contre Porfirio Díaz, ouvrant une décennie de guerre civile.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mexican_Revolution",
        },
        {
          date: "5 février 1917",
          title: "Constitution de Querétaro",
          description: "Adoption de la Constitution toujours en vigueur, l'une des plus avancées de son temps en matière de droits sociaux.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Mexico",
        },
      ],
    },
    {
      id: "pri-71-ans",
      title: "Le PRI et 71 ans de pouvoir ininterrompu",
      startYear: 1929,
      endYear: 2000,
      summary:
        "Fondé le 4 mars 1929 par le président Plutarco Elías Calles sous le nom de Parti national révolutionnaire (PNR), rebaptisé Parti de la révolution mexicaine (PRM) en 1938 par Lázaro Cárdenas puis Parti révolutionnaire institutionnel (PRI) le 18 janvier 1946, ce parti a remporté sans discontinuité toutes les élections présidentielles de 1929 à 2000, soit 71 années consécutives au pouvoir — l'une des plus longues dominations électorales ininterrompues d'un même parti au XXe siècle. L'écrivain péruvien Mario Vargas Llosa qualifiait en 1990 ce système de « dictature parfaite », en ce qu'il combinait des élections régulières avec un contrôle très étroit de l'appareil d'État, du clientélisme et, selon plusieurs organisations de défense des droits humains, une répression de l'opposition (notamment lors du massacre de Tlatelolco, le 2 octobre 1968, où l'armée a tiré sur des manifestants étudiants). Cette domination prend fin le 2 juillet 2000 avec l'élection de Vicente Fox, du Parti action nationale (PAN), première alternance démocratique au pouvoir exécutif depuis 1929 ; le PRI reviendra brièvement à la présidence de 2012 à 2018 avec Enrique Peña Nieto, avant une nouvelle défaite électorale.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Institutional_Revolutionary_Party",
      events: [
        {
          date: "4 mars 1929",
          title: "Fondation du parti (PNR)",
          description: "Plutarco Elías Calles fonde le Parti national révolutionnaire, qui deviendra le PRI en 1946 et dominera la vie politique mexicaine pendant 71 ans.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Institutional_Revolutionary_Party",
        },
        {
          date: "2 octobre 1968",
          title: "Massacre de Tlatelolco",
          description: "Dix jours avant les Jeux olympiques de Mexico, l'armée ouvre le feu sur des manifestants étudiants place des Trois-Cultures ; le bilan, contesté, va de quelques dizaines à plusieurs centaines de morts.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Tlatelolco_massacre",
        },
        {
          date: "2 juillet 2000",
          title: "Élection de Vicente Fox",
          description: "Le candidat du Parti action nationale (PAN) met fin à 71 ans de pouvoir ininterrompu du PRI, dans ce qui est considéré comme la première véritable alternance démocratique du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2000_Mexican_general_election",
        },
      ],
    },
    {
      id: "mexique-contemporain",
      title: "Alternance démocratique et guerre contre le narcotrafic",
      startYear: 2000,
      endYear: "present",
      summary:
        "Depuis 2000, le pouvoir a alterné entre plusieurs partis (PAN, PRI, puis Morena à partir de 2018). Le président Felipe Calderón (PAN) lance le 11 décembre 2006 une vaste offensive militaire contre les cartels de la drogue, la « guerra contra el narcotráfico », en déployant l'armée dans plusieurs États. Cette politique s'accompagne d'une hausse spectaculaire et durable des homicides : selon les données officielles, le nombre d'homicides recensés est passé de quelques milliers par an au milieu des années 2000 à plus de 31 000 en 2017, année la plus meurtrière jamais enregistrée jusque-là, pour un total cumulé estimé à plusieurs centaines de milliers de morts depuis 2006. Andrés Manuel López Obrador (Morena), élu en 2018 avec la promesse d'une stratégie de sécurité différente (« des câlins, pas des balles »), voit les homicides se stabiliser à un niveau élevé sans refluer significativement. Sa proche collaboratrice Claudia Sheinbaum, ancienne cheffe du gouvernement de Mexico, lui succède en 2024 et devient la première femme élue présidente du Mexique.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mexican_drug_war",
      events: [
        {
          date: "11 décembre 2006",
          title: "Lancement de la guerre contre le narcotrafic",
          description: "Le président Felipe Calderón déploie l'armée contre les cartels de la drogue, notamment dans l'État du Michoacán, ouvrant une escalade de violence durable.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mexican_drug_war",
        },
        {
          date: "2017",
          title: "Année la plus meurtrière jusqu'alors",
          description: "Plus de 31 000 homicides sont recensés dans l'année, un record depuis le début des statistiques modernes, dépassé par la suite.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Crime_in_Mexico",
        },
        {
          date: "1er octobre 2024",
          title: "Investiture de Claudia Sheinbaum",
          description: "Claudia Sheinbaum devient la première femme présidente du Mexique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Claudia_Sheinbaum",
        },
      ],
    },
  ],
};
