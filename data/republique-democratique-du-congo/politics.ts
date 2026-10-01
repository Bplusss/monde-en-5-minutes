import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République semi-présidentielle unitaire fortement décentralisée (26 provinces)",
  regime: "Régime présidentiel de fait, issu d'élections multipartites contestées ; une partie de l'est échappe au contrôle de l'État",
  headOfState: {
    title: "Président de la République",
    name: "Félix Tshisekedi",
    since: "24 janvier 2019",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/F%C3%A9lix_Tshisekedi",
  },
  headOfGovernment: {
    title: "Première ministre",
    name: "Judith Suminwa Tuluka",
    since: "12 juin 2024",
    source: "Radio Okapi / Wikipedia",
    sourceUrl: "https://www.radiookapi.net/2026/09/15/actualite/economie/rdc-judith-suminwa-depose-un-projet-de-budget-2027-de-248-milliards",
  },
  legislature: {
    name: "Parlement",
    chambers: [
      { name: "Assemblée nationale", seats: 500 },
      { name: "Sénat", seats: 109 },
    ],
  },
  constitution: {
    adopted: "18 février 2006, après référendum (décembre 2005) ; révisée en 2011 (élection présidentielle à un seul tour)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_the_Democratic_Republic_of_the_Congo",
  },
  summary:
    "Le président, élu au suffrage universel direct pour cinq ans et limité à deux mandats, nomme le Premier ministre issu de la majorité parlementaire. Félix Tshisekedi, arrivé au pouvoir en janvier 2019 lors de la première alternance pacifique du pays, a été réélu le 20 décembre 2023 avec 73,5 % des voix selon la Cour constitutionnelle, face à Moïse Katumbi (18,3 %), lors d'un scrutin entaché d'irrégularités selon les observateurs. Sa coalition, l'Union sacrée, détient environ 90 % des sièges de l'Assemblée nationale. Judith Suminwa est depuis juin 2024 la première femme cheffe du gouvernement. En juillet 2026, la Cour constitutionnelle a validé une loi référendaire permettant une révision de la Constitution, que l'opposition dénonce comme une voie vers un troisième mandat présidentiel. Dans l'est, la rébellion AFC/M23, soutenue par le Rwanda selon les experts de l'ONU, administre depuis début 2025 Goma et Bukavu.",
};
