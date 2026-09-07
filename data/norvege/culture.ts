import type { CultureData } from "@/lib/types";

const SNL = "Store norske leksikon";
const SNL_URL = "https://snl.no/";

export const culture: CultureData = {
  intro:
    "La culture norvégienne reste marquée par un rapport très fort à la nature et au grand air, hérité aussi bien de la tradition viking que du mode de vie rural, ainsi que par un patrimoine littéraire et artistique de portée mondiale.",
  items: [
    {
      category: "Traditions",
      title: "Le friluftsliv, la vie au grand air",
      description:
        "Le friluftsliv (« vie en plein air ») est une valeur culturelle centrale : randonnée, ski, camping sauvage font partie du quotidien. Il est adossé à l'allemannsretten (« droit de tous »), qui garantit un accès libre à la nature même privée.",
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      category: "Fêtes",
      title: "Le 17 mai, fête nationale",
      description:
        "Le 17 mai célèbre l'adoption de la Constitution de 1814. C'est la fête la plus populaire du pays, marquée par des défilés d'enfants dans tout le pays plutôt que des défilés militaires.",
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      category: "Cuisine",
      title: "Poissons et produits laitiers fermentés",
      description:
        "La cuisine traditionnelle repose sur les ressources de la mer et de l'élevage : saumon, morue séchée (tørrfisk), lutefisk (poisson à la lessive de soude), et le brunost, fromage brun caramélisé au lactosérum.",
      examples: ["Saumon", "Lutefisk", "Brunost"],
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      category: "Arts",
      title: "Edvard Munch et l'expressionnisme",
      description:
        "Le peintre Edvard Munch (1863-1944), auteur du Cri, est la figure majeure des arts visuels norvégiens et l'un des précurseurs de l'expressionnisme européen.",
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      category: "Littérature",
      title: "Henrik Ibsen, dramaturge de portée mondiale",
      description:
        "Henrik Ibsen (1828-1906), auteur de Maison de poupée et Peer Gynt, est l'un des dramaturges les plus joués au monde et a profondément renouvelé le théâtre moderne.",
      source: SNL,
      sourceUrl: SNL_URL,
    },
    {
      category: "Patrimoine",
      title: "Huit sites classés au patrimoine mondial de l'UNESCO",
      description:
        "Le quai hanséatique de Bryggen à Bergen, l'église en bois debout d'Urnes, les fjords de l'Ouest (Geirangerfjord et Nærøyfjord) ou l'art rupestre d'Alta comptent parmi les huit biens norvégiens inscrits à l'UNESCO.",
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/etatsparties/no",
    },
  ],
};
