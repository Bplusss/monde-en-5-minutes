import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Portugais",
      kind: "officielle",
      sharePercent: { value: 99.5, unit: "%", year: 2023, source: "Wikipedia (langues du Brésil)", sourceUrl: "https://en.wikipedia.org/wiki/Languages_of_Brazil" },
      note: "Seule langue officielle au niveau fédéral ; le Brésil est de très loin le plus grand pays lusophone du monde, devant le Portugal lui-même.",
    },
    {
      name: "Langues indigènes (environ 180-220 langues)",
      kind: "parlée",
      note: "Environ 217 langues autochtones seraient encore parlées, souvent par de très petites communautés ; certaines, comme le nheengatu, le tukano et le baniwa, sont coofficielles dans la commune amazonienne de São Gabriel da Cachoeira depuis 2002.",
    },
    {
      name: "Libras (langue des signes brésilienne)",
      kind: "officielle",
      note: "Reconnue par une loi fédérale de 2002 comme moyen légal de communication de la communauté sourde brésilienne.",
    },
    {
      name: "Allemand, italien et autres langues d'immigration",
      kind: "parlée",
      note: "Héritées de l'immigration européenne des XIXᵉ-XXᵉ siècles, encore vivantes dans certaines communes du Sud (Blumenau, Pomerode) ; plusieurs municipalités leur ont accordé une coofficialité locale.",
    },
  ],
  summary:
    "Le portugais, langue officielle unique au niveau fédéral, est parlé par la quasi-totalité de la population et constitue un puissant facteur d'unité dans un pays-continent où il coexiste avec plus de 200 langues autochtones, généralement menacées, ainsi qu'avec des langues d'immigration (allemand, italien, japonais) encore utilisées dans certaines régions du Sud et du Sud-Est.",
};
