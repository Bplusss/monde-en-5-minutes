import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/North-Macedonia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire macédonienne, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "antiquite-heritage",
      title: "Antiquité : Péonie, royaume de Macédoine et héritage romain",
      startYear: -800,
      endYear: 1395,
      summary:
        "Peuplée dans l'Antiquité par les Péoniens puis intégrée au royaume de Macédoine sous Philippe II et Alexandre le Grand, la région passe ensuite sous domination romaine puis byzantine, traversée par la Via Egnatia. L'arrivée des peuples slaves du sud à partir du VIᵉ siècle façonne durablement la composition ethnolinguistique du territoire, qui passe ensuite sous influence bulgare puis serbe médiévale avant la conquête ottomane.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "domination-ottomane",
      title: "Cinq siècles de domination ottomane",
      startYear: 1395,
      endYear: 1912,
      summary:
        "Intégrée à l'Empire ottoman pendant près de cinq siècles au sein de la province de Roumélie, la région connaît un réveil national slave macédonien au tournant du XXᵉ siècle, marqué par le soulèvement d'Ilinden de 1903 contre le pouvoir ottoman, sévèrement réprimé mais devenu un symbole fondateur de la mémoire nationale.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "2 août 1903",
          title: "Soulèvement d'Ilinden",
          description: "Un soulèvement armé contre l'administration ottomane proclame brièvement une « République de Kruševo » avant d'être écrasé ; sa date anniversaire est devenue fête nationale.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Ilinden%E2%80%93Preobrazhenie_Uprising",
        },
      ],
    },
    {
      id: "yougoslavie",
      title: "Des guerres balkaniques à la République socialiste de Macédoine",
      startYear: 1912,
      endYear: 1991,
      summary:
        "Les guerres balkaniques de 1912-1913 partagent la région entre la Serbie, la Grèce et la Bulgarie ; la « Macédoine du Vardar » revient à la Serbie puis au royaume de Yougoslavie. Occupée par la Bulgarie pendant la Seconde Guerre mondiale, elle devient en 1944, sous l'autorité de Tito, l'une des six républiques constitutives de la République fédérative socialiste de Yougoslavie — première reconnaissance politique d'une entité macédonienne distincte, dotée d'une langue littéraire officiellement codifiée à cette occasion.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "2 août 1944",
          title: "Proclamation de la République socialiste de Macédoine",
          description: "L'Assemblée antifasciste de libération nationale de Macédoine (ASNOM) proclame la République comme composante de la future Yougoslavie fédérale, et codifie officiellement la langue macédonienne.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/ASNOM",
        },
      ],
    },
    {
      id: "independance-nom",
      title: "Indépendance, conflit de 2001 et dispute du nom avec la Grèce",
      startYear: 1991,
      endYear: "present",
      summary:
        "Le pays accède pacifiquement à l'indépendance par référendum en septembre 1991, seule république yougoslave à se séparer sans conflit armé. La Grèce s'oppose toutefois à l'usage du nom « Macédoine », y voyant une appropriation de son propre héritage régional et antique, contraignant le pays à une admission provisoire à l'ONU sous l'appellation « ex-République yougoslave de Macédoine ». Un conflit armé bref mais grave oppose en 2001 les forces gouvernementales à une insurrection albanaise, résolu par l'accord-cadre d'Ohrid qui élargit les droits de la minorité albanaise. En juin 2018, l'accord de Prespa met fin à vingt-sept ans de dispute en officialisant le nom de « Macédoine du Nord », entré en vigueur en février 2019 et ouvrant la voie à l'adhésion à l'OTAN en 2020 et à l'ouverture des négociations d'adhésion à l'Union européenne en 2022.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "8 septembre 1991",
          title: "Référendum d'indépendance",
          description: "Plus de 95 % des votants approuvent la sécession pacifique d'avec la République fédérative socialiste de Yougoslavie.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/1991_Macedonian_independence_referendum",
        },
        {
          date: "13 août 2001",
          title: "Accord-cadre d'Ohrid",
          description: "Cet accord met fin au conflit armé de 2001 entre l'État et l'Armée de libération nationale albanaise, en élargissant les droits linguistiques et politiques de la minorité albanaise.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
        {
          date: "12 février 2019",
          title: "Entrée en vigueur de l'accord de Prespa",
          description: "Le pays change officiellement de nom pour « République de Macédoine du Nord », mettant fin au différend avec la Grèce et débloquant son intégration euro-atlantique.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Prespa_Agreement",
        },
      ],
    },
  ],
};
