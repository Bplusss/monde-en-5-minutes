import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et de l'habitat",
  year: 2007,
  ageScope: "Population totale",
  source: "Central Statistical Agency (CSA), recensement 2007",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Ethiopia",
  points: [
    { label: "Chrétiens orthodoxes (Église tewahedo)", sharePercent: 43.5 },
    { label: "Musulmans", sharePercent: 33.9 },
    { label: "Protestants (pentay)", sharePercent: 18.5 },
    { label: "Religions traditionnelles", sharePercent: 2.6 },
    { label: "Catholiques et autres", sharePercent: 1.5 },
  ],
  summary:
    "Christianisée dès le IVe siècle, l'Éthiopie possède l'une des plus anciennes Églises du monde, l'Église orthodoxe tewahedo, avec son calendrier, ses jeûnes et ses grandes fêtes comme Timkat (l'Épiphanie) et Meskel. L'islam y est présent depuis l'époque du Prophète, lorsque ses premiers compagnons trouvèrent refuge auprès du roi d'Aksoum, et domine dans l'est et le sud-est. Les Églises protestantes, dites pentay, ont fortement progressé depuis les années 1970, surtout dans le sud et l'ouest ; le Premier ministre Abiy Ahmed en est lui-même membre.",
  methodologyNote:
    "Dernier recensement disponible ; les enquêtes plus récentes suggèrent une poursuite de la progression des protestants.",
};
