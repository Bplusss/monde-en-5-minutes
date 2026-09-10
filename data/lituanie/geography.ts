import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le plus méridional et le plus vaste des trois États baltes, dominé par les plaines, les forêts et des milliers de lacs",
  areaKm2: {
    value: 65_300,
    unit: "km²",
    source: "Office lituanien de statistique (State Data Agency)",
    sourceUrl: "https://osp.stat.gov.lt/en/",
    note: "Superficie totale, eaux intérieures comprises.",
  },
  highestPoint: {
    name: "Colline d'Aukštojas",
    elevationM: 294,
    source: "Wikipedia (d'après l'Institut de géodésie de l'Université technique Gediminas de Vilnius, mesure GPS de 2004)",
    sourceUrl: "https://en.wikipedia.org/wiki/Auk%C5%A1tojas_Hill",
  },
  borderingCountries: ["Lettonie", "Biélorussie", "Pologne", "Russie (oblast de Kaliningrad)"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Lithuania" },
  climate:
    "Climat de transition entre océanique et continental, avec des étés doux et humides et des hivers froids ; les précipitations sont réparties toute l'année et l'influence adoucissante de la mer Baltique diminue à mesure que l'on s'éloigne de la côte, vers l'est.",
  summary:
    "La Lituanie est un pays essentiellement plat, façonné par les glaciations : plaines fertiles à l'ouest et au centre, moraines vallonnées à l'est et au sud-est, et environ 3 000 lacs, principalement dans la région des lacs d'Aukštaitija. La forêt couvre un peu plus d'un tiers du territoire. À l'ouest, l'isthme de Courlande, fine bande de dunes de sable partagée avec la Russie, sépare la lagune de Courlande de la mer Baltique.",
};
