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
    "L'islam sunnite est la religion très largement majoritaire en Égypte, religion d'État selon la Constitution, tandis que la minorité chrétienne — la plus importante du Proche-Orient en nombre absolu — est en écrasante majorité rattachée à l'Église copte orthodoxe, l'une des plus anciennes Églises chrétiennes au monde, fondée selon la tradition par l'évangéliste Marc au Ier siècle, aux côtés de minorités catholiques et protestantes coptes bien plus réduites. L'université Al-Azhar, fondée au Caire au Xe siècle, est l'une des plus anciennes institutions d'enseignement religieux islamique encore en activité et fait autorité, bien au-delà de l'Égypte, dans l'islam sunnite mondial. Les relations interreligieuses restent marquées par des tensions et des discriminations récurrentes envers les coptes (obstacles administratifs à la construction d'églises, sous-représentation dans certaines fonctions publiques et sécuritaires, violences ponctuelles), documentées par plusieurs organisations de défense des droits humains, même si la coexistence quotidienne reste la norme dans la majeure partie du pays.",
  methodologyNote:
    "Contrairement à de nombreux pays, l'Égypte ne publie aucune statistique officielle et récente sur la répartition religieuse de sa population : le recensement national ne pose plus de question sur la religion depuis plusieurs décennies (la carte d'identité nationale mentionne la religion, mais uniquement parmi trois catégories — islam, christianisme, judaïsme — sans détail confessionnel ni collecte statistique centralisée rendue publique). Les estimations varient donc fortement selon les sources : la fourchette généralement retenue pour la part chrétienne va d'environ 5 % (estimation basse de Pew Research Center, jugée par certains chercheurs sous-estimée) à 10-15 %, voire davantage selon certaines associations coptes ; la fourchette 90 %/10 % reprise ici correspond à l'ordre de grandeur le plus couramment cité par les sources encyclopédiques généralistes, à traiter comme une approximation plutôt qu'une mesure précise.",
};
