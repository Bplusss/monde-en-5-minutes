import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire argentine, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "colonisation-independance",
      title: "De la colonisation espagnole à l'indépendance",
      startYear: 1536,
      endYear: 1816,
      summary:
        "Fondée une première fois par les Espagnols en 1536 puis détruite, Buenos Aires est refondée en 1580 et devient en 1776 la capitale de la Vice-royauté du Río de la Plata, créée par la couronne d'Espagne pour englober l'actuelle Argentine ainsi que l'Uruguay, le Paraguay et la Bolivie. Le mouvement d'émancipation s'accélère après les invasions britanniques repoussées en 1806-1807 et la Révolution de mai 1810, qui met fin au gouvernement du vice-roi espagnol. L'indépendance des Provinces-Unies du Río de la Plata est proclamée le 9 juillet 1816 au Congrès de Tucumán, sous l'impulsion de figures comme José de San Martín, qui mène ensuite ses armées libérer le Chili et le Pérou du joug colonial espagnol.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Argentina",
      events: [
        {
          date: "25 mai 1810",
          title: "Révolution de mai",
          description: "Un cabildo ouvert à Buenos Aires destitue le vice-roi espagnol et installe une junte de gouvernement, première étape du processus d'indépendance.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/May_Revolution",
        },
        {
          date: "9 juillet 1816",
          title: "Déclaration d'indépendance",
          description: "Le Congrès de Tucumán proclame l'indépendance des Provinces-Unies du Río de la Plata vis-à-vis de l'Espagne.",
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
        "Les décennies qui suivent l'indépendance sont marquées par de longues guerres civiles opposant unitaires, partisans d'un pouvoir centralisé à Buenos Aires, et fédéralistes, attachés à l'autonomie des provinces — un conflit dominé un temps par le caudillo fédéraliste Juan Manuel de Rosas (gouverneur de Buenos Aires de 1829 à 1852). La Constitution fédérale de 1853 organise durablement le pays, qui connaît à partir des années 1880 une croissance économique et démographique considérable, portée par les exportations agricoles (blé, bœuf) vers l'Europe et une immigration massive, principalement italienne et espagnole, qui transforme profondément la société argentine, en particulier à Buenos Aires. Cette période, souvent qualifiée d'âge d'or économique, s'accompagne toutefois d'un système politique oligarchique jusqu'à l'adoption du suffrage universel masculin secret en 1912 (loi Sáenz Peña).",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Argentina_(1861%E2%80%931880)",
      events: [
        {
          date: "1er mai 1853",
          title: "Adoption de la Constitution nationale",
          description: "La Constitution fédérale, encore en vigueur aujourd'hui (largement réformée depuis, notamment en 1994), organise l'Argentine en république fédérale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Argentina",
        },
        {
          date: "1912",
          title: "Loi Sáenz Peña",
          description: "L'instauration du suffrage universel masculin, secret et obligatoire met fin au contrôle électoral exercé par l'oligarchie conservatrice.",
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
        "Une série de coups d'État militaires, à commencer par celui de 1930, ouvre une période d'instabilité chronique. Le colonel Juan Domingo Perón, porté au pouvoir par un mouvement ouvrier et nationaliste, est élu président en 1946 et 1951 ; son épouse Eva Perón (« Evita »), figure emblématique du mouvement péroniste, œuvre pour les droits des femmes (droit de vote obtenu en 1947) et des classes populaires jusqu'à sa mort en 1952. Renversé par un coup d'État militaire en 1955 puis exilé, Perón revient au pouvoir en 1973 avant de mourir en 1974, laissant la présidence à sa troisième épouse et vice-présidente, Isabel Perón, dont le gouvernement, confronté à une violence politique croissante entre groupes d'extrême droite et guérillas de gauche (Montoneros, ERP), est renversé par un nouveau coup d'État militaire le 24 mars 1976.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Peronism",
      events: [
        {
          date: "1946",
          title: "Élection de Juan Domingo Perón",
          description: "Perón est élu président avec l'appui du mouvement ouvrier, inaugurant le péronisme, courant politique toujours structurant de la vie argentine.",
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
        "La junte militaire issue du coup d'État du 24 mars 1976, dirigée d'abord par le général Jorge Rafael Videla, instaure le « Processus de réorganisation nationale » : partis politiques et syndicats sont interdits, la presse censurée, et un terrorisme d'État systématique est mis en place contre les opposants réels ou supposés, par le biais de la disparition forcée — enlèvement, détention dans des centres clandestins, torture, puis exécution sans procès et dissimulation des corps (notamment lors de « vols de la mort » au-dessus du Río de la Plata). La Commission nationale sur la disparition des personnes (CONADEP), créée par le président Alfonsín à son arrivée au pouvoir, a recensé dans son rapport de 1984 « Nunca Más » 8 961 cas documentés de disparitions entre 1976 et 1983, tout en précisant que ce chiffre pouvait être sous-estimé ; les organisations de défense des droits humains, à commencer par les Madres de Plaza de Mayo, avancent depuis un bilan largement plus élevé, généralement cité comme atteignant jusqu'à 30 000 personnes — un écart entre les deux estimations qui reste, à ce jour, débattu et non tranché. En avril 1982, la junte, alors dirigée par le général Leopoldo Galtieri et confrontée à une contestation sociale croissante liée à la crise économique, envahit les îles Malouines (Falkland), archipel britannique revendiqué par l'Argentine, déclenchant la guerre des Malouines contre le Royaume-Uni (2 avril - 14 juin 1982). La défaite argentine, qui fait environ 649 morts côté argentin et 255 côté britannique, est largement considérée par les historiens comme ayant précipité l'effondrement du régime militaire et accéléré la transition vers la démocratie, concrétisée par l'élection de Raúl Alfonsín en octobre 1983.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Dirty_War",
      events: [
        {
          date: "24 mars 1976",
          title: "Coup d'État militaire",
          description: "Une junte menée par le général Jorge Rafael Videla renverse la présidente Isabel Perón et instaure le « Processus de réorganisation nationale ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1976_Argentine_coup_d%27%C3%A9tat",
        },
        {
          date: "1976-1983",
          title: "Terrorisme d'État et disparitions forcées",
          description: "La CONADEP documente en 1984 8 961 cas de disparitions forcées ; les organisations de défense des droits humains estiment le bilan réel jusqu'à 30 000 victimes.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/CONADEP",
        },
        {
          date: "2 avril - 14 juin 1982",
          title: "Guerre des Malouines",
          description: "L'occupation militaire argentine des îles Malouines déclenche un conflit avec le Royaume-Uni, perdu par l'Argentine (environ 649 morts argentins, 255 morts britanniques), qui précipite la chute de la junte.",
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
        "Raúl Alfonsín engage dès 1983 des poursuites contre les chefs de la junte (procès des commandants de 1985) mais doit composer avec une grave crise économique et une hyperinflation qui le contraint à quitter le pouvoir avant terme, en 1989. Son successeur, Carlos Menem, mène dans les années 1990 des privatisations massives et adosse le peso au dollar à parité fixe (loi de convertibilité de 1991), ce qui jugule l'inflation mais fragilise durablement l'économie. Ce modèle s'effondre à la fin de l'année 2001 : incapable d'honorer sa dette, le gouvernement impose le 1er décembre 2001 le « corralito », un gel des retraits bancaires, provoquant émeutes et pillages qui font plusieurs dizaines de morts et conduisent à la démission du président Fernando de la Rúa le 21 décembre 2001. Le pays connaît alors cinq présidents en l'espace de deux semaines, avant que le Congrès ne désigne Eduardo Duhalde pour stabiliser la situation ; fin décembre 2001, l'Argentine suspend le paiement d'environ 100 milliards de dollars de dette souveraine, le plus important défaut de paiement de l'histoire à l'époque, et abandonne la parité fixe avec le dollar début 2002.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Argentine_great_depression",
      events: [
        {
          date: "1985",
          title: "Procès des commandants",
          description: "Les principaux chefs de la dictature, dont Jorge Rafael Videla, sont jugés et condamnés pour crimes commis pendant le « Processus de réorganisation nationale ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Trial_of_the_Juntas",
        },
        {
          date: "1er décembre 2001",
          title: "Instauration du « corralito »",
          description: "Le gouvernement restreint drastiquement les retraits bancaires pour enrayer la fuite des capitaux, provoquant la colère populaire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Corralito",
        },
        {
          date: "20-21 décembre 2001",
          title: "Émeutes et démission de Fernando de la Rúa",
          description: "Des émeutes meurtrières à travers le pays contraignent le président de la Rúa à la démission ; cinq présidents se succèdent en deux semaines.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/December_2001_riots_in_Argentina",
        },
        {
          date: "Décembre 2001",
          title: "Défaut de paiement souverain",
          description: "L'Argentine suspend le remboursement d'environ 100 milliards de dollars de dette publique, alors le plus important défaut de l'histoire.",
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
        "Sortis de la crise sous la présidence d'Eduardo Duhalde, Néstor Kirchner (2003-2007) puis son épouse Cristina Fernández de Kirchner (2007-2015) dominent une décennie marquée par une croissance économique portée par les exportations agricoles, une politique sociale redistributive et une restructuration partielle de la dette souveraine, dans un climat de tensions récurrentes avec certains créanciers (« fonds vautours ») et de retour progressif de l'inflation. Mauricio Macri (2015-2019), libéral, ne parvient pas à stabiliser durablement l'économie malgré un nouveau prêt du FMI en 2018, le plus important de l'histoire de l'institution. Après la présidence péroniste d'Alberto Fernández (2019-2023), marquée par la pandémie de Covid-19 et une inflation dépassant 200 % en 2023, l'économiste libertarien Javier Milei, candidat anti-système promettant une « tronçonneuse » budgétaire et la dollarisation de l'économie, remporte l'élection présidentielle et prend ses fonctions le 10 décembre 2023.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Argentina",
      events: [
        {
          date: "2003-2015",
          title: "Ère Kirchner",
          description: "Néstor Kirchner puis Cristina Fernández de Kirchner dirigent successivement le pays pendant plus d'une décennie de croissance puis de retour de l'inflation.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/N%C3%A9stor_Kirchner",
        },
        {
          date: "10 décembre 2023",
          title: "Investiture de Javier Milei",
          description: "L'économiste libertarien Javier Milei devient président sur un programme de rupture radicale visant à juguler l'inflation par une austérité budgétaire drastique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Javier_Milei",
        },
      ],
    },
  ],
};
