import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Des rivages de l'océan Indien aux hauts plateaux de la vallée du Rift, à cheval sur l'équateur",
  areaKm2: {
    value: 580_367,
    unit: "km²",
    source: "Kenya National Bureau of Statistics (KNBS)",
    sourceUrl: "https://www.knbs.or.ke/",
    note: "Dont environ 11 000 km² d'eaux intérieures, principalement la partie kényane des lacs Victoria et Turkana.",
  },
  coastlineKm: {
    value: 536,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/kenya/",
  },
  highestPoint: {
    name: "Mont Kenya (Batian)",
    elevationM: 5_199,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Kenya",
  },
  borderingCountries: ["Éthiopie", "Somalie", "Tanzanie", "Ouganda", "Soudan du Sud"],
  generalSource: { source: "KNBS / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Kenya" },
  climate:
    "Climat tropical modulé par l'altitude : chaud et humide sur la côte de l'océan Indien, tempéré sur les hauts plateaux du centre et de l'ouest, où se trouvent Nairobi et les régions agricoles, et aride à semi-aride dans le nord et l'est, qui couvrent plus des quatre cinquièmes du territoire. Les pluies se répartissent en deux saisons, les « longues pluies » de mars à mai et les « courtes pluies » d'octobre à décembre.",
  summary:
    "Traversé en son milieu par l'équateur, le Kenya s'étend des plages et récifs de l'océan Indien au lac Victoria, le plus grand lac d'Afrique. La vallée du Rift le coupe du nord au sud, jalonnée de volcans et de lacs, tandis que les hauts plateaux fertiles qui l'encadrent, dominés par le mont Kenya, deuxième sommet du continent, concentrent l'essentiel de la population et de l'agriculture. Le nord et l'est, arides, sont le domaine des éleveurs nomades. Les savanes du sud, comme le Masai Mara, abritent l'une des plus fortes concentrations de grande faune au monde.",
};
