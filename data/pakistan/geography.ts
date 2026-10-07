import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Des sommets du Karakoram au delta de l'Indus, un pays tout entier organisé autour d'un fleuve",
  areaKm2: {
    value: 796_096,
    unit: "km²",
    source: "Pakistan Bureau of Statistics",
    sourceUrl: "https://www.pbs.gov.pk/",
    note: "Hors Gilgit-Baltistan et Azad Cachemire, administrés par le Pakistan mais rattachés au différend du Cachemire ; environ 882 000 km² en les incluant.",
  },
  coastlineKm: {
    value: 1_046,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Pakistan",
  },
  highestPoint: {
    name: "K2 (Karakoram, Gilgit-Baltistan)",
    elevationM: 8_611,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/K2",
  },
  borderingCountries: ["Inde", "Chine", "Afghanistan", "Iran"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Pakistan" },
  climate:
    "Le climat est surtout aride ou semi-aride, avec des étés torrides dans les plaines : Jacobabad, dans le Sind, compte parmi les villes les plus chaudes du monde, au-delà de 50 °C. La mousson d'été (juillet-septembre) apporte l'essentiel des pluies au Pendjab et au nord-est, tandis que le Baloutchistan reste désertique. Les montagnes du nord connaissent des hivers rigoureux et de longs enneigements.",
  summary:
    "Le Pakistan s'étend des plus hautes montagnes du monde jusqu'à la mer d'Arabie. Au nord, le Karakoram, l'Himalaya et l'Hindou Kouch abritent le K2 et plusieurs milliers de glaciers. Au centre et au sud, la vaste plaine de l'Indus et de ses affluents du Pendjab (« les cinq rivières ») concentre la population et l'une des plus grandes zones irriguées du globe. À l'ouest, le plateau aride du Baloutchistan, qui couvre près de la moitié du territoire, descend vers une côte désertique où se trouvent Karachi et le port de Gwadar.",
};
