import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Littérature",
      title: "Gabriel García Márquez et le réalisme magique",
      description:
        "Prix Nobel de littérature en 1982, « Gabo » a fait de Macondo, village imaginaire inspiré de son Aracataca natale, l'un des lieux les plus célèbres de la littérature mondiale avec « Cent ans de solitude » (1967).",
      examples: ["Cent ans de solitude", "L'Amour aux temps du choléra", "Chronique d'une mort annoncée"],
      source: "Prix Nobel",
      sourceUrl: "https://www.nobelprize.org/prizes/literature/1982/marquez/facts/",
    },
    {
      category: "Musique",
      title: "Cumbia et vallenato",
      description:
        "Née sur la côte caraïbe du métissage de rythmes africains, autochtones et espagnols, la cumbia s'est diffusée dans toute l'Amérique latine. Le vallenato, joué à l'accordéon, est inscrit au patrimoine immatériel de l'UNESCO depuis 2015.",
      examples: ["Carlos Vives", "Totó la Momposina", "Shakira", "Karol G"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Vallenato",
    },
    {
      category: "Patrimoine",
      title: "Le paysage culturel du café",
      description:
        "Dans les cordillères de Caldas, Quindío, Risaralda et du nord de la vallée du Cauca, les fincas caféières et leurs villages aux maisons colorées forment un paysage inscrit au patrimoine mondial de l'UNESCO depuis 2011.",
      examples: ["Salento", "Vallée de Cocora", "Manizales"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/1121",
    },
    {
      category: "Fêtes",
      title: "Le carnaval de Barranquilla",
      description:
        "Quatre jours de défilés, de danses et de masques mêlant traditions africaines, autochtones et européennes : c'est l'un des plus grands carnavals d'Amérique latine, reconnu par l'UNESCO comme chef-d'œuvre du patrimoine immatériel en 2003.",
      examples: ["Batalla de Flores", "Marimondas", "Cumbiamba"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Barranquilla%27s_Carnival",
    },
    {
      category: "Arts",
      title: "Fernando Botero",
      description:
        "Le peintre et sculpteur de Medellín (1932-2023) est mondialement connu pour ses personnages aux formes volumineuses ; il a offert une large part de sa collection aux musées de Bogota et de Medellín.",
      examples: ["Museo Botero (Bogota)", "Plaza Botero (Medellín)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Fernando_Botero",
    },
    {
      category: "Gastronomie",
      title: "Arepas, ajiaco et bandeja paisa",
      description:
        "La cuisine colombienne varie fortement selon les régions : arepas de maïs partout, ajiaco (soupe de poulet aux trois pommes de terre) à Bogota, copieuse bandeja paisa en Antioquia, poissons et riz à la noix de coco sur les côtes. Le tinto, petit café noir, se boit à toute heure.",
      examples: ["Arepa", "Ajiaco", "Bandeja paisa", "Tinto"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Colombian_cuisine",
    },
  ],
};
