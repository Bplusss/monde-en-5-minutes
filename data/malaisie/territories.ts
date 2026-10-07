import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Malaisie est une fédération de 13 États et de 3 territoires fédéraux (Kuala Lumpur, Putrajaya et l'île de Labuan). Neuf États ont à leur tête un souverain héréditaire — sultan, raja ou, au Negeri Sembilan, un souverain élu par les chefs coutumiers —, les quatre autres un gouverneur nommé. Entrés dans la fédération en 1963, le Sabah et le Sarawak disposent d'une large autonomie, notamment en matière d'immigration. Les Philippines n'ont jamais formellement renoncé à leur revendication sur l'est du Sabah, héritée du sultanat de Sulu, et la Malaisie occupe plusieurs îlots de l'archipel des Spratleys, disputé en mer de Chine méridionale.",
  divisions: [
    { name: "États", count: 13, note: "Dont 9 dotés d'un souverain héréditaire.", source: "Constitution fédérale", sourceUrl: "https://en.wikipedia.org/wiki/States_and_federal_territories_of_Malaysia" },
    { name: "Territoires fédéraux", count: 3, note: "Kuala Lumpur, Putrajaya et Labuan.", source: "Constitution fédérale", sourceUrl: "https://en.wikipedia.org/wiki/Federal_Territories_(Malaysia)" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
