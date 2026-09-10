import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Albanais",
      kind: "officielle",
      sharePercent: {
        value: 91.1,
        unit: "%",
        year: 2023,
        source: "INSTAT (recensement de la population et de l'habitat 2023)",
        sourceUrl: "https://www.instat.gov.al/en/themes/censuses/census-of-population-and-housing/",
        note: "Part des résidents déclarant l'albanais comme langue parlée au foyer.",
      },
      note: "Seule langue officielle de la République, dans ses deux principaux dialectes (guègue au nord, tosque au sud, base de la langue standard).",
    },
    {
      name: "Grec",
      kind: "régionale",
      note: "Langue de la minorité grecque reconnue, historiquement concentrée dans le sud du pays (région de Gjirokastër, Himara, Dropull), avec un enseignement bilingue dans certaines écoles.",
    },
    {
      name: "Aroumain, macédonien, romani, monténégrin, serbe…",
      kind: "parlée",
      note: "Langues des huit autres minorités nationales ou culturelles officiellement reconnues par l'État albanais.",
    },
  ],
  summary:
    "L'albanais, langue indo-européenne isolée au sein de sa propre branche, est la seule langue officielle. Le pays reconnaît neuf minorités nationales ou culturelles (dont grecque, aroumaine, macédonienne, monténégrine, serbe, rom et égyptienne), dont les langues restent minoritaires face à la très large domination de l'albanais dans la vie quotidienne.",
};
