import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le troisième plus vaste pays du monde, à cheval sur cinq fuseaux horaires géographiques mais unifié sur l'heure de Pékin",
  areaKm2: {
    value: 9_596_961,
    unit: "km²",
    source: "Bureau national de statistique de Chine (NBS) / ONU",
    sourceUrl: "https://en.wikipedia.org/wiki/China",
    note: "Superficie revendiquée par la Chine, qui inclut Taïwan (environ 36 000 km², non administré par Pékin — voir « Territoires ») ainsi que divers secteurs frontaliers himalayens disputés avec l'Inde (Aksai Chin, Arunachal Pradesh) ; les chiffres de population et de régions présentés ici, en revanche, excluent systématiquement Hong Kong, Macao et Taïwan.",
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
    "Climats extrêmement variés du fait de l'immensité du territoire : continental froid et sec en Mandchourie et en Mongolie-Intérieure au nord, désertique dans le Xinjiang et sur le plateau tibétain (climat de haute montagne, souvent qualifié de « troisième pôle » pour ses immenses réserves de glace), tempéré à quatre saisons marquées dans le bassin du fleuve Jaune et la vallée du Yangtsé, et subtropical à tropical humide, sous l'influence de la mousson d'Asie de l'Est, dans le sud et le sud-est du pays.",
  summary:
    "Troisième pays du monde par la superficie derrière la Russie et le Canada, la Chine s'étend sur environ 5 200 km d'ouest en est et 5 500 km du nord au sud, des rives du Pacifique jusqu'aux hauts plateaux d'Asie centrale. Son relief s'élève en trois grands paliers d'est en ouest : les plaines côtières et les bassins fluviaux densément peuplés à l'est, un ensemble de plateaux et de bassins intermédiaires (Mongolie-Intérieure, bassin du Sichuan, Loess) au centre, et à l'ouest le plateau tibétain, surnommé le « toit du monde », qui culmine à l'Everest et abrite les sources de la plupart des grands fleuves d'Asie. Le pays partage des frontières terrestres avec quatorze États — plus qu'aucun autre pays au monde à égalité avec la Russie — et sa façade maritime, le long des mers de Bohai, Jaune, de Chine orientale et de Chine méridionale, s'étend sur environ 14 500 km.",
};
