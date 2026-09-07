import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Alimentation",
      title: "Le régime méditerranéen",
      description:
        "Inscrit en 2013 au patrimoine culturel immatériel de l'UNESCO (dossier porté conjointement par la Grèce et six autres pays), il repose sur l'huile d'olive, les légumes, le poisson et les produits laitiers comme le féta.",
      examples: ["Moussaka", "Souvlaki", "Salade grecque"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/le-regime-mediterraneen-00884",
    },
    {
      category: "Fêtes",
      title: "Pâques orthodoxes",
      description:
        "La fête religieuse la plus importante de l'année, souvent célébrée à une date différente de Pâques catholique/protestante puisque l'Église orthodoxe suit le calendrier julien pour son calcul.",
      examples: ["Résurrection à minuit (Anastasi)", "Agneau rôti à la broche"],
      source: "Église de Grèce",
      sourceUrl: "https://www.ecclesia.gr/",
    },
    {
      category: "Patrimoine",
      title: "L'Acropole d'Athènes et le patrimoine antique",
      description:
        "La Grèce compte 19 biens inscrits au patrimoine mondial de l'UNESCO, parmi lesquels l'Acropole d'Athènes, le site archéologique de Delphes et le monastère de Meteora.",
      examples: ["Acropole d'Athènes", "Delphes", "Météores", "Mystras"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
    {
      category: "Musique",
      title: "Le rébétiko",
      description:
        "Né dans les milieux populaires urbains au début du XXᵉ siècle, notamment parmi les réfugiés grecs d'Asie Mineure après 1922, le rébétiko est inscrit depuis 2017 au patrimoine immatériel de l'UNESCO.",
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/le-rebetiko-01297",
    },
    {
      category: "Arts vivants",
      title: "Le théâtre antique en plein air",
      description:
        "Les tragédies et comédies antiques continuent d'être jouées chaque été dans les théâtres antiques du pays, notamment lors du Festival d'Athènes et Épidaure.",
      examples: ["Théâtre d'Épidaure", "Odéon d'Hérode Atticus"],
      source: "Festival d'Athènes et Épidaure",
      sourceUrl: "https://aefestival.gr/",
    },
  ],
};
