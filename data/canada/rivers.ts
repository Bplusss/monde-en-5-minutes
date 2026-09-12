import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Fleuve Saint-Laurent",
    lengthKm: { value: 3_058, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Saint_Lawrence_River", note: "En comptant le bassin des Grands Lacs, dont il constitue l'exutoire ; environ 1 200 km pour le seul cours entre le lac Ontario et le golfe." },
    source_location: "Lac Ontario, à Kingston (Ontario)",
    mouth: "Golfe du Saint-Laurent (océan Atlantique), au Québec",
  },
  {
    name: "Mackenzie",
    lengthKm: { value: 4_241, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Mackenzie_River", note: "En comptant le système Finlay-Peace-Athabasca-Grand lac des Esclaves ; le plus long système fluvial du Canada." },
    source_location: "Lac Thutade, nord de la Colombie-Britannique (via le système Finlay-Rivière de la Paix)",
    mouth: "Mer de Beaufort (océan Arctique), dans le delta du Mackenzie",
  },
  {
    name: "Fraser",
    lengthKm: { value: 1_375, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Fraser_River" },
    source_location: "Col Fraser, montagnes Rocheuses (Colombie-Britannique)",
    mouth: "Détroit de Georgia (océan Pacifique), près de Vancouver",
  },
  {
    name: "Churchill",
    lengthKm: { value: 1_609, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Churchill_River_(Hudson_Bay)" },
    source_location: "Lac Churchill, nord de la Saskatchewan",
    mouth: "Baie d'Hudson, à Churchill (Manitoba)",
  },
  {
    name: "Nelson",
    lengthKm: { value: 644, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Nelson_River", note: "Environ 2 570 km en comptant le bassin de la rivière Saskatchewan Nord, sa source ultime." },
    source_location: "Lac Winnipeg, à Warren Landing (Manitoba)",
    mouth: "Baie d'Hudson, près de Port Nelson (Manitoba)",
  },
];
