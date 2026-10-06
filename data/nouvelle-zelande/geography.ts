import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Deux grandes îles volcaniques et montagneuses aux confins du Pacifique Sud",
  areaKm2: {
    value: 268_021,
    unit: "km²",
    source: "Stats NZ",
    sourceUrl: "https://www.stats.govt.nz/",
    note: "Îles du Nord et du Sud, île Stewart, îles Chatham et petites îles ; hors Tokelau, îles Cook, Niue et dépendance de Ross en Antarctique.",
  },
  coastlineKm: {
    value: 15_134,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/new-zealand/",
  },
  highestPoint: {
    name: "Aoraki / mont Cook (Alpes du Sud)",
    elevationM: 3_724,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Aoraki_/_Mount_Cook",
  },
  borderingCountries: [],
  generalSource: { source: "Stats NZ / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_New_Zealand" },
  climate:
    "Climat océanique tempéré, doux et humide, avec des contrastes marqués : subtropical dans le nord de l'île du Nord, très pluvieux sur la côte ouest de l'île du Sud, où les vents d'ouest se heurtent aux Alpes du Sud, et sec et continental dans les bassins abrités du centre de l'Otago. Les saisons sont inversées par rapport à l'Europe.",
  summary:
    "Située à environ 2 000 km au sud-est de l'Australie, la Nouvelle-Zélande se compose de deux grandes îles et de centaines d'îles plus petites. L'île du Nord, où vivent les trois quarts des habitants, est marquée par un volcanisme actif autour du plateau central et du lac Taupo, ancien supervolcan. L'île du Sud est dominée par les Alpes du Sud, qui culminent à l'Aoraki / mont Cook, avec glaciers, lacs et fjords dans le Fiordland. Posé sur la frontière entre les plaques pacifique et australienne, le pays connaît de fréquents séismes. Isolé pendant des millions d'années, il abrite une faune unique, dominée par les oiseaux, comme le kiwi.",
};
