import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 24,
    unit: "%",
    year: 2025,
    source: "Ember",
    sourceUrl: "https://ember-energy.org/countries-and-regions/morocco/",
    note: "Part des renouvelables dans la production d'électricité, surtout éolien et solaire (22 %). Le pays vise 52 % de renouvelables dans sa capacité électrique installée en 2030.",
  },
  co2PerCapita: {
    value: 1.8,
    unit: "t",
    year: 2024,
    source: "Global Carbon Budget (via Our World in Data)",
    sourceUrl: "https://ourworldindata.org/co2/country/morocco",
  },
  indicators: [
    {
      label: "Part du charbon dans l'électricité",
      value: { value: 61.5, unit: "%", year: 2025, source: "Ember (via Our World in Data)", sourceUrl: "https://ourworldindata.org/grapher/share-electricity-coal", note: "Charbon importé, brûlé notamment à Jorf Lasfar et Safi." },
    },
    {
      label: "Couverture forestière",
      value: { value: 12.9, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=MA", note: "Cèdres de l'Atlas, chênes-lièges de la Maâmora et arganeraie du Souss." },
    },
  ],
  risks: [
    "Sécheresses récurrentes et stress hydrique croissant",
    "Séismes dans le Rif et l'Atlas (Agadir 1960, Al Hoceïma 2004, Al Haouz 2023)",
    "Désertification et ensablement des oasis du sud-est",
    "Crues soudaines et inondations, notamment dans les vallées de l'Atlas",
    "Vagues de chaleur et incendies de forêt dans le nord",
  ],
  risksSource: { source: "Banque mondiale, Climate Change Knowledge Portal / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/morocco" },
  summary:
    "L'eau est le principal enjeu environnemental : les sécheresses des années 2020 ont vidé barrages et nappes, imposant des restrictions d'irrigation et l'essor du dessalement. Le pays a investi tôt dans les renouvelables (centrale solaire Noor Ouarzazate, parcs éoliens près de Tanger et Tarfaya), mais son électricité reste majoritairement issue de charbon importé, pour des émissions par habitant faibles.",
};
