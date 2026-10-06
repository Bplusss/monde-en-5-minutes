import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire néo-zélandaise.",
  periods: [
    {
      id: "peuplement-maori",
      title: "Le peuplement polynésien",
      startYear: 1250,
      endYear: 1642,
      summary:
        "Dernière grande terre à avoir été peuplée par l'homme, la Nouvelle-Zélande est atteinte vers 1250-1300 par des navigateurs polynésiens venus en pirogues à balancier depuis l'est du Pacifique. Leurs descendants, les Māori, développent une culture propre, organisée en tribus (iwi), et chassent jusqu'à l'extinction les moa, des oiseaux géants incapables de voler.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_New_Zealand",
      events: [
        {
          date: "vers 1250-1300",
          title: "Arrivée des premiers Polynésiens",
          description: "Les traditions māories évoquent l'arrivée de plusieurs grandes pirogues (waka) depuis Hawaiki.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Māori_people",
        },
        {
          date: "vers 1400",
          title: "Extinction des moa",
          description: "Ces oiseaux géants, dont certains dépassaient 3 m, disparaissent en un siècle sous la pression de la chasse.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Moa",
        },
      ],
    },
    {
      id: "contacts-europeens",
      title: "Navigateurs, baleiniers et missionnaires",
      startYear: 1642,
      endYear: 1840,
      summary:
        "Le Néerlandais Abel Tasman aperçoit les côtes en 1642, puis James Cook en dresse la carte à partir de 1769. Baleiniers, chasseurs de phoques et missionnaires s'installent au début du XIXe siècle. L'introduction des armes à feu provoque entre tribus les « guerres des mousquets », qui font des dizaines de milliers de morts.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Abel_Tasman",
      events: [
        {
          date: "1642",
          title: "Abel Tasman",
          description: "Le navigateur néerlandais est le premier Européen à atteindre ces côtes, qu'il quitte après un affrontement avec des Māori.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Abel_Tasman",
        },
        {
          date: "1769",
          title: "Premier voyage de James Cook",
          description: "Cook fait le tour des deux îles et en dresse une carte remarquablement précise.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/First_voyage_of_James_Cook",
        },
      ],
    },
    {
      id: "waitangi-colonisation",
      title: "Le traité de Waitangi et la colonisation",
      startYear: 1840,
      endYear: 1907,
      summary:
        "Le traité de Waitangi, signé en 1840 entre la Couronne britannique et des chefs māori, fonde la colonie, mais ses versions anglaise et māorie divergent sur la souveraineté. L'afflux de colons et les achats ou confiscations de terres déclenchent les guerres de Nouvelle-Zélande (1845-1872). La population māorie s'effondre, tandis que la colonie prospère grâce à la laine, à l'or et, après l'invention des navires frigorifiques, à la viande exportée vers le Royaume-Uni.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Waitangi",
      events: [
        {
          date: "6 février 1840",
          title: "Signature du traité de Waitangi",
          description: "La date est devenue la fête nationale, Waitangi Day.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Waitangi",
        },
        {
          date: "19 septembre 1893",
          title: "Droit de vote des femmes",
          description: "La Nouvelle-Zélande devient le premier pays autonome à accorder le droit de vote aux femmes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Women%27s_suffrage_in_New_Zealand",
        },
      ],
    },
    {
      id: "dominion-guerres",
      title: "Le dominion et les guerres mondiales",
      startYear: 1907,
      endYear: 1947,
      summary:
        "Devenue dominion en 1907, la Nouvelle-Zélande envoie de nombreux soldats combattre aux côtés du Royaume-Uni. Le débarquement de Gallipoli, en 1915, nourrit le sentiment national, commémoré chaque 25 avril lors de l'Anzac Day. Le premier gouvernement travailliste, élu en 1935, crée l'un des premiers États-providence du monde.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Dominion_of_New_Zealand",
      events: [
        {
          date: "25 avril 1915",
          title: "Débarquement de Gallipoli",
          description: "Les soldats australiens et néo-zélandais (ANZAC) subissent de lourdes pertes dans les Dardanelles.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Gallipoli_campaign",
        },
        {
          date: "1947",
          title: "Adoption du statut de Westminster",
          description: "Le pays obtient sa pleine indépendance législative vis-à-vis du Royaume-Uni.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Statute_of_Westminster_Adoption_Act_1947",
        },
      ],
    },
    {
      id: "affirmation-nationale",
      title: "Affirmation nationale et réformes",
      startYear: 1947,
      endYear: "present",
      summary:
        "L'entrée du Royaume-Uni dans la Communauté européenne en 1973 prive le pays de son principal débouché et l'oblige à se tourner vers l'Asie. Les gouvernements des années 1980 libéralisent radicalement l'économie et font du pays une zone dénucléarisée. Le tribunal de Waitangi, créé en 1975, ouvre la voie à des réparations aux tribus māori. Depuis 1996, le scrutin proportionnel a transformé la vie politique ; l'attentat contre deux mosquées de Christchurch en 2019 a conduit à un durcissement immédiat de la loi sur les armes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_New_Zealand",
      events: [
        {
          date: "10 juillet 1985",
          title: "Sabotage du Rainbow Warrior",
          description: "Des agents des services secrets français coulent le navire de Greenpeace dans le port d'Auckland, tuant un photographe.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sinking_of_the_Rainbow_Warrior",
        },
        {
          date: "15 mars 2019",
          title: "Attentat de Christchurch",
          description: "Un terroriste d'extrême droite tue 51 fidèles dans deux mosquées ; les armes semi-automatiques sont interdites dans le mois.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Christchurch_mosque_shootings",
        },
      ],
    },
  ],
};
