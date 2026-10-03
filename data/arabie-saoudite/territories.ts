import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "L'Arabie saoudite est un État unitaire divisé depuis 1992 en 13 régions (mintaqah), dirigées par des émirs nommés par le roi, souvent membres de la famille royale. Les régions sont subdivisées en gouvernorats. Le pays ne possède aucun territoire ultramarin. Par un accord de 2016, approuvé par le Parlement égyptien en 2017, l'Égypte a cédé au royaume les îlots de Tiran et Sanafir, à l'entrée du golfe d'Aqaba ; la carte, issue de Natural Earth, les rattache encore à l'Égypte.",
  divisions: [
    { name: "Régions (mintaqah)", count: 13, note: "Créées par la loi des provinces de 1992 ; Riyad, La Mecque et l'Est regroupent 68 % de la population.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Saudi_Arabia" },
    { name: "Gouvernorats (muhafazat)", count: 136, note: "Second niveau administratif.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Regions_of_Saudi_Arabia" },
    {
      name: "Frontière avec le Yémen",
      count: 1,
      note: "Frontière de 1 307 km, longtemps disputée : le traité de Taëf (1934) a attribué l'Asir, Jizan et Najran au royaume, et le traité de Djeddah (2000), reconnu par les deux États, a fixé le reste du tracé. Depuis 2015, la zone frontalière est un front de la guerre entre la coalition menée par Riyad et les Houthis, qui contrôlent le nord du Yémen ; en septembre 2026, ceux-ci ont frappé Abha, Khamis Mushait, Jizan et Najran.",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Saudi_Arabia%E2%80%93Yemen_border",
    },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
