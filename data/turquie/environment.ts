import type { EnvironmentData } from "@/lib/types";

const EMBER = "Ember, Türkiye Electricity Review 2026";
const EMBER_URL = "https://ember-energy.org/latest-insights/turkiye-electricity-review-2026";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 43,
    unit: "%",
    year: 2025,
    source: EMBER,
    sourceUrl: EMBER_URL,
    note: "Part de l'électricité : hydroélectricité (16 %), éolien (11 %), solaire (10,5 %), puis géothermie et bioénergie. La centrale nucléaire d'Akkuyu, construite par Rosatom, n'a pas encore commencé à produire.",
  },
  co2PerCapita: {
    value: 5.9,
    unit: "t",
    year: 2024,
    source: "Global Carbon Project / Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/turkey",
  },
  indicators: [
    {
      label: "Part du charbon dans l'électricité",
      value: { value: 34, unit: "%", year: 2025, source: EMBER, sourceUrl: EMBER_URL, note: "Première source d'électricité du pays ; environ deux tiers de ce charbon sont importés." },
    },
    {
      label: "Couverture forestière",
      value: { value: 29.6, unit: "% du territoire", year: 2025, source: "Organisation des Nations unies pour l'alimentation et l'agriculture (FAO), via Our World in Data", sourceUrl: "https://ourworldindata.org/grapher/forest-area-as-share-of-land-area?tab=chart&country=TUR" },
    },
  ],
  risks: [
    "Séismes majeurs le long des failles nord- et est-anatoliennes, dont le risque pesant sur Istanbul",
    "Sécheresses et baisse des réserves d'eau, notamment dans le bassin de Konya et les grandes villes",
    "Incendies de forêt sur les côtes égéenne et méditerranéenne",
    "Pollution atmosphérique liée aux centrales à charbon et au trafic urbain",
    "Pollution de la mer de Marmara, touchée par une prolifération de mucilage en 2021",
  ],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Turkey" },
  summary:
    "Le risque sismique domine les enjeux environnementaux, comme l'ont rappelé les séismes de février 2023. La Turquie développe rapidement l'éolien et le solaire, mais reste dépendante du charbon et du gaz importés ; elle vise la neutralité carbone en 2053. Les grands barrages sur le Tigre et l'Euphrate (projet GAP) sont une source de tensions avec l'Irak et la Syrie.",
};
