import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/topic/history-of-Serbia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire serbe — pas un résumé exhaustif, déjà largement documenté par ailleurs, mais un fil chronologique jusqu'aux événements contemporains les plus sensibles, présentés ici de façon strictement factuelle.",
  periods: [
    {
      id: "moyen-age-nemanjic",
      title: "La Serbie médiévale et la dynastie des Nemanjić",
      startYear: 1166,
      endYear: 1459,
      summary:
        "Fondée par Stefan Nemanja à la fin du XIIᵉ siècle, la dynastie des Nemanjić bâtit un État serbe médiéval qui atteint son apogée territoriale sous l'empereur Stefan Dušan au milieu du XIVᵉ siècle, doté d'une Église orthodoxe autocéphale depuis 1219 et d'un important patrimoine monastique (Studenica, Sopoćani). Après la bataille du Kosovo du 15 juin 1389, où le prince Lazar affronte les forces ottomanes, la Serbie devient progressivement vassale de l'Empire ottoman, jusqu'à la chute de la forteresse de Smederevo en 1459, qui marque la fin du despotat serbe.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "15 juin 1389",
          title: "Bataille du Kosovo",
          description: "L'affrontement entre les forces du prince serbe Lazar et l'armée ottomane, aux pertes très lourdes des deux côtés, devient un événement fondateur de la mémoire nationale serbe et précède la vassalisation puis l'annexion ottomane du pays.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Kosovo",
        },
      ],
    },
    {
      id: "ottoman-revolution",
      title: "Domination ottomane et révolution serbe",
      startYear: 1459,
      endYear: 1878,
      summary:
        "Intégrée à l'Empire ottoman pendant plus de trois siècles et demi, la Serbie connaît deux soulèvements décisifs au début du XIXᵉ siècle : le premier, mené par Karađorđe à partir de 1804, et le second par Miloš Obrenović en 1815, qui aboutit à la reconnaissance d'une principauté serbe autonome sous suzeraineté ottomane. Le congrès de Berlin de 1878 consacre l'indépendance pleine et entière de la Serbie, reconnue par les grandes puissances européennes.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1804-1815",
          title: "Les deux soulèvements serbes",
          description: "Le premier soulèvement, dirigé par Karađorđe Petrović, puis le second, mené par Miloš Obrenović, mettent fin à plusieurs siècles d'administration ottomane directe et ouvrent la voie à l'autonomie serbe.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Serbian_Revolution",
        },
        {
          date: "1878",
          title: "Indépendance reconnue au congrès de Berlin",
          description: "Le congrès de Berlin reconnaît formellement l'indépendance de la principauté de Serbie, qui devient royaume en 1882 sous Milan Ier.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "royaume-guerre-mondiale",
      title: "Le royaume de Serbie et la Première Guerre mondiale",
      startYear: 1878,
      endYear: 1918,
      summary:
        "Le royaume de Serbie s'agrandit considérablement lors des guerres balkaniques de 1912-1913. L'assassinat de l'archiduc François-Ferdinand à Sarajevo en juin 1914 par un nationaliste serbe de Bosnie déclenche la crise qui mène à la Première Guerre mondiale, durant laquelle la Serbie, envahie et occupée, subit des pertes humaines considérables : les estimations situent le nombre total de morts serbes (militaires et civils, dont une grave épidémie de typhus) autour d'un million de personnes, soit environ le quart de sa population d'avant-guerre — la proportion de pertes la plus élevée de tous les belligérants.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "28 juin 1914",
          title: "Assassinat de Sarajevo",
          description: "L'archiduc François-Ferdinand, héritier du trône austro-hongrois, est assassiné à Sarajevo par Gavrilo Princip, un nationaliste serbe de Bosnie, déclenchant la crise diplomatique qui mène au premier conflit mondial.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Archduke_Franz_Ferdinand",
        },
      ],
    },
    {
      id: "yougoslavie",
      title: "La Serbie au sein des deux Yougoslavies",
      startYear: 1918,
      endYear: 1991,
      summary:
        "La Serbie forme en 1918 le noyau du royaume des Serbes, Croates et Slovènes, rebaptisé Yougoslavie en 1929. Envahi par les puissances de l'Axe en 1941, le pays connaît une occupation particulièrement violente. Après la Seconde Guerre mondiale, la République fédérative socialiste de Yougoslavie de Josip Broz Tito intègre la Serbie comme l'une de ses six républiques constitutives, en son sein deux provinces autonomes, la Voïvodine et le Kosovo, se voyant reconnaître une large autonomie à partir de la Constitution de 1974.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "guerres-yougoslaves",
      title: "La dislocation de la Yougoslavie et les guerres des années 1990",
      startYear: 1991,
      endYear: 1999,
      summary:
        "La montée du nationalisme serbe sous la présidence de Slobodan Milošević, au pouvoir en Serbie à partir de 1989, accompagne la dislocation violente de la Yougoslavie : la Serbie soutient les forces serbes engagées dans les guerres de Croatie (1991-1995) et de Bosnie-Herzégovine (1992-1995), marquées par des politiques de nettoyage ethnique et, à Srebrenica en 1995, par un massacre reconnu comme génocide par les tribunaux internationaux. La Serbie elle-même subit des sanctions internationales tout au long de la décennie. La répression, à partir de 1998, du mouvement séparatiste albanais du Kosovo par les forces serbes et yougoslaves fait de nouveau des dizaines de milliers de victimes et provoque le déplacement de plus d'un million de personnes ; l'échec des négociations de Rambouillet conduit l'OTAN à lancer, du 24 mars au 10 juin 1999, une campagne de bombardements aériens contre la République fédérale de Yougoslavie (Serbie et Monténégro) sans mandat du Conseil de sécurité de l'ONU. Le conflit s'achève avec le retrait des forces serbes du Kosovo et l'adoption de la résolution 1244 du Conseil de sécurité, qui place le territoire sous administration civile et militaire internationale tout en réaffirmant formellement la souveraineté yougoslave (puis serbe) sur la province.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1992-1995",
          title: "Guerres de Croatie et de Bosnie-Herzégovine",
          description: "La Serbie soutient militairement et politiquement les forces serbes engagées dans les guerres de Croatie et de Bosnie-Herzégovine, marquées par des politiques de nettoyage ethnique ; le massacre de Srebrenica (juillet 1995), où plus de huit mille hommes et adolescents bosniaques sont exécutés, est reconnu comme un génocide par le Tribunal pénal international pour l'ex-Yougoslavie et la Cour internationale de justice.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Yugoslav_Wars",
        },
        {
          date: "28 février 1998 – 11 juin 1999",
          title: "Guerre du Kosovo",
          description: "Le conflit entre les forces serbes/yougoslaves et l'Armée de libération du Kosovo (UÇK) fait environ 13 000 morts, majoritairement des civils albanais du Kosovo, et pousse plus de 800 000 Kosovars albanais à fuir vers les pays voisins.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Kosovo_War",
        },
        {
          date: "24 mars – 10 juin 1999",
          title: "Campagne aérienne de l'OTAN (opération Allied Force)",
          description: "L'OTAN mène 78 jours de frappes aériennes contre la République fédérale de Yougoslavie, sans autorisation du Conseil de sécurité de l'ONU, jusqu'au retrait des forces serbes du Kosovo et à l'adoption de la résolution 1244, qui place le territoire sous administration internationale.",
          source: "OTAN",
          sourceUrl: "https://www.nato.int/en/what-we-do/operations-and-missions/kosovo-air-campaign-march-june-1999",
        },
      ],
    },
    {
      id: "transition-democratique",
      title: "La transition démocratique des années 2000",
      startYear: 2000,
      endYear: 2008,
      summary:
        "La contestation des résultats de l'élection présidentielle de septembre 2000 débouche, le 5 octobre 2000, sur des manifestations de masse à Belgrade qui provoquent la chute de Slobodan Milošević — épisode connu sous le nom de « révolution des bulldozers ». Le nouveau pouvoir démocratique, porté notamment par le Premier ministre réformateur Zoran Đinđić, assassiné en mars 2003 par des membres de milieux criminels et paramilitaires liés à l'ancien régime, engage la Serbie sur la voie du rapprochement avec l'Union européenne. En 2006, un référendum d'indépendance au Monténégro met fin à la dernière union fédérale héritée de la Yougoslavie ; en 2008, le Kosovo déclare unilatéralement son indépendance (voir la section Territoires).",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "5 octobre 2000",
          title: "Chute de Slobodan Milošević",
          description: "Des manifestations de masse à Belgrade, à la suite de sa tentative de contester sa défaite électorale, contraignent Slobodan Milošević à quitter le pouvoir.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Overthrow_of_Slobodan_Milo%C5%A1evi%C4%87",
        },
        {
          date: "12 mars 2003",
          title: "Assassinat de Zoran Đinđić",
          description: "Le Premier ministre réformateur Zoran Đinđić, artisan de la chute de Milošević, est assassiné à Belgrade ; l'enquête et l'opération policière qui suivent visent des réseaux criminels et paramilitaires liés à l'ancien régime.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Zoran_%C4%90in%C4%91i%C4%87",
        },
        {
          date: "3 juin 2006",
          title: "Indépendance du Monténégro",
          description: "À la suite d'un référendum où 55,5 % des Monténégrins votent pour l'indépendance, le Monténégro rompt son union avec la Serbie, dissolvant la dernière fédération héritée de la Yougoslavie.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/2006_Montenegrin_independence_referendum",
        },
      ],
    },
    {
      id: "serbie-contemporaine",
      title: "La Serbie contemporaine et le rapprochement européen",
      startYear: 2008,
      endYear: "present",
      summary:
        "La Serbie obtient le statut de candidat à l'Union européenne en mars 2012 et ouvre des négociations d'adhésion en janvier 2014, avec vingt-deux chapitres ouverts à ce jour ; ces négociations sont toutefois largement gelées depuis 2022, notamment du fait de l'absence d'alignement serbe sur les sanctions européennes contre la Russie. Sur le plan intérieur, le pays est dirigé depuis 2012 par le Parti progressiste serbe (SNS) et son dirigeant Aleksandar Vučić, Premier ministre puis président de la République à partir de 2017, dans un contexte régulièrement marqué par des mouvements de contestation.",
      source: "Commission européenne",
      sourceUrl: "https://enlargement.ec.europa.eu/countries/serbia_en",
      events: [
        {
          date: "Mars 2012",
          title: "Statut de candidat à l'Union européenne",
          description: "Le Conseil européen accorde à la Serbie le statut de pays candidat à l'adhésion.",
          source: "Commission européenne",
          sourceUrl: "https://enlargement.ec.europa.eu/countries/serbia_en",
        },
      ],
    },
  ],
};
