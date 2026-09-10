import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Vatican-City";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction de l'État moderne — pas un résumé exhaustif de l'histoire de la papauté, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "etats-pontificaux",
      title: "Les États pontificaux",
      startYear: 756,
      endYear: 1870,
      summary:
        "Pendant plus d'un millénaire, les papes exercent une souveraineté temporelle sur un vaste territoire d'Italie centrale, les États pontificaux, issus d'une donation du roi franc Pépin le Bref en 756. Ce pouvoir séculier s'effondre lors de l'unification italienne du XIXᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "756",
          title: "Donation de Pépin",
          description: "Le roi des Francs Pépin le Bref cède au pape Étienne II un vaste territoire d'Italie centrale, fondant le pouvoir temporel pontifical qui durera plus de mille ans.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Donation_of_Pepin",
        },
        {
          date: "20 septembre 1870",
          title: "Prise de Rome",
          description: "Les troupes du royaume d'Italie s'emparent de Rome, mettant fin aux États pontificaux ; le pape Pie IX se déclare « prisonnier au Vatican » et refuse de reconnaître la souveraineté italienne sur la ville.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "question-romaine",
      title: "La « question romaine »",
      startYear: 1870,
      endYear: 1929,
      summary:
        "Pendant près de six décennies, les papes se considèrent captifs de leur propre palais et refusent tout compromis avec l'État italien, qui leur avait pourtant unilatéralement garanti certains privilèges par la loi des garanties de 1871. Ce différend, appelé « question romaine », n'est résolu que sous le régime fasciste de Mussolini.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1871",
          title: "Loi des garanties",
          description: "Le royaume d'Italie accorde unilatéralement au pape des prérogatives symboliques et financières, sans lui reconnaître de souveraineté territoriale ; le Saint-Siège rejette cette loi qu'il n'a pas négociée.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Law_of_Guarantees",
        },
      ],
    },
    {
      id: "traite-latran",
      title: "Le traité du Latran et l'État moderne",
      startYear: 1929,
      endYear: "present",
      summary:
        "Le traité du Latran de 1929, signé entre le pape Pie XI et Mussolini, crée l'État de la Cité du Vatican dans ses frontières actuelles et met fin à la question romaine. Le concile Vatican II, dans les années 1960, modernise en profondeur la liturgie et la doctrine de l'Église catholique, tandis que la fin du XXᵉ et le début du XXIᵉ siècle voient se succéder plusieurs papautés marquantes, jusqu'à la démission inédite de Benoît XVI en 2013.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "11 février 1929",
          title: "Traité du Latran",
          description: "Ce traité, complété par un concordat, crée l'État souverain de la Cité du Vatican sur 44 hectares et règle définitivement la question romaine entre le Saint-Siège et l'Italie.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1962-1965",
          title: "Concile Vatican II",
          description: "Ce concile œcuménique engage une vaste réforme de la liturgie (messe en langue vernaculaire) et modernise les relations de l'Église catholique avec le monde contemporain et les autres confessions.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Second_Vatican_Council",
        },
        {
          date: "28 février 2013",
          title: "Démission de Benoît XVI",
          description: "Le pape Benoît XVI devient le premier pape à démissionner volontairement depuis près de six siècles, invoquant son âge et l'affaiblissement de ses forces.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Resignation_of_Pope_Benedict_XVI",
        },
        {
          date: "8 mai 2025",
          title: "Élection du pape Léon XIV",
          description: "Le cardinal américain Robert Francis Prevost est élu pape à l'issue du conclave réuni après la mort du pape François, devenant le premier pape né aux États-Unis de l'histoire.",
          source: "Vatican News",
          sourceUrl: "https://www.vaticannews.va/en/vatican/news/2025-05/habemus-papam-leo-xiv.html",
        },
      ],
    },
  ],
};
