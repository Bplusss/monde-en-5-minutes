import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Espagnol",
      kind: "officielle",
      note: "Aucune loi ne le désigne formellement comme langue officielle nationale, mais il est de facto la langue de l'administration, de la justice et de l'enseignement dans tout le pays ; la variante locale, l'espagnol rioplatense, se distingue par son usage du « voseo » (vos à la place de tú) et par l'influence de l'italien sur son intonation.",
    },
    {
      name: "Guarani",
      kind: "régionale",
      note: "Coofficiel avec l'espagnol dans la province de Corrientes depuis 2004, où son enseignement est obligatoire ; également parlé dans la province voisine de Misiones, frontalière du Paraguay.",
    },
    {
      name: "Italien",
      kind: "parlée",
      note: "Langue héritée de l'immigration massive en provenance d'Italie (fin du XIXe - milieu du XXe siècle), encore parlée ou comprise par plus d'1,5 million de personnes et à l'origine de l'accent chantant caractéristique de l'espagnol de Buenos Aires.",
    },
    {
      name: "Quechua, mapudungun, qom (toba) et autres langues indigènes",
      kind: "parlée",
      note: "Parlées par les communautés autochtones du Nord-Ouest andin (quechua), de Patagonie (mapudungun) et du Chaco (qom, wichí), chacune comptant de quelques milliers à quelques dizaines de milliers de locuteurs.",
    },
  ],
  summary:
    "L'espagnol, dans sa variante rioplatense marquée par l'influence de l'immigration italienne, est la langue de facto de l'ensemble du pays, bien qu'aucun texte ne lui confère explicitement ce statut au niveau national. Le guarani est coofficiel dans la province de Corrientes, près de la frontière paraguayenne, et plusieurs langues indigènes (quechua, mapudungun, qom) subsistent en tant que langues minoritaires, aux côtés de langues d'immigration comme l'italien, l'allemand ou le gallois, ce dernier toujours parlé par une petite communauté de la province patagonique de Chubut.",
};
