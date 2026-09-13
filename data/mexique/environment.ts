import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 19.5,
    unit: "%",
    year: 2022,
    source: "Agence internationale de l'énergie (AIE)",
    sourceUrl: "https://www.iea.org/countries/mexico",
    note: "Hydroélectricité, éolien, solaire, géothermie et biomasse ; le gaz naturel reste la première source d'électricité (environ 57 %).",
  },
  co2PerCapita: {
    value: 3.52,
    unit: "t",
    year: 2023,
    source: "EDGAR (Emissions Database for Global Atmospheric Research)",
    sourceUrl: "https://en.wikipedia.org/wiki/List_of_countries_by_carbon_dioxide_emissions_per_capita",
    note: "Inférieur à la moyenne mondiale.",
  },
  indicators: [
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 4.8,
        unit: "%",
        year: 2025,
        source: "Agence internationale de l'énergie atomique (AIEA) — PRIS",
        sourceUrl: "https://en.wikipedia.org/wiki/Laguna_Verde_Nuclear_Power_Station",
        note: "Fournie par l'unique centrale nucléaire du pays, Laguna Verde (2 réacteurs), dans l'État de Veracruz.",
      },
    },
  ],
  risks: ["Séismes (jonction de trois plaques tectoniques)", "Ouragans (Pacifique et golfe du Mexique)", "Sécheresses et stress hydrique", "Éruptions volcaniques (Popocatépetl, Colima)"],
  risksSource: { source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Geography_of_Mexico" },
  summary:
    "Situé à la jonction de trois plaques tectoniques, le Mexique est l'un des pays les plus exposés au monde aux séismes et à l'activité volcanique, et ses deux façades maritimes le rendent également vulnérable aux ouragans. Son mix électrique reste dominé par le gaz naturel, mais le pays dispose d'un fort potentiel solaire et éolien, notamment dans le nord et l'isthme de Tehuantepec, ainsi que d'une centrale nucléaire unique, Laguna Verde, qui fournit une part modeste mais réelle de son électricité. Le stress hydrique, en particulier dans le centre et le nord du pays, est une préoccupation croissante pour l'agriculture et l'approvisionnement des grandes villes.",
};
