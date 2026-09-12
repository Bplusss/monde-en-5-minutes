import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Mississippi",
    lengthKm: { value: 3766, unit: "km", source: "USGS", sourceUrl: "https://www.usgs.gov/special-topics/water-science-school/science/mississippi-river-facts" },
    source_location: "Lac Itasca (Minnesota)",
    mouth: "Golfe du Mexique",
  },
  {
    name: "Missouri",
    lengthKm: { value: 4090, unit: "km", source: "USGS", sourceUrl: "https://www.usgs.gov/" },
    source_location: "Montana (confluence des rivières Jefferson, Madison et Gallatin)",
    mouth: "Fleuve Mississippi",
  },
  {
    name: "Rio Grande",
    lengthKm: { value: 2830, unit: "km", source: "USGS", sourceUrl: "https://www.usgs.gov/" },
    source_location: "Montagnes San Juan (Colorado)",
    mouth: "Golfe du Mexique",
  },
  {
    name: "Colorado",
    lengthKm: { value: 2330, unit: "km", source: "USGS", sourceUrl: "https://www.usgs.gov/" },
    source_location: "Montagnes Rocheuses (Colorado)",
    mouth: "Golfe de Californie (Mexique)",
  },
  {
    name: "Columbia",
    lengthKm: { value: 2000, unit: "km", source: "USGS", sourceUrl: "https://www.usgs.gov/" },
    source_location: "Colombie-Britannique (Canada)",
    mouth: "Océan Pacifique",
  },
];
