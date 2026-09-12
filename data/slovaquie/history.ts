import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Slovakia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire slovaque, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "grande-moravie-royaume-hongrois",
      title: "De la Grande Moravie au royaume de Hongrie médiéval",
      startYear: 833,
      endYear: 1526,
      summary:
        "Le territoire de l'actuelle Slovaquie constitue le cœur de la Grande Moravie, premier État slave d'Europe centrale, où les frères missionnaires Cyrille et Méthode introduisent au IXᵉ siècle la liturgie slave et l'écriture glagolitique. Après l'effondrement de cet État vers 907 sous la pression des tribus magyares, la région est progressivement intégrée au royaume de Hongrie naissant, dont elle forme pendant près d'un millénaire la partie septentrionale, connue sous le nom historique de Haute-Hongrie.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "863",
          title: "Mission de Cyrille et Méthode",
          description: "Envoyés par l'empereur byzantin à la demande du prince morave Rastislav, les deux frères missionnaires introduisent la liturgie en langue slave et jettent les bases de l'alphabet glagolitique, ancêtre du cyrillique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Great_Moravia",
        },
        {
          date: "vers 907",
          title: "Effondrement de la Grande Moravie",
          description: "Affaiblie par des conflits internes, la Grande Moravie disparaît sous la pression des tribus magyares, dont le royaume intègre progressivement le territoire slovaque pour près de mille ans.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "haute-hongrie-habsbourg",
      title: "La Haute-Hongrie sous les Habsbourg et le réveil national",
      startYear: 1526,
      endYear: 1918,
      summary:
        "Après la défaite hongroise de Mohács en 1526 face aux Ottomans, la Haute-Hongrie passe sous la couronne des Habsbourg ; Bratislava (alors Presbourg/Pozsony), à l'abri de l'occupation ottomane du centre du royaume, devient de 1536 à 1830 la capitale du royaume de Hongrie et le siège de ses couronnements royaux. Un mouvement national slovaque émerge au XIXᵉ siècle, porté notamment par la codification du slovaque écrit, tandis que les politiques de magyarisation se renforcent après le compromis austro-hongrois de 1867.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1536-1830",
          title: "Presbourg, capitale du royaume de Hongrie",
          description: "À la suite de la conquête ottomane de Buda, Presbourg (aujourd'hui Bratislava) devient le siège du gouvernement hongrois et le lieu de couronnement des rois de Hongrie pendant près de trois siècles.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Bratislava",
        },
        {
          date: "1843",
          title: "Codification du slovaque écrit",
          description: "Le philologue et homme politique Ľudovít Štúr codifie, avec plusieurs collègues, une langue slovaque écrite standardisée fondée sur les dialectes du centre du pays, fondation de la littérature et de l'identité nationale modernes.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/%C4%BDudov%C3%ADt_%C5%A0t%C3%BAr",
        },
      ],
    },
    {
      id: "premiere-republique",
      title: "La Tchécoslovaquie indépendante",
      startYear: 1918,
      endYear: 1939,
      summary:
        "À l'effondrement de l'Autriche-Hongrie, le Conseil national slovaque proclame à Martin, le 30 octobre 1918, l'union des Slovaques avec les Tchèques au sein d'un même État. La nouvelle République tchécoslovaque, plus industrialisée à l'ouest qu'à l'est, connaît une vingtaine d'années de démocratie parlementaire avant que les accords de Munich puis le premier arbitrage de Vienne ne démembrent le pays.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "30 octobre 1918",
          title: "Déclaration de Martin",
          description: "Réuni à Turčiansky Svätý Martin, le Conseil national slovaque proclame la séparation d'avec le royaume de Hongrie et l'union des Slovaques avec les Tchèques au sein de la nouvelle République tchécoslovaque, fondée deux jours plus tôt à Prague.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Martin_Declaration",
        },
        {
          date: "2 novembre 1938",
          title: "Premier arbitrage de Vienne",
          description: "Sous l'arbitrage de l'Allemagne et de l'Italie, la Tchécoslovaquie cède à la Hongrie une large bande de son territoire méridional, majoritairement peuplée de Hongrois, quelques semaines après les accords de Munich.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/First_Vienna_Award",
        },
      ],
    },
    {
      id: "guerre-communisme",
      title: "L'État slovaque, la Shoah et l'ère communiste",
      startYear: 1939,
      endYear: 1989,
      summary:
        "Le 14 mars 1939, sous la pression de l'Allemagne nazie, la Slovaquie proclame son indépendance sous un régime autoritaire dirigé par le prêtre Jozef Tiso, allié de l'Axe, qui organise la déportation de la quasi-totalité de la communauté juive du pays. Le soulèvement national slovaque d'août-octobre 1944 échoue militairement mais place la Slovaquie du côté des vainqueurs ; la Tchécoslovaquie restaurée en 1945 devient un État communiste en 1948, fédéralisé en 1969 en une République socialiste tchèque et une République socialiste slovaque, avant que la Révolution de velours de 1989 ne mette fin pacifiquement au régime.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "mars-octobre 1942",
          title: "Déportations de la population juive",
          description: "Le gouvernement slovaque organise et finance lui-même la déportation d'environ 57 000 Juifs vers les camps de concentration et d'extermination en Pologne occupée ; environ 13 500 autres seront déportés après l'occupation allemande d'août 1944.",
          source: "United States Holocaust Memorial Museum (USHMM)",
          sourceUrl: "https://encyclopedia.ushmm.org/content/en/article/the-holocaust-in-slovakia",
        },
        {
          date: "29 août - 28 octobre 1944",
          title: "Soulèvement national slovaque",
          description: "Environ 80 000 soldats et 18 000 partisans se soulèvent contre l'occupation allemande et le régime de Jozef Tiso ; militairement écrasé, ce soulèvement reste un événement fondateur de la mémoire nationale slovaque.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Slovak_National_Uprising",
        },
        {
          date: "1er janvier 1969",
          title: "Fédéralisation de la Tchécoslovaquie",
          description: "Après l'écrasement du Printemps de Prague par les troupes du pacte de Varsovie en 1968, la Tchécoslovaquie devient une fédération de deux républiques, tchèque et slovaque, dotées chacune de leur propre gouvernement et parlement.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Czechoslovak_federalization_of_1968%E2%80%931969",
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Indépendance et intégration européenne",
      startYear: 1989,
      endYear: "present",
      summary:
        "La Révolution de velours de 1989 ouvre la voie à une Tchécoslovaquie démocratique, qui se scinde pacifiquement le 1ᵉʳ janvier 1993 en deux États indépendants, Slovaquie et République tchèque — la « divorce de velours ». Le pays rejoint l'OTAN et l'Union européenne en 2004, l'espace Schengen en 2007, puis devient en 2009 le premier État issu de la Tchécoslovaquie à adopter l'euro.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1er janvier 1993",
          title: "Dissolution de la Tchécoslovaquie",
          description: "La Tchécoslovaquie se sépare pacifiquement en deux États souverains, la Slovaquie et la République tchèque, par un accord négocié entre les gouvernements des deux républiques.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Dissolution_of_Czechoslovakia",
        },
        {
          date: "1er mai 2004",
          title: "Adhésion à l'Union européenne",
          description: "La Slovaquie devient membre de l'Union européenne lors du plus grand élargissement de son histoire, aux côtés de neuf autres pays, quelques semaines après son adhésion à l'OTAN.",
          source: "Commission européenne",
          sourceUrl: "https://european-union.europa.eu/principles-countries-history/history-eu/2000-2009_en",
        },
        {
          date: "1er janvier 2009",
          title: "Adoption de l'euro",
          description: "La Slovaquie devient le premier pays issu de la Tchécoslovaquie à intégrer la zone euro, remplaçant sa monnaie nationale, la couronne slovaque.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Enlargement_of_the_eurozone",
        },
      ],
    },
  ],
};
