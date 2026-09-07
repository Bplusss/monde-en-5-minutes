import type { HistoryData } from "@/lib/types";

const WIKI = "Wikipedia (histoire de la Pologne)";
const IPN = "Instytut Pamięci Narodowej (IPN)";
const IPN_URL = "https://ipn.gov.pl/en";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction et de transformation du pays — pas un résumé exhaustif de son histoire.",
  periods: [
    {
      id: "moyen-age",
      title: "Moyen Âge",
      startYear: 966,
      endYear: 1569,
      summary:
        "Le baptême du duc Mieszko Iᵉʳ en 966 marque l'entrée du territoire polonais dans la chrétienté occidentale et la naissance de l'État piaste, qui devient royaume au XIᵉ siècle.",
      source: WIKI,
      events: [
        {
          date: "966",
          title: "Baptême de Mieszko Iᵉʳ",
          description: "Le duc Mieszko Iᵉʳ se convertit au christianisme, événement fondateur traditionnellement associé à la naissance de l'État polonais.",
          source: WIKI,
        },
      ],
    },
    {
      id: "republique-des-deux-nations",
      title: "République des Deux Nations",
      startYear: 1569,
      endYear: 1795,
      summary:
        "L'union de Lublin en 1569 fonde la République des Deux Nations, union polono-lituanienne qui devient l'un des plus vastes États d'Europe avant d'être progressivement démembrée par ses voisins.",
      source: WIKI,
      events: [
        {
          date: "1569",
          title: "Union de Lublin",
          description: "Le royaume de Pologne et le grand-duché de Lituanie forment une union politique unique, la République des Deux Nations.",
          source: WIKI,
        },
        {
          date: "1772 – 1795",
          title: "Partages de la Pologne",
          description: "Trois partages successifs entre la Russie, la Prusse et l'Autriche font disparaître l'État polonais de la carte d'Europe pendant plus d'un siècle.",
          source: WIKI,
        },
      ],
    },
    {
      id: "xxe-siecle",
      title: "XXe siècle",
      startYear: 1918,
      endYear: 1989,
      summary:
        "La Pologne recouvre son indépendance en 1918, avant d'être envahie en 1939 par l'Allemagne nazie puis l'URSS, d'être le théâtre de la Shoah, puis de passer sous régime communiste jusqu'en 1989.",
      source: IPN,
      sourceUrl: IPN_URL,
      events: [
        {
          date: "11 novembre 1918",
          title: "Indépendance retrouvée",
          description: "Après 123 ans de partition, la Pologne recouvre son indépendance à l'issue de la Première Guerre mondiale.",
          source: WIKI,
        },
        {
          date: "1er septembre 1939",
          title: "Invasion de la Pologne",
          description: "L'invasion allemande, suivie de l'invasion soviétique le 17 septembre, déclenche la Seconde Guerre mondiale et une occupation particulièrement meurtrière, notamment pour la population juive de Pologne.",
          source: IPN,
          sourceUrl: IPN_URL,
        },
        {
          date: "1980",
          title: "Naissance de Solidarność",
          description: "Le syndicat indépendant Solidarność, né des grèves des chantiers navals de Gdańsk sous la direction de Lech Wałęsa, devient le fer de lance de l'opposition au régime communiste.",
          source: IPN,
          sourceUrl: IPN_URL,
        },
        {
          date: "1989",
          title: "Accords de la Table ronde",
          description: "Les négociations entre le pouvoir communiste et l'opposition démocratique ouvrent la voie à des élections partiellement libres et à la fin du régime communiste.",
          source: IPN,
          sourceUrl: IPN_URL,
        },
      ],
    },
    {
      id: "aujourdhui",
      title: "Aujourd'hui",
      startYear: 1989,
      endYear: "present",
      summary:
        "La Pologne post-communiste adopte une nouvelle Constitution en 1997, rejoint l'OTAN en 1999 puis l'Union européenne en 2004, devenant l'une des économies les plus dynamiques d'Europe centrale.",
      source: WIKI,
      events: [
        {
          date: "1 mai 2004",
          title: "Adhésion à l'Union européenne",
          description: "La Pologne rejoint l'Union européenne lors du grand élargissement de 2004.",
          source: WIKI,
        },
      ],
    },
  ],
};
