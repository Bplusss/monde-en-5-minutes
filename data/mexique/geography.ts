import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un vaste territoire entre deux océans, du désert du nord aux jungles mayas du sud, sur trois plaques tectoniques",
  areaKm2: {
    value: 1_972_550,
    unit: "km²",
    source: "INEGI (Instituto Nacional de Estadística y Geografía)",
    sourceUrl: "https://www.inegi.org.mx/temas/territorio/",
    note: "13ᵉ pays du monde par la superficie.",
  },
  coastlineKm: {
    value: 9_330,
    unit: "km",
    source: "Wikipedia (d'après le CIA World Factbook)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Mexico",
    note: "Dont environ 7 338 km sur le Pacifique et le golfe de Californie, le reste sur le golfe du Mexique et la mer des Caraïbes.",
  },
  highestPoint: {
    name: "Pico de Orizaba (Citlaltépetl)",
    elevationM: 5610,
    source: "INEGI",
    sourceUrl: "https://en.wikipedia.org/wiki/Pico_de_Orizaba",
  },
  borderingCountries: ["États-Unis", "Guatemala", "Belize"],
  generalSource: { source: "INEGI / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Mexico" },
  climate:
    "Le tropique du Cancer coupe le pays en deux, séparant un nord aride à semi-aride (déserts de Sonora et de Chihuahua) d'un sud tropical humide. L'altitude joue toutefois un rôle au moins aussi important que la latitude : le haut plateau central (Mesa Central), où se trouve la capitale à plus de 2 200 m, connaît un climat tempéré toute l'année, tandis que les côtes et les basses terres du Sud-Est (Chiapas, Yucatán) sont chaudes et humides, exposées aux ouragans entre juin et novembre.",
  summary:
    "Le Mexique s'étend en éventail entre l'océan Pacifique et le golfe du Mexique, rattaché aux États-Unis au nord et à l'Amérique centrale (Guatemala, Belize) au sud-est. L'essentiel du territoire est occupé par deux hautes chaînes, la Sierra Madre occidentale et la Sierra Madre orientale, qui encadrent le haut plateau central où vit la majorité de la population, et se rejoignent au sud dans l'Axe volcanique transversal, ceinture de volcans actifs (Popocatépetl, Colima) qui traverse le pays d'est en ouest. Situé à la jonction de trois plaques tectoniques (nord-américaine, pacifique et des Cocos), le pays est l'un des plus exposés au monde aux séismes, comme celui de 1985 à Mexico ou de 2017 au Chiapas et à Puebla. Au sud-est, la péninsule calcaire et plate du Yucatán, couverte de forêt tropicale, tranche avec le relief accidenté du reste du pays.",
};
