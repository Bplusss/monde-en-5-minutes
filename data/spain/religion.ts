import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Barómetro du CIS",
  year: 2025,
  ageScope: "Population espagnole majeure, novembre 2025",
  source: "CIS (Centro de Investigaciones Sociológicas)",
  sourceUrl: "https://www.cis.es/",
  points: [
    { label: "Se déclarent croyants (toutes confessions)", sharePercent: 57.6 },
    { label: "Sans religion (athées, agnostiques, indifférents)", sharePercent: 42.4 },
  ],
  summary:
    "Selon le baromètre du CIS de novembre 2025, 57,6 % des Espagnols majeurs se disent croyants — essentiellement catholiques — contre 42,4 % qui ne s'identifient à aucune religion. En 1979, cette proportion de croyants dépassait 90 %, illustrant une sécularisation continue.",
  methodologyNote:
    "Ces données reposent sur l'auto-déclaration d'appartenance ou de croyance et ne distinguent pas précisément les confessions autres que catholique. Elles ne mesurent pas la pratique religieuse : moins de 20 % des Espagnols se déclarent catholiques pratiquants.",
};
