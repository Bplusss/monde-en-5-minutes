import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "Le Vieux Pont de Mostar (Stari Most)",
      description:
        "Chef-d'œuvre d'architecture ottomane construit au XVIᵉ siècle, détruit par les bombardements croates de Bosnie en 1993 puis reconstruit à l'identique en 2004, le Stari Most est un site classé au patrimoine mondial de l'UNESCO et un symbole de réconciliation. Des plongeurs locaux perpétuent la tradition séculaire du saut depuis ses 24 mètres de hauteur.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/946/",
    },
    {
      category: "Patrimoine",
      title: "Sarajevo, carrefour des religions",
      description:
        "Surnommée la « Jérusalem de l'Europe », Sarajevo réunit à quelques pas les uns des autres une mosquée ottomane, une cathédrale catholique, une église orthodoxe et une synagogue séfarade, témoignage d'une coexistence religieuse ancienne au cœur des Balkans.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Sarajevo",
    },
    {
      category: "Littérature",
      title: "Ivo Andrić, prix Nobel de littérature",
      description:
        "L'écrivain né en Bosnie-Herzégovine Ivo Andrić reçoit le prix Nobel de littérature en 1961, notamment pour son roman « Un pont sur la Drina », qui retrace l'histoire du pays à travers celle d'un pont ottoman de Višegrad.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ivo_Andri%C4%87",
    },
    {
      category: "Gastronomie",
      title: "Ćevapi et café bosnien",
      description:
        "Héritière de la cuisine ottomane, la table bosnienne se distingue par les ćevapi (petites saucisses de viande grillée servies dans du pain somun) et par un rituel du café préparé dans une cafetière en cuivre (džezva) et servi avec du rahat loukoum.",
      examples: ["Ćevapi", "Burek", "Café bosnien (bosanska kafa)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Bosnian_cuisine",
    },
    {
      category: "Musique",
      title: "Le sevdalinka",
      description:
        "Ce genre musical traditionnel, mélange de mélancolie slave et d'ornementation vocale ottomane, chante l'amour et la perte ; il reste profondément ancré dans l'identité culturelle bosnienne.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Sevdalinka",
    },
  ],
};
