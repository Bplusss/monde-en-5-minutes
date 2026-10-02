import type { LanguagesData } from "@/lib/types";

const CENSUS = "Recensement de la population et de l'habitat 2019 (part du groupe ethnique correspondant)";
const CENSUS_URL = "https://en.wikipedia.org/wiki/Ethnic_groups_in_Vietnam";
const UNIT = "% de la population (groupe ethnique)";

export const languages: LanguagesData = {
  entries: [
    { name: "Vietnamien", kind: "officielle", sharePercent: { value: 85.3, unit: "% de la population (Kinh)", year: 2019, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Langue maternelle des Kinh et langue véhiculaire de tout le pays. S'écrit en quốc ngữ, alphabet latin à signes diacritiques notant les six tons." },
    { name: "Tày", kind: "régionale", sharePercent: { value: 1.92, unit: UNIT, year: 2019, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Langue taï parlée dans les montagnes du nord-est, près de la frontière chinoise." },
    { name: "Thaï (Tai Dam, Tai Don)", kind: "régionale", sharePercent: { value: 1.89, unit: UNIT, year: 2019, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Dominant dans le nord-ouest (Sơn La, Điện Biên)." },
    { name: "Mường", kind: "régionale", sharePercent: { value: 1.51, unit: UNIT, year: 2019, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Langue la plus proche du vietnamien." },
    { name: "Hmong", kind: "régionale", sharePercent: { value: 1.45, unit: UNIT, year: 2019, source: CENSUS, sourceUrl: CENSUS_URL } },
    { name: "Khmer", kind: "régionale", sharePercent: { value: 1.32, unit: UNIT, year: 2019, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Parlé par les Khmers Krom du delta du Mékong." },
    { name: "Chinois (cantonais surtout)", kind: "régionale", sharePercent: { value: 0.78, unit: UNIT, year: 2019, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Langue des Hoa, concentrés à Hô Chi Minh-Ville (Chợ Lớn)." },
    { name: "Anglais", kind: "parlée", note: "Première langue étrangère enseignée et langue des affaires ; le français, langue de l'administration coloniale, ne subsiste que chez une minorité âgée ou francophile." },
  ],
  summary:
    "Le vietnamien, langue austroasiatique tonale, est parlé par la quasi-totalité de la population. Longtemps écrit en caractères chinois (chữ Hán) puis en chữ Nôm, il s'écrit depuis le début du XXe siècle en quốc ngữ, alphabet latin mis au point au XVIIe siècle par des missionnaires portugais et par le jésuite français Alexandre de Rhodes. Les 53 minorités ethniques parlent plus d'une centaine de langues, surtout dans les montagnes du nord et les hauts plateaux du centre.",
};
