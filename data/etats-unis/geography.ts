import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un territoire continental entre deux océans, prolongé par l'Alaska, Hawaï et des territoires insulaires",
  areaKm2: {
    value: 9_147_420,
    unit: "km²",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/AG.LND.TOTL.K2?locations=US",
    note: "Superficie terrestre. En incluant les eaux intérieures, la superficie totale (Census Bureau) est d'environ 9 833 520 km², ce qui place le pays au 3ᵉ ou 4ᵉ rang mondial selon la méthode de calcul retenue.",
  },
  highestPoint: {
    name: "Denali (Alaska)",
    elevationM: 6190,
    source: "National Park Service",
    sourceUrl: "https://www.nps.gov/dena/index.htm",
  },
  borderingCountries: ["Canada", "Mexique"],
  generalSource: { source: "U.S. Census Bureau", sourceUrl: "https://www.census.gov/" },
  climate:
    "Très contrasté du fait de l'étendue du territoire : continental humide au nord-est et dans le Midwest, subtropical humide dans le Sud-Est, semi-aride et désertique dans une grande partie de l'Ouest intérieur, méditerranéen en Californie côtière, océanique dans le Nord-Ouest Pacifique, polaire en Alaska et tropical à Hawaï et dans le sud de la Floride.",
  summary:
    "Les États-Unis s'étendent sur la majeure partie du centre de l'Amérique du Nord, entre l'océan Atlantique et l'océan Pacifique, avec le Canada au nord et le Mexique au sud. Le relief associe les plaines côtières atlantiques, les Appalaches à l'est, les vastes Grandes Plaines au centre et les hautes chaînes des montagnes Rocheuses à l'ouest. Le territoire national inclut aussi l'Alaska, à l'extrémité nord-ouest du continent, et l'archipel volcanique d'Hawaï, isolé au milieu du Pacifique, ainsi que plusieurs territoires insulaires non contigus.",
};
