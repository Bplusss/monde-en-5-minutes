import type { LanguagesData } from "@/lib/types";

const CENSUS = "INEI (recensement 2017)";
const CENSUS_URL = "https://censo2017.inei.gob.pe/";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Espagnol",
      kind: "officielle",
      sharePercent: { value: 82.6, unit: "% de la population (langue maternelle)", year: 2017, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Langue de l'État, de l'économie et de la majorité des médias.",
    },
    {
      name: "Quechua",
      kind: "officielle",
      sharePercent: { value: 13.9, unit: "% de la population (langue maternelle)", year: 2017, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Langue de l'Empire inca, officielle là où elle prédomine selon la Constitution ; parlée surtout dans les Andes du centre et du sud (Cusco, Apurímac, Ayacucho, Puno).",
    },
    {
      name: "Aymara",
      kind: "officielle",
      sharePercent: { value: 1.7, unit: "% de la population (langue maternelle)", year: 2017, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Parlé autour du lac Titicaca, dans la région de Puno, comme en Bolivie voisine.",
    },
    {
      name: "Langues amazoniennes (asháninka, awajún, shipibo-konibo…)",
      kind: "régionale",
      note: "Une quarantaine de langues parlées par les peuples d'Amazonie, souvent par quelques milliers de locuteurs seulement ; officielles là où elles prédominent.",
    },
  ],
  summary:
    "Le Pérou reconnaît 48 langues autochtones, dont 44 amazoniennes et 4 andines. La Constitution fait de l'espagnol la langue officielle de tout le pays, et du quechua, de l'aymara et des autres langues autochtones des langues officielles dans les zones où elles prédominent. Le quechua, langue maternelle d'environ un Péruvien sur sept, reste très présent dans les Andes, mais recule face à l'espagnol dans les villes. Des programmes d'éducation interculturelle bilingue existent dans les communautés andines et amazoniennes, et le quechua s'invite de plus en plus dans les médias, la musique et même au Congrès, où des élus prêtent serment dans cette langue.",
};
