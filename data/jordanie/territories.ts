import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Jordanie est un État unitaire divisé en 12 gouvernorats, regroupés en trois régions (Nord, Centre et Sud), et dirigés par des gouverneurs nommés par le ministère de l'Intérieur. Aqaba bénéficie depuis 2001 du statut de zone économique spéciale. Le royaume a administré la Cisjordanie et Jérusalem-Est de 1948 à 1967, puis renoncé en 1988 à toute revendication au profit de l'OLP ; il conserve toutefois, en vertu du traité de paix de 1994, un rôle reconnu de gardien des lieux saints musulmans de Jérusalem. En 2019, il a récupéré les terres de Baqoura et de Ghumar, qui avaient été louées à Israël par ce même traité.",
  divisions: [
    { name: "Gouvernorats", count: 12, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Jordan" },
    { name: "Régions", count: 3, note: "Nord, Centre et Sud, sans compétences administratives propres.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Jordan" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
