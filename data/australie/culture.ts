import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive, et sans prétendre résumer la diversité des habitudes réelles de chacun.",
  items: [
    {
      category: "Patrimoine",
      title: "L'Opéra de Sydney",
      description:
        "Conçu par l'architecte danois Jørn Utzon et inauguré en 1973 après dix ans de retard et un dépassement de budget considérable, l'Opéra de Sydney, reconnu pour ses voiles de béton précontraint recouvertes de plus d'un million de tuiles, est inscrit au patrimoine mondial de l'UNESCO depuis 2007 et accueille plus de 1 800 représentations par an.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/166/",
    },
    {
      category: "Patrimoine et spiritualité aborigène",
      title: "Uluru et la culture des Anangu",
      description:
        "Ce monolithe de grès de 348 mètres de haut, situé dans le Territoire du Nord, est un site sacré pour le peuple aborigène Anangu, à qui la propriété du site a été restituée en 1985 avant d'être reloué à l'État pour 99 ans. L'ascension du rocher, longtemps tolérée malgré l'opposition des Anangu, y est interdite depuis le 26 octobre 2019.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Uluru",
    },
    {
      category: "Nature",
      title: "La Grande Barrière de corail",
      description:
        "Plus vaste écosystème corallien du monde, elle s'étend sur plus de 2 300 km au large du Queensland et abrite une biodiversité marine exceptionnelle, mais subit des épisodes récurrents de blanchissement corallien liés au réchauffement des eaux.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/154/",
    },
    {
      category: "Sport",
      title: "Le cricket et le football australien",
      description:
        "Le cricket, hérité de la tradition britannique, occupe une place centrale dans l'identité nationale, notamment à travers la rivalité historique des « Ashes » face à l'Angleterre. L'Australian Football League (AFL), sport indigène né à Melbourne au XIXᵉ siècle et quasiment unique au monde, rassemble chaque année des foules considérables, notamment lors de la finale (Grand Final).",
      examples: ["The Ashes", "AFL Grand Final", "Melbourne Cricket Ground"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Sport_in_Australia",
    },
    {
      category: "Gastronomie",
      title: "Vegemite et barbecue",
      description:
        "Pâte à tartiner sombre à base d'extrait de levure, le Vegemite, inventé en 1922, reste un marqueur identitaire fort malgré son goût très particulier. La culture du barbecue en plein air (« barbie ») et une gastronomie très marquée par l'immigration (cuisines asiatique, méditerranéenne, moyen-orientale) caractérisent les habitudes alimentaires contemporaines.",
      examples: ["Vegemite", "Meat pie", "Lamington", "Barramundi grillé"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Australian_cuisine",
    },
    {
      category: "Art et musique aborigènes",
      title: "Art aborigène et didgeridoo",
      description:
        "L'art aborigène contemporain, notamment la peinture par points développée à partir des années 1970 dans le désert central, puise dans des motifs et récits du Temps du Rêve (Dreamtime) vieux de plusieurs dizaines de milliers d'années. Le didgeridoo, instrument à vent traditionnel du nord de l'Australie, en est l'un des symboles musicaux les plus connus à l'étranger.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Indigenous_Australian_art",
    },
  ],
};
