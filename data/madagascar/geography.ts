import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "La quatrième plus grande île du monde, isolée depuis des dizaines de millions d'années",
  areaKm2: {
    value: 587_041,
    unit: "km²",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Madagascar",
  },
  coastlineKm: {
    value: 4_828,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Madagascar",
  },
  highestPoint: {
    name: "Maromokotro (massif du Tsaratanana)",
    elevationM: 2_876,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Maromokotro",
  },
  borderingCountries: [],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Madagascar" },
  climate:
    "Le climat est tropical, avec une saison des pluies de novembre à avril. La côte est, exposée aux alizés, est très arrosée et frappée presque chaque année par des cyclones ; les Hautes Terres centrales, au-dessus de 1 200 m, ont un climat tempéré, avec des hivers frais autour d'Antananarivo ; l'ouest est plus sec, et le Grand Sud semi-aride connaît des sécheresses récurrentes.",
  summary:
    "Séparée de l'Afrique il y a environ 160 millions d'années, puis de l'Inde il y a environ 90 millions d'années, Madagascar se trouve dans l'océan Indien, à 400 km des côtes du Mozambique. L'île est traversée du nord au sud par les Hautes Terres, où vit une grande partie de la population et où les rizières en terrasses dominent le paysage. À l'est, un escarpement abrupt descend vers une étroite plaine côtière couverte de forêts humides ; à l'ouest s'étendent des plateaux et des plaines plus sèches, avec les forêts de baobabs et les « tsingy », forêts de pinacles calcaires.",
};
