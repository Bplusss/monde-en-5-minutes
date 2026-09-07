import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Art de vivre",
      title: "Le hygge",
      description:
        "Notion intraduisible désignant un sentiment de confort chaleureux et convivial, souvent citée comme un trait culturel danois central, en particulier durant les longs mois d'hiver.",
      source: "VisitDenmark",
      sourceUrl: "https://www.visitdenmark.com/denmark/explore/hygge",
    },
    {
      category: "Design",
      title: "Le design danois",
      description:
        "Le mobilier et le design fonctionnaliste danois du XXᵉ siècle (Arne Jacobsen, Poul Henningsen) ont acquis une renommée mondiale et restent une référence en architecture d'intérieur.",
      examples: ["Chaise « Œuf » d'Arne Jacobsen", "Lampes PH de Poul Henningsen"],
      source: "Designmuseum Danmark",
      sourceUrl: "https://designmuseum.dk/",
    },
    {
      category: "Jouets",
      title: "Naissance du Lego à Billund",
      description:
        "Fondée en 1932 à Billund par Ole Kirk Christiansen, l'entreprise Lego est devenue l'une des marques de jouets les plus reconnues au monde.",
      source: "The Lego Group",
      sourceUrl: "https://www.lego.com/en-us/aboutus/lego-group/the-lego-history",
    },
    {
      category: "Gastronomie",
      title: "La Nouvelle Cuisine nordique",
      description:
        "Portée notamment par le restaurant Noma à Copenhague, plusieurs fois classé meilleur restaurant du monde, le mouvement de la Nouvelle Cuisine nordique a renouvelé la gastronomie danoise autour de produits locaux et de saison.",
      examples: ["Smørrebrød (tartine ouverte)", "Noma"],
      source: "The World's 50 Best Restaurants",
      sourceUrl: "https://www.theworlds50best.com/",
    },
    {
      category: "Patrimoine",
      title: "Sites UNESCO de la royauté et des Vikings",
      description:
        "Le Danemark compte plusieurs sites inscrits au patrimoine mondial de l'UNESCO, dont les tertres et pierres runiques de Jelling, la cathédrale de Roskilde et le château de Kronborg (site de la légende d'Hamlet).",
      examples: ["Tertres et pierres runiques de Jelling", "Cathédrale de Roskilde", "Château de Kronborg"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
    {
      category: "Littérature",
      title: "Hans Christian Andersen",
      description:
        "Né à Odense en 1805, Andersen est l'auteur de contes parmi les plus traduits au monde, dont La Petite Sirène, dont la statue à Copenhague est devenue un symbole national.",
      source: "H.C. Andersen Museum",
      sourceUrl: "https://hcandersensbyodense.dk/",
    },
  ],
};
