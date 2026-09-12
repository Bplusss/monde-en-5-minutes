import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Danube",
    lengthKm: { value: 588, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire serbe ; longueur totale du fleuve : 2 850 km. Il y traverse Belgrade et creuse au défilé de Đerdap la plus longue gorge fluviale d'Europe." },
    source_location: "Forêt-Noire (Allemagne)",
    mouth: "Mer Noire, via le delta du Danube (Roumanie/Ukraine)",
  },
  {
    name: "Sava",
    lengthKm: { value: 206, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire serbe ; longueur totale : 945 km. Marque une partie de la frontière avec la Bosnie-Herzégovine avant de traverser Belgrade." },
    source_location: "Alpes juliennes (Slovénie)",
    mouth: "Confluence avec le Danube, à Belgrade",
  },
  {
    name: "Tisza",
    lengthKm: { value: 168, unit: "km", source: "Wikipedia (géographie physique)", note: "Longueur du cours en territoire serbe (Voïvodine) ; longueur totale : 966 km, principal affluent du Danube." },
    source_location: "Monts Gorgany (Carpates ukrainiennes)",
    mouth: "Confluence avec le Danube, à Titel",
  },
  {
    name: "Grande Morava (Velika Morava)",
    lengthKm: { value: 185, unit: "km", source: "Britannica", sourceUrl: "https://www.britannica.com/place/Serbia/Drainage", note: "Formée par la confluence de la Morava occidentale et de la Morava du Sud ; le système complet de la Morava, entièrement serbe, dépasse 500 km et draine environ deux cinquièmes du territoire national." },
    source_location: "Confluence de la Morava occidentale et de la Morava du Sud, près de Stalać",
    mouth: "Confluence avec le Danube, près de Smederevo",
  },
  {
    name: "Drina",
    lengthKm: { value: 346, unit: "km", source: "Wikipedia (géographie physique)", note: "Marque une grande partie de la frontière occidentale avec la Bosnie-Herzégovine." },
    source_location: "Monténégro, à la confluence de la Tara et de la Piva",
    mouth: "Confluence avec la Save, près de Bosanska Rača (Bosnie-Herzégovine)",
  },
];
