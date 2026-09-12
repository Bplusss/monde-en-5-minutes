import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de lieux culturels documentés — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "La baie de Kotor et sa vieille ville vénitienne",
      description:
        "Inscrite au patrimoine mondial de l'UNESCO au titre mixte culturel et naturel, la région naturelle et culturo-historique de Kotor associe un golfe aux allures de fjord, cerné de montagnes abruptes, et une cité fortifiée d'architecture vénitienne, longtemps possession de la République de Venise.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/125/",
    },
    {
      category: "Nature et patrimoine",
      title: "Le parc national du Durmitor et le canyon de la Tara",
      description:
        "Classé au patrimoine mondial de l'UNESCO, le massif du Durmitor abrite le canyon de la Tara, le plus profond d'Europe avec environ 1 300 mètres à son point le plus creux, ainsi que dix-huit lacs glaciaires d'altitude surnommés « yeux de la montagne ».",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/100/",
    },
    {
      category: "Littérature",
      title: "Petar II Petrović-Njegoš et Le Rayon du microcosme",
      description:
        "Prince-évêque, poète et philosophe, Njegoš (1813-1851) est la figure culturelle fondatrice du Monténégro moderne. Son poème épique Gorski vijenac (« La Couronne de montagne »), qui met en scène la lutte contre l'occupation ottomane, occupe une place centrale dans la mémoire nationale monténégrine comme dans la littérature serbe.",
      examples: ["Gorski vijenac (La Couronne de montagne)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Petar_II_Petrovi%C4%87-Njego%C5%A1",
    },
    {
      category: "Religion et patrimoine",
      title: "Le monastère d'Ostrog",
      description:
        "Creusé à même une falaise verticale du mont Ostroška greda, ce monastère orthodoxe abritant les reliques de saint Basile d'Ostrog est le principal lieu de pèlerinage du pays, visité chaque année par des fidèles orthodoxes, catholiques et musulmans.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ostrog_Monastery",
    },
    {
      category: "Musique et traditions",
      title: "Le kolo et le chant à la gousle",
      description:
        "Le kolo, danse collective en cercle partagée avec les Serbes et les Macédoniens, rythme les fêtes populaires. La poésie épique traditionnelle, récitée ou chantée en s'accompagnant de la gousle (guslé), un instrument à une corde, perpétue le récit des batailles et des héros de l'histoire monténégrine.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Culture_of_Montenegro",
    },
    {
      category: "Gastronomie",
      title: "Pršut et sir de Njeguši",
      description:
        "Le village de montagne de Njeguši, berceau de la dynastie Petrović-Njegoš, est réputé pour son pršut (jambon fumé séché à l'air des hauteurs) et son fromage de brebis, deux spécialités qui incarnent la cuisine pastorale de l'intérieur montagneux, à côté d'une cuisine littorale d'inspiration italienne et adriatique.",
      examples: ["Pršut de Njeguši", "Sir (fromage) de Njeguši", "Crni rižoto (risotto noir à l'encre de seiche)"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Montenegrin_cuisine",
    },
  ],
};
