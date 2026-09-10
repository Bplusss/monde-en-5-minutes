import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 43.1,
    unit: "%",
    year: 2024,
    source: "Eurostat",
    sourceUrl: "https://www.ocnal.com/2026/07/albania-second-europe-renewable-electricity-production-2024-eurostat.html",
    note: "Part des énergies renouvelables dans la consommation finale brute d'énergie, essentiellement d'origine hydroélectrique.",
  },
  co2PerCapita: {
    value: 1.79,
    unit: "t",
    year: 2024,
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/profile/co2/albania",
    note: "Parmi les niveaux d'émissions par habitant les plus bas d'Europe, très inférieur à la moyenne mondiale (environ 4,7 t).",
  },
  indicators: [
    {
      label: "Part de l'électricité produite à partir de sources renouvelables",
      value: {
        value: "plus de 99 %",
        year: 2024,
        source: "Bankwatch",
        sourceUrl: "https://bankwatch.org/beyond-fossil-fuels/energy-sector-in-albania",
        note: "L'Albanie est le pays le plus dépendant de l'hydroélectricité d'Europe ; la centrale de Komani, sur le Drin, fournit à elle seule environ 65 % de l'électricité du pays.",
      },
    },
  ],
  risks: ["Séismes", "Inondations", "Glissements de terrain", "Sécheresses affectant la production hydroélectrique"],
  risksSource: { source: "Agence albanaise de gestion des urgences civiles (AKMC)", sourceUrl: "https://akmc.gov.al/" },
  summary:
    "Grâce à un relief montagneux et à un réseau hydrographique abondant, l'Albanie produit la quasi-totalité de son électricité par hydroélectricité, ce qui lui vaut l'un des taux d'énergies renouvelables les plus élevés d'Europe — mais expose aussi sa production aux aléas des sécheresses. Le pays est également exposé à un risque sismique significatif, comme l'a rappelé le séisme meurtrier de Durrës en novembre 2019, et abrite depuis 2023 le premier parc national de « rivière sauvage » d'Europe, sur la Vjosa.",
};
