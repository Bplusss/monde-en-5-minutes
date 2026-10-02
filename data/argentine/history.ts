import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire argentine.",
  periods: [
    {
      id: "colonisation-independance",
      title: "De la colonisation espagnole à l'indépendance",
      startYear: 1536,
      endYear: 1816,
      summary:
        "Refondée en 1580, Buenos Aires devient en 1776 la capitale de la Vice-royauté du Río de la Plata, qui englobe aussi l'Uruguay, le Paraguay et la Bolivie actuels. Après les invasions britanniques repoussées en 1806-1807, la Révolution de mai 1810 écarte le vice-roi. L'indépendance est proclamée en 1816 ; José de San Martín part ensuite libérer le Chili et le Pérou.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Argentina",
      events: [
        {
          date: "25 mai 1810",
          title: "Révolution de mai",
          description: "Un cabildo ouvert à Buenos Aires destitue le vice-roi espagnol et installe une junte de gouvernement.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/May_Revolution",
        },
        {
          date: "9 juillet 1816",
          title: "Déclaration d'indépendance",
          description: "Le Congrès de Tucumán proclame l'indépendance des Provinces-Unies du Río de la Plata.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Argentine_Declaration_of_Independence",
        },
      ],
    },
    {
      id: "organisation-nationale",
      title: "Guerres civiles et organisation nationale",
      startYear: 1816,
      endYear: 1930,
      summary:
        "L'indépendance est suivie de longues guerres civiles entre unitaires, partisans d'un pouvoir centralisé à Buenos Aires, et fédéralistes, dominés un temps par le caudillo Juan Manuel de Rosas (1829-1852). Après la Constitution de 1853, le pays connaît à partir des années 1880 un essor porté par les exportations de blé et de bœuf vers l'Europe et par une immigration massive, surtout italienne et espagnole. Ce système reste oligarchique jusqu'au suffrage universel masculin de 1912.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Argentina_(1861%E2%80%931880)",
      events: [
        {
          date: "1er mai 1853",
          title: "Adoption de la Constitution nationale",
          description: "La Constitution fédérale, toujours en vigueur (réformée notamment en 1994), fait de l'Argentine une république fédérale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Argentina",
        },
        {
          date: "1912",
          title: "Loi Sáenz Peña",
          description: "Le suffrage universel masculin, secret et obligatoire met fin au contrôle électoral de l'oligarchie conservatrice.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/S%C3%A1enz_Pe%C3%B1a_Law",
        },
      ],
    },
    {
      id: "peronisme",
      title: "L'irruption du péronisme",
      startYear: 1930,
      endYear: 1976,
      summary:
        "Le coup d'État de 1930 ouvre une période d'instabilité chronique. Porté par le mouvement ouvrier, Juan Domingo Perón est élu en 1946 et 1951 ; son épouse Eva Perón (« Evita ») défend les droits des femmes et des classes populaires jusqu'à sa mort en 1952. Renversé en 1955, Perón revient au pouvoir en 1973 et meurt en 1974. Sa veuve Isabel, confrontée à la violence entre extrême droite et guérillas de gauche, est renversée le 24 mars 1976.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Peronism",
      events: [
        {
          date: "1946",
          title: "Élection de Juan Domingo Perón",
          description: "Début du péronisme, courant toujours structurant de la vie politique argentine.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Juan_Per%C3%B3n",
        },
        {
          date: "1947",
          title: "Droit de vote des femmes",
          description: "Sous l'impulsion d'Eva Perón, l'Argentine accorde le droit de vote aux femmes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Eva_Per%C3%B3n",
        },
      ],
    },
    {
      id: "dictature-1976-1983",
      title: "La dictature militaire (« Processus de réorganisation nationale ») et la guerre des Malouines",
      startYear: 1976,
      endYear: 1983,
      summary:
        "La junte du général Jorge Rafael Videla interdit partis et syndicats et organise un terrorisme d'État fondé sur la disparition forcée : enlèvement, torture, exécution et dissimulation des corps, notamment lors des « vols de la mort ». Le rapport « Nunca Más » de la CONADEP recense en 1984 8 961 disparitions documentées ; les Madres de Plaza de Mayo et d'autres organisations avancent jusqu'à 30 000 victimes, un écart toujours débattu. En 1982, la junte du général Leopoldo Galtieri envahit les Malouines ; la défaite face au Royaume-Uni précipite la chute du régime.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Dirty_War",
      events: [
        {
          date: "24 mars 1976",
          title: "Coup d'État militaire",
          description: "Une junte menée par Jorge Rafael Videla renverse Isabel Perón.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1976_Argentine_coup_d%27%C3%A9tat",
        },
        {
          date: "1976-1983",
          title: "Terrorisme d'État et disparitions forcées",
          description: "Entre 8 961 disparitions documentées par la CONADEP et jusqu'à 30 000 selon les organisations de défense des droits humains.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/CONADEP",
        },
        {
          date: "2 avril - 14 juin 1982",
          title: "Guerre des Malouines",
          description: "Conflit perdu face au Royaume-Uni (environ 649 morts argentins, 255 britanniques).",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Falklands_War",
        },
        {
          date: "30 octobre 1983",
          title: "Élection de Raúl Alfonsín",
          description: "Le retour à un pouvoir civil élu met fin à sept ans de dictature militaire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Ra%C3%BAl_Alfons%C3%ADn",
        },
      ],
    },
    {
      id: "retour-democratie-crise-2001",
      title: "Retour à la démocratie et crise économique de 2001",
      startYear: 1983,
      endYear: 2003,
      summary:
        "Alfonsín fait juger les chefs de la junte mais, rattrapé par l'hyperinflation, quitte le pouvoir avant terme en 1989. Carlos Menem privatise massivement et arrime le peso au dollar (1991), ce qui jugule l'inflation mais fragilise l'économie. Le modèle s'effondre fin 2001 : gel des retraits bancaires, émeutes meurtrières, cinq présidents en deux semaines et défaut sur environ 100 milliards de dollars de dette.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Argentine_great_depression",
      events: [
        {
          date: "1985",
          title: "Procès des commandants",
          description: "Les principaux chefs de la dictature, dont Jorge Rafael Videla, sont jugés et condamnés.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Trial_of_the_Juntas",
        },
        {
          date: "1er décembre 2001",
          title: "Instauration du « corralito »",
          description: "Le gouvernement restreint drastiquement les retraits bancaires pour enrayer la fuite des capitaux.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Corralito",
        },
        {
          date: "20-21 décembre 2001",
          title: "Émeutes et démission de Fernando de la Rúa",
          description: "Des émeutes meurtrières contraignent le président de la Rúa à la démission.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/December_2001_riots_in_Argentina",
        },
        {
          date: "Décembre 2001",
          title: "Défaut de paiement souverain",
          description: "Alors le plus important défaut de paiement de l'histoire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Argentine_debt_restructuring",
        },
      ],
    },
    {
      id: "kirchnerisme-milei",
      title: "Des Kirchner à Javier Milei",
      startYear: 2003,
      endYear: "present",
      summary:
        "Néstor Kirchner (2003-2007) puis Cristina Fernández de Kirchner (2007-2015) conjuguent croissance tirée par l'agriculture, politique redistributive et conflits avec les « fonds vautours », sur fond de retour de l'inflation. Le libéral Mauricio Macri (2015-2019) obtient en 2018 le plus gros prêt de l'histoire du FMI sans stabiliser l'économie. Après Alberto Fernández et une inflation de plus de 200 % en 2023, le libertarien Javier Milei est élu sur la promesse d'une « tronçonneuse » budgétaire.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Argentina",
      events: [
        {
          date: "2003-2015",
          title: "Ère Kirchner",
          description: "Plus d'une décennie de croissance, puis de retour de l'inflation.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/N%C3%A9stor_Kirchner",
        },
        {
          date: "10 décembre 2023",
          title: "Investiture de Javier Milei",
          description: "Le nouveau président promet de juguler l'inflation par une austérité drastique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Javier_Milei",
        },
      ],
    },
  ],
};
