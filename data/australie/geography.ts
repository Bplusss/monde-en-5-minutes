import type { GeographyData } from "@/lib/types";

const GA = "Geoscience Australia";
const GA_URL = "https://www.ga.gov.au/scientific-topics/national-location-information/dimensions/area-of-australia-states-and-territories";

export const geography: GeographyData = {
  headline:
    "Un continent-île isolé entre océans Indien et Pacifique, le plus plat et le plus sec des continents habités, sans aucune frontière terrestre",
  areaKm2: {
    value: 7_688_287,
    unit: "km²",
    source: GA,
    sourceUrl: GA_URL,
    note: "Sixième pays du monde par la superficie ; inclut la Tasmanie mais pas les territoires extérieurs.",
  },
  coastlineKm: {
    value: 35_821,
    unit: "km",
    source: GA,
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Australia",
    note: "Côtes du continent et de la Tasmanie ; s'y ajoutent environ 23 860 km de côtes insulaires (îles proches et territoires extérieurs).",
  },
  highestPoint: {
    name: "Mont Kosciuszko",
    elevationM: 2_228,
    source: "Geoscience Australia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Kosciuszko",
  },
  borderingCountries: [],
  generalSource: { source: "Geoscience Australia / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Australia" },
  climate:
    "Climat très contrasté du nord tropical (moussons, cyclones) au sud tempéré, en passant par un vaste centre aride à semi-aride qui couvre plus du tiers du territoire. La pluviométrie moyenne nationale, d'environ 419 mm par an, fait de l'Australie le continent habité le plus sec après l'Antarctique.",
  summary:
    "Île-continent qui ne partage de frontière terrestre avec aucun autre pays, l'Australie est dominée en son centre par l'Outback, une vaste région aride et très faiblement peuplée qui concentre déserts (Grand Désert de Sable, désert de Gibson) et formations emblématiques comme Uluru. La Grande Chaîne de partage des eaux longe la côte est sur près de 4 000 km, tandis que la Grande Barrière de corail, la plus vaste structure corallienne du monde, s'étend sur plus de 2 300 km au large du Queensland. L'essentiel de la population vit sur une frange littorale étroite, principalement à l'est, au sud-est et au sud-ouest.",
};
