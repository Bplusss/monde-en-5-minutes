import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Albania";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire illyrienne et antique, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "antiquite-illyrie",
      title: "Illyrie antique",
      startYear: -1000,
      endYear: 168,
      summary:
        "Le territoire de l'actuelle Albanie est peuplé par des tribus illyriennes, qui développent des royaumes et cités fortifiées, avant d'être progressivement conquis par Rome à l'issue des guerres illyriennes.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "168 av. J.-C.",
          title: "Défaite du roi Gentius",
          description: "La victoire romaine sur le dernier roi illyrien marque l'intégration du territoire à la République romaine.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "byzance-moyen-age",
      title: "Domination byzantine et principautés médiévales",
      startYear: 395,
      endYear: 1385,
      summary:
        "Après la partition de l'Empire romain, la région passe sous administration byzantine, puis voit émerger des principautés albanaises locales (dont celle des Balsha et des Kastrioti) au gré des rivalités entre Byzance, Venise et les royaumes serbes.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "domination-ottomane",
      title: "Domination ottomane et résistance de Skanderbeg",
      startYear: 1385,
      endYear: 1912,
      summary:
        "L'Empire ottoman conquiert progressivement le territoire albanais à partir de la fin du XIVᵉ siècle. Au milieu du XVᵉ siècle, le prince Gjergj Kastrioti, dit Skanderbeg, unit les seigneurs albanais et résiste pendant vingt-cinq ans aux offensives ottomanes depuis sa forteresse de Krujë, avant que le pays ne retombe sous domination ottomane après sa mort.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1443-1468",
          title: "Résistance de Skanderbeg",
          description: "Depuis Krujë, Skanderbeg repousse à plusieurs reprises les armées ottomanes, devenant la principale figure historique et le héros national du pays.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "14-22 novembre 1908",
          title: "Congrès de Manastir",
          description: "Des délégués albanais venus des Balkans et de la diaspora adoptent un alphabet latin unifié pour la langue albanaise, jusque-là notée dans plusieurs systèmes d'écriture différents.",
          source: "SBS Albanian",
          sourceUrl: "https://www.sbs.com.au/language/albanian/en/podcast-episode/congress-of-manastir-1908-year-when-the-albanian-alphabet-was-unified/f1lgle87o",
        },
      ],
    },
    {
      id: "independance-royaume",
      title: "Indépendance et royaume",
      startYear: 1912,
      endYear: 1944,
      summary:
        "L'indépendance proclamée en 1912 est suivie d'une période politiquement instable, marquée par l'occupation partielle du pays durant la Première Guerre mondiale, puis par l'instauration d'une République (1925) transformée en royaume par Ahmet Zogu (1928), avant l'invasion italienne de 1939 puis l'occupation par l'Axe durant la Seconde Guerre mondiale.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "28 novembre 1912",
          title: "Proclamation de l'indépendance à Vlorë",
          description: "Ismail Qemal proclame l'indépendance de l'Albanie vis-à-vis de l'Empire ottoman devant une assemblée de 83 délégués ; la date reste la fête nationale du pays.",
          source: "Britannica (Vlorë proclamation)",
          sourceUrl: "https://www.britannica.com/event/Vlore-proclamation",
        },
        {
          date: "7 avril 1939",
          title: "Invasion italienne",
          description: "Les troupes de l'Italie fasciste envahissent l'Albanie, qui devient un protectorat puis est intégrée à l'Empire italien sous la couronne de Victor-Emmanuel III.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "communisme",
      title: "République populaire communiste",
      startYear: 1944,
      endYear: 1991,
      summary:
        "Enver Hoxha, chef de la résistance communiste, prend le pouvoir à la Libération et instaure l'un des régimes les plus fermés et répressifs du bloc de l'Est, rompant successivement avec la Yougoslavie, l'URSS puis la Chine pour isoler totalement le pays jusqu'à sa mort en 1985.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1967",
          title: "Proclamation de l'« État athée »",
          description: "Le régime interdit toute pratique religieuse et ferme lieux de culte et institutions confessionnelles, faisant de l'Albanie le seul État officiellement athée au monde.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1985",
          title: "Mort d'Enver Hoxha",
          description: "Son successeur Ramiz Alia engage des réformes prudentes qui, sous la pression de manifestations populaires, aboutissent à la fin du régime à parti unique.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Transition démocratique et intégration euro-atlantique",
      startYear: 1991,
      endYear: "present",
      summary:
        "Le multipartisme est proclamé en 1991 et une nouvelle constitution démocratique est adoptée en 1998. Après une grave crise économique et politique liée à l'effondrement de systèmes financiers pyramidaux en 1997, le pays rejoint l'OTAN en 2009, obtient le statut de candidat à l'Union européenne en 2014 et ouvre les négociations d'adhésion en 2022, objectif que le gouvernement affiche pour 2030.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1997",
          title: "Crise des sociétés pyramidales",
          description: "L'effondrement de plusieurs systèmes financiers pyramidaux plonge le pays dans le chaos économique et des troubles civils quasi insurrectionnels.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1ᵉʳ avril 2009",
          title: "Adhésion à l'OTAN",
          description: "L'Albanie devient membre à part entière de l'Alliance atlantique.",
          source: "OTAN",
          sourceUrl: "https://en.wikipedia.org/wiki/Accession_of_Albania_to_the_European_Union",
        },
        {
          date: "juin 2014",
          title: "Statut de candidat à l'Union européenne",
          description: "Le Conseil européen accorde à l'Albanie le statut de pays candidat à l'adhésion, cinq ans après le dépôt de sa demande.",
          source: "Conseil de l'Union européenne",
          sourceUrl: "https://www.consilium.europa.eu/en/policies/albania/",
        },
        {
          date: "juillet 2022",
          title: "Ouverture des négociations d'adhésion",
          description: "La première conférence intergouvernementale entre l'Union européenne et l'Albanie marque le lancement officiel des négociations d'adhésion.",
          source: "Commission européenne",
          sourceUrl: "https://enlargement.ec.europa.eu/countries/albania_en",
        },
      ],
    },
  ],
};
