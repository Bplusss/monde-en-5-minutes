import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Registre national d'appartenance religieuse",
  year: 2024,
  ageScope: "Population totale inscrite au registre",
  source: "Statistics Iceland (Hagstofa Íslands)",
  sourceUrl: "https://www.statice.is/statistics/society/religious-organisations/religious-and-life-stance-organisations/",
  points: [
    { label: "Église d'Islande (luthérienne)", sharePercent: 58.0 },
    { label: "Autres organisations chrétiennes", sharePercent: 12.0 },
    { label: "Sans appartenance déclarée", sharePercent: 18.0 },
    { label: "Ásatrúarfélagið (paganisme nordique)", sharePercent: 1.6 },
    { label: "Catholiques et autres", sharePercent: 10.4 },
  ],
  summary:
    "L'Église évangélique luthérienne d'Islande, longtemps religion d'État, reste l'organisation religieuse majoritaire mais voit sa part reculer d'année en année au profit des personnes sans appartenance déclarée. L'Ásatrúarfélagið, association néopaïenne fondée en 1972 qui célèbre les anciens dieux nordiques, est devenue l'une des organisations religieuses ou de conviction à la croissance la plus rapide du pays.",
  methodologyNote:
    "Contrairement à la plupart des pays, l'Islande tient un registre officiel d'appartenance religieuse ou philosophique auquel chaque résident doit être rattaché (ou explicitement s'en dispenser) : ces chiffres sont administratifs, non issus d'une enquête déclarative.",
};
