import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire algérienne, des royaumes berbères antiques à la République actuelle — pas un résumé exhaustif.",
  periods: [
    {
      id: "numidie-afrique-romaine",
      title: "Royaumes berbères, Numidie et Afrique romaine",
      startYear: -202,
      endYear: 647,
      summary:
        "Peuplé de Berbères (Amazighs), le territoire est en contact avec les Phéniciens puis Carthage. Le roi Massinissa unifie la Numidie vers 202 av. J.-C. ; après la guerre de Jugurtha contre Rome, le pays passe peu à peu sous domination romaine. L'Afrique romaine, christianisée, laisse des cités comme Timgad ou Djémila ; saint Augustin est évêque d'Hippone (Annaba). Vandales puis Byzantins s'y succèdent aux Vᵉ et VIᵉ siècles.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Numidia",
      events: [
        { date: "vers 202 av. J.-C.", title: "Massinissa unifie la Numidie", description: "Allié de Rome contre Carthage, il fonde un royaume berbère centré sur Cirta (Constantine).", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Masinissa" },
        { date: "396-430", title: "Saint Augustin évêque d'Hippone", description: "Né à Thagaste (Souk Ahras), le théologien dirige l'Église d'Hippone jusqu'à sa mort.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Augustine_of_Hippo" },
      ],
    },
    {
      id: "islam-dynasties-maghrebines",
      title: "Islamisation et dynasties maghrébines",
      startYear: 647,
      endYear: 1516,
      summary:
        "Les armées arabes atteignent le Maghreb central à la fin du VIIᵉ siècle et se heurtent à la résistance berbère de Koceila et de la Kahina. L'islamisation est rapide, l'arabisation plus lente. Se succèdent ensuite des dynasties en grande partie berbères : Rostémides de Tahert, Fatimides (partis de Petite Kabylie avant de fonder Le Caire), Hammadides de Béjaïa, Almoravides, Almohades, puis Zianides de Tlemcen.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Algeria",
      events: [
        { date: "vers 698-703", title: "Défaite de la Kahina", description: "La reine berbère des Aurès, dernière grande figure de la résistance à la conquête arabe, est vaincue.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Dihya" },
        { date: "1236", title: "Royaume zianide de Tlemcen", description: "Tlemcen devient pour trois siècles la capitale d'un royaume du Maghreb central.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Zayyanid_dynasty" },
      ],
    },
    {
      id: "regence-alger",
      title: "La Régence d'Alger",
      startYear: 1516,
      endYear: 1830,
      summary:
        "Les corsaires Arudj et Khayr ad-Din Barberousse, appelés contre les Espagnols, prennent Alger et la placent sous la suzeraineté ottomane. Gouvernée par des pachas puis par des deys de plus en plus autonomes, la Régence fixe en grande partie les limites du nord de l'Algérie actuelle ; sa puissance repose longtemps sur la course en Méditerranée.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Regency_of_Algiers",
      events: [
        { date: "1516", title: "Les frères Barberousse prennent Alger", description: "Khayr ad-Din place ensuite la ville sous la protection du sultan ottoman.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Hayreddin_Barbarossa" },
      ],
    },
    {
      id: "colonisation-francaise",
      title: "La colonisation française",
      startYear: 1830,
      endYear: 1954,
      summary:
        "La France prend Alger en 1830, puis conquiert le pays au terme d'une guerre longue et violente, face notamment à l'émir Abdelkader (jusqu'en 1847) et aux insurrections de Kabylie. Organisée en départements français dès 1848, l'Algérie devient une colonie de peuplement européenne : les colons acquièrent une grande part des meilleures terres, tandis que la majorité musulmane, soumise au Code de l'indigénat, reste privée de la pleine citoyenneté. Le nationalisme se structure dans l'entre-deux-guerres (Messali Hadj, Ferhat Abbas, Ben Badis).",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/French_Algeria",
      events: [
        { date: "5 juillet 1830", title: "Prise d'Alger", description: "Le dey Hussein capitule face au corps expéditionnaire français.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Invasion_of_Algiers_in_1830" },
        { date: "1832-1847", title: "Résistance de l'émir Abdelkader", description: "L'émir fédère les tribus de l'Ouest et du centre avant sa reddition.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Emir_Abdelkader" },
        { date: "8 mai 1945", title: "Massacres de Sétif, Guelma et Kherrata", description: "Des manifestations nationalistes tournent à l'émeute ; la répression fait plusieurs milliers de morts algériens.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/S%C3%A9tif_and_Guelma_massacre" },
      ],
    },
    {
      id: "guerre-independance",
      title: "La guerre d'indépendance",
      startYear: 1954,
      endYear: 1962,
      summary:
        "Le 1ᵉʳ novembre 1954, le Front de libération nationale (FLN) déclenche l'insurrection. La guerre frappe durement les civils : attentats, torture pratiquée par l'armée française, déplacements forcés de populations rurales, violences entre nationalistes. Les accords d'Évian ouvrent la voie à l'indépendance, approuvée par référendum. Le bilan reste débattu : l'Algérie retient un million et demi de morts, de nombreux historiens estiment les victimes algériennes entre 250 000 et 400 000, auxquelles s'ajoutent environ 25 000 soldats français. En 1962, près de 800 000 pieds-noirs quittent le pays et des milliers de harkis restés en Algérie sont tués.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Algerian_War",
      events: [
        { date: "1ᵉʳ novembre 1954", title: "Déclenchement de l'insurrection", description: "Une série d'attaques coordonnées, revendiquées par le FLN, marque le début de la guerre.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Toussaint_Rouge" },
        { date: "18 mars 1962", title: "Accords d'Évian", description: "Le gouvernement français et le GPRA concluent un cessez-le-feu et organisent l'autodétermination.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/%C3%89vian_Accords" },
        { date: "5 juillet 1962", title: "Proclamation de l'indépendance", description: "Après le référendum du 1ᵉʳ juillet, l'indépendance est proclamée, 132 ans jour pour jour après la prise d'Alger.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/1962_Algerian_independence_referendum" },
      ],
    },
    {
      id: "independance-decennie-noire",
      title: "Parti unique, ouverture et décennie noire",
      startYear: 1962,
      endYear: 1999,
      summary:
        "Ahmed Ben Bella est renversé en 1965 par Houari Boumédiène, qui bâtit un État socialiste à parti unique et nationalise les hydrocarbures en 1971. La chute du pétrole de 1986 aggrave la crise ; les émeutes d'octobre 1988 conduisent au multipartisme. La victoire du Front islamique du salut (FIS) au premier tour des législatives de 1991 entraîne l'interruption du processus électoral par l'armée en janvier 1992, puis une guerre civile entre l'État et des groupes islamistes armés qui fait de 100 000 à 200 000 morts selon les estimations courantes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Algerian_Civil_War",
      events: [
        { date: "24 février 1971", title: "Nationalisation des hydrocarbures", description: "L'État prend le contrôle majoritaire des sociétés pétrolières françaises au profit de Sonatrach.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Sonatrach" },
        { date: "octobre 1988", title: "Émeutes d'octobre", description: "Leur répression fait plusieurs centaines de morts ; la Constitution de 1989 instaure le multipartisme.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/1988_October_Riots" },
        { date: "janvier 1992", title: "Interruption du processus électoral", description: "L'armée annule le second tour des législatives ; le président Boudiaf est assassiné en juin.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/1992_Algerian_coup_d%27%C3%A9tat" },
      ],
    },
    {
      id: "bouteflika-hirak-tebboune",
      title: "Bouteflika, le Hirak et l'ère Tebboune",
      startYear: 1999,
      endYear: "present",
      summary:
        "Élu en 1999, Abdelaziz Bouteflika fait adopter la Concorde civile puis la Charte pour la paix et la réconciliation nationale (2005), qui amnistient une partie des combattants islamistes. Il reste vingt ans au pouvoir ; l'annonce de sa candidature à un cinquième mandat déclenche en février 2019 le Hirak, mouvement de manifestations pacifiques qui obtient sa démission. Abdelmadjid Tebboune est élu en décembre 2019, une nouvelle Constitution est adoptée en 2020 et les marches du Hirak s'éteignent en 2021 sous l'effet des interdictions et des poursuites.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Abdelaziz_Bouteflika",
      events: [
        { date: "22 février 2019", title: "Début du Hirak", description: "Des manifestations massives s'opposent au cinquième mandat de Bouteflika, qui démissionne le 2 avril.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2019%E2%80%932021_Algerian_protests" },
        { date: "7 septembre 2024", title: "Réélection de Tebboune", description: "Il obtient 84,3 % des voix selon la Cour constitutionnelle.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2024_Algerian_presidential_election" },
      ],
    },
  ],
};
