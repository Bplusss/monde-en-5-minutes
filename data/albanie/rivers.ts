import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Drin",
    lengthKm: {
      value: 285,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Drin_(river)",
      note: "Le plus long fleuve d'Albanie ; formé par la confluence du Drin blanc (Kosovo) et du Drin noir (issu du lac d'Ohrid, Macédoine du Nord) près de Kukës.",
    },
    source_location: "Confluence du Drin blanc et du Drin noir, près de Kukës",
    mouth: "Mer Adriatique (via la Buna, près de Shkodër)",
  },
  {
    name: "Vjosa",
    lengthKm: {
      value: 272,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Vjosa",
      note: "Dont environ 192 km en Albanie ; l'un des derniers grands cours d'eau d'Europe encore libre de tout barrage sur la quasi-totalité de son cours, classé parc national en 2023.",
    },
    source_location: "Massif du Pinde (Grèce, où elle est appelée Aoös)",
    mouth: "Mer Adriatique, au nord de Vlorë",
  },
  {
    name: "Shkumbin",
    lengthKm: {
      value: 181,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Shkumbin",
      note: "Sa vallée marque traditionnellement la frontière entre les dialectes guègue (au nord) et tosque (au sud) de l'albanais.",
    },
    source_location: "Massif de Valamara, comté de Korçë",
    mouth: "Mer Adriatique, près de Rrogozhinë",
  },
  {
    name: "Buna",
    lengthKm: {
      value: 44,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Buna_(Adriatic_Sea)",
      note: "Court mais large fleuve transfrontalier (partagé avec le Monténégro), émissaire du lac de Shkodër et principal exutoire du Drin.",
    },
    source_location: "Lac de Shkodër",
    mouth: "Mer Adriatique, près de Velipojë",
  },
];
