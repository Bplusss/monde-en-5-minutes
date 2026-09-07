import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Greece";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'Antiquité grecque, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "antiquite",
      title: "Grèce antique",
      startYear: -800,
      endYear: 146,
      summary:
        "Les cités-États grecques, dont Athènes et sa démocratie naissante, développent une civilisation qui influence durablement la philosophie, les arts et les sciences occidentales, avant l'intégration progressive du monde grec à l'Empire romain.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Vers 508 av. J.-C.",
          title: "Réformes de Clisthène à Athènes",
          description: "Mise en place des institutions fondatrices de la démocratie athénienne.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "146 av. J.-C.",
          title: "Conquête romaine de la Grèce",
          description: "La Grèce devient une province de la République romaine après la bataille de Corinthe.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "byzance",
      title: "Empire byzantin",
      startYear: 330,
      endYear: 1453,
      summary:
        "Après la partition de l'Empire romain, le monde grec devient le cœur de l'Empire byzantin, de langue et de culture grecques, jusqu'à la prise de Constantinople par les Ottomans.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "330",
          title: "Fondation de Constantinople",
          description: "Constantin Iᵉʳ fait de Byzance la nouvelle capitale de l'Empire romain, rebaptisée Constantinople.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "29 mai 1453",
          title: "Chute de Constantinople",
          description: "La prise de la ville par les Ottomans marque la fin de l'Empire byzantin.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "domination-ottomane",
      title: "Domination ottomane",
      startYear: 1453,
      endYear: 1821,
      summary:
        "Le territoire grec passe presque en totalité sous administration ottomane, tout en conservant une identité orthodoxe et hellénophone qui nourrira les mouvements nationaux du XIXᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "independance",
      title: "Indépendance et formation de l'État",
      startYear: 1821,
      endYear: 1913,
      summary:
        "La guerre d'indépendance aboutit à la création d'un État grec en 1830, dont le territoire s'agrandit progressivement au cours du siècle suivant, notamment lors des guerres balkaniques.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "25 mars 1821",
          title: "Déclenchement de la guerre d'indépendance",
          description: "Début du soulèvement contre la domination ottomane, dont la date est devenue fête nationale.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1830",
          title: "Reconnaissance internationale de l'indépendance",
          description: "Le protocole de Londres reconnaît la Grèce comme un État souverain.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1912-1913",
          title: "Guerres balkaniques",
          description: "La Grèce annexe la Macédoine, l'Épire et la Crète, doublant quasiment son territoire.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXe siècle",
      startYear: 1913,
      endYear: 1974,
      summary:
        "Le siècle est marqué par l'échange de populations avec la Turquie, l'occupation par l'Axe pendant la Seconde Guerre mondiale, une guerre civile, puis une dictature militaire de 1967 à 1974.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1923",
          title: "Traité de Lausanne",
          description: "Échange de populations grecques et turques ; la minorité musulmane de Thrace occidentale reste sur place, seule exception reconnue.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1941-1944",
          title: "Occupation par les forces de l'Axe",
          description: "Occupation allemande, italienne et bulgare pendant la Seconde Guerre mondiale, suivie d'une guerre civile jusqu'en 1949.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1967-1974",
          title: "Dictature des colonels",
          description: "Un régime militaire dirige le pays jusqu'à son effondrement après la crise chypriote de 1974.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1974,
      endYear: "present",
      summary:
        "Le rétablissement de la démocratie en 1974 (Metapolitefsi) est suivi de l'entrée dans la Communauté européenne en 1981, puis de l'adoption de l'euro en 2001. La grave crise de la dette souveraine de 2010-2018 a durablement marqué le pays avant un retour à la croissance.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1981",
          title: "Adhésion à la Communauté économique européenne",
          description: "La Grèce devient le dixième État membre de la CEE.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "2001",
          title: "Adoption de l'euro",
          description: "La Grèce rejoint la zone euro, avec deux ans de retard sur les autres membres fondateurs.",
          source: "Banque de Grèce",
          sourceUrl: "https://www.bankofgreece.gr/",
        },
        {
          date: "2010-2018",
          title: "Crise de la dette et plans d'aide internationaux",
          description: "Trois programmes d'assistance financière internationale, assortis de plans d'austérité, permettent d'éviter le défaut de paiement.",
          source: "Banque de Grèce",
          sourceUrl: "https://www.bankofgreece.gr/",
        },
      ],
    },
  ],
};
