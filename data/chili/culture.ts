import type { CultureData } from "@/lib/types";

export const culture: CultureData = {
  intro:
    "Un aperçu de pratiques culturelles documentées — non une liste exhaustive.",
  items: [
    {
      category: "Littérature",
      title: "Une terre de poètes",
      description:
        "Le Chili a reçu deux prix Nobel de littérature, tous deux poètes : Gabriela Mistral en 1945, première lauréate latino-américaine, et Pablo Neruda en 1971. La poésie y occupe une place populaire rare, de Nicanor Parra à Vicente Huidobro.",
      examples: ["Gabriela Mistral", "Pablo Neruda", "Nicanor Parra", "Roberto Bolaño"],
      source: "Prix Nobel",
      sourceUrl: "https://www.nobelprize.org/prizes/literature/1971/neruda/facts/",
    },
    {
      category: "Patrimoine",
      title: "Les moaï de Rapa Nui",
      description:
        "Sur l'île de Pâques, à 3 500 km des côtes, près d'un millier de statues monumentales sculptées par les Rapa Nui entre le XIIIe et le XVIIe siècle sont protégées par un parc national inscrit au patrimoine mondial de l'UNESCO depuis 1995.",
      examples: ["Ahu Tongariki", "Rano Raraku", "Orongo"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/715",
    },
    {
      category: "Musique",
      title: "La Nueva Canción chilena",
      description:
        "Mouvement musical des années 1960-1970 mêlant folklore et engagement social, porté par Violeta Parra et Víctor Jara — assassiné après le coup d'État de 1973 — et des groupes comme Inti-Illimani, contraints à l'exil.",
      examples: ["Violeta Parra", "Víctor Jara", "Inti-Illimani", "Quilapayún"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nueva_canci%C3%B3n",
    },
    {
      category: "Danse",
      title: "La cueca",
      description:
        "Danse de couple où l'on agite un mouchoir en imitant la parade du coq et de la poule, la cueca est la danse nationale officielle depuis 1979 et se danse surtout lors des Fiestas Patrias de septembre.",
      examples: ["Fiestas Patrias", "Fondas", "Huasos"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Cueca",
    },
    {
      category: "Gastronomie",
      title: "Empanadas, fruits de mer et vin",
      description:
        "La cuisine chilienne marie produits de la mer et héritage paysan : empanadas de pino, pastel de choclo, curanto du Sud cuit sous la terre. Le pays est aussi l'un des grands exportateurs mondiaux de vin, emblématique pour son cépage carménère.",
      examples: ["Empanada de pino", "Pastel de choclo", "Curanto", "Carménère"],
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chilean_cuisine",
    },
    {
      category: "Patrimoine",
      title: "Valparaíso, ville des collines",
      description:
        "Port majeur du Pacifique au XIXe siècle, Valparaíso étage ses maisons colorées sur une quarantaine de collines reliées par des funiculaires ; son quartier historique est inscrit au patrimoine mondial depuis 2003.",
      examples: ["Ascensores", "Cerro Alegre", "La Sebastiana (maison de Neruda)"],
      source: "UNESCO",
      sourceUrl: "https://whc.unesco.org/fr/list/959",
    },
  ],
};
