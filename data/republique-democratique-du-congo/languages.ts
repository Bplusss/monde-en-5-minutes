import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Français",
      kind: "officielle",
      sharePercent: {
        value: 51,
        unit: "% de la population (francophones, estimation)",
        year: 2022,
        source: "Organisation internationale de la Francophonie (OIF), La langue française dans le monde",
        sourceUrl: "https://axl.cefan.ulaval.ca/francophonie/OIF-francophones-est2022.htm",
        note: "Environ 49 millions de francophones selon l'OIF, soit le deuxième pays au monde par le nombre de locuteurs du français, après la France.",
      },
      note: "Langue de l'administration, de l'enseignement, de la justice et des médias nationaux.",
    },
    { name: "Lingala", kind: "régionale", note: "Langue nationale ; véhiculaire de Kinshasa, du nord-ouest et de l'armée, diffusée dans toute l'Afrique centrale par la musique congolaise." },
    { name: "Swahili", kind: "régionale", note: "Langue nationale ; véhiculaire de l'est (Kivu, Maniema, Katanga, Ituri)." },
    { name: "Kikongo (kituba)", kind: "régionale", note: "Langue nationale ; parlée à l'ouest (Kongo-Central, Kwango, Kwilu)." },
    { name: "Tshiluba", kind: "régionale", note: "Langue nationale ; parlée dans les provinces du Kasaï." },
  ],
  summary:
    "Le français est la seule langue officielle, mais la Constitution reconnaît quatre langues nationales — lingala, swahili, kikongo et tshiluba — qui servent de langues véhiculaires régionales. Plus de 200 langues, en majorité bantoues, sont parlées dans le pays. La plupart des Congolais sont plurilingues.",
};
