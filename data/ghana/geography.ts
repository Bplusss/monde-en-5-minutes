import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un pays du golfe de Guinée, de la côte des forts à la savane, traversé par la Volta",
  areaKm2: {
    value: 238_535,
    unit: "km²",
    source: "Ghana Statistical Service",
    sourceUrl: "https://statsghana.gov.gh/",
  },
  coastlineKm: {
    value: 539,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Ghana",
  },
  highestPoint: {
    name: "Mont Afadja (monts Akwapim-Togo)",
    elevationM: 885,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mount_Afadja",
  },
  borderingCountries: ["Côte d'Ivoire", "Burkina Faso", "Togo"],
  generalSource: { source: "Ghana Statistical Service / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Ghana" },
  climate:
    "Le climat est tropical. Le Sud, humide, connaît deux saisons des pluies (avril-juillet et septembre-novembre) ; le Nord, plus sec, n'en a qu'une, de mai à octobre, suivie d'une longue saison sèche marquée par l'harmattan, vent chargé de poussière venu du Sahara. La côte autour d'Accra est étonnamment sèche pour la latitude. Les températures moyennes se situent entre 25 °C et 30 °C toute l'année.",
  summary:
    "Le Ghana s'étend sur environ 670 km du golfe de Guinée jusqu'au Burkina Faso. Le relief est bas : une plaine côtière ponctuée de lagunes, une ceinture de forêt tropicale au sud-ouest, où se concentrent l'or et le cacao, puis de vastes plateaux de savane au nord. Le bassin de la Volta couvre près des trois quarts du pays ; le barrage d'Akosombo y a créé en 1965 le lac Volta, l'un des plus grands lacs artificiels du monde. À l'est, les monts Akwapim-Togo longent la frontière togolaise.",
};
