import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Monaco";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction de la principauté moderne — pas un résumé exhaustif de l'histoire monégasque, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "grimaldi-origines",
      title: "La prise du Rocher et les débuts de la dynastie Grimaldi",
      startYear: 1297,
      endYear: 1861,
      summary:
        "Selon la tradition, François Grimaldi s'empare en 1297 de la forteresse du Rocher déguisé en moine franciscain — un épisode encore célébré aujourd'hui sur les armoiries monégasques, qui montrent deux moines armés d'épées. La principauté passe ensuite sous diverses influences (Gênes, Espagne, France) avant de devenir en 1861 un protectorat français par traité, après avoir perdu l'année précédente les villes de Menton et Roquebrune — qui représentaient alors la quasi-totalité de son territoire historique — à la suite d'une insurrection locale de 1848.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1297",
          title: "Prise du Rocher par François Grimaldi",
          description: "Déguisé en moine franciscain, François Grimaldi s'empare de la forteresse de Monaco, marquant le début — après quelques interruptions — de la souveraineté grimaldienne.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/House_of_Grimaldi",
        },
        {
          date: "2 février 1861",
          title: "Traité franco-monégasque",
          description: "La France reconnaît la souveraineté de Monaco sur son territoire résiduel après la perte de Menton et Roquebrune, en échange d'une compensation financière et d'un protectorat de fait.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Franco-Monegasque_Treaty_of_1861",
        },
      ],
    },
    {
      id: "casino-essor",
      title: "Le casino de Monte-Carlo et l'essor des finances publiques",
      startYear: 1861,
      endYear: 1949,
      summary:
        "Le casino de Monte-Carlo, ouvert en 1863 sous le règne de Charles III, transforme radicalement les finances de la principauté : ses recettes permettent dès 1869 l'abolition totale de l'impôt direct sur les résidents, une politique fiscale toujours en vigueur pour les non-Français et devenue l'un des marqueurs identitaires du pays. Un traité de 1918 lie étroitement la politique étrangère monégasque à celle de la France.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "1863",
          title: "Ouverture du casino de Monte-Carlo",
          description: "Le casino, conçu pour attirer une clientèle fortunée internationale, devient rapidement la principale source de revenus de l'État monégasque.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Casino_de_Monte-Carlo",
        },
        {
          date: "1869",
          title: "Abolition de l'impôt direct",
          description: "Les recettes du casino permettent au prince Charles III de supprimer l'impôt direct sur le revenu des résidents, une exonération toujours en vigueur.",
          source: BRITANNICA,
          sourceUrl: BRITANNICA_URL,
        },
      ],
    },
    {
      id: "monaco-moderne",
      title: "Rainier III, Grace Kelly et la souveraineté garantie",
      startYear: 1949,
      endYear: "present",
      summary:
        "Le prince Rainier III, monté sur le trône en 1949, épouse en 1956 l'actrice américaine Grace Kelly lors d'un mariage suivi dans le monde entier, qui contribue à populariser l'image internationale de la principauté. Sa nouvelle Constitution de 1962 élargit les droits des citoyens monégasques et abolit la peine de mort. Monaco rejoint l'Organisation des Nations unies en 1993. Le prince Albert II, fils de Rainier III et de Grace Kelly, lui succède en 2005 ; un traité franco-monégasque de 2002 garantit désormais la pérennité de la souveraineté du pays même sans héritier direct des Grimaldi.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "18-19 avril 1956",
          title: "Mariage de Rainier III et Grace Kelly",
          description: "L'union du prince avec l'actrice américaine, retransmise dans le monde entier, marque durablement l'image internationale de la principauté.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Wedding_of_Rainier_III,_Prince_of_Monaco,_and_Grace_Kelly",
        },
        {
          date: "28 mai 1993",
          title: "Adhésion à l'Organisation des Nations unies",
          description: "Monaco devient un État membre à part entière de l'ONU.",
          source: "Wikipedia",
          sourceUrl: "https://en.wikipedia.org/wiki/Monaco_and_the_United_Nations",
        },
      ],
    },
  ],
};
