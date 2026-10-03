import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques et de patrimoines culturels documentés — non une liste exhaustive.",
  items: [
    {
      category: "Patrimoine architectural",
      title: "Sainte-Sophie et les zones historiques d'Istanbul",
      description:
        "Basilique byzantine du VIe siècle, mosquée après 1453, musée de 1934 à 2020 puis de nouveau mosquée, Sainte-Sophie fait face à la mosquée Bleue et au palais de Topkapı, résidence des sultans. L'ensemble est inscrit au patrimoine mondial de l'UNESCO.",
      examples: ["Sainte-Sophie", "Mosquée Bleue", "Palais de Topkapı", "Mosquée Süleymaniye"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/list/356/",
    },
    {
      category: "Patrimoine archéologique",
      title: "Göbekli Tepe, Troie et Éphèse",
      description:
        "La Turquie compte plus de vingt biens inscrits au patrimoine mondial, dont le sanctuaire préhistorique de Göbekli Tepe, le site de Troie et la cité gréco-romaine d'Éphèse.",
      examples: ["Göbekli Tepe", "Troie", "Éphèse", "Hattusa"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/en/statesparties/tr",
    },
    {
      category: "Spiritualité et musique",
      title: "Mevlana et la cérémonie des derviches tourneurs",
      description:
        "L'ordre soufi fondé à Konya autour du poète persan Djalâl ad-Dîn Rûmî (Mevlana, XIIIe siècle) pratique le sema, danse giratoire inscrite au patrimoine culturel immatériel de l'UNESCO.",
      examples: ["Sema", "Musée Mevlana de Konya"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/mevlevi-sema-ceremony-00100",
    },
    {
      category: "Gastronomie",
      title: "Kebabs, mezzés, baklava et café turc",
      description:
        "Héritière de la cuisine de cour ottomane, la cuisine turque varie fortement selon les régions : mezzés de la côte égéenne, kebabs du Sud-Est, poissons de la mer Noire. Le café turc et sa culture sont inscrits au patrimoine immatériel de l'UNESCO.",
      examples: ["Döner kebab", "Baklava de Gaziantep", "Café turc", "Thé noir de Rize"],
      source: "UNESCO",
      sourceUrl: "https://ich.unesco.org/en/RL/turkish-coffee-culture-and-tradition-00645",
    },
    {
      category: "Littérature et séries",
      title: "D'Orhan Pamuk aux séries télévisées",
      description:
        "Orhan Pamuk a reçu le prix Nobel de littérature en 2006. Les séries turques (dizi) sont parmi les plus exportées au monde, notamment au Moyen-Orient, dans les Balkans et en Amérique latine.",
      examples: ["Orhan Pamuk", "Nazım Hikmet", "Yaşar Kemal"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Television_in_Turkey",
    },
  ],
};
