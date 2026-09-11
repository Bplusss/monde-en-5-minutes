import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Moldova";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire moldave, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "principaute-medievale",
      title: "La principauté médiévale de Moldavie",
      startYear: 1359,
      endYear: 1812,
      summary:
        "Fondée par le voïvode Bogdan Iᵉʳ en 1359, la principauté de Moldavie couvre alors un territoire bien plus vaste que la Moldavie actuelle, incluant la Bucovine et une large part de l'actuelle Roumanie orientale. Elle atteint son apogée sous le règne du prince Étienne le Grand (1457-1504), qui multiplie les victoires militaires contre ses voisins avant que la principauté ne passe sous suzeraineté ottomane.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "bessarabie-russe",
      title: "La Bessarabie sous l'Empire russe",
      startYear: 1812,
      endYear: 1918,
      summary:
        "À l'issue de la guerre russo-turque de 1806-1812, le traité de Bucarest cède à la Russie la partie orientale de la principauté de Moldavie, entre le Prout et le Dniestr, qui prend le nom de Bessarabie. La région reste une province périphérique de l'Empire russe pendant un siècle, à l'écart de l'union des principautés roumaines de 1859.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1812",
          title: "Traité de Bucarest",
          description: "La Russie annexe la Bessarabie, territoire compris entre le Prout et le Dniestr, à l'issue de sa guerre contre l'Empire ottoman.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Bucharest_(1812)",
        },
      ],
    },
    {
      id: "roumanie-urss",
      title: "Union avec la Roumanie puis Moldavie soviétique",
      startYear: 1918,
      endYear: 1991,
      summary:
        "Profitant de l'effondrement de l'Empire russe, la Bessarabie proclame son union avec la Roumanie en 1918. L'URSS, qui n'a jamais reconnu cette annexion, l'occupe en 1940 en application du pacte germano-soviétique, avant une brève reconquête roumaine pendant la Seconde Guerre mondiale puis une réoccupation soviétique définitive en 1944. La République socialiste soviétique de Moldavie est alors constituée en associant l'essentiel de la Bessarabie à une bande de territoire à l'est du Dniestr (l'actuelle Transnistrie), auparavant jamais unie à la Moldavie historique, une décision aux lourdes conséquences pour l'après-indépendance.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1940",
          title: "Formation de la RSS de Moldavie",
          description: "L'URSS annexe la Bessarabie et crée la République socialiste soviétique de Moldavie en y adjoignant une bande de territoire à l'est du Dniestr, jusque-là partie de la RSS d'Ukraine.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Moldavian_Soviet_Socialist_Republic",
        },
      ],
    },
    {
      id: "independance-transnistrie",
      title: "Indépendance, guerre de Transnistrie et rapprochement européen",
      startYear: 1991,
      endYear: "present",
      summary:
        "La République de Moldavie proclame son indépendance le 27 août 1991. Dès 1992, une guerre courte mais meurtrière oppose le gouvernement central aux séparatistes prorusses de la rive gauche du Dniestr, soutenus par la 14ᵉ armée russe stationnée sur place : le conflit se solde par un cessez-le-feu qui laisse la Transnistrie de facto indépendante, hors du contrôle de Chișinău, une situation gelée depuis plus de trois décennies. Le pays engage depuis les années 2010 un rapprochement accéléré avec l'Union européenne, obtenant le statut de candidat en juin 2022, quelques mois après le début de l'invasion russe de l'Ukraine voisine.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "27 août 1991",
          title: "Déclaration d'indépendance",
          description: "La République de Moldavie proclame son indépendance de l'Union soviétique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Moldovan_Declaration_of_Independence",
        },
        {
          date: "Mars-juillet 1992",
          title: "Guerre de Transnistrie",
          description: "Le conflit entre le gouvernement moldave et les séparatistes de la rive gauche du Dniestr, appuyés par la 14ᵉ armée russe, se solde par un cessez-le-feu laissant la Transnistrie hors du contrôle de Chișinău.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Transnistria_War",
        },
        {
          date: "Juin 2022",
          title: "Statut de candidat à l'Union européenne",
          description: "Le Conseil européen accorde à la Moldavie le statut de pays candidat à l'adhésion, quelques mois après le début de l'invasion russe de l'Ukraine.",
          source: "Commission européenne",
          sourceUrl: "https://neighbourhood-enlargement.ec.europa.eu/moldova_en",
        },
      ],
    },
  ],
};
