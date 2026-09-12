import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Canada";
const WIKIPEDIA = "Wikipedia";
const GOUV_CA = "Gouvernement du Canada — Relations Couronne-Autochtones et Affaires du Nord Canada";
const GOUV_CA_URL = "https://www.rcaanc-cirnac.gc.ca/eng/1100100015576/1571589171655";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire canadienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "premiers-peuples-nouvelle-france",
      title: "Premiers peuples et Nouvelle-France",
      startYear: 1534,
      endYear: 1763,
      summary:
        "Le territoire actuel du Canada est peuplé depuis des millénaires par des centaines de nations autochtones (Premières Nations, Inuits) aux langues et organisations sociales très diverses. À partir de l'exploration de Jacques Cartier en 1534 et de la fondation de Québec par Samuel de Champlain en 1608, la France établit la colonie de la Nouvelle-France, fondée sur la traite des fourrures et l'évangélisation catholique, avant de la céder à la Grande-Bretagne à l'issue de la guerre de Sept Ans.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1608",
          title: "Fondation de Québec",
          description: "Samuel de Champlain fonde la ville de Québec, premier établissement permanent durable de la Nouvelle-France.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/New_France",
        },
        {
          date: "10 février 1763",
          title: "Traité de Paris",
          description: "À l'issue de la guerre de Sept Ans, la France cède la Nouvelle-France à la Grande-Bretagne, à l'exception de Saint-Pierre-et-Miquelon.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Paris_(1763)",
        },
      ],
    },
    {
      id: "amerique-du-nord-britannique",
      title: "Amérique du Nord britannique",
      startYear: 1763,
      endYear: 1867,
      summary:
        "Sous domination britannique, l'Acte de Québec de 1774 garantit aux colons francophones le maintien de leur droit civil et de la religion catholique. L'arrivée de dizaines de milliers de loyalistes fuyant la Révolution américaine, la guerre de 1812 contre les États-Unis, puis les rébellions de 1837-1838 dans le Haut et le Bas-Canada façonnent progressivement des colonies distinctes, réunies en une seule province du Canada en 1841 et dotées d'un gouvernement responsable à partir de 1848.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1774",
          title: "Acte de Québec",
          description: "Le Parlement britannique garantit aux habitants francophones de la province de Québec le maintien du droit civil français et de la religion catholique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Quebec_Act",
        },
        {
          date: "1837-1838",
          title: "Rébellions du Haut et du Bas-Canada",
          description: "Soulèvements armés réprimés dans le Haut-Canada et le Bas-Canada, qui débouchent sur le rapport Durham et l'Acte d'Union de 1840.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Rebellions_of_1837%E2%80%931838",
        },
      ],
    },
    {
      id: "confederation-dominion",
      title: "Confédération et affirmation du Dominion",
      startYear: 1867,
      endYear: 1931,
      summary:
        "L'Acte de l'Amérique du Nord britannique unit le 1ᵉʳ juillet 1867 la province du Canada (scindée en Ontario et Québec), la Nouvelle-Écosse et le Nouveau-Brunswick au sein du Dominion du Canada. Le pays s'étend ensuite rapidement vers l'ouest et le nord par l'achat de la Terre de Rupert, l'adhésion successive du Manitoba, de la Colombie-Britannique, de l'Île-du-Prince-Édouard puis de l'Alberta et de la Saskatchewan, et l'achèvement du chemin de fer transcontinental en 1885. Sa participation majeure à la Première Guerre mondiale, marquée par la victoire de la crête de Vimy en 1917, contribue à l'obtention d'une pleine autonomie législative par le Statut de Westminster de 1931.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1ᵉʳ juillet 1867",
          title: "Confédération canadienne",
          description: "L'Acte de l'Amérique du Nord britannique crée le Dominion du Canada, fédérant l'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Canadian_Confederation",
        },
        {
          date: "1885",
          title: "Achèvement du chemin de fer Canadien Pacifique",
          description: "La liaison ferroviaire transcontinentale relie l'est du pays à la Colombie-Britannique, facilitant le peuplement de l'Ouest canadien.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Canadian_Pacific_Railway",
        },
        {
          date: "1931",
          title: "Statut de Westminster",
          description: "Le Parlement britannique reconnaît l'autonomie législative complète du Canada, qui reste toutefois lié au Royaume-Uni par la Couronne.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Statute_of_Westminster_1931",
        },
      ],
    },
    {
      id: "guerre-quiete-revolution-rapatriement",
      title: "Guerre mondiale, Révolution tranquille et rapatriement de la Constitution",
      startYear: 1931,
      endYear: 1999,
      summary:
        "Après une contribution majeure à l'effort allié pendant la Seconde Guerre mondiale et l'entrée de Terre-Neuve dans la fédération en 1949, le Québec connaît dans les années 1960 la Révolution tranquille, qui modernise rapidement une société jusque-là très marquée par l'Église catholique et voit naître un mouvement souverainiste. La crise d'Octobre 1970, deux référendums québécois sur la souveraineté (1980 et 1995) et l'échec des accords constitutionnels du lac Meech (1987-1990) et de Charlottetown (1992) rythment plusieurs décennies de tensions sur la place du Québec dans la fédération, tandis que le pays rapatrie sa Constitution en 1982 et se dote d'une Charte des droits et libertés. La période se referme avec la création du territoire du Nunavut en 1999, issu d'un accord avec les Inuits.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "Octobre 1970",
          title: "Crise d'Octobre",
          description: "Le Front de libération du Québec (FLQ) enlève un diplomate britannique et le ministre québécois Pierre Laporte, retrouvé assassiné ; le gouvernement fédéral invoque la Loi sur les mesures de guerre, seule application en temps de paix de son histoire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/October_Crisis",
        },
        {
          date: "20 mai 1980",
          title: "Premier référendum québécois",
          description: "Les Québécois rejettent à 59,56 % contre 40,44 % le mandat de négocier la souveraineté-association proposé par le gouvernement du Parti québécois.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1980_Quebec_referendum",
        },
        {
          date: "17 avril 1982",
          title: "Rapatriement de la Constitution",
          description: "La Loi constitutionnelle de 1982, incluant la Charte canadienne des droits et libertés, met fin à la nécessité d'un accord du Parlement britannique pour modifier la Constitution ; le gouvernement du Québec refuse d'y adhérer.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Patriation",
        },
        {
          date: "30 octobre 1995",
          title: "Second référendum québécois",
          description: "Le camp du non l'emporte de justesse, avec 50,58 % des voix contre 49,42 % pour le oui à la souveraineté du Québec, sur une participation record de 93,52 %.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1995_Quebec_referendum",
        },
        {
          date: "1ᵉʳ avril 1999",
          title: "Création du Nunavut",
          description: "Ce nouveau territoire, majoritairement inuit, est détaché des Territoires du Nord-Ouest à la suite de l'Accord sur les revendications territoriales du Nunavut de 1993.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nunavut",
        },
      ],
    },
    {
      id: "reconciliation-canada-contemporain",
      title: "Réconciliation et Canada contemporain",
      startYear: 2000,
      endYear: "present",
      summary:
        "À partir des années 1830 et jusqu'à la fermeture des derniers établissements à la fin des années 1990, environ 150 000 enfants des Premières Nations, métis et inuits ont été placés, souvent de force, dans l'un des quelque 140 pensionnats autochtones administrés conjointement par le gouvernement fédéral et des Églises chrétiennes, dans le but déclaré d'assimiler les enfants autochtones à la société canadienne. La Commission de vérité et réconciliation, créée en 2008 dans le cadre du plus important recours collectif de l'histoire du pays, documente dans son rapport final de 2015 le décès d'au moins 4 100 enfants — un chiffre que son président a jugé largement sous-estimé, pouvant dépasser 6 000 — et qualifie le système de « génocide culturel ». Depuis 2021, la découverte, par des Premières Nations utilisant un radar à pénétration de sol, d'un grand nombre d'anomalies au sol compatibles avec des sépultures non marquées sur d'anciens sites de pensionnats a relancé l'attention publique sur cet héritage. Sur un autre plan, le pays connaît en 2025 une rupture politique et commerciale inédite avec les États-Unis, qui imposent des droits de douane et dont le président évoque publiquement une annexion du Canada comme « 51ᵉ État » ; Mark Carney devient Premier ministre en mars 2025 dans ce contexte.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Canadian_Indian_residential_school_system",
      events: [
        {
          date: "11 juin 2008",
          title: "Excuses officielles pour les pensionnats autochtones",
          description: "Le Premier ministre Stephen Harper présente au nom du gouvernement fédéral des excuses officielles à la Chambre des communes pour le système des pensionnats autochtones.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Canadian_Indian_residential_school_system",
        },
        {
          date: "2015",
          title: "Rapport final de la Commission de vérité et réconciliation",
          description: "La Commission publie ses conclusions et 94 appels à l'action pour faire progresser la réconciliation entre le Canada et les peuples autochtones.",
          source: GOUV_CA,
          sourceUrl: GOUV_CA_URL,
        },
        {
          date: "Mai 2021",
          title: "Anomalies détectées à Kamloops",
          description: "La Première Nation Tk'emlúps te Secwépemc annonce la détection, par géoradar, de centaines d'anomalies au sol compatibles avec des sépultures non marquées sur le site de l'ancien pensionnat de Kamloops (Colombie-Britannique).",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Kamloops_Indian_Residential_School",
        },
        {
          date: "14 mars 2025",
          title: "Mark Carney devient Premier ministre",
          description: "L'ancien gouverneur de la Banque du Canada et de la Banque d'Angleterre succède à Justin Trudeau à la tête du Parti libéral puis du gouvernement fédéral.",
          source: "Wikidata",
          sourceUrl: "https://www.wikidata.org/wiki/Q16",
        },
      ],
    },
  ],
};
