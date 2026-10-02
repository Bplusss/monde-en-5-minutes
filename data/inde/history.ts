import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/India";
const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "civilisations-anciennes",
      title: "Civilisations anciennes, empires et sultanats",
      startYear: -2600,
      endYear: 1757,
      summary:
        "La civilisation de la vallée de l'Indus (vers 2600-1900 av. J.-C.), l'une des plus anciennes civilisations urbaines, précède l'arrivée des Indo-Aryens et les textes védiques. Se succèdent ensuite l'empire maurya (IVᵉ-IIᵉ siècle av. J.-C.), sous lequel Ashoka se convertit au bouddhisme, puis l'empire gupta (IVᵉ-VIᵉ siècle), « âge d'or » des sciences et des arts. Des sultanats musulmans s'implantent dans le nord à partir du XIIIᵉ siècle, avant que l'empire moghol, fondé en 1526 par Babur, n'unifie l'essentiel du sous-continent et ne lègue un immense patrimoine, dont le Taj Mahal.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "domination-britannique",
      title: "La domination britannique : de la Compagnie des Indes au Raj",
      startYear: 1757,
      endYear: 1947,
      summary:
        "La victoire de la Compagnie britannique des Indes orientales à Plassey en 1757 ouvre son emprise croissante sur le sous-continent, administré directement par la Couronne (« Raj britannique ») après la révolte de 1857. Le mouvement indépendantiste se structure autour du Congrès national indien, fondé en 1885, puis devient un mouvement de masse sous l'impulsion du Mahatma Gandhi, fondé sur la non-violence (satyagraha) et la désobéissance civile, notamment lors de la Marche du sel de 1930. Épuisé par la Seconde Guerre mondiale, le Royaume-Uni accorde l'indépendance en 1947, au prix d'une partition sur une base essentiellement religieuse.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1857-1858",
          title: "Rébellion de 1857",
          description: "La révolte des cipayes de l'armée de la Compagnie gagne une large partie du nord de l'Inde avant d'être réprimée ; en 1858, la Couronne britannique prend directement en main l'administration.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857",
        },
        {
          date: "15 août 1947",
          title: "Indépendance et partition de l'Inde",
          description:
            "L'Empire britannique des Indes se divise en deux dominions, l'Inde (à majorité hindoue) et le Pakistan (à majorité musulmane, alors en deux ailes). La partition provoque l'un des plus grands déplacements de population de l'histoire — 10 à 20 millions de personnes — et des violences intercommunautaires massives, dont le bilan, de 200 000 à environ deux millions de morts selon les estimations, reste débattu.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Partition_of_India",
        },
      ],
    },
    {
      id: "republique-inde",
      title: "La République et ses premières décennies",
      startYear: 1947,
      endYear: 1991,
      summary:
        "La Constitution de 1950 fait de l'Inde une république fédérale parlementaire. Le rattachement du Cachemire en octobre 1947, contesté par le Pakistan, ouvre un conflit toujours non résolu (voir Territoires) ; les deux pays s'affrontent encore en 1965 et en 1971, guerre qui aboutit à l'indépendance du Bangladesh. La guerre frontalière de 1962 contre la Chine laisse un différend ouvert sur l'Aksai Chin et l'Arunachal Pradesh. Indira Gandhi impose un état d'urgence de 21 mois (1975-1977), et l'économie reste jusqu'à la fin des années 1980 largement fermée et régulée par l'État.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "26 janvier 1950",
          title: "Entrée en vigueur de la Constitution",
          description: "L'Inde devient une république ; sa Constitution abolit l'intouchabilité (article 17) et instaure des quotas (« réservations ») pour les castes et tribus répertoriées.",
          source: "Ministry of Law and Justice, Government of India",
          sourceUrl: "https://legislative.gov.in/constitution-of-india/",
        },
        {
          date: "18 mai 1974",
          title: "Premier essai nucléaire (« Bouddha souriant »)",
          description: "Premier essai nucléaire indien, présenté comme pacifique, à Pokhran : l'Inde devient le sixième pays à maîtriser cette technologie.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Smiling_Buddha",
        },
      ],
    },
    {
      id: "liberalisation-inde-contemporaine",
      title: "Libéralisation économique et l'Inde contemporaine",
      startYear: 1991,
      endYear: "present",
      summary:
        "La libéralisation de 1991 — fin des licences industrielles, ouverture au commerce et aux investissements étrangers — amorce trois décennies de croissance soutenue. L'Inde s'affirme comme puissance nucléaire en 1998 ; un conflit limité, la guerre de Kargil, l'oppose au Pakistan au Cachemire en 1999. Le pays s'impose aussi comme puissance spatiale.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Juillet 1991",
          title: "Début des réformes de libéralisation économique",
          description: "Face à une crise de la balance des paiements, le gouvernement de P. V. Narasimha Rao engage une vaste ouverture économique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1991_Indian_economic_crisis",
        },
        {
          date: "11-13 mai 1998",
          title: "Essais nucléaires de Pokhran-II",
          description: "L'Inde se déclare officiellement État doté de l'arme nucléaire, en dehors du TNP ; le Pakistan répond par ses propres essais.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Pokhran-II",
        },
        {
          date: "5 août 2019",
          title: "Révocation de l'article 370",
          description: "Le gouvernement révoque l'autonomie spéciale du Jammu-et-Cachemire (article 370), réorganisé le 31 octobre 2019 en deux territoires de l'Union (Jammu-et-Cachemire, et Ladakh).",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Jammu_and_Kashmir_Reorganisation_Act,_2019",
        },
        {
          date: "23 août 2023",
          title: "Alunissage de Chandrayaan-3",
          description: "Chandrayaan-3 réussit le premier alunissage près du pôle sud de la Lune : l'Inde est la quatrième nation à se poser sur la Lune.",
          source: "Indian Space Research Organisation (ISRO)",
          sourceUrl: "https://en.wikipedia.org/wiki/Chandrayaan-3",
        },
      ],
    },
  ],
};
