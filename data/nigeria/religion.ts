import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation Pew Research Center (Global Religious Landscape)",
  year: 2020,
  ageScope: "Population totale, estimation",
  source: "Pew Research Center",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Nigeria",
  points: [
    { label: "Musulmans", sharePercent: 56.1 },
    { label: "Chrétiens", sharePercent: 43.4 },
    { label: "Autres / religions traditionnelles", sharePercent: 0.5 },
  ],
  summary:
    "Le Nigeria est à peu près à parts égales musulman et chrétien, une répartition qui recoupe fortement la géographie du pays : l'islam, majoritairement sunnite avec d'importantes confréries soufies (Tijaniyya, Qadiriyya), domine très largement le nord et le Sahel nigérian, tandis que le christianisme (catholique et surtout protestant, notamment évangélique et pentecôtiste, en forte expansion) domine le sud. La « ceinture médiane » (Middle Belt), au centre du pays, est la zone de contact la plus mêlée, où coexistent musulmans, chrétiens et pratiquants de religions traditionnelles locales (souvent combinées avec l'une des deux grandes religions plutôt que pratiquées seules). Le Nigeria est ainsi à la fois l'un des pays comptant le plus de musulmans et l'un de ceux comptant le plus de chrétiens au monde.",
  methodologyNote:
    "Le recensement de 1963 est le dernier à avoir posé une question sur la religion (il indiquait alors environ 47 % de musulmans et 34 % de chrétiens) : la question a depuis été retirée des recensements nigérians (y compris ceux de 1991 et 2006), tout comme celle sur l'appartenance ethnique, ces deux sujets étant jugés trop politiquement sensibles dans un pays où l'équilibre démographique nord-sud pèse directement sur la répartition du pouvoir fédéral. Toute estimation actuelle de la répartition religieuse — y compris celle-ci — provient donc nécessairement d'enquêtes par sondage menées par des organismes tiers (Pew Research Center, Afrobarometer, enquêtes démographiques et de santé DHS) plutôt que d'un comptage officiel, et ces enquêtes aboutissent à des résultats sensiblement différents selon leur méthodologie (les estimations récentes vont d'environ 51 à 58 % de musulmans).",
};
