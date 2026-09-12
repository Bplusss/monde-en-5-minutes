import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays enclavé, majoritairement montagneux, où les Carpates occidentales culminent dans les Hautes Tatras",
  areaKm2: {
    value: 49_035,
    unit: "km²",
    source: "Eurostat",
    sourceUrl: "https://european-union.europa.eu/principles-countries-history/eu-countries/slovakia_en",
  },
  highestPoint: {
    name: "Gerlachovský štít (Hautes Tatras)",
    elevationM: 2_655,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Gerlachovsk%C3%BD_%C5%A1t%C3%ADt",
  },
  borderingCountries: ["Tchéquie", "Pologne", "Ukraine", "Hongrie", "Autriche"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Slovakia" },
  climate:
    "Climat continental tempéré, avec des étés chauds et des hivers froids et neigeux ; les précipitations et l'enneigement augmentent nettement avec l'altitude dans les massifs du nord (Tatras, Basses Tatras), tandis que les plaines du sud-ouest et du sud-est, plus sèches et chaudes, concentrent l'essentiel des terres agricoles.",
  summary:
    "La Slovaquie est l'un des pays les plus montagneux d'Europe centrale : les Carpates occidentales occupent près des deux tiers de son territoire, depuis les collines boisées de l'ouest jusqu'aux sommets alpins des Hautes Tatras, la chaîne la plus élevée de tout l'arc carpatique, à la frontière polonaise. Seules les plaines du Danube au sud-ouest, autour de Bratislava, et de la Tisza à l'extrême sud-est offrent un relief plat propice à l'agriculture. Le Danube marque une partie de la frontière avec l'Autriche et la Hongrie, avant que le pays ne devienne, plus à l'est, l'un des points de contact de l'Union européenne avec l'Ukraine.",
};
