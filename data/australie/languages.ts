import type { LanguagesData } from "@/lib/types";

const ABS = "Australian Bureau of Statistics (ABS), recensement 2021";
const ABS_URL = "https://en.wikipedia.org/wiki/Languages_of_Australia";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Anglais",
      kind: "officielle",
      sharePercent: { value: 72, unit: "%", year: 2021, source: ABS, sourceUrl: ABS_URL, note: "Part des habitants ne parlant que l'anglais à la maison." },
      note: "Langue de facto du pays, mais sans statut officiel inscrit dans la Constitution ou une loi fédérale.",
    },
    {
      name: "Mandarin",
      kind: "parlée",
      sharePercent: { value: 2.7, unit: "%", year: 2021, source: ABS, sourceUrl: ABS_URL },
      note: "Langue la plus parlée à la maison après l'anglais, reflet de l'importance de l'immigration chinoise.",
    },
    {
      name: "Arabe",
      kind: "parlée",
      sharePercent: { value: 1.4, unit: "%", year: 2021, source: ABS, sourceUrl: ABS_URL },
    },
    {
      name: "Vietnamien",
      kind: "parlée",
      sharePercent: { value: 1.3, unit: "%", year: 2021, source: ABS, sourceUrl: ABS_URL },
    },
    {
      name: "Langues aborigènes et du détroit de Torrès",
      kind: "parlée",
      sharePercent: { value: 0.3, unit: "%", year: 2021, source: ABS, sourceUrl: ABS_URL, note: "Environ 77 000 locuteurs recensés, répartis sur plus de 160 langues distinctes." },
      note: "Sur les quelque 250 à 300 langues parlées avant la colonisation, la grande majorité sont aujourd'hui éteintes ou gravement menacées ; le kriol et le yumplatok (créole du détroit de Torrès) comptent parmi les plus vivantes.",
    },
  ],
  summary:
    "L'anglais domine très largement la vie publique et privée sans disposer d'un statut officiel formel, un cas assez répandu parmi les pays anglophones. Le pays reste néanmoins profondément multilingue du fait de l'immigration : près d'un quart de la population parle une langue autre que l'anglais à la maison, avec le mandarin, l'arabe et le vietnamien en tête. Le patrimoine linguistique aborigène, riche de plusieurs centaines de langues avant 1788, a été considérablement fragilisé par la colonisation et ne subsiste aujourd'hui, sous forme vivante, que dans un nombre restreint de communautés, principalement dans le Territoire du Nord.",
};
