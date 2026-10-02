import type { LanguagesData } from "@/lib/types";

const CENSUS = "Philippine Statistics Authority (PSA), recensement 2020 (langue généralement parlée au foyer)";
const CENSUS_URL = "https://en.wikipedia.org/wiki/Languages_of_the_Philippines";
const UNIT = "% des ménages";

export const languages: LanguagesData = {
  entries: [
    { name: "Filipino", kind: "officielle", note: "Langue nationale et co-officielle (Constitution de 1987), forme standardisée du tagalog de Manille ; comprise par la quasi-totalité de la population." },
    { name: "Anglais", kind: "officielle", note: "Co-officiel, langue de l'administration, de la justice, de l'enseignement supérieur et des affaires — héritage de la période américaine (1898-1946)." },
    { name: "Tagalog", kind: "régionale", sharePercent: { value: 39.9, unit: UNIT, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Langue de Manille et du sud de Luzon, base du filipino." },
    { name: "Cebuano (bisaya)", kind: "régionale", sharePercent: { value: 22.5, unit: UNIT, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL, note: "Somme des réponses « Bisaya/Binisaya » (16,0 %) et « Cebuano » (6,5 %), qui désignent la même langue." }, note: "Langue des Visayas centrales et d'une grande partie de Mindanao." },
    { name: "Hiligaïnon (ilonggo)", kind: "régionale", sharePercent: { value: 7.3, unit: UNIT, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Parlé à Panay et Negros occidental." },
    { name: "Ilocano", kind: "régionale", sharePercent: { value: 7.1, unit: UNIT, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Langue véhiculaire du nord de Luzon." },
    { name: "Bikol", kind: "régionale", sharePercent: { value: 3.9, unit: UNIT, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL } },
    { name: "Waray", kind: "régionale", sharePercent: { value: 2.6, unit: UNIT, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL } },
    { name: "Kapampangan", kind: "régionale", sharePercent: { value: 2.4, unit: UNIT, year: 2020, source: CENSUS, sourceUrl: CENSUS_URL } },
    { name: "Chavacano", kind: "régionale", note: "Créole à base espagnole parlé surtout à Zamboanga, seul créole hispanique d'Asie." },
  ],
  summary:
    "Les Philippines comptent entre 130 et 190 langues, presque toutes austronésiennes. Le filipino, issu du tagalog, et l'anglais sont officiels ; l'anglais domine l'enseignement supérieur, le droit et les affaires, ce qui fait du pays l'un des grands viviers anglophones d'Asie. L'espagnol, langue coloniale pendant trois siècles, n'est plus guère parlé mais a laissé des milliers de mots dans les langues locales.",
};
