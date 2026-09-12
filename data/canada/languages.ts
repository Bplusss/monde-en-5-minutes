import type { LanguagesData } from "@/lib/types";

const STATCAN = "Statistique Canada (recensement de 2021)";
const STATCAN_URL = "https://en.wikipedia.org/wiki/Languages_of_Canada";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Anglais",
      kind: "officielle",
      sharePercent: { value: 56.6, unit: "%", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL, note: "Part de la population ayant l'anglais pour langue maternelle." },
      note: "Coofficielle avec le français au niveau fédéral ; seule langue officielle de fait dans la plupart des provinces hors Québec et Nouveau-Brunswick.",
    },
    {
      name: "Français",
      kind: "officielle",
      sharePercent: { value: 20.2, unit: "%", year: 2021, source: STATCAN, sourceUrl: STATCAN_URL, note: "Part de la population ayant le français pour langue maternelle." },
      note: "Seule langue officielle du Québec depuis la Charte de la langue française (1977) ; coofficielle avec l'anglais au Nouveau-Brunswick, seule province officiellement bilingue, et au niveau fédéral.",
    },
    {
      name: "Langues autochtones (cries, inuktitut, ojibwé...)",
      kind: "régionale",
      note: "Plus de 70 langues autochtones distinctes recensées ; l'inuktitut est coofficiel avec l'anglais et le français au Nunavut, et onze langues (dont le tłı̨chǫ, le gwich'in et plusieurs dialectes dénés) sont officielles dans les Territoires du Nord-Ouest.",
    },
    {
      name: "Langues d'immigration (mandarin, pendjabi, cantonais, espagnol, tagalog, arabe...)",
      kind: "parlée",
      note: "Parlées par une part croissante de la population, en particulier dans les grandes agglomérations (Toronto, Vancouver, Montréal), reflet d'une immigration diversifiée.",
    },
  ],
  summary:
    "L'anglais et le français sont les deux langues officielles du Canada au niveau fédéral, un bilinguisme institutionnel unique parmi les grands pays anglophones, hérité de la double fondation britannique et française du pays. Le français reste toutefois très largement concentré au Québec, où il est la seule langue officielle provinciale, ainsi que dans certaines poches francophones du Nouveau-Brunswick, de l'Ontario et du Manitoba ; au niveau national, l'anglais domine très largement les échanges quotidiens hors Québec.",
};
