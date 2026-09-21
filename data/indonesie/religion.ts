import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement national (BPS)",
  year: 2010,
  ageScope: "Population totale",
  source: "Badan Pusat Statistik (BPS), recensement 2010",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Indonesia",
  points: [
    { label: "Islam", sharePercent: 87.2 },
    { label: "Protestantisme", sharePercent: 6.96 },
    { label: "Catholicisme", sharePercent: 2.91 },
    { label: "Hindouisme", sharePercent: 1.69 },
    { label: "Bouddhisme", sharePercent: 0.72 },
    { label: "Confucianisme et autres/non déclarés", sharePercent: 0.52 },
  ],
  summary:
    "L'Indonésie est le pays comptant le plus grand nombre de musulmans au monde en valeur absolue (largement devant l'Arabie saoudite ou le Pakistan), l'islam sunnite y étant pratiqué par une écrasante majorité de la population, avec des courants traditionnels souvent syncrétiques (notamment à Java, où subsistent des influences hindoues, bouddhistes et animistes antérieures à l'islamisation) coexistant avec des mouvements plus rigoristes en expansion depuis les années 2000. L'État reconnaît officiellement six religions (islam, protestantisme, catholicisme, hindouisme, bouddhisme, confucianisme) au nom du principe fondateur du Pancasila, qui impose la croyance en un Dieu unique sans imposer de religion d'État. Bali constitue une exception marquante, restée très majoritairement hindoue (plus de 80 % de sa population) avec une identité religieuse et culturelle distincte (temples, cérémonies, calendrier propre) qui a largement façonné son image touristique internationale ; les Moluques, certaines régions du nord de Sulawesi et de Sumatra-Nord comptent aussi d'importantes minorités chrétiennes, tandis que la Papouasie est majoritairement chrétienne (protestante et catholique).",
  methodologyNote:
    "Ces chiffres proviennent du recensement national de 2010, la dernière collecte de données incluant l'affiliation religieuse à cette échelle : le recensement suivant, en 2020, n'a pas reposé de question sur la religion (contraintes liées à la pandémie de Covid-19 et à la simplification du questionnaire), si bien que ces données de 2010, bien que datées, restent la référence officielle la plus citée sur la répartition religieuse du pays.",
};
