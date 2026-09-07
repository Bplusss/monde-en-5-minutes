import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Institutions",
      title: "La démocratie directe",
      description:
        "Les citoyens suisses sont appelés aux urnes plusieurs fois par an pour se prononcer par référendum ou initiative populaire sur des lois et des modifications constitutionnelles, à tous les échelons (fédéral, cantonal, communal).",
      source: "Chancellerie fédérale",
      sourceUrl: "https://www.bk.admin.ch/bk/fr/home/droits-politiques.html",
    },
    {
      category: "Alimentation",
      title: "Fromage et chocolat",
      description:
        "La fondue et la raclette structurent une bonne partie de la culture culinaire alpine, tandis que la Suisse est l'un des pionniers du chocolat au lait industriel depuis la fin du XIXᵉ siècle.",
      examples: ["Gruyère AOP", "Emmentaler", "Chocolat Cailler", "Chocolat Lindt"],
      source: "Switzerland Tourism",
      sourceUrl: "https://www.myswitzerland.com/fr-ch/",
    },
    {
      category: "Savoir-faire",
      title: "L'horlogerie suisse",
      description:
        "Le savoir-faire horloger et mécanique de l'Arc jurassien est inscrit au patrimoine culturel immatériel de l'humanité par l'UNESCO depuis 2020.",
      examples: ["Rolex", "Omega", "Patek Philippe", "Swatch"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/fr/RL/lartisanat-de-lhorlogerie-mecanique-et-lart-mecanique-dart-01569",
    },
    {
      category: "Patrimoine",
      title: "Douze sites classés au patrimoine mondial",
      description:
        "La Suisse compte 12 biens inscrits au patrimoine mondial de l'UNESCO, dont la vieille ville de Berne et le chemin de fer rhétique dans le paysage des Albula et de la Bernina.",
      examples: ["Vieille ville de Berne", "Chemin de fer rhétique", "Vignoble en terrasses de Lavaux"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
    {
      category: "Fêtes",
      title: "La Fête nationale du 1er août",
      description:
        "Elle commémore le Pacte fédéral de 1291 et se célèbre par des feux d'artifice et des feux de joie dans tout le pays, en dépit de son caractère plus tardif (instituée officiellement en 1891 puis fériée dans toute la Suisse depuis 1994).",
      source: "Confédération suisse — admin.ch",
      sourceUrl: "https://www.eda.admin.ch/aboutswitzerland/fr/home/geschichte/uebersicht.html",
    },
    {
      category: "Sport",
      title: "Terre du ski et de la montagne",
      description:
        "Les Alpes suisses ont accueilli les Jeux olympiques d'hiver à deux reprises (Saint-Moritz 1928 et 1948) et restent un haut lieu mondial du ski et de l'alpinisme.",
      source: "Comité International Olympique",
      sourceUrl: "https://olympics.com/fr/",
    },
  ],
};
