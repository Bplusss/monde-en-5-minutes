import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Karoun",
    lengthKm: {
      value: 950,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Karun",
      note: "Fleuve le plus long d'Iran et seul cours d'eau réellement navigable du pays ; traverse le Khouzestan avant de rejoindre le Chatt al-Arab.",
    },
    source_location: "Chaîne du Zagros (province du Tchaharmahal-et-Bakhtiari)",
    mouth: "Chatt al-Arab (Arvand Roud), à la frontière avec l'Irak, puis golfe Persique",
  },
  {
    name: "Sefid-Roud",
    lengthKm: {
      value: 670,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Sefidrud",
      note: "Principal fleuve se jetant dans la mer Caspienne ; forme une plaine deltaïque fertile dans la province du Gilan.",
    },
    source_location: "Monts du Kurdistan iranien (confluence des rivières Qezel Owzan et Shahroud)",
    mouth: "Mer Caspienne, province du Gilan",
  },
  {
    name: "Karkheh",
    lengthKm: {
      value: 900,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Karkheh_River",
      note: "Retenu par le grand barrage de Karkheh avant d'irriguer les plaines agricoles du Khouzestan.",
    },
    source_location: "Chaîne du Zagros (province de Kermanshah)",
    mouth: "Marais du Hoor al-Azim, à la frontière irakienne (bassin du Chatt al-Arab)",
  },
  {
    name: "Zayandeh-Roud",
    lengthKm: {
      value: 400,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Zayanderud",
      note: "Fleuve vital d'Ispahan, qu'il traverse sous ses ponts historiques ; son débit s'est effondré depuis les années 2000, le lit se retrouvant à sec une grande partie de l'année.",
    },
    source_location: "Chaîne du Zagros (monts Zard-Kuh, province du Tchaharmahal-et-Bakhtiari)",
    mouth: "Marais de Gavkhouni (zone humide endoréique), province d'Ispahan",
  },
  {
    name: "Aras (Araxe)",
    lengthKm: {
      value: 1_072,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Aras_(river)",
      note: "Fleuve frontalier entre l'Iran et l'Arménie puis l'Azerbaïdjan, avant de rejoindre la Koura.",
    },
    source_location: "Monts du Bingöl, en Turquie",
    mouth: "Confluence avec la Koura, en Azerbaïdjan (bassin de la mer Caspienne)",
  },
];
