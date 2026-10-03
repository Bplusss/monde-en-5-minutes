import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation de l'institut Statistics Lebanon, citée par le Département d'État américain",
  year: 2023,
  ageScope: "Citoyens libanais (hors réfugiés)",
  source: "Département d'État des États-Unis, rapport 2023 sur la liberté religieuse",
  sourceUrl: "https://www.state.gov/reports/2023-report-on-international-religious-freedom/lebanon/",
  points: [
    { label: "Musulmans chiites", sharePercent: 32.2 },
    { label: "Musulmans sunnites", sharePercent: 31.2 },
    { label: "Chrétiens (maronites, grecs-orthodoxes, grecs-catholiques, arméniens…)", sharePercent: 30.5 },
    { label: "Druzes", sharePercent: 5.5 },
    { label: "Alaouites et ismaéliens", sharePercent: 0.6 },
  ],
  summary:
    "L'État reconnaît 18 communautés religieuses, qui régissent le statut personnel (mariage, divorce, héritage) ; aucun mariage civil ne peut être célébré au Liban. Les maronites forment environ la moitié des chrétiens, devant les grecs-orthodoxes. Majoritaires au recensement de 1932, les chrétiens sont aujourd'hui estimés autour de 30 %, du fait d'une émigration plus forte et d'une natalité plus faible. Cette répartition fonde le partage confessionnel du pouvoir (voir « Politique »).",
  methodologyNote:
    "Aucun chiffre officiel n'existe depuis le recensement de 1932. Ces parts sont des estimations d'un institut privé ; Pew Research Center et le CIA World Factbook donnent des ordres de grandeur proches. Les réfugiés syriens et palestiniens, majoritairement sunnites, n'y sont pas inclus.",
};
