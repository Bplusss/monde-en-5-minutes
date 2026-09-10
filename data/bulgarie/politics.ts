import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République",
  regime: "République parlementaire",
  headOfState: {
    title: "Présidente de la République",
    name: "Iliana Iotova",
    since: "23 janvier 2026",
    source: "Présidence de la République de Bulgarie",
    sourceUrl: "https://www.president.bg/en/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Rumen Radev",
    since: "8 mai 2026",
    source: "Conseil des ministres de la République de Bulgarie",
    sourceUrl: "https://www.gov.bg/en/Cabinet/Prime-Minister/Rumen-Radev",
  },
  legislature: {
    name: "Assemblée nationale (Narodno sabranie)",
    chambers: [{ name: "Assemblée nationale", seats: 240 }],
  },
  constitution: {
    adopted: "12 juillet 1991",
    source: "Grande Assemblée nationale de Bulgarie",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Bulgaria",
  },
  summary:
    "La Bulgarie est une République parlementaire monocamérale depuis l'adoption de sa Constitution post-communiste de 1991. Le président, élu au suffrage universel direct, exerce un rôle largement représentatif et diplomatique, tandis que le pouvoir exécutif appartient au Premier ministre et à son gouvernement, responsables devant l'Assemblée nationale. Le pays a connu une forte instabilité parlementaire entre 2021 et 2025, avec plusieurs élections législatives anticipées successives.",
};
