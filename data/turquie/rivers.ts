import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Kızılırmak",
    lengthKm: { value: 1_355, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/K%C4%B1z%C4%B1l%C4%B1rmak_River", note: "Plus long fleuve coulant entièrement en Turquie ; son nom signifie « rivière rouge »." },
    source_location: "Monts Kızıldağ, province de Sivas",
    mouth: "Mer Noire, par un delta près de Bafra (province de Samsun)",
  },
  {
    name: "Euphrate",
    lengthKm: { value: 2_800, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Euphrates", note: "Longueur totale ; le barrage Atatürk, l'un des plus grands du monde, en régule le cours turc." },
    source_location: "Confluence du Karasu et du Murat, dans l'Est anatolien",
    mouth: "Chatt-el-Arab (Irak), après avoir traversé la Syrie et l'Irak",
  },
  {
    name: "Tigre",
    lengthKm: { value: 1_850, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Tigris", note: "Longueur totale ; il traverse Diyarbakır avant de longer la frontière syrienne." },
    source_location: "Lac Hazar, province d'Elazığ",
    mouth: "Chatt-el-Arab (Irak), où il rejoint l'Euphrate",
  },
  {
    name: "Sakarya",
    lengthKm: { value: 824, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Sakarya_River" },
    source_location: "Plateau de Bayat, province d'Afyonkarahisar",
    mouth: "Mer Noire, à l'est du Bosphore",
  },
  {
    name: "Ceyhan",
    lengthKm: { value: 509, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Ceyhan_River" },
    source_location: "Monts du Taurus, province de Kahramanmaraş",
    mouth: "Mer Méditerranée, golfe d'İskenderun",
  },
  {
    name: "Grand Méandre (Büyük Menderes)",
    lengthKm: { value: 548, unit: "km", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/B%C3%BCy%C3%BCk_Menderes_River", note: "Son nom antique, Méandre, a donné le mot désignant les sinuosités d'un cours d'eau." },
    source_location: "Région de Dinar, province d'Afyonkarahisar",
    mouth: "Mer Égée, près de l'antique Milet",
  },
];
