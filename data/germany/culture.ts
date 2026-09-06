import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Alimentation",
      title: "Une tradition brassicole encadrée depuis 1516",
      description:
        "Le Reinheitsgebot, loi bavaroise sur la pureté de la bière édictée en 1516, encadre encore aujourd'hui une partie de la production brassicole allemande — l'un des plus anciens règlements alimentaires toujours en vigueur au monde.",
      examples: ["Bratwurst", "Brezel", "Sauerkraut", "Bière (Pils, Weizen, Kölsch selon les régions)"],
      source: "Deutscher Brauer-Bund",
      sourceUrl: "https://www.brauer-bund.de/",
    },
    {
      category: "Fêtes",
      title: "L'Oktoberfest",
      description:
        "La plus grande fête populaire du monde se tient chaque année à Munich depuis 1810, réunissant plusieurs millions de visiteurs.",
      examples: ["Bière servie en Maß (chope d'un litre)", "Tenues traditionnelles (Lederhosen, Dirndl)"],
      source: "Landeshauptstadt München",
      sourceUrl: "https://www.oktoberfest.de/",
    },
    {
      category: "Sport",
      title: "Le football, sport le plus populaire",
      description:
        "L'Allemagne a remporté quatre Coupes du monde de football (1954, 1974, 1990, 2014), et la Bundesliga affiche les affluences en stade les plus élevées d'Europe.",
      examples: ["Bayern Munich", "Borussia Dortmund"],
      source: "DFB (Fédération allemande de football)",
      sourceUrl: "https://www.dfb.de/",
    },
    {
      category: "Musique",
      title: "Une tradition musicale classique majeure",
      description:
        "Bach, Beethoven, Brahms ou Wagner sont nés ou ont composé l'essentiel de leur œuvre en terre germanique, fondant une tradition orchestrale toujours vivante.",
      examples: ["Philharmonie de Berlin", "Festival de Bayreuth (œuvres de Wagner)"],
      source: "Deutsche UNESCO-Kommission",
      sourceUrl: "https://www.unesco.de/",
    },
    {
      category: "Patrimoine",
      title: "55 sites classés au patrimoine mondial",
      description:
        "En 2025, l'Allemagne compte 55 biens inscrits au patrimoine mondial de l'UNESCO, dont les châteaux de Louis II de Bavière inscrits cette année-là.",
      examples: ["Cathédrale de Cologne", "Château de Neuschwanstein", "Île aux musées de Berlin"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
  ],
};
