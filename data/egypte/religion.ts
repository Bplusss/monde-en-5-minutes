import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimations agrégées (CIA World Factbook / Pew Research Center)",
  year: 2015,
  ageScope: "Population totale",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/egypt/",
  points: [
    { label: "Islam sunnite", sharePercent: 90.0 },
    { label: "Christianisme (majoritairement copte orthodoxe)", sharePercent: 10.0 },
  ],
  summary:
    "L'islam sunnite est la religion très largement majoritaire en Égypte, religion d'État selon la Constitution. La minorité chrétienne — la plus importante du Proche-Orient en nombre absolu — est en écrasante majorité rattachée à l'Église copte orthodoxe, fondée selon la tradition par l'évangéliste Marc au Ier siècle. L'université Al-Azhar, fondée au Caire au Xe siècle, fait autorité dans l'islam sunnite mondial. Les relations interreligieuses restent marquées par des tensions et discriminations récurrentes envers les coptes, même si la coexistence quotidienne reste la norme.",
  methodologyNote:
    "L'Égypte ne publie aucune statistique officielle récente sur la répartition religieuse : le recensement ne pose plus de question sur la religion depuis plusieurs décennies. Les estimations varient donc fortement, la part chrétienne allant d'environ 5 % (Pew Research Center) à 10-15 % selon d'autres sources ; la fourchette 90 %/10 % reprise ici est celle la plus couramment citée par les sources encyclopédiques généralistes, à traiter comme une approximation.",
};
