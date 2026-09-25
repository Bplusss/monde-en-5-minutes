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
    "L'Indonésie compte le plus grand nombre de musulmans au monde en valeur absolue, l'islam sunnite y étant pratiqué par une écrasante majorité, avec des courants traditionnels syncrétiques (notamment à Java) coexistant avec des mouvements plus rigoristes. L'État reconnaît officiellement six religions au nom du Pancasila, qui impose la croyance en un Dieu unique sans religion d'État. Bali reste très majoritairement hindoue, tandis que les Moluques, le nord de Sulawesi et la Papouasie comptent d'importantes minorités chrétiennes.",
  methodologyNote:
    "Dernier recensement à inclure l'affiliation religieuse : celui de 2020 n'a pas repris cette question, si bien que ces données de 2010 restent la référence officielle la plus citée.",
};
