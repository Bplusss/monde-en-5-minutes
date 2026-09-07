import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement 2021 (Angleterre et Pays de Galles)",
  year: 2021,
  ageScope: "Ensemble de la population résidente",
  source: "Office for National Statistics (ONS)",
  sourceUrl: "https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/religion/bulletins/religionenglandandwales/census2021",
  points: [
    { label: "Chrétiens", sharePercent: 46.2 },
    { label: "Sans religion", sharePercent: 37.2 },
    { label: "Musulmans", sharePercent: 6.5 },
    { label: "Hindous", sharePercent: 1.7 },
    { label: "Autres religions", sharePercent: 0.7 },
    { label: "Non précisé", sharePercent: 6.0 },
  ],
  summary:
    "D'après le recensement de 2021, 46,2 % de la population d'Angleterre et du Pays de Galles se déclare chrétienne et 37,2 % sans religion — une proportion de personnes sans religion en forte hausse par rapport aux recensements précédents.",
  methodologyNote:
    "Ces chiffres portent uniquement sur l'Angleterre et le Pays de Galles : l'Écosse et l'Irlande du Nord organisent leurs propres recensements, aux résultats distincts, non repris ici. La question religieuse était facultative (94 % de réponses).",
};
