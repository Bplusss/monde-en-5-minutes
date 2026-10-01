import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://fr.wikipedia.org/wiki/G%C3%A9ographie_de_la_C%C3%B4te_d%27Ivoire";

export const geography: GeographyData = {
  headline: "Un pays de transition entre la forêt dense du golfe de Guinée, au sud, et la savane soudanienne, au nord, drainé par quatre grands fleuves orientés nord-sud",
  areaKm2: {
    value: 322_462,
    unit: "km²",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
  },
  coastlineKm: {
    value: 515,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
    note: "Côte basse à l'est, bordée de lagunes (Ébrié, Aby, Grand-Lahou) séparées de l'océan par un cordon sableux ; côte plus rocheuse à l'ouest, vers San-Pédro.",
  },
  highestPoint: {
    name: "Mont Nimba (mont Richard-Molard), à la frontière guinéenne",
    elevationM: 1_752,
    source: WIKI,
    sourceUrl: "https://fr.wikipedia.org/wiki/Mont_Nimba",
  },
  borderingCountries: ["Liberia", "Guinée", "Mali", "Burkina Faso", "Ghana"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat tropical humide au sud, avec deux saisons des pluies (avril-juillet et octobre-novembre) et plus de 1 500 mm de précipitations par an ; climat tropical sec au nord, avec une seule saison des pluies et une saison sèche marquée par l'harmattan, vent sec venu du Sahara, de décembre à février. Les températures restent élevées toute l'année (25 à 30 °C en moyenne).",
  summary:
    "La Côte d'Ivoire s'étend du golfe de Guinée, au sud, jusqu'aux confins du Sahel, au nord. Le relief est majoritairement constitué de plateaux et de plaines ; seul l'ouest, autour de Man et du mont Nimba, est montagneux. La forêt dense humide, qui couvrait le tiers sud du pays, a été en grande partie défrichée au XXe siècle pour les plantations de cacao et de café ; il en subsiste des blocs protégés, dont le parc national de Taï. Le centre et le nord sont occupés par la savane. Quatre fleuves orientés nord-sud — Cavally, Sassandra, Bandama et Comoé — structurent le territoire ; le lac de Kossou, sur le Bandama, est le plus grand lac de barrage du pays.",
};
