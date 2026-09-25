import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 16,
    unit: "%",
    year: 2025,
    source: "Ember",
    sourceUrl: "https://ember-energy.org/countries-and-regions/russia/",
    note: "Presque exclusivement hydroélectrique ; avec le nucléaire (~20 %), le mix « bas carbone » atteint ~36 %, le reste étant dominé par le gaz.",
  },
  co2PerCapita: {
    value: 12.29,
    unit: "t",
    year: 2024,
    source: "Global Carbon Budget / Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/russia",
    note: "Parmi les plus élevées au monde, portées par une économie intensive en hydrocarbures et par les besoins de chauffage d'un climat rigoureux.",
  },
  indicators: [
    {
      label: "Réserves prouvées de gaz naturel",
      value: { value: "premières réserves mondiales (environ un cinquième du total mondial)", source: "BP Statistical Review / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Energy_in_Russia", note: "Les exportations gazières vers l'Europe se sont effondrées depuis 2022 (sabotage de Nord Stream, arrêt du transit ukrainien), en partie compensées par une réorientation vers l'Asie." },
    },
    {
      label: "Forêt boréale (taïga)",
      value: { value: "environ 20 % de la surface forestière mondiale", source: "FAO / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Forestry_in_Russia", note: "La plus vaste étendue forestière continue au monde (taïga sibérienne), puits de carbone fragilisé par des feux estivaux croissants." },
    },
  ],
  risks: [
    "Dégel du pergélisol (environ 60 % du territoire), qui déstabilise des infrastructures entières en Sibérie et libère du méthane auparavant piégé",
    "Réchauffement climatique environ 2,5 fois plus rapide que la moyenne mondiale sur le territoire russe, en particulier dans l'Arctique",
    "Feux de forêt boréaux (taïga) de plus en plus fréquents et étendus en été",
    "Pollution industrielle héritée de l'ère soviétique dans plusieurs bassins industriels (Norilsk, Oural, bassin de la Volga)",
    "Vulnérabilité de l'agriculture des régions méridionales aux sécheresses et à la dégradation des sols",
  ],
  risksSource: { source: "Programme des Nations unies pour l'environnement (PNUE) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Russia" },
  summary:
    "Premier exportateur mondial de gaz et gros producteur de pétrole, la Russie reste l'un des plus gros émetteurs de gaz à effet de serre au monde. Le réchauffement y est environ 2,5 fois plus rapide que la moyenne mondiale, en particulier dans l'Arctique, où le dégel du pergélisol (~60 % du territoire) menace les infrastructures et libère du méthane. La taïga sibérienne, plus vaste forêt continue au monde, est un puits de carbone fragilisé par les feux, tandis que la pollution industrielle héritée de l'ère soviétique persiste dans des bassins comme Norilsk.",
};
