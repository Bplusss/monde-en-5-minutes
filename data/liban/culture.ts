import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine antique",
      title: "Baalbek, Byblos, Tyr et Anjar",
      description:
        "Le pays compte quatre sites antiques ou médiévaux inscrits au patrimoine mondial de l'UNESCO : les temples romains de Baalbek, Byblos, l'une des plus anciennes villes habitées en continu, les vestiges de Tyr et la cité omeyyade d'Anjar. Tyr a été inscrite en juillet 2026 sur la liste du patrimoine en péril, en raison de la guerre.",
      examples: ["Temple de Bacchus (Baalbek)", "Port de Byblos", "Hippodrome de Tyr"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/294/",
    },
    {
      category: "Religion et paysage",
      title: "Vallée de la Qadisha et forêt des Cèdres de Dieu",
      description:
        "Vallée encaissée du nord du pays où se sont réfugiés des moines maronites dès le haut Moyen Âge, avec ses monastères rupestres, et l'un des derniers bosquets de cèdres anciens, au-dessus de Bcharré. Les châteaux du Jabal Amel, au Sud, ont été inscrits au patrimoine mondial en juillet 2026.",
      examples: ["Monastère de Qannoubine", "Cèdres de Dieu", "Château de Beaufort"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/850/",
    },
    {
      category: "Gastronomie",
      title: "Mezzés et cuisine libanaise",
      description:
        "Le repas commence par une série de petits plats partagés : taboulé de persil, houmous, moutabal d'aubergine, fattouche, kebbé. Le pain arabe, l'huile d'olive et le citron en sont la base ; l'arak, anisé, les accompagne. La Bekaa produit l'essentiel du vin libanais.",
      examples: ["Taboulé", "Kebbé", "Manouché au zaatar", "Arak"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Lebanese_cuisine",
    },
    {
      category: "Musique",
      title: "Fairouz et le festival de Baalbeck",
      description:
        "Fairouz, révélée dans les années 1950 avec les frères Rahbani, est l'une des voix les plus célèbres du monde arabe. Fondé en 1956, le festival international de Baalbeck accueille concerts et spectacles dans les ruines romaines.",
      examples: ["Fairouz", "Ziad Rahbani", "Festival de Baalbeck"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Fairuz",
    },
    {
      category: "Littérature",
      title: "Une littérature en arabe, en français et en anglais",
      description:
        "Khalil Gibran, émigré aux États-Unis, publie en anglais Le Prophète (1923), l'un des livres de poésie les plus vendus du XXe siècle. Amin Maalouf, prix Goncourt 1993, est secrétaire perpétuel de l'Académie française depuis 2023.",
      examples: ["Khalil Gibran", "Amin Maalouf", "Georges Schehadé"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Amin_Maalouf",
    },
  ],
};
