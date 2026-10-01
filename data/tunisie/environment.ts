import type { EnvironmentData } from "@/lib/types";

const OWID = "Ember / Energy Institute (via Our World in Data)";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 4,
    unit: "%",
    year: 2025,
    source: OWID,
    sourceUrl: "https://ourworldindata.org/grapher/share-electricity-renewables?tab=chart&country=TUN",
    note: "Part des renouvelables dans la production d'électricité, surtout solaire et éolien ; le gaz naturel, en partie importé d'Algérie, en fournit environ 95 %.",
  },
  co2PerCapita: {
    value: 2.7,
    unit: "t",
    year: 2024,
    source: "Global Carbon Budget (via Our World in Data)",
    sourceUrl: "https://ourworldindata.org/co2/country/tunisia",
  },
  indicators: [
    {
      label: "Stress hydrique",
      value: {
        value: 98,
        unit: "% des ressources en eau douce disponibles prélevées",
        year: 2022,
        source: "FAO AQUASTAT (via Banque mondiale)",
        sourceUrl: "https://data.worldbank.org/indicator/ER.H2O.FWST.ZS?locations=TN",
        note: "Moins de 350 m³ d'eau renouvelable par habitant et par an, sous le seuil de pénurie absolue (500 m³).",
      },
    },
    {
      label: "Couverture forestière",
      value: { value: 4.6, unit: "% du territoire", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=TN", note: "Concentrée dans les montagnes du Nord-Ouest (chênes-lièges de Kroumirie)." },
    },
  ],
  risks: [
    "Sécheresses à répétition et baisse du remplissage des barrages",
    "Désertification et érosion des sols dans le Centre et le Sud",
    "Pollution industrielle, notamment par le traitement des phosphates à Gabès et Sfax",
    "Érosion côtière et élévation du niveau de la mer (Djerba, golfe de Hammamet)",
    "Vagues de chaleur et incendies de forêt dans le Nord-Ouest",
  ],
  risksSource: { source: "Banque mondiale, Climate Change Knowledge Portal / Wikipedia", sourceUrl: "https://climateknowledgeportal.worldbank.org/country/tunisia" },
  summary:
    "L'eau est la contrainte environnementale majeure : la Tunisie prélève la quasi-totalité de ses ressources renouvelables, et les sécheresses successives depuis 2022 ont conduit à des rationnements de l'eau potable. Le littoral de Gabès est durablement pollué par les rejets du Groupe chimique tunisien, qui transforme les phosphates depuis les années 1970 ; des intoxications ont déclenché d'importantes manifestations en octobre 2025. La production électrique dépend presque entièrement du gaz, et les renouvelables restent marginales malgré un fort potentiel solaire.",
};
