import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Une île verdoyante et venteuse, ouverte sur l'Atlantique, qui ne partage qu'une seule frontière terrestre",
  areaKm2: {
    value: 70_273,
    unit: "km²",
    source: "CSO (Central Statistics Office)",
    sourceUrl: "https://www.cso.ie/en/",
    note: "République d'Irlande uniquement ; l'île d'Irlande dans son ensemble couvre environ 84 400 km², le reste formant l'Irlande du Nord (Royaume-Uni).",
  },
  coastlineKm: {
    value: 1_448,
    unit: "km",
    source: "Wikipedia (géographie physique)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Ireland",
  },
  highestPoint: {
    name: "Carrauntoohil (massif de Macgillycuddy's Reeks)",
    elevationM: 1_038,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Carrauntoohil",
  },
  borderingCountries: ["Royaume-Uni"],
  generalSource: { source: "CSO / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Ireland" },
  climate:
    "Climat océanique tempéré, adouci par le Gulf Stream : hivers doux, étés frais, et des précipitations abondantes et fréquentes toute l'année, particulièrement sur la côte ouest exposée à l'Atlantique.",
  summary:
    "L'Irlande occupe environ cinq sixièmes de l'île du même nom, l'Irlande du Nord britannique formant le reste au nord-est — sa seule frontière terrestre. Le centre du pays est une plaine basse et verdoyante, parsemée de lacs et de tourbières, encadrée par des reliefs côtiers plus élevés, notamment au sud-ouest dans le comté de Kerry où se trouve le point culminant du pays.",
};
