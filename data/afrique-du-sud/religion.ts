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
    "Le christianisme domine très largement, sous une grande diversité de dénominations : Églises indépendantes africaines syncrétiques (dont l'Église sioniste chrétienne), catholicisme, anglicanisme (jadis dirigé au Cap par Desmond Tutu), Églises réformées néerlandaises liées à la communauté afrikaner, et un protestantisme évangélique en forte expansion. Les religions traditionnelles africaines restent vivaces, souvent pratiquées en parallèle du christianisme, via le rôle des guérisseurs (sangomas) et le culte des ancêtres. L'islam est concentré au Cap (communauté « Cape Malays », descendante d'esclaves amenés d'Asie du Sud-Est) et l'hindouisme au KwaZulu-Natal, chez les descendants de travailleurs indiens sous contrat.",
  methodologyNote:
    "Les chiffres proviennent du recensement national de 2022, qui interroge directement l'affiliation religieuse déclarée. Ce recensement a toutefois été affecté par un sous-dénombrement significatif (environ 31 % selon Stats SA), corrigé statistiquement mais invitant à une lecture prudente des pourcentages les plus fins.",
};
