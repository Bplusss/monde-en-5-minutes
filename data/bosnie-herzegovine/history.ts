import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Bosnia-and-Herzegovina";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire bosnienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "royaume-medieval-ottoman",
      title: "Royaume médiéval de Bosnie et cinq siècles ottomans",
      startYear: 1154,
      endYear: 1878,
      summary:
        "Le banat puis royaume médiéval de Bosnie atteint son apogée sous le roi Tvrtko Iᵉʳ au XIVᵉ siècle, avant de tomber sous domination ottomane en 1463. Contrairement au reste des Balkans, une part importante de la population slave locale se convertit à l'islam au fil des siècles ottomans, donnant naissance à l'identité bosniaque moderne, tandis que catholiques et orthodoxes demeurent présents en nombre.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "autriche-hongrie-etincelle",
      title: "L'administration austro-hongroise et l'étincelle de 1914",
      startYear: 1878,
      endYear: 1918,
      summary:
        "L'Autriche-Hongrie obtient l'administration de la Bosnie-Herzégovine en 1878 puis l'annexe formellement en 1908, provoquant une grave crise diplomatique européenne. C'est à Sarajevo que l'archiduc François-Ferdinand, héritier du trône austro-hongrois, est assassiné le 28 juin 1914 par Gavrilo Princip, un nationaliste serbe de Bosnie — l'événement déclencheur de la Première Guerre mondiale.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "28 juin 1914",
          title: "Assassinat de Sarajevo",
          description: "L'assassinat de l'archiduc François-Ferdinand et de son épouse Sophie par Gavrilo Princip déclenche la crise diplomatique qui mène à la Première Guerre mondiale.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Archduke_Franz_Ferdinand",
        },
      ],
    },
    {
      id: "yougoslavie",
      title: "La Bosnie-Herzégovine au sein de la Yougoslavie",
      startYear: 1918,
      endYear: 1992,
      summary:
        "Intégrée au royaume des Serbes, Croates et Slovènes puis à la République fédérative socialiste de Yougoslavie, la Bosnie-Herzégovine y est reconnue en 1946 comme une république constitutive à part entière, réputée pour son caractère multiethnique exemplaire — souvent décrite comme « la Yougoslavie en miniature ». La dislocation de la fédération yougoslave au tournant des années 1990 précipite le pays vers l'indépendance, puis vers la guerre.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "guerre-dayton",
      title: "La guerre de 1992-1995 et les accords de Dayton",
      startYear: 1992,
      endYear: 1995,
      summary:
        "L'indépendance, proclamée après un référendum boycotté par la population serbe en mars 1992, déclenche une guerre d'une violence extrême marquée par des politiques de nettoyage ethnique. Sarajevo subit le plus long siège d'une capitale de l'histoire militaire moderne (près de quatre ans), tandis que le massacre de plus de huit mille hommes et garçons bosniaques à Srebrenica en juillet 1995 est reconnu comme un génocide par les tribunaux internationaux. Le conflit, qui fait environ cent mille morts, prend fin avec la signature des accords de paix de Dayton en décembre 1995, qui redessinent l'architecture institutionnelle du pays.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "5 avril 1992 – 29 février 1996",
          title: "Siège de Sarajevo",
          description: "Le siège de la capitale bosnienne par les forces serbes de Bosnie, qui dure près de 1 425 jours, est le plus long siège d'une capitale de l'histoire de la guerre moderne.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Siege_of_Sarajevo",
        },
        {
          date: "Juillet 1995",
          title: "Génocide de Srebrenica",
          description: "Plus de huit mille hommes et adolescents bosniaques sont exécutés par les forces serbes de Bosnie autour de l'enclave de Srebrenica, un massacre qualifié de génocide par le Tribunal pénal international pour l'ex-Yougoslavie et la Cour internationale de justice.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Srebrenica_massacre",
        },
        {
          date: "14 décembre 1995",
          title: "Signature des accords de Dayton",
          description: "L'accord de paix, négocié à Dayton (États-Unis) et signé à Paris, met fin à la guerre et instaure la structure institutionnelle actuelle du pays, divisé en deux entités.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "reconstruction",
      title: "Reconstruction et rapprochement européen",
      startYear: 1995,
      endYear: "present",
      summary:
        "Sous la supervision d'un Haut représentant international doté de pouvoirs exécutifs exceptionnels, la Bosnie-Herzégovine engage une reconstruction lente, freinée par la complexité institutionnelle héritée de Dayton et par des blocages politiques récurrents entre les représentants des trois peuples constitutifs. Le pays obtient le statut de candidat à l'Union européenne en décembre 2022.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Décembre 2022",
          title: "Statut de candidat à l'Union européenne",
          description: "Le Conseil européen accorde à la Bosnie-Herzégovine le statut de pays candidat à l'adhésion.",
          source: "Commission européenne",
          sourceUrl: "https://neighbourhood-enlargement.ec.europa.eu/bosnia-and-herzegovina_en",
        },
      ],
    },
  ],
};
