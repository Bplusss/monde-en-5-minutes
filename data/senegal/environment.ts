import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 35.4,
    unit: "%",
    year: 2021,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS?locations=SN",
    note: "Part dans la consommation finale d'énergie, portée surtout par la biomasse traditionnelle (bois et charbon de bois). L'électricité reste majoritairement thermique, malgré le parc éolien de Taïba Ndiaye, des centrales solaires et l'hydroélectricité du barrage de Manantali (Mali).",
  },
  co2PerCapita: {
    value: 0.76,
    unit: "t",
    year: 2023,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=SN",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 41.3, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=SN", note: "Surtout des savanes arborées et forêts claires du sud et de l'est, en recul sous l'effet des défrichements et du bois de chauffe." },
    },
    {
      label: "Accès à l'électricité",
      value: { value: 82.9, unit: "% de la population", year: 2024, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=SN" },
    },
  ],
  risks: [
    "Érosion côtière et élévation du niveau de la mer, notamment à Saint-Louis et sur la Petite-Côte",
    "Sécheresses et irrégularité des pluies au Sahel, désertification du nord",
    "Inondations urbaines pendant l'hivernage, en particulier dans la banlieue de Dakar",
    "Surpêche et épuisement des stocks halieutiques",
    "Salinisation des terres dans les deltas du Saloum et de la Casamance",
  ],
  risksSource: { source: "Banque mondiale / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Senegal" },
  summary:
    "Pays sahélien au nord, le Sénégal a été durement frappé par les sécheresses des années 1970-1980 et reste exposé à la variabilité des pluies, dont dépend une agriculture largement pluviale. Son littoral bas et sableux subit une érosion rapide : à Saint-Louis, la Langue de Barbarie recule et des quartiers de pêcheurs ont dû être relogés. La pêche, ressource alimentaire essentielle, souffre de la surexploitation par les flottes industrielles étrangères. Le pays compte des espaces protégés majeurs, dont le parc national du Niokolo-Koba et le parc des oiseaux du Djoudj, deux sites du patrimoine mondial de l'UNESCO.",
};
