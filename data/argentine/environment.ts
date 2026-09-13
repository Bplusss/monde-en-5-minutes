import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 25.5,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.RNEW.ZS?locations=AR",
    note: "Part des énergies renouvelables dans la production électrique (hydroélectricité comprise), en progression avec le développement récent de l'éolien en Patagonie.",
  },
  co2PerCapita: {
    value: 4.0,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=AR",
  },
  indicators: [
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 7.0, unit: "%", year: 2024, source: "World Nuclear Association", sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-a-f/argentina" },
    },
  ],
  risks: ["Sécheresses récurrentes dans la Pampa et le Nord-Ouest", "Inondations dans la Mésopotamie et le Litoral", "Fonte des glaciers andins et patagoniens", "Feux de forêt et de prairie"],
  risksSource: { source: "Wikipedia / Banque mondiale", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Argentina" },
  summary:
    "L'Argentine dispose de l'un des programmes nucléaires civils les plus développés d'Amérique latine, avec trois réacteurs en fonctionnement (Atucha I, Atucha II et Embalse) fournissant environ 7 % de son électricité, et exporte son savoir-faire à travers l'entreprise publique INVAP, qui a construit des réacteurs de recherche en Australie, en Égypte, en Algérie et au Pérou. Le pays développe également rapidement l'éolien, notamment en Patagonie où les vents figurent parmi les plus réguliers au monde, tout en restant confronté à des sécheresses récurrentes dans la Pampa agricole et à un recul accéléré des glaciers andins et patagoniens sous l'effet du changement climatique.",
};
