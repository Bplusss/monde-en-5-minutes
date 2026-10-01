import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 96.3,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=CD",
    note: "Part des renouvelables dans la consommation finale d'énergie, dominée par le bois de feu et le charbon de bois. L'électricité, à laquelle peu d'habitants ont accès, est quasi entièrement d'origine hydraulique (barrages d'Inga sur le fleuve Congo).",
  },
  co2PerCapita: {
    value: 0.06,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=CD",
    note: "Parmi les plus faibles au monde. Ce chiffre exclut les émissions liées à la déforestation, de loin la principale source d'émissions du pays.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 54.2, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CD" },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 22.5, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=CD" },
    },
  ],
  risks: [
    "Déforestation liée à l'agriculture itinérante et au bois de chauffe",
    "Pollution des sols et des eaux autour des mines du Katanga",
    "Éruptions volcaniques (Nyiragongo, au-dessus de Goma) et risque d'éruption limnique du lac Kivu",
    "Inondations et érosion urbaine, notamment à Kinshasa",
    "Braconnage et menaces sur les grands singes (gorilles, bonobos) et l'okapi",
  ],
  risksSource: { source: "Programme des Nations unies pour l'environnement (PNUE) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_the_Democratic_Republic_of_the_Congo" },
  summary:
    "La RDC abrite environ 60 % de la forêt du bassin du Congo et de vastes tourbières riches en carbone. Ces forêts reculent sous l'effet de l'agriculture sur brûlis et du charbon de bois, principal combustible des ménages. Le pays possède un potentiel hydroélectrique considérable, notamment le site d'Inga sur le fleuve Congo, mais moins d'un quart des habitants a accès à l'électricité.",
};
