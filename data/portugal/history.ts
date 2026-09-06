import type { HistoryData } from "@/lib/types";

const ANTT = "Arquivo Nacional Torre do Tombo";
const ANTT_URL = "https://antt.arquivos.pt/";
const PARLAMENTO = "Assembleia da República";
const PARLAMENTO_URL = "https://www.parlamento.pt/";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "antiquite",
      title: "Antiquité",
      startYear: -700,
      endYear: 1096,
      summary:
        "Peuplé par les Lusitaniens puis intégré à l'Empire romain sous le nom de Lusitanie, le territoire connaît ensuite les royaumes suève et wisigoth, avant la conquête musulmane de 711.",
      source: ANTT,
      sourceUrl: ANTT_URL,
      events: [
        {
          date: "138 av. J.-C.",
          title: "Mort de Viriathe",
          description: "La résistance lusitanienne face à Rome, incarnée par Viriathe, s'achève avec sa mort.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
        {
          date: "711",
          title: "Conquête musulmane",
          description: "Le territoire est intégré à Al-Andalus après la conquête omeyyade de la péninsule Ibérique.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
      ],
    },
    {
      id: "fondation-royaume",
      title: "Moyen Âge",
      startYear: 1096,
      endYear: 1415,
      summary:
        "Le comté portugalais se détache du royaume de León puis s'affirme comme royaume indépendant, tandis que la Reconquista progresse vers le sud jusqu'aux frontières actuelles.",
      source: ANTT,
      sourceUrl: ANTT_URL,
      events: [
        {
          date: "1143",
          title: "Reconnaissance du royaume du Portugal",
          description: "Afonso Henriques est reconnu comme premier roi du Portugal par le royaume de León.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
        {
          date: "1249",
          title: "Achèvement de la Reconquista portugaise",
          description: "La prise de Faro, en Algarve, fixe les frontières terrestres du royaume, restées quasiment inchangées depuis.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
      ],
    },
    {
      id: "grandes-decouvertes",
      title: "Époque des Grandes Découvertes",
      startYear: 1415,
      endYear: 1640,
      summary:
        "Le Portugal ouvre l'ère des grandes explorations maritimes européennes, bâtissant un vaste empire colonial et commercial, avant de perdre son indépendance sous l'Union ibérique (1580-1640).",
      source: ANTT,
      sourceUrl: ANTT_URL,
      events: [
        {
          date: "1415",
          title: "Prise de Ceuta",
          description: "Cette expédition marque le début conventionnel de l'expansion maritime portugaise.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
        {
          date: "1498",
          title: "Vasco de Gama atteint l'Inde",
          description: "Première route maritime européenne directe vers l'Inde, contournant l'Afrique.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
        {
          date: "1580 – 1640",
          title: "Union ibérique",
          description: "Le Portugal est uni à la couronne d'Espagne sous une même monarchie, jusqu'à la restauration de l'indépendance en 1640.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
      ],
    },
    {
      id: "xixe-siecle",
      title: "XIXe siècle",
      startYear: 1640,
      endYear: 1910,
      summary:
        "Après la restauration de l'indépendance, le Portugal traverse les invasions napoléoniennes, l'indépendance du Brésil et une monarchie constitutionnelle de plus en plus instable.",
      source: ANTT,
      sourceUrl: ANTT_URL,
      events: [
        {
          date: "1822",
          title: "Indépendance du Brésil",
          description: "La principale colonie portugaise en Amérique proclame son indépendance.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXe siècle",
      startYear: 1910,
      endYear: 1986,
      summary:
        "La République proclamée en 1910 cède la place à une longue dictature (l'Estado Novo), renversée en 1974 par la révolution des Œillets, qui ouvre la voie à la démocratie et à la décolonisation.",
      source: PARLAMENTO,
      sourceUrl: PARLAMENTO_URL,
      events: [
        {
          date: "5 octobre 1910",
          title: "Proclamation de la République",
          description: "La monarchie est renversée et la Première République portugaise est proclamée.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
        {
          date: "1933 – 1974",
          title: "L'Estado Novo",
          description: "Régime autoritaire dirigé notamment par António de Oliveira Salazar.",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
        {
          date: "25 avril 1974",
          title: "Révolution des Œillets",
          description: "Un coup d'État militaire renverse pacifiquement l'Estado Novo et ouvre la transition démocratique.",
          source: PARLAMENTO,
          sourceUrl: PARLAMENTO_URL,
        },
        {
          date: "1975",
          title: "Décolonisation",
          description: "Indépendance des colonies portugaises d'Afrique (Angola, Mozambique, Guinée-Bissau, Cap-Vert, São Tomé-et-Príncipe).",
          source: ANTT,
          sourceUrl: ANTT_URL,
        },
        {
          date: "2 avril 1976",
          title: "Adoption de la Constitution",
          description: "La Constitution démocratique actuelle entre en vigueur.",
          source: PARLAMENTO,
          sourceUrl: PARLAMENTO_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1986,
      endYear: "present",
      summary:
        "Membre de la Communauté économique européenne depuis 1986, le Portugal a adopté l'euro et s'est imposé comme une destination touristique et technologique dynamique.",
      source: PARLAMENTO,
      sourceUrl: PARLAMENTO_URL,
      events: [
        {
          date: "2002",
          title: "Passage à l'euro fiduciaire",
          description: "Les pièces et billets en euros remplacent l'escudo dans les transactions courantes.",
          source: "Banco de Portugal",
          sourceUrl: "https://www.bportugal.pt/",
        },
      ],
    },
  ],
};
