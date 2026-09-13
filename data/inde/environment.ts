import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 24.9,
    unit: "%",
    year: 2025,
    source: "Ministère de l'Énergie (Inde) / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Renewable_energy_in_India",
    note: "Part des renouvelables (hors grand hydraulique compris) dans l'électricité effectivement produite sur l'exercice 2024-2025 ; leur part dans la puissance installée est bien supérieure (environ 52 % en 2026), un écart dû à l'intermittence du solaire et de l'éolien. Le nucléaire, non comptabilisé comme renouvelable, fournit par ailleurs environ 3 % de l'électricité produite.",
  },
  co2PerCapita: {
    value: 2.0,
    unit: "t",
    year: 2022,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=IN",
    note: "Très inférieur à la moyenne mondiale malgré le rang de troisième émetteur mondial en valeur absolue, du fait de la taille de la population ; le charbon reste la principale source d'électricité du pays.",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 24.5, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=IN" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 3.0, unit: "%", year: 2025, source: "Nuclear Power Corporation of India Limited (NPCIL) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Nuclear_power_in_India", note: "25 réacteurs en fonctionnement sur l'exercice 2024-2025 (8 880 MW installés) et 11 autres en construction ; objectif officiel de 100 GW de puissance nucléaire installée d'ici 2047. L'Inde n'est pas signataire du traité de non-prolifération nucléaire (TNP) et dispose de l'arme nucléaire depuis ses essais de 1974 et 1998." },
    },
  ],
  risks: ["Mousson et inondations", "Cyclones (golfe du Bengale et mer d'Arabie)", "Sécheresses et stress hydrique", "Pollution atmosphérique urbaine", "Vagues de chaleur", "Séismes dans l'arc himalayen"],
  risksSource: { source: "India Meteorological Department (IMD) / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_India" },
  summary:
    "L'Inde, troisième émetteur mondial de CO2 en valeur absolue mais très en deçà de la moyenne mondiale par habitant, reste fortement dépendante du charbon pour son électricité tout en menant l'un des plus vastes programmes d'énergies renouvelables au monde, porté surtout par le solaire. Elle exploite également un parc nucléaire civil modeste mais en expansion rapide. Le pays est en outre l'un des plus exposés aux catastrophes naturelles et aux effets du changement climatique — mousson de plus en plus erratique, vagues de chaleur extrêmes, stress hydrique croissant dans le nord — et ses grandes villes, notamment Delhi, comptent parmi les plus polluées au monde en particules fines, surtout en hiver.",
};
