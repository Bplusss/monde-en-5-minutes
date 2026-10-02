import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/topic/history-of-Serbia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire serbe, jusqu'aux événements contemporains les plus sensibles, présentés de façon strictement factuelle.",
  periods: [
    {
      id: "moyen-age-nemanjic",
      title: "La Serbie médiévale et la dynastie des Nemanjić",
      startYear: 1166,
      endYear: 1459,
      summary:
        "Fondée par Stefan Nemanja à la fin du XIIᵉ siècle, la dynastie des Nemanjić bâtit un État qui atteint son apogée sous l'empereur Stefan Dušan au milieu du XIVᵉ siècle, doté d'une Église orthodoxe autocéphale depuis 1219 et d'un riche patrimoine monastique. Après la bataille du Kosovo (1389), la Serbie devient progressivement vassale de l'Empire ottoman, jusqu'à la chute de la forteresse de Smederevo en 1459, qui marque la fin du despotat serbe.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "15 juin 1389",
          title: "Bataille du Kosovo",
          description: "L'affrontement entre les forces du prince Lazar et l'armée ottomane, aux pertes très lourdes des deux côtés, devient un événement fondateur de la mémoire nationale serbe.",
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
        "Intégrée à l'Empire ottoman pendant plus de trois siècles et demi, la Serbie se soulève avec Karađorđe en 1804, puis avec Miloš Obrenović en 1815, qui obtient une principauté autonome sous suzeraineté ottomane. Le congrès de Berlin de 1878 consacre son indépendance.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1804-1815",
          title: "Les deux soulèvements serbes",
          description: "Les soulèvements menés par Karađorđe Petrović puis par Miloš Obrenović mettent fin à l'administration ottomane directe et ouvrent la voie à l'autonomie serbe.",
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
        "Le royaume de Serbie s'agrandit considérablement lors des guerres balkaniques de 1912-1913. L'assassinat de l'archiduc François-Ferdinand à Sarajevo en juin 1914 par un nationaliste serbe de Bosnie déclenche la crise qui mène à la Première Guerre mondiale, durant laquelle la Serbie, envahie et occupée, perd environ un million de personnes (militaires et civils, typhus compris), soit le quart de sa population d'avant-guerre — la proportion la plus élevée de tous les belligérants.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "28 juin 1914",
          title: "Assassinat de Sarajevo",
          description: "L'archiduc François-Ferdinand, héritier du trône austro-hongrois, est assassiné à Sarajevo par Gavrilo Princip, nationaliste serbe de Bosnie.",
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
        "La Serbie forme en 1918 le noyau du royaume des Serbes, Croates et Slovènes, rebaptisé Yougoslavie en 1929, que l'Axe envahit et occupe violemment en 1941. Dans la Yougoslavie socialiste de Josip Broz Tito, la Serbie est l'une des six républiques ; ses deux provinces, la Voïvodine et le Kosovo, obtiennent une large autonomie avec la Constitution de 1974.",
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
        "La montée du nationalisme serbe sous Slobodan Milošević, au pouvoir à partir de 1989, accompagne la dislocation violente de la Yougoslavie : la Serbie, sous sanctions internationales, soutient les forces serbes dans les guerres de Croatie (1991-1995) et de Bosnie-Herzégovine (1992-1995), marquées par le nettoyage ethnique et, à Srebrenica en 1995, par un massacre reconnu comme génocide. À partir de 1998, la répression du mouvement séparatiste albanais du Kosovo par les forces serbes et yougoslaves fait de nouveau des dizaines de milliers de victimes et plus d'un million de déplacés ; après l'échec des négociations de Rambouillet, l'OTAN bombarde la République fédérale de Yougoslavie (Serbie et Monténégro) du 24 mars au 10 juin 1999, sans mandat du Conseil de sécurité de l'ONU. Les forces serbes se retirent alors du Kosovo, que la résolution 1244 place sous administration internationale tout en réaffirmant formellement la souveraineté yougoslave (puis serbe).",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1992-1995",
          title: "Guerres de Croatie et de Bosnie-Herzégovine",
          description: "La Serbie soutient militairement et politiquement les forces serbes dans ces guerres ; le massacre de Srebrenica (juillet 1995), où plus de huit mille hommes et adolescents bosniaques sont exécutés, est reconnu comme un génocide par le Tribunal pénal international pour l'ex-Yougoslavie et la Cour internationale de justice.",
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
          description: "L'OTAN mène 78 jours de frappes aériennes contre la République fédérale de Yougoslavie, sans autorisation du Conseil de sécurité de l'ONU, jusqu'au retrait des forces serbes du Kosovo.",
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
        "La contestation de l'élection présidentielle de septembre 2000 débouche, le 5 octobre, sur des manifestations de masse à Belgrade qui renversent Slobodan Milošević (« révolution des bulldozers »). Le nouveau pouvoir, porté par le Premier ministre réformateur Zoran Đinđić, assassiné en mars 2003, engage la Serbie sur la voie du rapprochement avec l'Union européenne. En 2006, l'indépendance du Monténégro met fin à la dernière union héritée de la Yougoslavie ; en 2008, le Kosovo déclare unilatéralement son indépendance (voir la section Territoires).",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "5 octobre 2000",
          title: "Chute de Slobodan Milošević",
          description: "Des manifestations de masse à Belgrade contraignent Slobodan Milošević, qui contestait sa défaite électorale, à quitter le pouvoir.",
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
          description: "À la suite d'un référendum où 55,5 % des Monténégrins votent pour l'indépendance, le Monténégro rompt son union avec la Serbie.",
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
        "La Serbie obtient le statut de candidat à l'Union européenne en mars 2012 et ouvre des négociations d'adhésion en janvier 2014 (vingt-deux chapitres ouverts), largement gelées depuis 2022, notamment faute d'alignement sur les sanctions européennes contre la Russie. Le pays est dirigé depuis 2012 par le Parti progressiste serbe (SNS) d'Aleksandar Vučić, Premier ministre puis président à partir de 2017, sur fond de mouvements de contestation récurrents.",
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
