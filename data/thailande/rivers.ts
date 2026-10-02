import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Mékong",
    lengthKm: {
      value: 4_350,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Mekong",
      note: "Longueur totale ; le fleuve forme sur une grande partie de son cours moyen la frontière entre la Thaïlande et le Laos.",
    },
    source_location: "Plateau tibétain (Qinghai, Chine)",
    mouth: "Mer de Chine méridionale, par un delta au sud du Vietnam",
  },
  {
    name: "Chao Phraya",
    lengthKm: {
      value: 372,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chao_Phraya_River",
      note: "Fleuve de Bangkok et artère de la plaine centrale ; avec ses affluents, son bassin couvre près d'un tiers du pays.",
    },
    source_location: "Confluence du Ping et de la Nan à Nakhon Sawan",
    mouth: "Golfe de Thaïlande, à Samut Prakan",
  },
  {
    name: "Chi",
    lengthKm: {
      value: 765,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Chi_River",
      note: "Plus long cours d'eau entièrement thaïlandais.",
    },
    source_location: "Monts Phetchabun, province de Chaiyaphum",
    mouth: "Rivière Mun, province de Si Sa Ket",
  },
  {
    name: "Mun",
    lengthKm: {
      value: 641,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Mun_River",
      note: "Principale rivière du plateau de Khorat (Isan).",
    },
    source_location: "Province de Nakhon Ratchasima",
    mouth: "Mékong, à Khong Chiam (province d'Ubon Ratchathani)",
  },
  {
    name: "Ping",
    lengthKm: {
      value: 658,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Ping_River",
      note: "Traverse Chiang Mai ; le barrage de Bhumibol, sur son cours, forme le plus grand réservoir du pays.",
    },
    source_location: "Doi Thuai, province de Chiang Mai",
    mouth: "Confluence avec la Nan à Nakhon Sawan, où naît le Chao Phraya",
  },
  {
    name: "Nan",
    lengthKm: {
      value: 740,
      unit: "km",
      source: "Wikipedia",
      sourceUrl: "https://en.wikipedia.org/wiki/Nan_River",
    },
    source_location: "District de Bo Kluea, province de Nan",
    mouth: "Confluence avec le Ping à Nakhon Sawan, où naît le Chao Phraya",
  },
];
