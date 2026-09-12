import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 57,
    unit: "%",
    year: 2022,
    source: "Amt für Statistik Liechtenstein",
    sourceUrl: "https://www.statistikportal.li/",
    note: "Part des énergies renouvelables dans la consommation énergétique finale ; l'hydroélectricité domestique ne couvre toutefois qu'environ un quart des besoins en électricité, le reste étant importé de Suisse et d'Autriche.",
  },
  co2PerCapita: {
    value: 4.2,
    unit: "t",
    year: 2022,
    source: "Inventaire national des gaz à effet de serre (CCNUCC)",
    sourceUrl: "https://unfccc.int/sites/default/files/resource/lie-2024-apr-nid.pdf",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 43.0, unit: "%", year: 2023, source: "Wikipedia (géographie du Liechtenstein)", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Liechtenstein" },
    },
  ],
  risks: ["Avalanches", "Crues du Rhin", "Glissements de terrain et chutes de blocs"],
  risksSource: { source: "Amt für Bevölkerungsschutz", sourceUrl: "https://www.llv.li/" },
  summary:
    "Dépourvu de ressources fossiles, le Liechtenstein produit l'essentiel de son électricité domestique par hydroélectricité au fil du Rhin, mais doit importer la majeure partie de sa consommation depuis ses voisins suisse et autrichien. Le relief montagneux de la moitié orientale du pays l'expose aux avalanches et aux mouvements de terrain, tandis que la vallée du Rhin, à l'ouest, reste historiquement sujette aux crues du fleuve, largement maîtrisées depuis les grands travaux de correction du cours d'eau au XXᵉ siècle.",
};
