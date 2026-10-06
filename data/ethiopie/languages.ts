import type { LanguagesData } from "@/lib/types";

const CENSUS = "Central Statistical Agency (recensement 2007)";
const CENSUS_URL = "https://en.wikipedia.org/wiki/Languages_of_Ethiopia";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Amharique",
      kind: "officielle",
      sharePercent: { value: 29.3, unit: "% de la population (langue maternelle)", year: 2007, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Langue de travail du gouvernement fédéral, écrite avec l'alphasyllabaire guèze (fidel), langue véhiculaire dans les villes.",
    },
    {
      name: "Oromo (afaan oromoo)",
      kind: "régionale",
      sharePercent: { value: 33.8, unit: "% de la population (langue maternelle)", year: 2007, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Langue maternelle la plus parlée du pays, officielle en Oromia et écrite en alphabet latin ; le gouvernement a annoncé en 2020 son ajout aux langues de travail fédérales, avec le tigrinya, le somali et l'afar.",
    },
    {
      name: "Somali, tigrinya, sidama, afar…",
      kind: "régionale",
      note: "Langues officielles de leurs régions respectives ; le pays compte au total plus de 80 langues, couchitiques, sémitiques, omotiques et nilo-sahariennes.",
    },
    {
      name: "Anglais",
      kind: "parlée",
      note: "Langue d'enseignement dans le secondaire et à l'université, et langue des affaires internationales.",
    },
  ],
  summary:
    "L'Éthiopie est l'un des pays les plus multilingues d'Afrique. Depuis la Constitution de 1995, chaque région choisit sa langue officielle, tandis que l'amharique, longtemps imposé comme langue nationale, reste la langue de travail de l'État fédéral et la langue commune des villes. L'oromo, langue maternelle d'un Éthiopien sur trois, a gagné en reconnaissance. Le guèze, langue liturgique de l'Église orthodoxe, a donné son écriture à l'amharique et au tigrinya.",
};
