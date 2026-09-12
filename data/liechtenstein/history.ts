import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Liechtenstein";
const WIKI = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire liechtensteinoise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "fondation-principaute",
      title: "La naissance d'une principauté par achat de terres",
      startYear: 1699,
      endYear: 1806,
      summary:
        "La famille princière de Liechtenstein, richissime dynastie autrichienne sans terre lui donnant droit de siéger à la Diète impériale, achète successivement la seigneurie de Schellenberg (1699) puis le comté de Vaduz (1712). L'empereur Charles VI les unit en 1719 en une principauté d'Empire immédiate baptisée Liechtenstein — une opération avant tout dynastique, les princes ne visitant que rarement leur nouveau territoire alpin au XVIIIᵉ siècle.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "23 janvier 1719",
          title: "Création de la principauté du Liechtenstein",
          description: "L'empereur Charles VI du Saint-Empire élève les terres réunies de Vaduz et Schellenberg au rang de principauté immédiate, donnant son nom à l'État moderne.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/House_of_Liechtenstein",
        },
      ],
    },
    {
      id: "souverainete-1806-1866",
      title: "De la Confédération du Rhin à la pleine souveraineté",
      startYear: 1806,
      endYear: 1866,
      summary:
        "L'effondrement du Saint-Empire en 1806 fait entrer le Liechtenstein dans la Confédération du Rhin sous protection française, où il acquiert sa pleine souveraineté. Il rejoint ensuite la Confédération germanique en 1815. La dissolution de celle-ci en 1866 le laisse totalement indépendant ; dès 1868, le pays dissout sa petite armée permanente et adopte une politique de neutralité perpétuelle qu'il n'a plus jamais remise en cause.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1866",
          title: "Dissolution de la Confédération germanique",
          description: "La fin de la Confédération germanique laisse le Liechtenstein pleinement souverain, sans plus aucune tutelle supranationale.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Liechtenstein",
        },
        {
          date: "1868",
          title: "Dissolution de l'armée",
          description: "Le pays démobilise ses quelques dizaines de soldats permanents, jugés trop coûteux pour un territoire aussi petit, et s'engage dans la neutralité.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Military_of_Liechtenstein",
        },
      ],
    },
    {
      id: "reorientation-suisse",
      title: "La bascule de l'Autriche vers la Suisse",
      startYear: 1918,
      endYear: 1938,
      summary:
        "L'effondrement de l'empire austro-hongrois en 1918, auquel le Liechtenstein était économiquement et diplomatiquement lié, pousse le pays à se tourner vers son autre voisin : dès 1919, la Suisse assure sa représentation diplomatique à l'étranger. Une nouvelle Constitution en 1921 instaure une monarchie constitutionnelle sur base démocratique et parlementaire. Le traité douanier de 1923, effectif en 1924, scelle l'union douanière avec la Suisse et le franc suisse remplace alors la couronne austro-hongroise comme monnaie du pays.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "5 octobre 1921",
          title: "Nouvelle Constitution",
          description: "La Constitution instaure une monarchie constitutionnelle héréditaire sur base démocratique et parlementaire, toujours en vigueur (bien que révisée en profondeur en 2003).",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "1923-1924",
          title: "Union douanière et monétaire avec la Suisse",
          description: "Un traité douanier signé en 1923 lie le Liechtenstein à la Suisse ; le franc suisse devient la monnaie officielle du pays en 1924, remplaçant la couronne austro-hongroise.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Economy_of_Liechtenstein",
        },
      ],
    },
    {
      id: "liechtenstein-contemporain",
      title: "Industrialisation, ouverture internationale et pouvoirs princiers renforcés",
      startYear: 1945,
      endYear: "present",
      summary:
        "L'après-guerre transforme une économie encore largement agraire en un pôle industriel de haute précision puis en place financière, tout en préservant la neutralité du pays. Le Liechtenstein devient, en 1984, le dernier pays d'Europe à accorder le droit de vote aux femmes, avant de rejoindre l'ONU (1990), l'AELE (1991) puis l'Espace économique européen (1995), qui lui garantit l'accès au marché unique européen sans adhésion à l'UE. En 2003, un référendum élargit considérablement les pouvoirs réservés au prince régnant, qui délègue lui-même la gestion quotidienne du pays à son fils, le prince héréditaire Alois, comme régent depuis 2004.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1er juillet 1984",
          title: "Droit de vote des femmes",
          description: "À l'issue d'un référendum approuvé à une faible majorité des votants masculins, les femmes obtiennent le droit de vote et d'éligibilité, faisant du Liechtenstein le dernier pays d'Europe à franchir ce pas.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/1984_Liechtenstein_women%27s_suffrage_referendum",
        },
        {
          date: "1er mai 1995",
          title: "Adhésion à l'Espace économique européen",
          description: "Le Liechtenstein rejoint l'EEE, accédant au marché unique européen tout en conservant son union douanière et monétaire avec la Suisse, non membre de l'UE.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Liechtenstein%E2%80%93European_Union_relations",
        },
        {
          date: "16 mars 2003",
          title: "Référendum constitutionnel",
          description: "Approuvé à 64 % des voix à l'initiative du prince Hans-Adam II, ce référendum élargit ses pouvoirs réservés (veto, dissolution du Landtag, révocation du gouvernement), au risque de son abdication en cas de rejet.",
          source: WIKI,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Liechtenstein",
        },
      ],
    },
  ],
};
