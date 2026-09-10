import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "Les vieux quartiers et fortifications de Luxembourg-ville",
      description:
        "Bâtie sur un éperon rocheux et longtemps considérée comme l'une des forteresses les plus puissantes d'Europe, la vieille ville de Luxembourg conserve d'imposants vestiges de ses fortifications, aujourd'hui inscrits au patrimoine mondial de l'UNESCO.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/699/",
    },
    {
      category: "Institutions",
      title: "Une capitale de l'Union européenne",
      description:
        "La ville de Luxembourg accueille plusieurs grandes institutions de l'Union européenne, dont la Cour de justice, la Cour des comptes et une partie du secrétariat du Parlement européen, faisant du pays l'un des trois sièges historiques des institutions communautaires avec Bruxelles et Strasbourg.",
      source: "Union européenne",
      sourceUrl: "https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/institutions-and-bodies-profiles_fr",
    },
    {
      category: "Gastronomie",
      title: "Le vin de la Moselle luxembourgeoise",
      description:
        "La vallée de la Moselle produit des vins blancs, notamment des rieslings et des crémants, dont la qualité a fortement progressé depuis les années 1990, aujourd'hui reconnus bien au-delà des frontières du pays.",
      examples: ["Riesling", "Crémant de Luxembourg", "Elbling"],
      source: "Office luxembourgeois du tourisme (Visit Luxembourg)",
      sourceUrl: "https://www.visitluxembourg.com/fr",
    },
    {
      category: "Langue",
      title: "Le trilinguisme officiel",
      description:
        "Le Luxembourg est le seul pays au monde à reconnaître trois langues officielles — luxembourgeois, français et allemand —, un trilinguisme vécu au quotidien par la plupart de ses habitants.",
      source: "Wikipedia",
      sourceUrl: "https://fr.wikipedia.org/wiki/Luxembourgeois",
    },
    {
      category: "Transports",
      title: "Les transports en commun gratuits",
      description:
        "Depuis le 1ᵉʳ mars 2020, le Luxembourg est devenu le premier pays au monde à rendre l'intégralité de ses transports publics — bus, train et tram — gratuits pour tous, résidents comme visiteurs.",
      source: "Gouvernement luxembourgeois",
      sourceUrl: "https://gouvernement.lu/fr/actualites.gouvernement%2Bfr%2Bactualites%2Btoutes_actualites%2Barticles%2B2020%2B02-fevrier%2B28-gratuite-transports.html",
    },
  ],
};
