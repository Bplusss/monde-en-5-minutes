import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia (Languages of Iran)";
const WIKI_URL = "https://en.wikipedia.org/wiki/Languages_of_Iran";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Persan (farsi)",
      kind: "officielle",
      sharePercent: { value: 53, unit: "%", year: 2021, source: WIKI, sourceUrl: WIKI_URL, note: "Langue maternelle d'environ la moitié de la population ; langue unique de l'enseignement, de l'administration et des médias nationaux." },
    },
    {
      name: "Azéri (turc azerbaïdjanais)",
      kind: "parlée",
      sharePercent: { value: 16, unit: "%", year: 2021, source: WIKI, sourceUrl: WIKI_URL },
      note: "Principale langue turcique du pays, parlée surtout dans l'Azerbaïdjan iranien (nord-ouest).",
    },
    {
      name: "Kurde",
      kind: "parlée",
      sharePercent: { value: 10, unit: "%", year: 2021, source: WIKI, sourceUrl: WIKI_URL },
      note: "Parlé dans les provinces du Kurdistan, de Kermanshah et d'Ilam, à la frontière irakienne.",
    },
    {
      name: "Gilaki et mazandarani",
      kind: "régionale",
      note: "Langues iraniennes proches du persan, parlées sur l'étroite bande côtière caspienne (provinces du Gilan et du Mazandaran).",
    },
    {
      name: "Louri",
      kind: "régionale",
      note: "Parlé dans le Zagros central (Lorestan, Kohgiluyeh-et-Boyer-Ahmad), par des populations historiquement semi-nomades.",
    },
    {
      name: "Arabe",
      kind: "régionale",
      note: "Parlé dans le Khouzestan ; l'arabe est aussi la langue de l'enseignement religieux et de la liturgie chiite dans tout le pays.",
    },
    {
      name: "Baloutchi",
      kind: "régionale",
      note: "Parlé dans le Sistan-et-Baloutchistan, à l'extrême sud-est du pays, à la frontière pakistanaise et afghane.",
    },
  ],
  summary:
    "Le persan (farsi), écrit en alphabet arabe modifié, est la seule langue officielle, mais l'Iran est un pays multiethnique où environ la moitié de la population parle une autre langue maternelle. Les minorités turciques et iraniennes ne bénéficient d'aucun statut coofficiel régional : la Constitution autorise leur enseignement en matière optionnelle mais impose le persan comme unique langue de scolarisation.",
};
