import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Litani",
    lengthKm: {
      value: 174,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Litani_River",
      note: "Plus long fleuve coulant entièrement au Liban et première ressource en eau du pays (irrigation de la Bekaa, barrage de Qaraoun). La résolution 1701 de l'ONU (2006) en fait la limite nord de la zone où seuls l'armée libanaise et les Casques bleus devaient être armés.",
    },
    source_location: "Plaine de la Bekaa, près de Baalbek",
    mouth: "Mer Méditerranée, au nord de Tyr, après un coude vers l'ouest au pied du château de Beaufort",
  },
  {
    name: "Oronte (Nahr al-Assi)",
    lengthKm: {
      value: 571,
      unit: "km",
      source: "FAO / Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Orontes_River",
      note: "Longueur totale ; seuls quelques dizaines de kilomètres traversent le Liban, dans le nord de la Bekaa (Hermel). Son cours, inhabituel dans la région, est orienté du sud vers le nord, d'où son nom arabe, « le rebelle ».",
    },
    source_location: "Sources de Labweh et d'Aïn ez-Zarqa, dans le nord de la Bekaa",
    mouth: "Mer Méditerranée, près de Samandağ (province de Hatay, Turquie), après avoir traversé la Syrie",
  },
  {
    name: "Nahr Ibrahim (fleuve Adonis)",
    lengthKm: {
      value: 23,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nahr_Ibrahim",
      note: "Fleuve côtier lié dans l'Antiquité au mythe d'Adonis ; ses eaux se teintent de rouge au printemps, sous l'effet des terres ferrugineuses charriées par la fonte des neiges.",
    },
    source_location: "Grottes d'Afqa et de Roueiss, dans le mont Liban (près de 1 500 m d'altitude)",
    mouth: "Mer Méditerranée, entre Jounieh et Byblos",
  },
];
