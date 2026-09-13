import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Mexique est une fédération de 31 États et de Mexico, la capitale, qui a obtenu en 2016 un statut d'entité fédérative équivalent à celui des États. Chaque État dispose de sa propre constitution, de son gouverneur (ou, pour Mexico, d'une cheffe de gouvernement) et de son congrès local ; les États sont subdivisés en municipalités, tandis que Mexico est divisée en 16 arrondissements (alcaldías). Contrairement à d'autres grandes puissances issues de la colonisation, le Mexique ne possède aucun territoire d'outre-mer ou non contigu.",
  divisions: [
    { name: "États", count: 31, source: "INEGI", sourceUrl: "https://www.inegi.org.mx/temas/estructura/" },
    { name: "Entité fédérative capitale", count: 1, note: "Mexico (Ciudad de México), statut équivalent à celui d'un État depuis la réforme constitutionnelle de 2016.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Mexico_City" },
    { name: "Municipalités", count: 2_462, note: "Au sein des 31 États, hors les 16 arrondissements (alcaldías) de Mexico, comptabilisés à part.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Municipalities_of_Mexico" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
