import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Saudi_Arabia";

export const geography: GeographyData = {
  headline: "Un plateau désertique couvrant l'essentiel de la péninsule Arabique, sans aucun cours d'eau permanent",
  areaKm2: {
    value: 2_149_690,
    unit: "km²",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: "https://en.wikipedia.org/wiki/Saudi_Arabia",
    note: "Environ 80 % de la péninsule Arabique ; 12ᵉ pays du monde par la superficie.",
  },
  coastlineKm: {
    value: 2_640,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/saudi-arabia/",
    note: "Deux façades : la mer Rouge à l'ouest, la plus longue, et le golfe Persique à l'est.",
  },
  highestPoint: {
    name: "Jabal Soudah (Asir)",
    elevationM: 3_015,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Saudi_Arabia",
  },
  borderingCountries: ["Jordanie", "Irak", "Koweït", "Qatar", "Émirats arabes unis", "Oman", "Yémen"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Désertique chaud sur presque tout le territoire : étés dépassant souvent 45 °C à l'intérieur, chaleur humide sur les côtes, hivers doux. Les pluies, rares et irrégulières, tombent surtout sur les montagnes de l'Asir, au sud-ouest.",
  summary:
    "Le pays est un vaste plateau qui s'abaisse d'ouest en est. Le long de la mer Rouge, les monts du Hedjaz et de l'Asir dominent une étroite plaine côtière, la Tihama. Au centre, le Nejd est un plateau de steppes et d'oasis. Au sud-est, le Rub al-Khali est le plus grand désert de sable continu du monde. Sans fleuve ni lac permanent — seuls des oueds se remplissent lors de rares crues —, le pays puise dans des nappes fossiles et dans le dessalement d'eau de mer.",
};
