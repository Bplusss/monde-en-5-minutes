import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Draa",
    lengthKm: { value: 1_100, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Draa_River", note: "Plus long cours d'eau du Maroc, mais intermittent : son cours inférieur, qui suit en partie la frontière algérienne, n'atteint l'océan que lors de rares crues. Sa vallée moyenne est jalonnée de palmeraies et de ksour." },
    source_location: "Confluence du Dadès et de l'oued Ouarzazate, près de Ouarzazate (Haut Atlas)",
    mouth: "Océan Atlantique, au nord de Tan-Tan (atteint seulement lors des crues exceptionnelles)",
  },
  {
    name: "Oum Er-Rbia",
    lengthKm: { value: 555, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Oum_Er-Rbia_River", note: "Deuxième fleuve du pays par le débit après le Sebou ; ses barrages (dont Al Massira) irriguent les plaines du Tadla et des Doukkala." },
    source_location: "Moyen Atlas, près de Khénifra",
    mouth: "Océan Atlantique, à Azemmour",
  },
  {
    name: "Moulouya",
    lengthKm: { value: 520, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Moulouya_River", note: "Seul grand fleuve marocain se jetant dans la Méditerranée ; son débit a fortement baissé lors des sécheresses des années 2020." },
    source_location: "Jonction du Moyen et du Haut Atlas, près de Midelt",
    mouth: "Mer Méditerranée, près de Saïdia, à proximité de la frontière algérienne",
  },
  {
    name: "Sebou",
    lengthKm: { value: 496, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Sebou_River", note: "Fleuve au plus fort débit du pays ; il traverse la plaine du Gharb et alimente le barrage d'Al Wahda, le plus grand du Maroc." },
    source_location: "Moyen Atlas, au sud de Fès",
    mouth: "Océan Atlantique, à Mehdia, près de Kénitra",
  },
];
