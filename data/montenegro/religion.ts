import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population, des ménages et des logements 2023",
  year: 2023,
  ageScope: "Population totale ayant déclaré une appartenance religieuse",
  source: "Zavod za statistiku Crne Gore (MONSTAT)",
  sourceUrl: "https://www.monstat.org/eng/novosti.php?id=4012",
  points: [
    { label: "Orthodoxes", sharePercent: 71.1 },
    { label: "Musulmans", sharePercent: 20.0 },
    { label: "Catholiques", sharePercent: 3.27 },
    { label: "Sans religion ou athées", sharePercent: 2.29 },
    { label: "Autres religions ou non déclaré", sharePercent: 3.34 },
  ],
  summary:
    "Le christianisme orthodoxe, très majoritaire, est représenté avant tout par l'Église orthodoxe serbe, historiquement dominante et propriétaire de l'essentiel des lieux de culte, face à une Église orthodoxe monténégrine autoproclamée en 1993, non reconnue par les autres Églises orthodoxes et minoritaire, dont le statut reste un sujet de tension. La minorité musulmane, proche d'un cinquième de la population, rassemble notamment les communautés bosniaque et albanaise, en particulier dans le nord-est et le sud du pays. Les catholiques, présents de longue date dans la région de la baie de Kotor sous influence vénitienne, forment une petite minorité.",
  methodologyNote:
    "Chiffres issus des déclarations volontaires du recensement décennal de 2023, seule source de données religieuses officielles au Monténégro.",
};
