import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Cuisine",
      title: "Une cuisine de terroir généreuse",
      description:
        "La gastronomie polonaise mêle plats mijotés et pâtes farcies, marqués par l'usage du chou, des champignons et de la viande de porc.",
      examples: ["Pierogi", "Bigos", "Żurek"],
      source: "Ministère de la Culture polonais",
      sourceUrl: "https://www.gov.pl/web/kultura",
    },
    {
      category: "Musique",
      title: "Chopin, référence mondiale du piano romantique",
      description:
        "Né près de Varsovie en 1810, Frédéric Chopin reste l'un des compositeurs les plus joués au monde ; le Concours international Chopin, organisé à Varsovie tous les cinq ans, est l'un des plus prestigieux concours de piano.",
      source: "Institut Frédéric Chopin (NIFC)",
      sourceUrl: "https://nifc.pl/en",
    },
    {
      category: "Patrimoine",
      title: "Le centre historique de Varsovie, reconstruit à l'identique",
      description:
        "Détruit à plus de 85 % pendant la Seconde Guerre mondiale, le centre historique de Varsovie a été minutieusement reconstruit après-guerre à partir de plans et de tableaux d'époque, et inscrit à ce titre au patrimoine mondial de l'UNESCO.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/30/",
    },
    {
      category: "Patrimoine",
      title: "Les mines de sel de Wieliczka",
      description:
        "Exploitées sans interruption du XIIIᵉ siècle jusqu'en 2007, les mines de sel de Wieliczka, près de Cracovie, comptent des chapelles et sculptures entièrement taillées dans le sel ; elles figurent parmi les tout premiers sites inscrits au patrimoine mondial de l'UNESCO, dès 1978.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/32/",
    },
    {
      category: "Arts et lettres",
      title: "Cinq prix Nobel de littérature",
      description:
        "Henryk Sienkiewicz, Władysław Reymont, Czesław Miłosz, Wisława Szymborska puis Olga Tokarczuk (2018) ont reçu le prix Nobel de littérature, un total qui place la Pologne parmi les pays les plus distingués dans cette catégorie.",
      source: "Fondation Nobel",
      sourceUrl: "https://www.nobelprize.org/prizes/literature/",
    },
    {
      category: "Mémoire",
      title: "Auschwitz-Birkenau, lieu de mémoire de la Shoah",
      description:
        "L'ancien camp de concentration et d'extermination nazi d'Auschwitz-Birkenau, en Petite-Pologne, est classé au patrimoine mondial de l'UNESCO comme témoignage de la Shoah et se visite chaque année par plus d'un million de personnes.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/31/",
    },
  ],
};
