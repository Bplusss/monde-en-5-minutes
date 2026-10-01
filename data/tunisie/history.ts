import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire tunisienne, de Carthage à la présidence de Kaïs Saïed — pas un résumé exhaustif.",
  periods: [
    {
      id: "carthage-afrique-romaine",
      title: "Carthage et l'Afrique romaine",
      startYear: -814,
      endYear: 698,
      summary:
        "Fondée selon la tradition en 814 av. J.-C. par des colons phéniciens de Tyr, Carthage devient la grande puissance maritime de la Méditerranée occidentale avant d'être vaincue par Rome au terme des guerres puniques et rasée en 146 av. J.-C. Reconstruite par les Romains, elle redevient la capitale d'une province d'Afrique prospère, foyer majeur du christianisme latin. Vandales (439) puis Byzantins (533) lui succèdent.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Ancient_Carthage",
      events: [
        { date: "814 av. J.-C.", title: "Fondation de Carthage", description: "Des colons phéniciens fondent Carthage, selon la tradition sous la conduite de la reine Élissa (Didon).", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Ancient_Carthage" },
        { date: "218-202 av. J.-C.", title: "Deuxième guerre punique", description: "Hannibal franchit les Alpes et menace Rome avant d'être vaincu à Zama.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Second_Punic_War" },
        { date: "146 av. J.-C.", title: "Destruction de Carthage", description: "Rome rase la cité à l'issue de la troisième guerre punique et crée la province d'Afrique.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Third_Punic_War" },
      ],
    },
    {
      id: "ifriqiya-dynasties",
      title: "Ifriqiya : conquête arabe et dynasties musulmanes",
      startYear: 670,
      endYear: 1574,
      summary:
        "La conquête arabe fonde Kairouan en 670 et fait de l'Ifriqiya, après la prise de Carthage en 698, une terre d'islam progressivement arabisée. Les Aghlabides (800-909), puis les Fatimides, qui y fondent Mahdia avant de conquérir l'Égypte, et les Zirides en font un centre politique et religieux. Sous les Hafsides (1229-1574), Tunis devient capitale et l'une des grandes villes du monde musulman ; l'historien Ibn Khaldoun y naît en 1332.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Ifriqiya",
      events: [
        { date: "670", title: "Fondation de Kairouan", description: "Oqba ibn Nafi fonde Kairouan, première capitale musulmane du Maghreb.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Kairouan" },
        { date: "1229", title: "Avènement des Hafsides", description: "Les Hafsides proclament leur indépendance et installent leur capitale à Tunis.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Hafsid_dynasty" },
      ],
    },
    {
      id: "regence-ottomane-protectorat",
      title: "Régence ottomane et protectorat français",
      startYear: 1574,
      endYear: 1956,
      summary:
        "Conquise par les Ottomans en 1574, la régence de Tunis devient largement autonome sous la dynastie des beys husseinites (1705-1957). Au XIXe siècle, Ahmed Bey abolit l'esclavage (1846) et le pays se dote en 1861 de la première Constitution du monde arabe, mais l'endettement ouvre la voie au protectorat français, imposé par le traité du Bardo en 1881. Le mouvement national, porté à partir de 1934 par le Néo-Destour d'Habib Bourguiba, obtient l'indépendance en 1956.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/French_protectorate_of_Tunisia",
      events: [
        { date: "1846", title: "Abolition de l'esclavage", description: "Ahmed Bey abolit l'esclavage, deux ans avant la France.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Ahmad_I_ibn_Mustafa" },
        { date: "12 mai 1881", title: "Traité du Bardo", description: "Le bey accepte le protectorat de la France.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Treaty_of_Bardo" },
        { date: "20 mars 1956", title: "Indépendance", description: "La France reconnaît l'indépendance de la Tunisie.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Tunisian_independence" },
      ],
    },
    {
      id: "bourguiba-ben-ali",
      title: "Bourguiba et Ben Ali",
      startYear: 1956,
      endYear: 2011,
      summary:
        "Habib Bourguiba promulgue dès 1956 le Code du statut personnel, qui abolit la polygamie et instaure le divorce judiciaire, puis proclame la République en 1957. Président à vie à partir de 1975, il mise sur l'éducation et la modernisation sous un parti unique. Destitué en 1987 par son Premier ministre Zine el-Abidine Ben Ali, il laisse place à un régime policier, stable économiquement mais miné par la corruption de l'entourage présidentiel.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Habib_Bourguiba",
      events: [
        { date: "13 août 1956", title: "Code du statut personnel", description: "Abolition de la polygamie et de la répudiation, sans équivalent dans le monde arabe de l'époque.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Code_of_Personal_Status_(Tunisia)" },
        { date: "25 juillet 1957", title: "Proclamation de la République", description: "La monarchie beylicale est abolie ; Bourguiba devient président.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Habib_Bourguiba" },
        { date: "7 novembre 1987", title: "Destitution de Bourguiba", description: "Ben Ali dépose Bourguiba, déclaré médicalement inapte.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/1987_Tunisian_coup_d%27%C3%A9tat" },
      ],
    },
    {
      id: "revolution-saied",
      title: "Révolution de 2011, transition démocratique et ère Saïed",
      startYear: 2010,
      endYear: "present",
      summary:
        "L'immolation du vendeur ambulant Mohamed Bouazizi à Sidi Bouzid, le 17 décembre 2010, déclenche une révolte qui chasse Ben Ali le 14 janvier 2011 et ouvre le Printemps arabe. La transition aboutit à la Constitution de 2014, compromis entre les islamistes d'Ennahdha et les forces laïques, et vaut au Quartet du dialogue national le prix Nobel de la paix 2015. Fragilisée par les attentats de 2015, la crise économique et l'instabilité gouvernementale, cette démocratie prend fin avec le coup de force de Kaïs Saïed du 25 juillet 2021.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Tunisian_revolution",
      events: [
        { date: "14 janvier 2011", title: "Fuite de Ben Ali", description: "Après un mois de soulèvement, le président s'exile en Arabie saoudite.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Tunisian_revolution" },
        { date: "26 janvier 2014", title: "Adoption de la Constitution de 2014", description: "L'Assemblée constituante adopte une Constitution démocratique à une très large majorité.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2014_Constitution_of_Tunisia" },
        { date: "2015", title: "Attentats et prix Nobel", description: "Les attentats du musée du Bardo et de Sousse frappent le tourisme ; le Quartet du dialogue national reçoit le prix Nobel de la paix.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Tunisian_National_Dialogue_Quartet" },
        { date: "25 juillet 2021", title: "Coup de force de Kaïs Saïed", description: "Le président suspend le Parlement et limoge le gouvernement, puis gouverne par décrets.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2021_Tunisian_self-coup" },
      ],
    },
  ],
};
