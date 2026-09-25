import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le troisième plus vaste pays du monde, à cheval sur cinq fuseaux horaires géographiques mais unifié sur l'heure de Pékin",
  areaKm2: {
    value: 9_596_961,
    unit: "km²",
    source: "Bureau national de statistique de Chine (NBS) / ONU",
    sourceUrl: "https://en.wikipedia.org/wiki/China",
    note: "Superficie revendiquée, incluant Taïwan (non administré par Pékin — voir « Territoires ») et des secteurs frontaliers himalayens disputés avec l'Inde ; les chiffres de population excluent Hong Kong, Macao et Taïwan.",
  },
  coastlineKm: {
    value: 14_500,
    unit: "km",
    source: "Wikipedia (géographie de la Chine)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_China",
  },
  highestPoint: {
    name: "Everest (Qomolangma, frontière avec le Népal)",
    elevationM: 8_849,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Everest",
  },
  borderingCountries: [
    "Russie", "Mongolie", "Kazakhstan", "Kirghizistan", "Tadjikistan", "Afghanistan", "Pakistan", "Inde", "Népal", "Bhoutan", "Myanmar", "Laos", "Viêt Nam", "Corée du Nord",
  ],
  generalSource: { source: "Wikipedia / Bureau national de statistique de Chine", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_China" },
  climate:
    "Climats extrêmement variés : continental froid et sec au nord (Mandchourie, Mongolie-Intérieure), désertique et de haute montagne au Xinjiang et sur le plateau tibétain, tempéré dans le bassin du fleuve Jaune et la vallée du Yangtsé, subtropical à tropical humide au sud sous l'influence de la mousson.",
  summary:
    "Troisième pays du monde par la superficie derrière la Russie et le Canada, la Chine s'étend sur environ 5 200 km d'ouest en est et 5 500 km du nord au sud. Son relief s'élève en trois paliers d'est en ouest : plaines côtières densément peuplées, plateaux et bassins intermédiaires, puis à l'ouest le plateau tibétain, « toit du monde », qui culmine à l'Everest. Le pays partage des frontières terrestres avec quatorze États, un record mondial à égalité avec la Russie.",
};
