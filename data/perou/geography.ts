import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Trois mondes côte à côte : le désert du Pacifique, les hautes Andes et la forêt amazonienne",
  areaKm2: {
    value: 1_285_216,
    unit: "km²",
    source: "INEI (Instituto Nacional de Estadística e Informática)",
    sourceUrl: "https://www.inei.gob.pe/",
  },
  coastlineKm: {
    value: 2_414,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/peru/",
  },
  highestPoint: {
    name: "Huascarán (cordillère Blanche, Áncash)",
    elevationM: 6_768,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Huascar%C3%A1n",
  },
  borderingCountries: ["Équateur", "Colombie", "Brésil", "Bolivie", "Chili"],
  generalSource: { source: "INEI / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Peru" },
  climate:
    "La côte, rafraîchie par le courant froid de Humboldt, est un désert presque sans pluie couvert de brume une partie de l'année ; les Andes ont un climat de montagne avec une saison des pluies de décembre à mars et des gelées fréquentes au-dessus de 3 500 m ; l'Amazonie, à l'est, est chaude et humide toute l'année. Le phénomène El Niño provoque périodiquement des pluies diluviennes sur la côte nord.",
  summary:
    "Troisième pays d'Amérique du Sud par la superficie, le Pérou se partage entre trois grandes régions : la costa, mince bande désertique le long du Pacifique où vit plus de la moitié de la population ; la sierra andine, qui culmine à 6 768 m au Huascarán et abrite le lac Titicaca, partagé avec la Bolivie ; et la selva amazonienne, qui couvre près de 60 % du territoire mais ne compte qu'une faible part des habitants. L'Amazone y prend sa source, et le pays possède les plus vastes glaciers tropicaux du monde.",
};
