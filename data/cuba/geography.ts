import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "La plus grande île des Caraïbes, longue de 1 250 km entre l'Atlantique et la mer des Caraïbes",
  areaKm2: {
    value: 109_884,
    unit: "km²",
    source: "ONEI (Oficina Nacional de Estadística e Información)",
    sourceUrl: "https://www.onei.gob.cu/",
  },
  coastlineKm: {
    value: 3_735,
    unit: "km",
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Cuba",
  },
  highestPoint: {
    name: "Pic Turquino (Sierra Maestra)",
    elevationM: 1_974,
    source: "Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Pico_Turquino",
  },
  borderingCountries: [],
  generalSource: { source: "ONEI / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Cuba" },
  climate:
    "Le climat est tropical, adouci par les alizés : la saison sèche va de novembre à avril, la saison des pluies de mai à octobre. Les températures moyennes oscillent entre 21 °C en janvier et 27 °C en été. L'île se trouve sur la trajectoire des ouragans, de juin à novembre, et les « nortes », coups de vent froid venus du nord, rafraîchissent parfois l'hiver.",
  summary:
    "Cuba est un archipel formé de l'île principale, de l'île de la Jeunesse et de plus de 4 000 îlots et cayes. L'île principale, étroite et allongée, est surtout faite de plaines fertiles et de collines, propices à la canne à sucre et au tabac. Trois massifs l'interrompent : la cordillère de Guaniguanico à l'ouest, avec la vallée de Viñales et ses mogotes, l'Escambray au centre et la Sierra Maestra au sud-est, où culmine le pic Turquino. La Floride n'est qu'à environ 150 km au nord, et les États-Unis occupent depuis 1903 la base navale de Guantánamo, dont La Havane réclame la restitution.",
};
