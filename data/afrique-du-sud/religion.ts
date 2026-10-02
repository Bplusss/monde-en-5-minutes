import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement national (Stats SA)",
  year: 2022,
  ageScope: "Population totale",
  source: "Statistics South Africa (Stats SA), recensement 2022",
  sourceUrl: "https://census.statssa.gov.za/",
  points: [
    { label: "Christianisme (toutes dénominations)", sharePercent: 85.3 },
    { label: "Religions traditionnelles africaines", sharePercent: 7.8 },
    { label: "Sans religion / athées / agnostiques", sharePercent: 3.1 },
    { label: "Islam", sharePercent: 1.6 },
    { label: "Hindouisme", sharePercent: 1.1 },
    { label: "Autres (dont judaïsme, bahaïsme)", sharePercent: 1.1 },
  ],
  summary:
    "Le christianisme domine très largement, sous des dénominations variées : Églises indépendantes africaines syncrétiques (dont l'Église sioniste chrétienne), catholicisme, anglicanisme (jadis dirigé au Cap par Desmond Tutu), Églises réformées néerlandaises liées aux Afrikaners et évangélisme en forte expansion. Les religions traditionnelles, avec les guérisseurs (sangomas) et le culte des ancêtres, sont souvent pratiquées en parallèle. L'islam est concentré au Cap (« Cape Malays », descendants d'esclaves venus d'Asie du Sud-Est) et l'hindouisme au KwaZulu-Natal, chez les descendants de travailleurs indiens sous contrat.",
  methodologyNote:
    "Affiliation déclarée au recensement de 2022, affecté par un sous-dénombrement d'environ 31 % selon Stats SA, corrigé statistiquement : les pourcentages les plus fins appellent une lecture prudente.",
};
