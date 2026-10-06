import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "Le Chili est un État unitaire divisé en 16 régions, 56 provinces et 346 communes ; depuis 2021, les gouverneurs régionaux sont élus au suffrage universel. Le pays possède plusieurs îles du Pacifique très éloignées du continent, dont l'île de Pâques (Rapa Nui), annexée en 1888. Il revendique en outre un secteur de l'Antarctique, rattaché administrativement à la région de Magallanes et en partie revendiqué aussi par l'Argentine et le Royaume-Uni, dont la souveraineté est gelée par le traité sur l'Antarctique de 1959. La Bolivie réclame par ailleurs un accès souverain à la mer, perdu en 1884 ; la Cour internationale de justice a jugé en 2018 que le Chili n'était pas tenu de négocier.",
  divisions: [
    { name: "Régions", count: 16, source: "SUBDERE (Sous-secrétariat au développement régional)", sourceUrl: "https://www.subdere.gov.cl/" },
    { name: "Provinces", count: 56, source: "SUBDERE (Sous-secrétariat au développement régional)", sourceUrl: "https://www.subdere.gov.cl/" },
    { name: "Communes", count: 346, source: "SUBDERE (Sous-secrétariat au développement régional)", sourceUrl: "https://www.subdere.gov.cl/" },
    {
      name: "Territoire revendiqué en Antarctique",
      count: 1,
      note: "Territoire chilien de l'Antarctique (environ 1,25 million de km²), revendiqué depuis 1940 et chevauchant les revendications argentine et britannique ; ces prétentions sont gelées par le traité sur l'Antarctique.",
      source: WIKI,
      sourceUrl: "https://en.wikipedia.org/wiki/Chilean_Antarctic_Territory",
    },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/chili-overseas.json",
  overseas: [
    {
      name: "Rapa Nui (île de Pâques)",
      status: "Territoire spécial de la région de Valparaíso, à environ 3 500 km des côtes ; inclut l'île inhabitée de Salas y Gómez.",
      population: {
        value: 7_750,
        unit: "habitants",
        year: 2017,
        source: "INE (recensement 2017)",
        sourceUrl: "https://en.wikipedia.org/wiki/Easter_Island",
      },
      mapGroupId: "rapa-nui",
    },
    {
      name: "Archipel Juan Fernández",
      status: "Commune et territoire spécial de la région de Valparaíso, à environ 670 km des côtes ; l'île Robinson Crusoé doit son nom au marin Alexander Selkirk, qui y vécut seul de 1704 à 1709.",
      population: {
        value: 926,
        unit: "habitants",
        year: 2017,
        source: "INE (recensement 2017)",
        sourceUrl: "https://en.wikipedia.org/wiki/Juan_Fern%C3%A1ndez_Islands",
      },
      mapGroupId: "juan-fernandez",
    },
    {
      name: "Îles Desventuradas",
      status: "Îles San Félix et San Ambrosio, à environ 850 km des côtes, sans population civile ; seul un petit détachement de la Marine chilienne y est stationné.",
      mapGroupId: "desventuradas",
    },
  ],
};
