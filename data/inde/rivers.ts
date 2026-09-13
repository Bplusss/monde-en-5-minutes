import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Gange (Ganga)",
    lengthKm: {
      value: 2_525,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      sourceUrl: "https://en.wikipedia.org/wiki/Ganges",
      note: "Fleuve le plus sacré de l'hindouisme ; les estimations de longueur varient selon les sources et le point d'origine retenu (de 2 525 à environ 2 700 km).",
    },
    source_location: "Confluence de l'Alaknanda et de la Bhagirathi à Devprayag (Uttarakhand) ; la Bhagirathi, source traditionnellement sacrée, prend elle-même naissance au glacier de Gangotri.",
    mouth: "Golfe du Bengale, via un vaste delta partagé avec le Brahmapoutre au Bangladesh",
  },
  {
    name: "Brahmapoutre",
    lengthKm: {
      value: 2_900,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      sourceUrl: "https://en.wikipedia.org/wiki/Brahmaputra",
      note: "Les estimations varient entre environ 2 880 et 3 080 km selon les sources.",
    },
    source_location: "Glacier de Chemayungdung, près du mont Kailash (Tibet), où il est connu sous le nom de Yarlung Tsangpo",
    mouth: "Golfe du Bengale, via le delta du Gange, au Bangladesh",
  },
  {
    name: "Yamuna",
    lengthKm: { value: 1_376, unit: "km", source: "Wikipedia (géographie physique)", sourceUrl: "https://en.wikipedia.org/wiki/Yamuna" },
    source_location: "Glacier de Yamunotri, dans l'Himalaya (Uttarakhand)",
    mouth: "Confluence avec le Gange à Prayagraj (Triveni Sangam), Uttar Pradesh",
  },
  {
    name: "Godavari",
    lengthKm: { value: 1_465, unit: "km", source: "Wikipedia (géographie physique)", sourceUrl: "https://en.wikipedia.org/wiki/Godavari_River", note: "Le plus long fleuve du sud de l'Inde, parfois surnommé « Gange du Sud »." },
    source_location: "Massif du Brahmagiri, près de Trimbakeshwar (Maharashtra)",
    mouth: "Golfe du Bengale, près d'Antarvedi (Andhra Pradesh)",
  },
  {
    name: "Narmada",
    lengthKm: { value: 1_312, unit: "km", source: "Wikipedia (géographie physique)", sourceUrl: "https://en.wikipedia.org/wiki/Narmada_River" },
    source_location: "Plateau d'Amarkantak (Madhya Pradesh)",
    mouth: "Mer d'Arabie, via le golfe de Cambay (Gujarat)",
  },
];
