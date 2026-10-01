import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://fr.wikipedia.org/wiki/D%C3%A9mographie_de_l'Alg%C3%A9rie";

export const languages: LanguagesData = {
  entries: [
    { name: "Arabe", kind: "officielle", note: "Langue nationale et officielle depuis l'indépendance ; l'arabe standard est celui de l'administration, de l'école et des médias écrits." },
    { name: "Tamazight (berbère)", kind: "officielle", note: "Reconnue langue nationale en 2002, puis officielle par la révision constitutionnelle de 2016." },
    { name: "Arabe algérien (darija)", kind: "parlée", sharePercent: { value: 78, unit: "% de la population (langue maternelle, estimation)", source: WIKI, sourceUrl: WIKI_URL }, note: "Langue du quotidien, riche d'emprunts au berbère, au français, à l'espagnol et au turc." },
    { name: "Kabyle", kind: "régionale", sharePercent: { value: 13, unit: "% de la population (estimation)", source: WIKI, sourceUrl: WIKI_URL }, note: "Principale langue berbère du pays, parlée en Kabylie et par une partie des Algérois." },
    { name: "Chaoui", kind: "régionale", sharePercent: { value: 6, unit: "% de la population (estimation)", source: WIKI, sourceUrl: WIKI_URL }, note: "Langue berbère des Aurès." },
    { name: "Autres langues berbères (mozabite, tamasheq, chenoui…)", kind: "régionale", note: "Parlées dans le M'Zab, chez les Touaregs du Hoggar et du Tassili, et dans quelques massifs du Tell." },
    { name: "Français", kind: "parlée", note: "Sans statut officiel, mais très présent dans l'économie, l'enseignement supérieur scientifique et la presse ; l'anglais est enseigné dès le primaire depuis 2022." },
  ],
  summary:
    "L'Algérie a deux langues officielles, l'arabe et le tamazight, ce dernier reconnu au terme de longues revendications portées notamment par la Kabylie (« printemps berbère » de 1980, « printemps noir » de 2001). Au quotidien, la majorité parle l'arabe algérien, tandis qu'environ un quart de la population a une langue berbère pour langue maternelle. Le français, hérité de la colonisation, reste largement compris et utilisé sans statut officiel ; les autorités développent depuis 2022 l'enseignement de l'anglais.",
};
