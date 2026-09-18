import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement général de la population et du logement (Statistics Korea)",
  year: 2015,
  ageScope: "Population totale",
  source: "Statistics Korea (KOSIS)",
  sourceUrl: "https://kosis.kr/eng/",
  points: [
    { label: "Sans religion", sharePercent: 56.1 },
    { label: "Protestantisme", sharePercent: 19.7 },
    { label: "Bouddhisme", sharePercent: 15.5 },
    { label: "Catholicisme", sharePercent: 7.9 },
    { label: "Autres (dont wonbulgyo, confucianisme, chondogyo)", sharePercent: 0.8 },
  ],
  summary:
    "Dernier recensement à avoir posé la question de l'appartenance religieuse (facultative), celui de 2015 confirmait une tendance de fond à la sécularisation entamée dès les années 2000 : la part des personnes sans religion, déjà majoritaire, a continué de croître, tandis que le christianisme (protestant et catholique combinés, environ 27,6 % de la population) a dépassé le bouddhisme comme première tradition religieuse organisée du pays — une singularité régionale, la Corée du Sud comptant parmi les tout premiers foyers du christianisme en Asie de l'Est avec les Philippines. Les Églises protestantes évangéliques, particulièrement dynamiques et parfois très influentes politiquement et socialement, coexistent avec un bouddhisme historiquement enraciné (temples de montagne classés à l'UNESCO) et des courants syncrétiques propres à la Corée, comme le chondogyo (« religion de la Voie céleste », né au XIXe siècle) ou le wonbulgyo (bouddhisme won).",
  methodologyNote:
    "Statistics Korea n'a plus posé de question sur la religion lors du recensement suivant (2020, puis 2025), remplacé par un dispositif d'enquête par sondage sur un échantillon réduit de la population ; les chiffres de 2015 restent donc la référence exhaustive la plus récente, même si la part des personnes sans religion a vraisemblablement continué à progresser depuis selon plusieurs enquêtes d'opinion partielles menées par des instituts privés.",
};
