import type { GeographyData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Geography_of_Tunisia";

export const geography: GeographyData = {
  headline: "Le plus petit pays du Maghreb, entre un nord méditerranéen arrosé et un sud saharien",
  areaKm2: {
    value: 163_610,
    unit: "km²",
    source: "CIA World Factbook (via Wikipedia)",
    sourceUrl: WIKI_URL,
  },
  coastlineKm: {
    value: 1_148,
    unit: "km",
    source: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/tunisia/",
    note: "Littoral nord et est ouvert sur la Méditerranée, avec les îles de Djerba et de Kerkennah.",
  },
  highestPoint: {
    name: "Jebel Chambi (dorsale tunisienne, gouvernorat de Kasserine)",
    elevationM: 1_544,
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Jebel_ech_Chambi",
  },
  borderingCountries: ["Algérie", "Libye"],
  generalSource: { source: WIKI, sourceUrl: WIKI_URL },
  climate:
    "Climat méditerranéen au nord (hivers doux et pluvieux, étés chauds et secs), semi-aride dans le Centre et désertique au sud, où les précipitations tombent sous 100 mm par an. Le nord-ouest (Kroumirie) est la région la plus arrosée du pays.",
  summary:
    "La Tunisie occupe la pointe nord-est du Maghreb, à environ 140 km de la Sicile. La dorsale tunisienne, prolongement de l'Atlas, sépare un Tell nord agricole, drainé par la Medjerda, des steppes du Centre. Plus au sud s'étendent les chotts — dont le chott el-Djerid, vaste dépression salée — puis le Sahara. La population et l'activité se concentrent sur le littoral est (Sahel de Sousse et Monastir, région de Sfax) et dans le Grand Tunis.",
};
