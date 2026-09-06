import type { GeographyData } from "@/lib/types";

export const geography: GeographyData = {
  headline: "Un haut plateau intérieur encadré de massifs, entre Atlantique et Méditerranée",
  areaKm2: {
    value: 505_990,
    unit: "km²",
    year: 2024,
    source: "INE",
    sourceUrl: "https://www.ine.es/",
  },
  highestPoint: {
    name: "Teide (Tenerife, Canaries)",
    elevationM: 3718,
    source: "Instituto Geográfico Nacional",
    sourceUrl: "https://www.ign.es/",
    // Le Mulhacén (3 478 m, Sierra Nevada) est le point culminant de l'Espagne péninsulaire.
  },
  borderingCountries: ["France", "Andorre", "Portugal", "Maroc"],
  generalSource: { source: "Instituto Geográfico Nacional", sourceUrl: "https://www.ign.es/" },
  climate:
    "Climat méditerranéen sur le pourtour côtier, océanique dans le nord (Galice, côte cantabrique), continental sec sur le plateau central (Meseta), semi-aride dans le sud-est, subtropical aux Canaries.",
  summary:
    "L'Espagne occupe l'essentiel de la péninsule Ibérique, bordée par l'Atlantique au nord-ouest et la Méditerranée à l'est. Un vaste plateau intérieur (la Meseta) domine le centre du pays, encadré par plusieurs chaînes montagneuses (Pyrénées, système Central, Sierra Nevada) ; l'archipel des Canaries, au large du Maroc, ajoute un relief volcanique.",
};
