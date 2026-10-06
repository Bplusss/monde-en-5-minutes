import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le seul pays d'Amérique du Sud ouvert sur deux océans, des Andes à l'Amazonie",
  areaKm2: {
    value: 1_141_748,
    unit: "km²",
    source: "DANE / IGAC (Institut géographique Agustín Codazzi)",
    sourceUrl: "https://www.igac.gov.co/",
    note: "Superficie terrestre, îles de la mer des Caraïbes (San Andrés et Providencia) et du Pacifique (Malpelo, Gorgona) comprises.",
  },
  coastlineKm: {
    value: 3_208,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/colombia/",
    note: "Environ 1 760 km sur la mer des Caraïbes et 1 450 km sur l'océan Pacifique.",
  },
  highestPoint: {
    name: "Pics Cristóbal Colón et Simón Bolívar (Sierra Nevada de Santa Marta)",
    elevationM: 5_730,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Pico_Crist%C3%B3bal_Col%C3%B3n",
  },
  borderingCountries: ["Panama", "Venezuela", "Brésil", "Pérou", "Équateur"],
  generalSource: { source: "IGAC / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Colombia" },
  climate:
    "Climat tropical sans véritables saisons thermiques, la température dépendant surtout de l'altitude : chaud sur les côtes et dans les plaines (tierra caliente), tempéré entre 1 000 et 2 000 m autour de Medellín, frais au-dessus de 2 000 m comme à Bogota. Les pluies, très abondantes sur la côte pacifique, suivent un rythme de deux saisons sèches et deux saisons humides dans les Andes.",
  summary:
    "Quatrième pays d'Amérique du Sud par la superficie, la Colombie est la seule à border à la fois la mer des Caraïbes et l'océan Pacifique. Les Andes s'y divisent en trois cordillères séparées par les vallées du Magdalena et du Cauca, où vit l'essentiel de la population. À l'est s'étendent les grandes plaines des Llanos, tournées vers l'Orénoque, puis la forêt amazonienne, qui couvre plus du tiers du territoire. La Sierra Nevada de Santa Marta, massif isolé au bord des Caraïbes, est la plus haute montagne côtière du monde.",
};
