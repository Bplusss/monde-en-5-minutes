import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire libanaise, des cités phéniciennes à la guerre de 2026 — pas un résumé exhaustif.",
  periods: [
    {
      id: "phenicie-antiquite",
      title: "Cités phéniciennes et Antiquité",
      startYear: -3000,
      endYear: 636,
      summary:
        "Byblos, Sidon et Tyr, cités-États marchandes, dominent le commerce méditerranéen ; les Phéniciens diffusent un alphabet dont dérivent les alphabets grec puis latin, et fondent Carthage. Le littoral passe ensuite sous domination assyrienne, perse, grecque puis romaine ; Rome édifie à Baalbek l'un de ses plus grands sanctuaires.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Phoenicia",
      events: [
        {
          date: "vers 1000 av. J.-C.",
          title: "Alphabet phénicien",
          description: "Les plus anciennes inscriptions en alphabet phénicien connues, dont celle du sarcophage d'Ahiram, proviennent de Byblos.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Phoenician_alphabet",
        },
        {
          date: "332 av. J.-C.",
          title: "Siège de Tyr par Alexandre le Grand",
          description: "Après sept mois de siège, Alexandre prend la cité insulaire en la reliant au continent par une digue.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Siege_of_Tyre_(332_BC)",
        },
      ],
    },
    {
      id: "islam-ottomans-mont-liban",
      title: "Conquête arabe, croisades et domination ottomane",
      startYear: 636,
      endYear: 1918,
      summary:
        "Après la conquête arabe, la montagne sert de refuge aux maronites et aux druzes. Les croisés tiennent la côte aux XIIe-XIIIe siècles, puis les Mamelouks et, à partir de 1516, les Ottomans. Les émirs druzes Maan puis Chéhab gouvernent le Mont-Liban. Après les massacres de 1860, une province autonome, la moutassarifat, y est créée sous garantie européenne.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mount_Lebanon_Mutasarrifate",
      events: [
        {
          date: "1516",
          title: "Conquête ottomane",
          description: "Les Ottomans s'emparent de la région, qu'ils gouverneront quatre siècles.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/History_of_Lebanon_under_Ottoman_rule",
        },
        {
          date: "1860-1861",
          title: "Guerre civile du Mont-Liban et moutassarifat",
          description: "Les massacres de chrétiens par des druzes entraînent une intervention française et la création d'une province autonome dirigée par un gouverneur chrétien.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1860_Mount_Lebanon_civil_war",
        },
      ],
    },
    {
      id: "mandat-independance",
      title: "Mandat français et indépendance",
      startYear: 1920,
      endYear: 1975,
      summary:
        "La France proclame le Grand Liban en 1920 en adjoignant au Mont-Liban la côte et la Bekaa. Indépendant en 1943, le pays repose sur le Pacte national, qui répartit le pouvoir entre communautés. Beyrouth devient une place financière et touristique, mais l'équilibre est fragilisé par l'arrivée de réfugiés palestiniens et de l'OLP.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/French_Mandate_for_Syria_and_the_Lebanon",
      events: [
        {
          date: "1er septembre 1920",
          title: "Proclamation du Grand Liban",
          description: "Le général Gouraud proclame à Beyrouth l'État du Grand Liban, dans ses frontières actuelles.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Greater_Lebanon",
        },
        {
          date: "22 novembre 1943",
          title: "Indépendance",
          description: "La France cède face aux manifestations et à la pression britannique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Lebanese_Independence_Day",
        },
      ],
    },
    {
      id: "guerre-civile",
      title: "Guerre civile",
      startYear: 1975,
      endYear: 1990,
      summary:
        "Milices chrétiennes, palestiniennes, musulmanes et druzes s'affrontent, avec l'intervention de la Syrie et d'Israël. La guerre fait environ 150 000 morts. Le Hezbollah naît dans ce contexte, avec le soutien de l'Iran. L'accord de Taëf rééquilibre le pouvoir au profit des musulmans.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Lebanese_Civil_War",
      events: [
        {
          date: "13 avril 1975",
          title: "Début de la guerre civile",
          description: "L'attaque d'un autobus palestinien à Aïn el-Remmaneh déclenche les combats.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1975_Beirut_bus_massacre",
        },
        {
          date: "juin-septembre 1982",
          title: "Invasion israélienne et massacres de Sabra et Chatila",
          description: "Israël assiège Beyrouth et obtient le départ de l'OLP ; des miliciens chrétiens massacrent des centaines de civils dans les camps palestiniens.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sabra_and_Shatila_massacre",
        },
        {
          date: "octobre 1989",
          title: "Accord de Taëf",
          description: "Les députés réunis en Arabie saoudite instaurent la parité des sièges entre chrétiens et musulmans et renforcent le Premier ministre.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Taif_Agreement",
        },
      ],
    },
    {
      id: "reconstruction-tutelle-syrienne",
      title: "Reconstruction, tutelle syrienne et montée du Hezbollah",
      startYear: 1990,
      endYear: 2019,
      summary:
        "Rafic Hariri reconstruit Beyrouth à crédit, sous tutelle syrienne. Israël se retire du Sud en 2000. L'assassinat de Hariri en 2005 provoque le retrait des troupes syriennes. Seule milice à avoir conservé ses armes, le Hezbollah mène la guerre de 2006 contre Israël et intervient en Syrie à partir de 2012.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Lebanon",
      events: [
        {
          date: "mai 2000",
          title: "Retrait israélien du Sud-Liban",
          description: "Israël met fin à vingt-deux ans d'occupation ; l'ONU trace la « ligne bleue ».",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/South_Lebanon_conflict_(1985%E2%80%932000)",
        },
        {
          date: "14 février 2005",
          title: "Assassinat de Rafic Hariri",
          description: "Les manifestations de la « révolution du Cèdre » obtiennent le départ des troupes syriennes en avril. Le Tribunal spécial pour le Liban a condamné des membres du Hezbollah.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Rafic_Hariri",
        },
        {
          date: "juillet-août 2006",
          title: "Guerre de 2006",
          description: "Trente-quatre jours de guerre entre Israël et le Hezbollah ; la résolution 1701 renforce la FINUL au Sud.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2006_Lebanon_War",
        },
      ],
    },
    {
      id: "effondrement-guerres",
      title: "Effondrement financier et guerres avec Israël",
      startYear: 2019,
      endYear: "present",
      summary:
        "La crise financière de 2019 et l'explosion du port de Beyrouth en 2020 ruinent le pays. Le Hezbollah ouvre un front contre Israël au lendemain du 7 octobre 2023 ; la guerre de 2024 le décapite. Élus en 2025, Joseph Aoun et Nawaf Salam veulent désarmer le mouvement. Le 2 mars 2026, le Hezbollah attaque Israël après l'assassinat du Guide iranien : Israël bombarde le pays et occupe une partie du Sud. La guerre a fait plus de 4 000 morts au Liban et plus d'un million de déplacés.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/2026_Lebanon_war",
      events: [
        {
          date: "17 octobre 2019",
          title: "Soulèvement contre la classe politique",
          description: "Une taxe sur les appels WhatsApp déclenche des manifestations dans tout le pays, sur fond d'effondrement bancaire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/17_October_Revolution",
        },
        {
          date: "4 août 2020",
          title: "Explosion du port de Beyrouth",
          description: "L'explosion de 2 750 tonnes de nitrate d'ammonium stockées sans précaution fait plus de 200 morts et dévaste une partie de la ville.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2020_Beirut_explosion",
        },
        {
          date: "27 novembre 2024",
          title: "Cessez-le-feu entre Israël et le Hezbollah",
          description: "Négocié par les États-Unis et la France, deux mois après la mort de Hassan Nasrallah ; Israël poursuit ensuite des frappes, en invoquant le réarmement du Hezbollah.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2024_Israel%E2%80%93Lebanon_ceasefire_agreement",
        },
        {
          date: "2 mars 2026",
          title: "Guerre de 2026",
          description: "Le gouvernement interdit les activités militaires du Hezbollah. Une trêve entre en vigueur le 17 avril ; un accord-cadre israélo-libanais, rejeté par le Hezbollah, est conclu à Washington le 26 juin. Les frappes israéliennes se poursuivent depuis.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2026_Lebanon_war",
        },
      ],
    },
  ],
};
