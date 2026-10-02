import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";

export const geography: GeographyData = {
  headline: "Le cœur de l'Asie du Sud-Est continentale, des montagnes du Nord à la péninsule malaise",
  areaKm2: {
    value: 513_120,
    unit: "km²",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Thailand",
    note: "Un peu moins que la France métropolitaine (environ 551 000 km²).",
  },
  coastlineKm: {
    value: 3_219,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/thailand/",
    note: "Partagé entre le golfe de Thaïlande et la mer d'Andaman (océan Indien).",
  },
  highestPoint: {
    name: "Doi Inthanon (province de Chiang Mai)",
    elevationM: 2_565,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Doi_Inthanon",
  },
  borderingCountries: ["Birmanie (Myanmar)", "Laos", "Cambodge", "Malaisie"],
  generalSource: { source: WIKI, sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Thailand" },
  climate:
    "Climat tropical de mousson à trois saisons : fraîche et sèche (novembre-février), chaude (mars-mai, plus de 35 °C dans le Centre et l'Isan), puis saison des pluies (mai-octobre). Le Sud péninsulaire, plus équatorial, reste humide presque toute l'année, avec des pluies maximales en fin d'année sur la côte du golfe.",
  summary:
    "La Thaïlande se divise en quatre grands ensembles : le Nord montagneux, prolongement des reliefs himalayens ; le plateau de Khorat (Isan) au Nord-Est, bordé par le Mékong ; la plaine centrale du Chao Phraya, grenier à riz où se trouve Bangkok ; et la longue péninsule du Sud, qui s'étire par l'isthme de Kra jusqu'à la Malaisie entre golfe de Thaïlande et mer d'Andaman. Le Mékong marque une grande partie de la frontière avec le Laos.",
};
