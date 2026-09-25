import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 16,
    unit: "%",
    year: 2025,
    source: "Ember",
    sourceUrl: "https://ember-energy.org/countries-and-regions/russia/",
    note: "Presque exclusivement d'origine hydroélectrique (grands barrages sibériens sur l'Ienisseï et l'Angara, notamment) ; l'éolien et le solaire réunis ne représentent qu'environ 0,5 % de la production électrique. En comptant l'énergie nucléaire (environ 20 % du mix), la part de l'électricité russe dite « bas carbone » atteint environ 36 %, mais le pays reste très dépendant du gaz naturel et, dans une moindre mesure, du charbon pour l'essentiel de sa production.",
  },
  co2PerCapita: {
    value: 12.29,
    unit: "t",
    year: 2024,
    source: "Global Carbon Budget / Our World in Data",
    sourceUrl: "https://ourworldindata.org/co2/country/russia",
    note: "Parmi les émissions par habitant les plus élevées au monde pour un pays de cette taille de population, portées par une économie très intensive en hydrocarbures (production, transformation et exportation) et par les besoins de chauffage considérables liés au climat continental et arctique du pays.",
  },
  indicators: [
    {
      label: "Réserves prouvées de gaz naturel",
      value: { value: "premières réserves mondiales (environ un cinquième du total mondial)", source: "BP Statistical Review / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Energy_in_Russia", note: "La Russie reste l'un des tout premiers producteurs et exportateurs mondiaux de pétrole et de gaz naturel, bien que ses exportations gazières vers l'Europe se soient effondrées depuis 2022 (sabotage des gazoducs Nord Stream en septembre 2022, arrêt du transit via l'Ukraine début 2025), en partie compensées par une réorientation vers l'Asie." },
    },
    {
      label: "Forêt boréale (taïga)",
      value: { value: "environ 20 % de la surface forestière mondiale", source: "FAO / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Forestry_in_Russia", note: "La Russie abrite la plus vaste étendue forestière continue au monde, essentiellement de la taïga sibérienne, un puits de carbone majeur à l'échelle planétaire mais de plus en plus fragilisé par des feux de forêt estivaux d'ampleur croissante." },
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
    "L'environnement russe est structurellement marqué par l'immensité du territoire et sa dépendance économique aux hydrocarbures : premier exportateur mondial de gaz naturel et l'un des tout premiers producteurs de pétrole, le pays reste l'un des plus gros émetteurs de gaz à effet de serre au monde en valeur absolue, avec des émissions par habitant élevées portées par une économie énergivore et un climat qui impose des besoins de chauffage considérables. Le réchauffement climatique touche la Russie de façon disproportionnée : la température y augmente environ deux fois et demie plus vite que la moyenne mondiale, en particulier dans l'Arctique russe, où le dégel accéléré du pergélisol (qui couvre environ 60 % du territoire national) menace directement des infrastructures entières — routes, voies ferrées, pipelines, immeubles construits sur pilotis — et libère progressivement du méthane et du dioxyde de carbone auparavant piégés dans le sol gelé, une boucle de rétroaction climatique préoccupante à l'échelle mondiale. Le pays abrite dans le même temps la plus vaste étendue forestière continue de la planète (la taïga sibérienne), un puits de carbone majeur mais de plus en plus fragilisé par des feux de forêt estivaux d'ampleur croissante, tandis que plusieurs décennies de pollution industrielle soviétique non traitée continuent d'affecter durablement certains bassins industriels, au premier rang desquels la ville minière et métallurgique de Norilsk, en Sibérie arctique, l'une des localités les plus polluées au monde.",
};
