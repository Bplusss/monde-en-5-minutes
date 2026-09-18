import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Karoun",
    lengthKm: {
      value: 950,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Karun",
      note: "Fleuve le plus long d'Iran et seul cours d'eau réellement navigable du pays ; traverse le Khouzestan, cœur de l'industrie pétrolière iranienne, avant de rejoindre le Chatt al-Arab près de la frontière irakienne.",
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
      note: "Principal fleuve se jetant dans la mer Caspienne, il traverse le Kurdistan iranien avant de former une plaine deltaïque fertile dans la province du Gilan.",
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
      note: "Deuxième plus long fleuve du plateau iranien à prendre sa source dans le Zagros, retenu par le grand barrage de Karkheh avant d'irriguer les plaines agricoles du Khouzestan.",
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
      note: "Fleuve vital de la ville d'Ispahan, qu'il traverse sous ses ponts historiques (dont le Si-o-se-pol) ; son débit s'est effondré depuis les années 2000 sous l'effet des prélèvements agricoles et industriels en amont, le lit du fleuve se retrouvant à sec une grande partie de l'année depuis le milieu des années 2010, provoquant des manifestations récurrentes d'agriculteurs.",
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
      note: "Fleuve frontalier sur une bonne partie de son cours, entre l'Iran d'une part et l'Arménie puis l'Azerbaïdjan d'autre part, avant de rejoindre la Koura en territoire azerbaïdjanais.",
    },
    source_location: "Monts du Bingöl, en Turquie",
    mouth: "Confluence avec la Koura, en Azerbaïdjan (bassin de la mer Caspienne)",
  },
];
