import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "République parlementaire",
  headOfState: {
    title: "Présidente de la République",
    name: "Maia Sandu",
    since: "24 décembre 2020",
    source: "Présidence de la République de Moldavie",
    sourceUrl: "https://en.wikipedia.org/wiki/President_of_Moldova",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Vasile Tofan",
    since: "22 juillet 2026",
    source: "Gouvernement de la République de Moldavie",
    sourceUrl: "https://en.wikipedia.org/wiki/Prime_Minister_of_Moldova",
  },
  legislature: {
    name: "Parlement de la République de Moldavie",
    chambers: [{ name: "Parlement (monocaméral)", seats: 101 }],
  },
  constitution: {
    adopted: "29 juillet 1994",
    source: "Parlement de la République de Moldavie",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Moldova",
  },
  summary:
    "République parlementaire dont la présidente, élue au suffrage universel direct depuis 2016, dispose de pouvoirs essentiellement de représentation et de politique étrangère, l'essentiel du pouvoir exécutif revenant au gouvernement issu du Parlement. La vie politique moldave reste structurée par le clivage entre une orientation pro-européenne, portée par la présidente Maia Sandu et son parti (PAS), et des forces plus favorables à des liens étroits avec la Russie. Le pays a obtenu le statut de candidat à l'Union européenne en juin 2022 et a ouvert les négociations d'adhésion en 2024, tandis que le gouvernement central n'exerce aucune autorité effective sur la région séparatiste de Transnistrie, à l'est du Dniestr, ni de fait sur la Gagaouzie, région autonome au statut particulier.",
};
