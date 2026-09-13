import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const WIKI = "Wikipedia";

export const territories: TerritoriesData = {
  summary:
    "Le Commonwealth d'Australie est une fédération de six États et de deux territoires continentaux (Territoire du Nord et Territoire de la capitale australienne). Il administre en outre plusieurs territoires extérieurs (« external territories ») : trois sont habités en permanence — l'île Norfolk dans le Pacifique, l'île Christmas et les îles Cocos (Keeling) dans l'océan Indien — tandis que d'autres n'ont pas de population civile permanente, comme les îles Ashmore-et-Cartier, les îles de la mer de Corail, l'île Heard-et-les-îles McDonald, ou le Territoire antarctique australien, une revendication territoriale en Antarctique qui, comme les autres revendications sur le continent, n'est pas reconnue par l'ensemble de la communauté internationale dans le cadre du système du traité sur l'Antarctique.",
  divisions: [
    { name: "États", count: 6, source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/States_and_territories_of_Australia" },
    { name: "Territoires continentaux", count: 2, note: "Territoire du Nord et Territoire de la capitale australienne.", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/States_and_territories_of_Australia" },
    { name: "Territoires extérieurs peuplés", count: 3, note: "Île Norfolk, île Christmas, îles Cocos (Keeling).", source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/External_Territories_of_Australia" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/australie-overseas.json",
  overseas: [
    {
      name: "Île Norfolk",
      status: "Territoire extérieur, administré directement par un administrateur nommé par le Commonwealth depuis la suppression de son gouvernement local autonome en 2015",
      population: { value: 2_188, year: 2021, source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Norfolk_Island" },
      mapGroupId: "ile-norfolk",
    },
    {
      name: "Île Christmas",
      status: "Territoire extérieur non organisé, dans l'océan Indien",
      population: { value: 1_692, year: 2021, source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Christmas_Island" },
      mapGroupId: "ile-christmas",
    },
    {
      name: "Îles Cocos (Keeling)",
      status: "Territoire extérieur non organisé, dans l'océan Indien",
      population: { value: 593, year: 2021, source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Cocos_(Keeling)_Islands" },
      mapGroupId: "iles-cocos",
    },
  ],
};
