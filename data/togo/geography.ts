import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un long et étroit couloir d'Afrique de l'Ouest, entre Ghana et Bénin, ouvert sur le golfe de Guinée par un littoral de seulement 56 km",
  areaKm2: {
    value: 56_785,
    unit: "km²",
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/AG.SRF.TOTL.K2?locations=TG",
  },
  coastlineKm: {
    value: 56,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://fr.wikipedia.org/wiki/G%C3%A9ographie_du_Togo",
  },
  highestPoint: {
    name: "Mont Agou",
    elevationM: 986,
    source: "Wikipedia",
    sourceUrl: "https://fr.wikipedia.org/wiki/Mont_Agou",
  },
  borderingCountries: ["Ghana", "Bénin", "Burkina Faso"],
  generalSource: { source: "Wikipedia", sourceUrl: "https://fr.wikipedia.org/wiki/G%C3%A9ographie_du_Togo" },
  climate:
    "Climat tropical, avec un net contraste nord-sud : le sud, proche du golfe de Guinée, connaît un régime à deux saisons des pluies (de mars à juillet, puis de septembre à novembre) séparées par une petite saison sèche, tandis que le nord, sous influence sahélienne, n'a qu'une seule saison des pluies (juin à septembre) et subit en saison sèche l'harmattan, vent chaud et sec chargé de poussière venu du Sahara.",
  summary:
    "Le Togo est un pays étiré du nord au sud sur environ 600 km pour une largeur qui ne dépasse guère 150 km, coincé entre le Ghana à l'ouest et le Bénin à l'est, avec une courte frontière au nord avec le Burkina Faso. Son relief s'organise en bandes parallèles depuis l'étroite plaine côtière sableuse, bordée de lagunes, jusqu'aux plaines et savanes du nord, en passant par la chaîne de l'Atacora (localement appelée monts Togo), qui traverse le pays du sud-ouest au nord-est et culmine au mont Agou. Cette forme allongée, héritée du partage colonial du Togoland allemand entre la France et le Royaume-Uni après la Première Guerre mondiale, fait du Togo l'un des pays les plus étroits d'Afrique.",
};
