import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 43.0,
    unit: "%",
    year: 2024,
    source: "Statistics Finland",
    sourceUrl: "https://stat.fi/en/publication/cm1kozm7fcpsg07vw63qs7u8i",
    note: "Part des renouvelables dans la consommation totale d'énergie — l'une des plus élevées de l'Union européenne, portée par la biomasse forestière, l'hydroélectricité et l'éolien.",
  },
  co2PerCapita: {
    value: 5.5,
    unit: "t",
    year: 2024,
    source: "Statistics Finland / Our World in Data",
    sourceUrl: "https://ourworldindata.org/profile/co2/finland",
  },
  indicators: [
    {
      label: "Couverture forestière",
      value: { value: 73.7, unit: "%", year: 2022, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=FI" },
    },
    {
      label: "Part du nucléaire dans l'électricité",
      value: { value: 39.0, unit: "%", year: 2024, source: "Statistics Finland", sourceUrl: "https://stat.fi/en/" },
    },
  ],
  risks: ["Feux de forêt (étés secs)", "Inondations printanières (fonte des neiges)", "Érosion côtière"],
  risksSource: { source: "Centre finlandais de l'environnement (SYKE)", sourceUrl: "https://www.syke.fi/en-US" },
  summary:
    "Grâce à un mix électrique combinant nucléaire, hydroélectricité et éolien, désormais renforcé par la mise en service en 2023 du réacteur Olkiluoto 3, la Finlande affiche près de 95 % d'électricité décarbonée et l'une des empreintes carbone par habitant les plus faibles d'Europe du Nord, malgré un climat rigoureux qui alourdit ses besoins en chauffage. Le pays, très largement boisé, reste exposé à des feux de forêt en été et à des crues de fonte des neiges au printemps.",
};
