import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Global Religious Landscape (estimations)",
  year: 2020,
  ageScope: "Population totale",
  source: "Pew Research Center",
  sourceUrl: "https://www.pewresearch.org/religion/feature/religious-composition-by-country-2010-2020/",
  points: [
    { label: "Christianisme", sharePercent: 84.7 },
    { label: "Sans religion", sharePercent: 7.3 },
    { label: "Religions traditionnelles", sharePercent: 4.7 },
    { label: "Islam", sharePercent: 3.1 },
    { label: "Autres religions", sharePercent: 0.3 },
  ],
  summary:
    "Le christianisme est arrivé avec les missionnaires protestants britanniques au début du XIXe siècle, puis s'est imposé quand la reine Ranavalona II s'est convertie en 1869. Les protestants, notamment l'Église de Jésus-Christ à Madagascar (FJKM), sont un peu plus nombreux que les catholiques, et les Églises jouent un rôle politique important. La foi chrétienne coexiste avec le culte des ancêtres, qui reste très vivant : on consulte les devins (ombiasy), on respecte les interdits (fady) et l'on honore les défunts. L'islam est présent sur la côte nord-ouest et parmi les communautés d'origine indo-pakistanaise et comorienne.",
  methodologyNote:
    "Le recensement ne publie pas de répartition religieuse détaillée. Les estimations varient beaucoup selon la manière de compter les personnes qui pratiquent à la fois le christianisme et le culte des ancêtres : certaines sources attribuent près de 40 % de la population aux religions traditionnelles.",
};
