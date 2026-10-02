import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 16.6,
    unit: "% de l'électricité",
    year: 2025,
    source: "Ember (via Our World in Data)",
    sourceUrl: "https://ourworldindata.org/grapher/share-electricity-renewables?country=~THA",
    note: "Solaire, bioénergie et hydroélectricité. Le gaz naturel fournit environ 65 % de l'électricité, en grande partie importé (Birmanie, GNL).",
  },
  co2PerCapita: {
    value: 3.7,
    unit: "t",
    year: 2024,
    source: "Global Carbon Project (via Our World in Data)",
    sourceUrl: "https://ourworldindata.org/grapher/co-emissions-per-capita?country=~THA",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 38.7, unit: "%", year: 2023, source: "Banque mondiale / FAO", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=TH", note: "Après une forte déforestation jusqu'aux années 1980, l'exploitation commerciale des forêts naturelles est interdite depuis 1989." },
    },
  ],
  risks: [
    "Inondations de mousson (celles de 2011 ont fait plus de 800 morts et paralysé l'industrie)",
    "Pollution de l'air aux particules fines (PM2,5), liée aux brûlis agricoles et au trafic, surtout de janvier à avril",
    "Affaissement du sol et montée de la mer à Bangkok, bâtie au niveau de la mer",
    "Sécheresses dans le Nord-Est",
    "Tsunamis sur la côte d'Andaman (2004)",
  ],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Thailand" },
  summary:
    "La Thaïlande est fortement exposée aux aléas liés à l'eau : inondations récurrentes dans la plaine du Chao Phraya, sécheresses en Isan et menace de submersion à Bangkok, qui s'enfonce de un à deux centimètres par an. La pollution aux particules fines, alimentée chaque saison sèche par les brûlis agricoles, est devenue un enjeu sanitaire majeur dans le Nord et à Bangkok. Le tsunami de 2004 a fait plus de 5 000 morts sur la côte d'Andaman.",
};
