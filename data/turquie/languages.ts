import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    { name: "Turc", kind: "officielle", note: "Seule langue officielle et d'enseignement ; écrit en alphabet latin depuis la réforme de 1928." },
    { name: "Kurde (kurmandji)", kind: "régionale", note: "Première langue minoritaire, surtout dans le Sud-Est ; longtemps restreinte, autorisée dans les médias et en option à l'école depuis les années 2000." },
    { name: "Zazaki", kind: "régionale", note: "Langue iranienne parlée autour de Tunceli, Bingöl et Diyarbakır." },
    { name: "Arabe", kind: "régionale", note: "Parlé dans les provinces frontalières de la Syrie, notamment Hatay et Mardin, et par les réfugiés syriens." },
    { name: "Laze, tcherkesse et autres langues minoritaires", kind: "régionale", note: "Le laze est parlé sur le littoral de la mer Noire près de la Géorgie ; le tcherkesse par les descendants de réfugiés du Caucase." },
    { name: "Arménien, grec et judéo-espagnol", kind: "parlée", note: "Langues des minorités non musulmanes reconnues par le traité de Lausanne (1923), aujourd'hui surtout présentes à Istanbul." },
  ],
  summary:
    "Le turc est la langue de l'État et de la grande majorité de la population. Le kurde, parlé par plusieurs millions de personnes, a longtemps été interdit dans l'espace public ; son usage a été en partie libéralisé depuis les années 2000.",
};
