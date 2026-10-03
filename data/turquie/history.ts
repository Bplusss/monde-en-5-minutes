import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire de l'Anatolie et de la Turquie — pas un résumé exhaustif.",
  periods: [
    {
      id: "anatolie-antique",
      title: "L'Anatolie antique, des premiers sanctuaires à Byzance",
      startYear: -9500,
      endYear: 1071,
      summary:
        "L'Anatolie abrite certains des plus anciens sites monumentaux connus, puis l'empire hittite. Grecs, Perses et Romains s'y succèdent ; Constantin fait de Byzance, rebaptisée Constantinople, la capitale de l'Empire romain d'Orient, qui domine la région pendant sept siècles.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Anatolia",
      events: [
        { date: "vers 9500 av. J.-C.", title: "Göbekli Tepe", description: "Des chasseurs-cueilleurs érigent des enceintes de piliers sculptés, parmi les plus anciens monuments connus.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe" },
        { date: "vers 1650 av. J.-C.", title: "Empire hittite", description: "Les Hittites fondent depuis Hattusa l'une des grandes puissances de l'âge du bronze.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Hittites" },
        { date: "330", title: "Fondation de Constantinople", description: "Constantin installe la capitale impériale sur le site de Byzance.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/History_of_Constantinople" },
      ],
    },
    {
      id: "seldjoukides-ottomans",
      title: "Seldjoukides et Empire ottoman",
      startYear: 1071,
      endYear: 1918,
      summary:
        "La victoire seldjoukide de Manzikert ouvre l'Anatolie aux Turcs. Issu d'une des principautés turques, l'État ottoman prend Constantinople en 1453 et devient sous Soliman le Magnifique un empire s'étendant sur trois continents. Après un long déclin et des réformes (Tanzimat), il entre dans la Première Guerre mondiale aux côtés de l'Allemagne.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Ottoman_Empire",
      events: [
        { date: "1071", title: "Bataille de Manzikert", description: "Les Seldjoukides battent l'armée byzantine et s'installent en Anatolie.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Battle_of_Manzikert" },
        { date: "29 mai 1453", title: "Prise de Constantinople", description: "Mehmed II met fin à l'Empire byzantin ; la ville devient la capitale ottomane.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Fall_of_Constantinople" },
        { date: "1520-1566", title: "Règne de Soliman le Magnifique", description: "Apogée territorial et culturel de l'Empire.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Suleiman_the_Magnificent" },
        { date: "1915-1916", title: "Génocide des Arméniens", description: "Déportations et massacres font entre 600 000 et 1,5 million de morts selon les estimations ; la Turquie conteste la qualification de génocide.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Armenian_genocide" },
      ],
    },
    {
      id: "republique-kemaliste",
      title: "Guerre d'indépendance et République kémaliste",
      startYear: 1919,
      endYear: 1950,
      summary:
        "Face au partage de l'Anatolie prévu par le traité de Sèvres, Mustafa Kemal mène la guerre d'indépendance. La République, proclamée en 1923, abolit le califat, adopte l'alphabet latin, le code civil et le suffrage féminin. Le régime de parti unique du CHP dure jusqu'aux élections de 1950, remportées par l'opposition.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Atat%C3%BCrk%27s_reforms",
      events: [
        { date: "24 juillet 1923", title: "Traité de Lausanne", description: "Il fixe l'essentiel des frontières actuelles et organise l'échange de populations avec la Grèce.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Lausanne" },
        { date: "29 octobre 1923", title: "Proclamation de la République", description: "Mustafa Kemal, futur Atatürk, en devient le premier président ; Ankara est la capitale.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Proclamation_of_the_Republic_of_Turkey" },
        { date: "1928", title: "Adoption de l'alphabet latin", description: "Il remplace l'alphabet arabe pour écrire le turc.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Turkish_alphabet" },
      ],
    },
    {
      id: "multipartisme-coups-etat",
      title: "Multipartisme, OTAN et coups d'État",
      startYear: 1950,
      endYear: 2002,
      summary:
        "Membre de l'OTAN dès 1952, la Turquie alterne gouvernements élus et interventions de l'armée, qui se pose en gardienne de la laïcité kémaliste (1960, 1971, 1980, 1997). En 1974, elle intervient militairement à Chypre. À partir de 1984, l'insurrection du PKK dans le Sud-Est fait plus de 40 000 morts.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_the_Republic_of_Turkey",
      events: [
        { date: "27 mai 1960", title: "Premier coup d'État militaire", description: "Le Premier ministre Adnan Menderes est renversé, puis exécuté en 1961.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/1960_Turkish_coup_d%27%C3%A9tat" },
        { date: "juillet-août 1974", title: "Intervention à Chypre", description: "Après un coup d'État soutenu par la junte grecque, l'armée turque prend le contrôle du nord de l'île.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Turkish_invasion_of_Cyprus" },
        { date: "12 septembre 1980", title: "Coup d'État du général Evren", description: "La junte dissout les partis et fait adopter la Constitution de 1982.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/1980_Turkish_coup_d%27%C3%A9tat" },
      ],
    },
    {
      id: "ere-erdogan",
      title: "L'ère Erdoğan",
      startYear: 2002,
      endYear: "present",
      summary:
        "L'AKP, parti islamo-conservateur, remporte les législatives de 2002. Recep Tayyip Erdoğan, Premier ministre puis président, réduit l'influence de l'armée et ouvre les négociations d'adhésion à l'UE, avant un tournant autoritaire après 2013. La tentative de putsch de 2016 est suivie de purges massives, puis du passage au régime présidentiel. Ouvert fin 2024, un processus de paix conduit le PKK à annoncer sa dissolution en mai 2025.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Recep_Tayyip_Erdo%C4%9Fan",
      events: [
        { date: "15 juillet 2016", title: "Tentative de coup d'État", description: "Imputée par Ankara au mouvement de Fethullah Gülen, elle fait environ 250 morts parmi ses opposants ; plus de 150 000 fonctionnaires sont ensuite limogés ou suspendus.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2016_Turkish_coup_attempt" },
        { date: "6 février 2023", title: "Séismes de Kahramanmaraş", description: "Deux séismes de magnitude 7,8 et 7,5 font plus de 53 000 morts en Turquie.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2023_Turkey%E2%80%93Syria_earthquakes" },
        { date: "19 mars 2025", title: "Arrestation d'Ekrem İmamoğlu", description: "L'arrestation du maire d'Istanbul déclenche les plus grandes manifestations depuis 2013.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Ekrem_%C4%B0mamo%C4%9Flu" },
        { date: "12 mai 2025", title: "Le PKK annonce sa dissolution", description: "À l'appel d'Abdullah Öcalan, le PKK renonce à la lutte armée ; une loi-cadre encadrant son désarmement est votée en août 2026.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2025_PKK%E2%80%93Turkey_peace_process" },
      ],
    },
  ],
};
