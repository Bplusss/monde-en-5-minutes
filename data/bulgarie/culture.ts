import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Alimentation",
      title: "Le yaourt bulgare",
      description:
        "En 1905, le médecin bulgare Stamen Grigorov isole à Genève la bactérie responsable de la fermentation du yaourt traditionnel bulgare, ensuite nommée Lactobacillus bulgaricus en son honneur.",
      examples: ["Yaourt (kiselo mlyako)", "Tarator (soupe froide au yaourt)", "Banitsa"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Stamen_Grigorov",
    },
    {
      category: "Patrimoine",
      title: "Tombeaux thraces et monastère de Rila",
      description:
        "La Bulgarie compte 10 biens inscrits au patrimoine mondial de l'UNESCO, dont sept culturels : les tombeaux thraces de Kazanlak et de Sveshtari, aux fresques et sculptures exceptionnellement conservées, et le monastère de Rila, fondé au Xᵉ siècle et plus grand monastère orthodoxe du pays.",
      examples: ["Monastère de Rila", "Tombeau thrace de Kazanlak", "Tombeau thrace de Sveshtari", "Cavalier de Madara"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/bg",
    },
    {
      category: "Traditions",
      title: "Les koukeri, mascarades chasse-hiver",
      description:
        "Costumés de peaux de bêtes, de cornes et de grosses clochettes, les koukeri parcourent villages et villes en janvier et février pour chasser les mauvais esprits et appeler une bonne récolte ; le rite est inscrit depuis 2015 au patrimoine culturel immatériel de l'UNESCO.",
      examples: ["Festival Sourva de Pernik"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/state/bulgaria-BG",
    },
    {
      category: "Traditions",
      title: "Le nestinarstvo, la danse sur le feu",
      description:
        "Dans quelques villages du Strandja, au sud-est du pays, des danseurs marchent pieds nus sur des braises ardentes lors de la fête des saints Constantin et Hélène, les 3 et 4 juin ; ce rite est inscrit depuis 2009 au patrimoine culturel immatériel de l'UNESCO.",
      examples: ["Village de Balgari"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/state/bulgaria-BG",
    },
    {
      category: "Artisanat",
      title: "La vallée des roses",
      description:
        "La région de Kazanlak et Karlovo produit l'essentiel de l'huile de rose bulgare, utilisée dans la parfumerie de luxe dans le monde entier ; le pays fournit une très grande part de la production mondiale d'huile de rose de Damas.",
      examples: ["Festival des roses de Kazanlak"],
      source: "Festival des roses de Kazanlak",
      sourceUrl: "https://www.rosefestivalkazanlak.com/rose-picking-rose-production-bulgaria/",
    },
  ],
};
