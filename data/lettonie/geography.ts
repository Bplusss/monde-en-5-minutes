import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le pays du milieu des trois États baltes, entre plaines côtières, hautes terres modestes et forêts denses",
  areaKm2: {
    value: 64_589,
    unit: "km²",
    source: "Centrālā statistikas pārvalde (CSP, Office letton de statistique)",
    sourceUrl: "https://www.csp.gov.lv/en",
  },
  coastlineKm: {
    value: 498,
    unit: "km",
    source: "Wikipedia (géographie physique)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Latvia",
    note: "Littoral sur la mer Baltique et le golfe de Riga, qui échancre profondément le pays au nord-ouest.",
  },
  highestPoint: {
    name: "Gaiziņkalns",
    elevationM: 312,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Gaizi%C5%86kalns",
  },
  borderingCountries: ["Estonie", "Lituanie", "Biélorussie", "Russie"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Latvia" },
  climate:
    "Climat de transition entre océanique et continental, avec des étés modérément chauds et des hivers froids mais adoucis par l'influence de la Baltique sur la façade occidentale ; les précipitations sont réparties toute l'année et l'amplitude thermique s'accentue vers l'intérieur des terres, à l'est.",
  summary:
    "La Lettonie est un pays de plaines et de collines modestes, façonné par les glaciations : les hautes terres de Vidzeme, de Kurzeme et de Latgale, qui ne dépassent nulle part 312 mètres, alternent avec de vastes basses terres marécageuses et boisées. La forêt couvre plus de la moitié du territoire, l'un des taux les plus élevés d'Europe, et le pays compte plus de 12 000 rivières et plus de 2 000 lacs. Le golfe de Riga, large échancrure de la mer Baltique, structure toute la façade nord-ouest du pays autour de la capitale.",
};
