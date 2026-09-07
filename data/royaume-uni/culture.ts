import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Sport",
      title: "Le football, né en Angleterre",
      description:
        "Les règles modernes du football sont codifiées à Londres en 1863 avec la fondation de la Football Association, la plus ancienne fédération de football au monde.",
      examples: ["Premier League", "FA Cup"],
      source: "The Football Association",
      sourceUrl: "https://www.thefa.com/",
    },
    {
      category: "Alimentation",
      title: "Le thé de l'après-midi",
      description:
        "Le rituel de l'afternoon tea, popularisé au XIXᵉ siècle, reste une pratique sociale identifiée au pays, aux côtés d'une gastronomie diversifiée par l'immigration.",
      examples: ["Fish and chips", "Sunday roast", "Curry (très largement adopté)"],
      source: "Historic UK",
      sourceUrl: "https://www.historic-uk.com/",
    },
    {
      category: "Musique",
      title: "Une influence musicale mondiale",
      description:
        "Des Beatles aux scènes punk, britpop et électronique, le Royaume-Uni a exercé une influence durable sur la musique populaire mondiale depuis les années 1960.",
      examples: ["The Beatles", "Glastonbury Festival"],
      source: "British Council",
      sourceUrl: "https://www.britishcouncil.org/",
    },
    {
      category: "Patrimoine",
      title: "35 sites classés au patrimoine mondial",
      description:
        "Le Royaume-Uni et ses territoires d'outre-mer comptent 35 biens inscrits au patrimoine mondial de l'UNESCO.",
      examples: ["Stonehenge", "Tour de Londres", "Vieille ville et ville nouvelle d'Édimbourg"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/",
    },
  ],
};
