import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Luxembourg";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire luxembourgeoise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "comte-duche",
      title: "Du comté à la forteresse d'Europe",
      startYear: 963,
      endYear: 1815,
      summary:
        "Fondé autour d'un château bâti par le comte Sigefroi en 963, le comté puis duché de Luxembourg devient au fil du Moyen Âge une puissance régionale, avant de passer sous domination bourguignonne, espagnole, française puis autrichienne. Sa forteresse, réputée quasi imprenable, lui vaut le surnom de « Gibraltar du Nord ».",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "963",
          title: "Fondation du château de Lucilinburhuc",
          description: "Le comte Sigefroi Iᵉʳ acquiert un rocher stratégique sur l'Alzette et y bâtit un château, noyau originel de la ville et du pays de Luxembourg.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Siegfried,_Count_of_Luxembourg",
        },
      ],
    },
    {
      id: "vienne-partition",
      title: "Du Congrès de Vienne à la partition de 1839",
      startYear: 1815,
      endYear: 1890,
      summary:
        "Le Congrès de Vienne de 1815 érige le Luxembourg en grand-duché, uni personnellement aux Pays-Bas tout en restant membre de la Confédération germanique. La partie occidentale, majoritairement francophone, est cédée à la Belgique en 1839, fixant les frontières actuelles du pays ; le traité de Londres de 1867 garantit sa neutralité perpétuelle et impose le démantèlement de sa forteresse.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "19 avril 1839",
          title: "Traité de Londres et partition du Luxembourg",
          description: "Ce traité met fin à la révolution belge en partageant le grand-duché : sa partie occidentale, francophone, rejoint la Belgique comme province de Luxembourg, tandis que la partie orientale conserve son statut de grand-duché.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_London_(1839)",
        },
        {
          date: "11 mai 1867",
          title: "Second traité de Londres",
          description: "Ce traité proclame la neutralité perpétuelle du Luxembourg et impose le démantèlement de sa célèbre forteresse, désamorçant une crise diplomatique majeure entre la France et la Prusse.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "dynastie-guerres",
      title: "Une dynastie propre et deux occupations allemandes",
      startYear: 1890,
      endYear: 1945,
      summary:
        "La loi de succession néerlandaise excluant les femmes met fin à l'union personnelle avec les Pays-Bas en 1890, dotant le Luxembourg de sa propre maison régnante, les Nassau-Weilburg. Malgré sa neutralité proclamée, le pays est occupé par l'Allemagne lors des deux guerres mondiales, la Seconde étant marquée par l'annexion de fait au Reich et la conscription forcée de jeunes Luxembourgeois dans l'armée allemande.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "23 novembre 1890",
          title: "Fin de l'union personnelle avec les Pays-Bas",
          description: "À la mort du roi Guillaume III des Pays-Bas, la loi salique néerlandaise empêchant sa fille Wilhelmine d'hériter du grand-duché, la couronne luxembourgeoise passe à la maison de Nassau-Weilburg.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Adolphe,_Grand_Duke_of_Luxembourg",
        },
        {
          date: "1940-1944",
          title: "Occupation et annexion de fait par l'Allemagne nazie",
          description: "Envahi malgré sa neutralité, le Luxembourg est administré comme un territoire allemand, ses jeunes hommes soumis à la conscription forcée dans la Wehrmacht (« Zwangsrekrutéiert »), avant sa libération fin 1944.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/German_occupation_of_Luxembourg_during_World_War_II",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Pays fondateur de la construction européenne",
      startYear: 1945,
      endYear: "present",
      summary:
        "Renonçant définitivement à sa neutralité, le Luxembourg devient membre fondateur de l'OTAN, du Benelux puis, en 1951, de la Communauté européenne du charbon et de l'acier, matrice de l'Union européenne actuelle — dont la ville de Luxembourg accueille depuis plusieurs institutions majeures. Le pays connaît parallèlement une profonde reconversion économique, du déclin de la sidérurgie dans les années 1970-1980 à l'essor d'une place financière internationale de premier plan.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "18 avril 1951",
          title: "Traité de Paris (CECA)",
          description: "Le Luxembourg est l'un des six membres fondateurs de la Communauté européenne du charbon et de l'acier, première pierre de la construction européenne, et accueille la Haute Autorité, premier organe exécutif européen.",
          source: "Union européenne",
          sourceUrl: "https://european-union.europa.eu/principles-countries-history/history-eu/1945-1959_en",
        },
      ],
    },
  ],
};
