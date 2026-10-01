import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://fr.wikipedia.org/wiki/G%C3%A9ographie_du_S%C3%A9n%C3%A9gal";

export const geography: GeographyData = {
  headline: "La pointe occidentale de l'Afrique : un pays plat, sahélien au nord et humide au sud, presque coupé en deux par la Gambie",
  areaKm2: {
    value: 196_712,
    unit: "km²",
    source: WIKI,
    sourceUrl: WIKI_URL,
    note: "L'ANSD retient 196 768 km² dans le recensement de 2023.",
  },
  coastlineKm: {
    value: 531,
    unit: "km",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Senegal",
    note: "Façade atlantique allant de l'embouchure du fleuve Sénégal, au nord, à la frontière bissau-guinéenne, au sud.",
  },
  highestPoint: {
    name: "Colline sans nom près de Népen Diakha (région de Kédougou)",
    elevationM: 648,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Senegal",
  },
  borderingCountries: ["Mauritanie", "Mali", "Guinée", "Guinée-Bissau", "Gambie"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat tropical à deux saisons : une saison des pluies (hivernage) de juin-juillet à octobre et une longue saison sèche, marquée par l'harmattan, vent chaud et poussiéreux venu du Sahara. Les précipitations augmentent fortement du nord sahélien (moins de 300 mm par an dans la vallée du fleuve) au sud casamançais (plus de 1 200 mm). Le littoral, rafraîchi par l'alizé et le courant froid des Canaries, reste plus tempéré que l'intérieur, où les températures dépassent souvent 40 °C.",
  summary:
    "Le Sénégal occupe l'extrémité occidentale du continent africain : la presqu'île du Cap-Vert, où se trouve Dakar, s'achève à la pointe des Almadies, point le plus à l'ouest de l'Afrique continentale. Le relief est presque partout plat et bas ; seuls les contreforts du Fouta-Djalon, au sud-est, dépassent quelques centaines de mètres. Le fleuve Sénégal trace la frontière nord avec la Mauritanie, et la Gambie, étroit pays enclavé le long du fleuve du même nom, s'enfonce sur plus de 300 km dans le territoire et sépare la Casamance du reste du pays. Le paysage passe du Sahel semi-aride au nord (Ferlo) au bassin arachidier du centre, puis aux savanes boisées et forêts humides du sud.",
};
