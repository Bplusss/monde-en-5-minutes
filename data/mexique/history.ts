import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";
const WIKIPEDIA_HISTORY = "https://en.wikipedia.org/wiki/History_of_Mexico";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "civilisations-precolombiennes",
      title: "Civilisations précolombiennes",
      startYear: -1200,
      endYear: 1521,
      summary:
        "Plusieurs grandes civilisations mésoaméricaines se succèdent : les Olmèques, « culture mère » de la région dès environ 1200 avant notre ère, les Mayas, qui développent dans le Sud-Est une écriture, une astronomie et une architecture monumentale, ou la cité de Teotihuacan, peut-être peuplée de plus de 100 000 habitants à son apogée (Ier-VIIe siècle). Au XVe siècle, les Mexicas (Aztèques) dominent un vaste empire tributaire en Mésoamérique centrale.",
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
        "Les conquistadors de Hernán Cortés, d'abord accueillis par l'empereur Moctezuma II, sont chassés de Tenochtitlan lors de la « Noche Triste » (30 juin 1520), avant qu'une épidémie de variole ne décime la ville. Les épidémies successives provoquent au XVIe siècle l'un des effondrements démographiques les plus massifs de l'histoire : la population du Mexique central, estimée entre 15 et 25 millions avant contact, tombe à environ un million au début du XVIIe siècle selon les historiens Cook et Borah. Rebaptisé Nouvelle-Espagne, le territoire devient pour trois siècles l'une des colonies les plus riches de l'empire espagnol, grâce à l'argent de Zacatecas et de Guanajuato.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Spanish_conquest_of_the_Aztec_Empire",
      events: [
        {
          date: "1519",
          title: "Débarquement de Hernán Cortés",
          description: "L'expédition de Hernán Cortés, environ 630 hommes, débarque au Yucatán et marche vers Tenochtitlan.",
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
          description: "Le prêtre Miguel Hidalgo appelle à l'insurrection contre l'Espagne, début de la guerre d'indépendance ; la date est devenue fête nationale.",
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
        "Le jeune État, instable, multiplie les coups d'État et perd le Texas, qui fait sécession en 1836. L'annexion du Texas par les États-Unis en 1845 dégénère en guerre (1846-1848) : le Mexique perd plus de la moitié de son territoire, de la Californie au Nouveau-Mexique. Profitant de l'endettement du pays, la France l'envahit en 1862, avant d'être chassée par les républicains de Benito Juárez, artisan des réformes libérales et anticléricales de la « Reforma ».",
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
        "Le « Porfiriat » de Porfirio Díaz (1876-1911) modernise l'économie et l'ouvre aux capitaux étrangers, sans démocratie réelle et avec de fortes inégalités. Sa réélection contestée en 1910 déclenche la Révolution, guerre civile meurtrière (plus d'un million de morts estimés) où s'affrontent et s'allient Francisco Madero, Pancho Villa, Emiliano Zapata et Venustiano Carranza. Elle aboutit à la Constitution de 1917, qui instaure la réforme agraire, les droits du travail et la mainmise de l'État sur le sous-sol.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mexican_Revolution",
      events: [
        {
          date: "1876-1911",
          title: "Le Porfiriat",
          description: "Porfirio Díaz modernise l'économie tout en concentrant le pouvoir.",
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
        "Rebaptisé Parti de la révolution mexicaine (PRM) en 1938 par Lázaro Cárdenas puis Parti révolutionnaire institutionnel (PRI) en 1946, le parti fondé en 1929 remporte toutes les présidentielles pendant 71 ans. Mario Vargas Llosa qualifie en 1990 ce système de « dictature parfaite » : des élections régulières, mais un contrôle étroit de l'appareil d'État, du clientélisme et la répression de l'opposition. Le PRI reviendra au pouvoir de 2012 à 2018 avec Enrique Peña Nieto.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Institutional_Revolutionary_Party",
      events: [
        {
          date: "4 mars 1929",
          title: "Fondation du parti (PNR)",
          description: "Le président Plutarco Elías Calles fonde le Parti national révolutionnaire, futur PRI.",
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
          description: "Le candidat du Parti action nationale (PAN) met fin à 71 ans de pouvoir du PRI : première véritable alternance démocratique du pays.",
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
        "Depuis 2000, le pouvoir alterne entre PAN, PRI puis Morena à partir de 2018. L'offensive militaire contre les cartels, la « guerra contra el narcotráfico », s'accompagne d'une hausse spectaculaire et durable des homicides, de quelques milliers par an au milieu des années 2000 à plusieurs centaines de milliers de morts cumulés depuis 2006. Sous Andrés Manuel López Obrador (Morena), élu en 2018 sur la promesse « des câlins, pas des balles », les homicides se stabilisent à un niveau élevé. Sa proche Claudia Sheinbaum, ancienne cheffe du gouvernement de Mexico, lui succède en 2024.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mexican_drug_war",
      events: [
        {
          date: "11 décembre 2006",
          title: "Lancement de la guerre contre le narcotrafic",
          description: "Le président Felipe Calderón (PAN) déploie l'armée contre les cartels, d'abord au Michoacán, ouvrant une escalade de violence durable.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mexican_drug_war",
        },
        {
          date: "2017",
          title: "Année la plus meurtrière jusqu'alors",
          description: "Plus de 31 000 homicides recensés, un record dépassé par la suite.",
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
