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
    "Le christianisme domine très largement le paysage religieux sud-africain, sous une grande diversité de dénominations : Églises indépendantes africaines syncrétiques (dont l'Église sioniste chrétienne, l'une des plus importantes du pays, qui mêle christianisme et pratiques traditionnelles africaines), catholicisme, anglicanisme (l'archevêché du Cap a notamment été dirigé par le prix Nobel de la paix Desmond Tutu), Églises réformées néerlandaises historiquement liées à la communauté afrikaner, et un protestantisme évangélique et pentecôtiste en forte expansion. Les religions traditionnelles africaines, souvent pratiquées en parallèle du christianisme plutôt que de façon exclusive, restent vivaces, notamment à travers le rôle des guérisseurs traditionnels (sangomas) et le culte des ancêtres. L'islam est particulièrement présent au Cap, où la communauté musulmane malaise du Cap (« Cape Malays »), descendante d'esclaves et de déportés politiques amenés par les Néerlandais depuis l'Asie du Sud-Est aux XVIIe et XVIIIe siècles, a façonné une identité culturelle et culinaire distincte ; l'hindouisme est concentré dans la communauté d'origine indienne du KwaZulu-Natal, héritière des travailleurs sous contrat amenés par les Britanniques à partir de 1860.",
  methodologyNote:
    "Les chiffres proviennent du recensement national de 2022, qui pose directement une question sur l'affiliation religieuse déclarée — à la différence de nombreux pays où seule une enquête tierce (Pew Research Center notamment) fournit ce type de données. Le recensement de 2022 a néanmoins été affecté par un taux de sous-dénombrement significatif (environ 31 % selon les propres estimations post-énumération de Stats SA), corrigé statistiquement mais qui invite à une lecture prudente des pourcentages les plus fins.",
};
