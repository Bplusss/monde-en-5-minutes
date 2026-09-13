import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un sous-continent à lui seul, du haut Himalaya aux plaines du Gange et aux tropiques du Deccan",
  areaKm2: {
    value: 3_287_263,
    unit: "km²",
    source: "Wikipedia (géographie de l'Inde)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_India",
    note: "Septième pays du monde par la superficie ; la frontière avec la Chine, non délimitée dans sa totalité, fait l'objet de désaccords (voir Aksai Chin et Arunachal Pradesh).",
  },
  coastlineKm: {
    value: 7_516.6,
    unit: "km",
    source: "Wikipedia (géographie de l'Inde)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_India",
  },
  highestPoint: {
    name: "Kangchenjunga",
    elevationM: 8_586,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Kangchenjunga",
  },
  borderingCountries: ["Pakistan", "Chine", "Népal", "Bhoutan", "Bangladesh", "Birmanie (Myanmar)"],
  generalSource: { source: "Wikipedia (géographie de l'Inde)", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_India" },
  climate:
    "Climat très contrasté selon les régions : désertique à l'ouest (Thar), alpin et glaciaire dans l'Himalaya au nord, tropical humide dans le sud-ouest et les îles. La mousson d'été (juin à septembre), portée par les vents du sud-ouest, apporte l'essentiel des précipitations annuelles et structure le calendrier agricole du pays.",
  summary:
    "L'Inde occupe la majeure partie du sous-continent indien, entre la chaîne himalayenne au nord — qui abrite son point culminant, le Kangchenjunga, à la frontière du Sikkim et du Népal — et l'océan Indien au sud. Le pays associe de vastes plaines alluviales densément peuplées le long du Gange et de l'Indus, un plateau volcanique ancien (le Deccan) au centre-sud, et deux longues façades maritimes bordées par la mer d'Arabie à l'ouest et le golfe du Bengale à l'est. Sa frontière nord-est avec la Chine (secteur de l'Arunachal Pradesh) et sa frontière nord-ouest dans la région du Cachemire (secteur de l'Aksai Chin, administré par la Chine) restent contestées depuis le milieu du XXe siècle.",
};
