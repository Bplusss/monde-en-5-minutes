import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population et du logement (CPH)",
  year: 2020,
  ageScope: "Population des ménages",
  source: "Philippine Statistics Authority (PSA), recensement 2020",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_the_Philippines",
  points: [
    { label: "Catholicisme", sharePercent: 78.8 },
    { label: "Islam", sharePercent: 6.4 },
    { label: "Évangéliques", sharePercent: 4.8 },
    { label: "Iglesia ni Cristo", sharePercent: 2.6 },
    { label: "Église philippine indépendante (aglipayenne)", sharePercent: 1.4 },
    { label: "Adventistes du septième jour", sharePercent: 0.8 },
    { label: "Autres et non déclarés", sharePercent: 5.2 },
  ],
  summary:
    "Les Philippines sont l'un des deux pays majoritairement chrétiens d'Asie, avec le Timor oriental, et le troisième pays catholique du monde par le nombre de fidèles, après le Brésil et le Mexique. L'Église catholique pèse dans la vie publique : le divorce n'y est toujours pas légal, sauf pour les musulmans. L'islam, implanté avant l'arrivée des Espagnols, est majoritaire dans l'ouest de Mindanao et l'archipel de Sulu. L'Iglesia ni Cristo, Église fondée aux Philippines en 1914, est connue pour les consignes de vote qu'elle donne à ses membres.",
  methodologyNote:
    "La catégorie « Autres et non déclarés » regroupe les autres confessions chrétiennes, les religions traditionnelles, les sans-religion et les non-réponses (calculée par différence).",
};
