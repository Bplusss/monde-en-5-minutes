import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Le deuxième plus grand pays d'Amérique du Sud, étiré sur plus de 3 700 km du tropique aux confins de l'Antarctique",
  areaKm2: {
    value: 2_780_085,
    unit: "km²",
    source: "INDEC (Instituto Nacional de Estadística y Censos)",
    sourceUrl: "https://www.indec.gob.ar/",
    note: "Territoire continental et insulaire revendiqué, incluant les îles Malouines (Falkland), la Géorgie du Sud-et-les îles Sandwich du Sud et un secteur de l'Antarctique, tous trois non administrés par l'Argentine (voir « Territoires »).",
  },
  highestPoint: {
    name: "Aconcagua (province de Mendoza)",
    elevationM: 6_961,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Aconcagua",
  },
  borderingCountries: ["Chili", "Bolivie", "Paraguay", "Brésil", "Uruguay"],
  generalSource: { source: "INDEC / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Argentina" },
  climate:
    "Climat extrêmement varié du fait de l'étirement du pays sur plus de 33 degrés de latitude : subtropical humide au nord-est (Mésopotamie, Chaco), aride et de haute montagne dans le Nord-Ouest andin, tempéré humide dans la région centrale de la Pampa, et froid, sec et venteux en Patagonie, jusqu'au climat subpolaire de la Terre de Feu, à l'extrémité australe du continent américain.",
  summary:
    "Deuxième pays d'Amérique du Sud par la superficie derrière le Brésil, l'Argentine s'étend du tropique du Capricorne, à sa frontière avec la Bolivie, jusqu'au détroit de Magellan et à la Terre de Feu, à moins de 1 000 km de l'Antarctique. La cordillère des Andes, qui culmine à l'Aconcagua (6 961 m, point le plus élevé des Amériques et de l'hémisphère sud), forme sa frontière occidentale avec le Chili, tandis que les vastes plaines fertiles de la Pampa, au centre, concentrent l'essentiel de l'agriculture et de la population, et que la Patagonie, au sud, reste l'une des régions les moins densément peuplées du monde. Le pays revendique par ailleurs la souveraineté sur les îles Malouines (Falkland), sur la Géorgie du Sud-et-les îles Sandwich du Sud — toutes trois administrées par le Royaume-Uni — ainsi que sur un secteur de l'Antarctique, sans reconnaissance internationale de cette dernière revendication.",
};
