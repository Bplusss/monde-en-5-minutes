import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et des logements",
  year: 2014,
  ageScope: "Population totale ayant déclaré une appartenance",
  source: "Bureau national de statistique de Moldavie (BNS)",
  sourceUrl: "https://statistica.gov.md/",
  points: [
    { label: "Orthodoxes", sharePercent: 90.1 },
    { label: "Autres chrétiens (baptistes, pentecôtistes, témoins de Jéhovah...)", sharePercent: 3.5 },
    { label: "Sans religion ou non déclaré", sharePercent: 6.4 },
  ],
  summary:
    "Le christianisme orthodoxe domine très largement le paysage religieux. Il est cependant divisé entre deux juridictions rivales : la Métropole de Chișinău et de toute la Moldavie, rattachée au patriarcat de Moscou et historiquement majoritaire, et la Métropole de Bessarabie, rattachée au patriarcat de Roumanie et en expansion depuis les années 1990 — une rivalité qui reflète les tensions géopolitiques plus larges du pays entre orientations russe et roumaine/européenne.",
  methodologyNote:
    "Dernier recensement disponible portant sur la religion, réalisé en 2014 (hors Transnistrie, non couverte par le recensement moldave).",
};
