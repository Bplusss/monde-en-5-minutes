import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Australia";
const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire australienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "peuplement-aborigene-colonisation",
      title: "Peuplement aborigène et colonisation britannique",
      startYear: 1788,
      endYear: 1901,
      summary:
        "Le continent est peuplé depuis environ 50 000 à 65 000 ans par les peuples aborigènes et, dans le détroit de Torrès, par les insulaires du même nom, organisés en centaines de nations aux langues et cultures distinctes. Après le passage de l'explorateur britannique James Cook en 1770, qui revendique la côte est pour la Grande-Bretagne, la Première Flotte, commandée par le capitaine Arthur Phillip, débarque le 26 janvier 1788 à Sydney Cove et fonde une colonie pénitentiaire : environ 162 000 bagnards y seront déportés jusqu'en 1868. La colonisation s'appuie sur la doctrine de la « terra nullius » (terre n'appartenant à personne), qui nie toute souveraineté aborigène préexistante et ouvre la voie à la dépossession des terres et à une violence frontalière durable envers les populations autochtones tout au long du XIXᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "26 janvier 1788",
          title: "Arrivée de la Première Flotte à Sydney Cove",
          description: "Le capitaine Arthur Phillip fonde la colonie pénitentiaire de Nouvelle-Galles du Sud, premier établissement britannique permanent sur le continent.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/First_Fleet",
        },
      ],
    },
    {
      id: "federation-guerres-mondiales",
      title: "Fédération et guerres mondiales",
      startYear: 1901,
      endYear: 1945,
      summary:
        "Les six colonies britanniques s'unissent le 1ᵉʳ janvier 1901 pour former le Commonwealth d'Australie, dotée d'une constitution fédérale de type westminstérien. La même année, l'Immigration Restriction Act instaure la « politique de l'Australie blanche », qui restreint l'immigration non européenne jusqu'à son démantèlement progressif entre 1966 et 1973. La participation australienne à la Première Guerre mondiale, marquée par le débarquement meurtrier de Gallipoli en 1915, forge un récit national fort autour de l'ANZAC (Australian and New Zealand Army Corps), commémoré chaque 25 avril. Le pays combat de nouveau aux côtés des Alliés pendant la Seconde Guerre mondiale, notamment dans le Pacifique après les bombardements japonais de Darwin en 1942.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1ᵉʳ janvier 1901",
          title: "Fédération du Commonwealth d'Australie",
          description: "Les six colonies britanniques d'Australie (Nouvelle-Galles du Sud, Victoria, Queensland, Australie-Méridionale, Australie-Occidentale, Tasmanie) s'unissent en un État fédéral.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Federation_of_Australia",
        },
        {
          date: "25 avril 1915",
          title: "Débarquement de Gallipoli",
          description: "Les troupes de l'ANZAC (Australie et Nouvelle-Zélande) subissent de lourdes pertes lors du débarquement dans la péninsule de Gallipoli (Empire ottoman) ; la date devient le jour commémoratif national de l'ANZAC.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Gallipoli_campaign",
        },
      ],
    },
    {
      id: "immigration-reconnaissance-autochtone",
      title: "Immigration de masse et premières reconnaissances autochtones",
      startYear: 1945,
      endYear: 2000,
      summary:
        "L'après-guerre est marqué par un programme d'immigration massif, d'abord européen puis, après le démantèlement de la politique de l'Australie blanche entre 1966 et 1973, de plus en plus asiatique, qui transforme durablement la société australienne en l'une des plus multiculturelles au monde. Sur le plan autochtone, le référendum du 27 mai 1967, approuvé par 90,8 % des suffrages, donne au Parlement fédéral le pouvoir de légiférer pour les Aborigènes et met fin à leur exclusion des recensements ; la décision Mabo de la Haute Cour, en 1992, rejette formellement la doctrine de la « terra nullius » et reconnaît l'existence d'un titre autochtone (« native title ») antérieur à la colonisation. Le pays organise avec succès les Jeux olympiques de Sydney en 2000, tandis qu'un référendum sur l'instauration d'une république, en 1999, est rejeté par 54,9 % des électeurs.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "27 mai 1967",
          title: "Référendum sur les Aborigènes",
          description: "90,8 % des électeurs approuvent deux modifications constitutionnelles donnant au Parlement fédéral compétence pour légiférer sur les Aborigènes et mettant fin à leur exclusion des décomptes de population.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1967_Australian_referendum_(Aboriginals)",
        },
        {
          date: "3 juin 1992",
          title: "Décision Mabo",
          description: "La Haute Cour d'Australie rejette la doctrine de la « terra nullius » et reconnaît pour la première fois l'existence d'un titre foncier autochtone antérieur à la colonisation britannique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mabo_v_Queensland_(No_2)",
        },
        {
          date: "6 novembre 1999",
          title: "Référendum sur la république",
          description: "54,9 % des électeurs rejettent la proposition de remplacer le monarque et la gouverneure générale par un président nommé par le Parlement ; l'Australie reste une monarchie constitutionnelle.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1999_Australian_republic_referendum",
        },
      ],
    },
    {
      id: "reconciliation-australie-contemporaine",
      title: "Réconciliation et Australie contemporaine",
      startYear: 2000,
      endYear: "present",
      summary:
        "Entre la fin du XIXᵉ siècle et les années 1970, plusieurs dizaines de milliers d'enfants aborigènes et insulaires du détroit de Torrès — les estimations varient, le rapport officiel de 1997 évoquant au moins 100 000 enfants concernés sur plusieurs générations — ont été retirés de force à leurs familles par les autorités et des missions religieuses, dans le cadre de politiques d'assimilation ; ils forment ce qu'on appelle les « Générations volées » (Stolen Generations). Le rapport « Bringing Them Home », publié en 1997 à l'issue d'une enquête nationale, documente cette politique, avant que le Premier ministre Kevin Rudd ne présente, le 13 février 2008, des excuses officielles au Parlement au nom de l'État australien. Plus récemment, le 14 octobre 2023, un référendum proposant d'inscrire dans la Constitution une instance consultative autochtone auprès du Parlement (« Voice to Parliament ») est rejeté à l'échelle nationale par 60,1 % des électeurs contre 39,9 %, et n'obtient la majorité dans aucun des six États.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Stolen_Generations",
      events: [
        {
          date: "1997",
          title: "Rapport « Bringing Them Home »",
          description: "La Commission australienne des droits de l'homme publie le rapport de l'enquête nationale sur la séparation forcée d'enfants aborigènes et insulaires du détroit de Torrès de leurs familles.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Bringing_Them_Home_(report)",
        },
        {
          date: "13 février 2008",
          title: "Excuses officielles aux Générations volées",
          description: "Le Premier ministre Kevin Rudd présente à la Chambre des représentants des excuses officielles pour les politiques ayant conduit au retrait forcé d'enfants autochtones de leurs familles.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/National_Apology_to_the_Stolen_Generations",
        },
        {
          date: "14 octobre 2023",
          title: "Référendum sur la « Voice to Parliament »",
          description: "Les électeurs rejettent, par 60,1 % des voix contre 39,9 %, la création d'une instance consultative autochtone inscrite dans la Constitution ; la proposition n'obtient la majorité dans aucun État.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2023_Australian_Indigenous_Voice_referendum",
        },
      ],
    },
  ],
};
