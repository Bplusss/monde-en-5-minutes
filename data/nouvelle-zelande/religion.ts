import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et des logements",
  year: 2023,
  ageScope: "Population totale",
  source: "Stats NZ (recensement 2023)",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_New_Zealand",
  points: [
    { label: "Sans religion", sharePercent: 51.6 },
    { label: "Chrétiens", sharePercent: 32.3 },
    { label: "Hindous", sharePercent: 2.9 },
    { label: "Musulmans", sharePercent: 1.5 },
    { label: "Religions māories (Rātana, Ringatū…)", sharePercent: 1.3 },
    { label: "Bouddhistes", sharePercent: 1.1 },
    { label: "Sikhs", sharePercent: 1.1 },
    { label: "Autres religions", sharePercent: 1.3 },
    { label: "Non déclarée", sharePercent: 6.9 },
  ],
  summary:
    "La Nouvelle-Zélande est l'un des pays les plus sécularisés du monde : depuis le recensement de 2023, plus de la moitié des habitants se déclarent sans religion, contre 30 % en 2001. Le christianisme, apporté par les missionnaires anglicans, catholiques et méthodistes au XIXe siècle, reste la première religion, tandis que l'immigration a fait progresser l'hindouisme, l'islam et le sikhisme. Des Églises māories, comme le mouvement Rātana, mêlent christianisme et identité māorie.",
  methodologyNote:
    "Les personnes pouvaient déclarer plusieurs religions ; les parts sont calculées sur l'ensemble de la population, réponses non déclarées comprises.",
};
