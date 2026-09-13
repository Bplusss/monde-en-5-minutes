import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/India";
const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de plusieurs millénaires d'histoire indienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "civilisations-anciennes",
      title: "Civilisations anciennes, empires et sultanats",
      startYear: -2600,
      endYear: 1757,
      summary:
        "La civilisation de la vallée de l'Indus (vers 2600-1900 av. J.-C.), l'une des plus anciennes civilisations urbaines connues, précède l'arrivée des peuples indo-aryens et la composition des textes védiques. Le sous-continent voit ensuite se succéder de grands empires — l'empire maurya (IVᵉ-IIᵉ siècle av. J.-C.), sous lequel l'empereur Ashoka se convertit au bouddhisme après la sanglante conquête du Kalinga, puis l'empire gupta (IVᵉ-VIᵉ siècle), souvent qualifié d'« âge d'or » des sciences, des mathématiques et des arts indiens. À partir du XIIIᵉ siècle, plusieurs sultanats musulmans s'implantent dans le nord, avant que l'empire moghol, fondé en 1526 par Babur, n'unifie l'essentiel du sous-continent et n'y laisse un immense patrimoine architectural, dont le Taj Mahal, mausolée fait édifier par l'empereur Shah Jahan entre 1632 et 1648 pour son épouse Mumtaz Mahal.",
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
        "La victoire de la Compagnie britannique des Indes orientales à la bataille de Plassey en 1757 marque le début de son emprise territoriale croissante sur le sous-continent. Une vaste révolte, aujourd'hui souvent appelée « rébellion de 1857 » ou « première guerre d'indépendance », éclate parmi les soldats indiens (cipayes) de l'armée de la Compagnie et s'étend à une large partie du nord de l'Inde avant d'être réprimée ; elle entraîne en 1858 la dissolution de la Compagnie et le passage direct de l'administration du territoire à la Couronne britannique, sous le nom de « Raj britannique ». Le mouvement indépendantiste indien se structure autour du Congrès national indien, fondé en 1885, puis se radicalise sous l'impulsion du Mahatma Gandhi à partir des années 1910-1920, qui théorise et organise une résistance de masse fondée sur la non-violence (satyagraha) et la désobéissance civile, notamment lors de la Marche du sel de 1930. Épuisé par la Seconde Guerre mondiale, le Royaume-Uni accorde l'indépendance le 15 août 1947, mais celle-ci s'accompagne de la partition de l'Empire britannique des Indes en deux dominions, l'Inde et le Pakistan, sur une base essentiellement religieuse — un épisode parmi les plus tragiques de l'histoire du XXᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1857-1858",
          title: "Rébellion de 1857",
          description: "Une révolte armée de cipayes de l'armée de la Compagnie des Indes orientales s'étend à une large partie du nord de l'Inde avant d'être réprimée ; elle entraîne en 1858 le transfert de l'administration du territoire à la Couronne britannique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857",
        },
        {
          date: "15 août 1947",
          title: "Indépendance et partition de l'Inde",
          description:
            "L'Empire britannique des Indes accède à l'indépendance et se divise en deux dominions, l'Inde (à majorité hindoue) et le Pakistan (à majorité musulmane, alors en deux ailes séparées par le territoire indien). La partition s'accompagne de l'un des plus grands déplacements de population de l'histoire — les estimations vont de 10 à 20 millions de personnes ayant traversé les nouvelles frontières — et de violences intercommunautaires massives dont le bilan reste débattu entre historiens : les estimations du nombre de morts varient très largement, de 200 000 à environ deux millions, cette incertitude persistante étant elle-même documentée comme un fait par les historiens du sujet.",
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
        "La nouvelle Constitution, adoptée le 26 novembre 1949 et entrée en vigueur le 26 janvier 1950, fait de l'Inde une république fédérale parlementaire ; elle abolit explicitement la pratique de l'« intouchabilité » (article 17) et instaure un système de quotas (« réservations ») dans la fonction publique, l'enseignement supérieur et les assemblées élues au bénéfice des castes et tribus répertoriées, plus tard étendu aux « autres classes défavorisées ». Le rattachement du Cachemire à l'Inde en octobre 1947, contesté par le Pakistan, ouvre un conflit territorial toujours non résolu (voir Territoires). L'Inde et le Pakistan s'affrontent à nouveau en 1965 et en 1971, cette dernière guerre aboutissant à l'indépendance du Bangladesh ; l'Inde livre par ailleurs une guerre frontalière à la Chine en 1962, à l'origine du différend toujours ouvert sur l'Aksai Chin et l'Arunachal Pradesh. Le pays procède à son premier essai nucléaire, présenté comme pacifique, en 1974. Sur le plan intérieur, la Première ministre Indira Gandhi impose un état d'urgence de 21 mois (1975-1977), marqué par la suspension de libertés civiles, avant que l'économie ne reste, jusqu'à la fin des années 1980, largement fermée et fortement régulée par l'État.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "26 janvier 1950",
          title: "Entrée en vigueur de la Constitution",
          description: "L'Inde devient une république ; sa Constitution abolit l'intouchabilité (article 17) et instaure un système de réservations pour les castes et tribus répertoriées.",
          source: "Ministry of Law and Justice, Government of India",
          sourceUrl: "https://legislative.gov.in/constitution-of-india/",
        },
        {
          date: "18 mai 1974",
          title: "Premier essai nucléaire (« Bouddha souriant »)",
          description: "L'Inde procède à son premier essai nucléaire à Pokhran, devenant le sixième pays à disposer de la technologie ; elle n'est pas signataire du traité de non-prolifération nucléaire (TNP).",
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
        "Confronté à une grave crise de la balance des paiements, le gouvernement engage en 1991 un vaste programme de libéralisation économique — réduction des licences industrielles, ouverture au commerce et aux investissements étrangers — qui amorce trois décennies de croissance soutenue. L'Inde effectue une seconde série d'essais nucléaires en mai 1998 (Pokhran-II), se déclarant officiellement État doté de l'arme nucléaire ; le Pakistan répond par ses propres essais le même mois. Un conflit limité, la guerre de Kargil, oppose les deux pays au Cachemire en 1999. Le 5 août 2019, le gouvernement révoque le statut d'autonomie spéciale accordé à l'État de Jammu-et-Cachemire (article 370 de la Constitution) et le réorganise, à compter du 31 octobre 2019, en deux territoires de l'Union directement administrés par New Delhi (voir Territoires). Le 23 août 2023, la mission spatiale Chandrayaan-3 de l'agence spatiale indienne (ISRO) réussit le premier alunissage de l'histoire près du pôle sud lunaire, faisant de l'Inde la quatrième nation à poser un engin sur la Lune.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Juillet 1991",
          title: "Début des réformes de libéralisation économique",
          description: "Face à une crise de la balance des paiements, le gouvernement de P. V. Narasimha Rao engage une vaste ouverture économique qui met fin à des décennies de forte régulation étatique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1991_Indian_economic_crisis",
        },
        {
          date: "11-13 mai 1998",
          title: "Essais nucléaires de Pokhran-II",
          description: "L'Inde effectue une seconde série d'essais nucléaires et se déclare officiellement État doté de l'arme nucléaire, en dehors du traité de non-prolifération (TNP) ; le Pakistan répond par ses propres essais quelques semaines plus tard.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Pokhran-II",
        },
        {
          date: "5 août 2019",
          title: "Révocation de l'article 370",
          description: "Le gouvernement révoque le statut d'autonomie spéciale de l'État de Jammu-et-Cachemire, réorganisé à compter du 31 octobre 2019 en deux territoires de l'Union (Jammu-et-Cachemire, et Ladakh).",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Jammu_and_Kashmir_Reorganisation_Act,_2019",
        },
        {
          date: "23 août 2023",
          title: "Alunissage de Chandrayaan-3",
          description: "La sonde indienne Chandrayaan-3 réussit le premier alunissage de l'histoire à proximité du pôle sud de la Lune, faisant de l'Inde la quatrième nation à poser un engin sur la surface lunaire.",
          source: "Indian Space Research Organisation (ISRO)",
          sourceUrl: "https://en.wikipedia.org/wiki/Chandrayaan-3",
        },
      ],
    },
  ],
};
