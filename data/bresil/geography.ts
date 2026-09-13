import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le plus grand pays d'Amérique du Sud, couvert à près de moitié par le bassin amazonien",
  areaKm2: {
    value: 8_510_346,
    unit: "km²",
    source: "IBGE (Instituto Brasileiro de Geografia e Estatística)",
    sourceUrl: "https://www.ibge.gov.br/",
    note: "Cinquième pays du monde par la superficie, derrière la Russie, le Canada, la Chine et les États-Unis.",
  },
  coastlineKm: {
    value: 7_491,
    unit: "km",
    source: "Wikipedia (géographie du Brésil)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Brazil",
  },
  highestPoint: {
    name: "Pico da Neblina (Amazonas)",
    elevationM: 2_995,
    source: "IBGE",
    sourceUrl: "https://en.wikipedia.org/wiki/Pico_da_Neblina",
  },
  borderingCountries: ["Argentine", "Bolivie", "Colombie", "Guyana", "Paraguay", "Pérou", "Suriname", "Uruguay", "Venezuela"],
  generalSource: { source: "IBGE / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Brazil" },
  climate:
    "Climat majoritairement tropical (74 % du territoire se trouve dans la zone intertropicale), équatorial et très humide dans le bassin amazonien, semi-aride dans le Sertão du Nordeste, tropical d'altitude sur le plateau central, et subtropical à tempéré dans le Sud, où des gelées hivernales sont possibles.",
  summary:
    "Cinquième plus grand pays du monde, le Brésil s'étend sur près de la moitié de l'Amérique du Sud et partage une frontière avec tous les pays du continent à l'exception du Chili et de l'Équateur — auxquels s'ajoute la Guyane française, territoire d'outre-mer français non repris ici parmi les pays frontaliers. Le bassin amazonien, qui couvre à lui seul environ 45 % du territoire national, concentre un cinquième des réserves d'eau douce de la planète, tandis que le plateau central brésilien (planalto) et les massifs côtiers du Sud-Est abritent l'essentiel de la population et de l'activité économique du pays.",
};
