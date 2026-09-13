import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 40,
    unit: "%",
    year: 2024,
    source: "Clean Energy Council",
    sourceUrl: "https://en.wikipedia.org/wiki/Renewable_energy_in_Australia",
    note: "Part des renouvelables (solaire, éolien, hydraulique) dans la production totale d'électricité ; le pays ne produit aucune électricité d'origine nucléaire.",
  },
  co2PerCapita: {
    value: 14.2,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
    note: "Parmi les émissions par habitant les plus élevées des pays développés, conséquence d'une électricité encore largement produite à partir du charbon et de longues distances de transport intérieur.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 17, unit: "%", year: 2020, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Australia" },
    },
    {
      label: "Part mondiale des réserves d'uranium",
      value: { value: 35, unit: "%", year: 2019, source: "World Nuclear Association / AIEA-OCDE", sourceUrl: "https://en.wikipedia.org/wiki/Uranium_mining_in_Australia", note: "Premières réserves mondiales identifiées d'uranium, entièrement exportées." },
    },
  ],
  risks: [
    "Feux de brousse (bushfires) de plus en plus intenses et fréquents",
    "Sécheresses prolongées et stress hydrique",
    "Cyclones tropicaux dans le nord",
    "Blanchissement corallien de la Grande Barrière de corail",
  ],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Australia" },
  summary:
    "Continent le plus sec après l'Antarctique, l'Australie est très exposée aux feux de brousse, dont l'ampleur et la fréquence se sont accrues ces dernières décennies (les incendies dévastateurs de l'été 2019-2020, dits « Black Summer », ont détruit des dizaines de millions d'hectares), ainsi qu'aux sécheresses et cyclones. Le pays détient environ le tiers des réserves mondiales d'uranium identifiées et en est l'un des principaux exportateurs, mais ne produit aucune électricité d'origine nucléaire : il fait partie des seuls pays du G20 à combiner d'importantes réserves d'uranium et une production nucléaire domestique strictement nulle, la construction de centrales étant interdite au niveau fédéral depuis la loi sur la protection de l'environnement et la conservation de la biodiversité de 1999 (EPBC Act) — une interdiction dont la levée fait l'objet d'un débat politique croissant depuis le milieu des années 2020, sans avoir été abrogée à ce jour. Sa production électrique, longtemps dominée par le charbon, connaît depuis le milieu des années 2020 une transition rapide vers l'éolien et le solaire.",
};
