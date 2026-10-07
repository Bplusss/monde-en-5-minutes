import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et de l'habitat",
  year: 2020,
  ageScope: "Population totale (citoyens et non-citoyens)",
  source: "Department of Statistics Malaysia (recensement 2020)",
  sourceUrl: "https://www.dosm.gov.my/portal-main/release-content/key-findings-population-and-housing-census-of-malaysia-2020",
  points: [
    { label: "Islam", sharePercent: 63.5 },
    { label: "Bouddhisme", sharePercent: 18.7 },
    { label: "Christianisme", sharePercent: 9.1 },
    { label: "Hindouisme", sharePercent: 6.1 },
    { label: "Sans religion", sharePercent: 1.8 },
    { label: "Autres religions et religions traditionnelles chinoises", sharePercent: 0.9 },
  ],
  summary:
    "L'islam est la religion de la Fédération, et la Constitution définit un Malais comme une personne de religion musulmane : religion et ethnicité sont donc étroitement liées. Les autres cultes sont libres, mais les musulmans relèvent de tribunaux islamiques pour la famille et ne peuvent pas facilement changer de religion. La plupart des Malaisiens d'origine chinoise sont bouddhistes ou pratiquent des cultes chinois traditionnels, ceux d'origine indienne surtout hindous ; les chrétiens sont nombreux parmi les peuples autochtones du Sabah et du Sarawak.",
  methodologyNote:
    "Arrondis du recensement ; leur somme peut différer légèrement de 100 %.",
};
