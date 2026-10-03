import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation du CIA World Factbook",
  year: 2023,
  ageScope: "Population totale",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/turkey/",
  points: [
    { label: "Islam (majoritairement sunnite, avec une importante minorité alévie)", sharePercent: 99.8 },
    { label: "Autres (chrétiens, juifs)", sharePercent: 0.2 },
  ],
  summary:
    "La Turquie est un État laïque depuis 1937, mais l'islam sunnite hanéfite y est encadré par une administration publique, la Diyanet, qui rémunère les imams et rédige les prêches. Les alévis, estimés à 10 à 20 % de la population, ne sont pas reconnus comme une communauté distincte. Les chrétiens (arméniens, grecs orthodoxes, syriaques) et les juifs, nombreux avant 1915-1923, ne représentent plus qu'une petite minorité.",
  methodologyNote:
    "Le recensement ne pose pas de question sur la religion : le chiffre de 99,8 % reflète l'enregistrement administratif par défaut des citoyens comme musulmans, non la pratique ou la croyance. Des enquêtes d'opinion (KONDA) indiquent une hausse de la part des personnes se déclarant non croyantes.",
};
