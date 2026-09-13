import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Amazone",
    lengthKm: {
      value: 6_575,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Longueur exacte disputée selon la méthode de mesure retenue pour sa source (2 200 km sont parcourus au Pérou et en Colombie avant l'entrée au Brésil) ; il s'agit dans tous les cas du fleuve au débit le plus important du monde, de très loin.",
    },
    source_location: "Massif du Mismi, région d'Arequipa (Pérou)",
    mouth: "Océan Atlantique, près de l'île de Marajó (Brésil)",
  },
  {
    name: "São Francisco",
    lengthKm: { value: 2_830, unit: "km", source: "Wikipedia (géographie physique)", note: "Entièrement brésilien ; surnommé « Rio da Integração Nacional » pour son rôle historique de liaison entre le Sud-Est et le Nordeste." },
    source_location: "Serra da Canastra, État du Minas Gerais",
    mouth: "Océan Atlantique, à la frontière des États d'Alagoas et de Sergipe",
  },
  {
    name: "Paraná",
    lengthKm: { value: 2_546, unit: "km", source: "Wikipedia (géographie physique)", note: "Deuxième plus long fleuve d'Amérique du Sud après l'Amazone ; forme notamment les chutes d'Iguaçu à la frontière argentino-brésilienne." },
    source_location: "Confluence des rivières Paranaíba et Grande, entre les États de São Paulo et du Minas Gerais",
    mouth: "Rio de la Plata (via l'Argentine et l'Uruguay), océan Atlantique",
  },
  {
    name: "Madeira",
    lengthKm: { value: 1_450, unit: "km", source: "Wikipedia (géographie physique)", note: "Principal affluent de l'Amazone par le débit ; le système combiné Madeira-Mamoré atteint environ 3 250 km." },
    source_location: "Confluence des rivières Madre de Dios et Mamoré, près de Guayaramerín (Bolivie)",
    mouth: "Fleuve Amazone, État d'Amazonas (Brésil)",
  },
  {
    name: "Rio Negro",
    lengthKm: { value: 2_250, unit: "km", source: "Wikipedia (géographie physique)", note: "Ses eaux sombres, riches en tanins, se distinguent nettement de celles, plus claires et limoneuses, de l'Amazone au « Rencontre des eaux » (Encontro das Águas) près de Manaus." },
    source_location: "Département du Guainía (Colombie)",
    mouth: "Fleuve Amazone, près de Manaus (Brésil)",
  },
];
