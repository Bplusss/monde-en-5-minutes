import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République parlementaire unitaire",
  regime: "Démocratie parlementaire multipartite, sans constitution écrite ; les Palestiniens de Cisjordanie et de Gaza, non citoyens, n'y votent pas",
  headOfState: {
    title: "Président de l'État d'Israël",
    name: "Isaac Herzog",
    since: "7 juillet 2021",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Isaac_Herzog",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Benyamin Netanyahou",
    since: "29 décembre 2022 (troisième période au pouvoir, après 1996-1999 et 2009-2021)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Benjamin_Netanyahu",
  },
  legislature: {
    name: "Knesset (parlement monocaméral)",
    chambers: [{ name: "Knesset", seats: 120 }],
  },
  constitution: {
    adopted: "Pas de constitution écrite : des lois fondamentales adoptées depuis 1958 en tiennent lieu, dont la loi « État-nation du peuple juif » de 2018",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Basic_Laws_of_Israel",
  },
  summary:
    "Les 120 députés de la Knesset sont élus à la proportionnelle intégrale sur une liste nationale (seuil de 3,25 %), ce qui impose des coalitions. Le président, élu par la Knesset pour sept ans, a un rôle surtout protocolaire. Le gouvernement formé fin 2022 avec l'extrême droite et les partis ultra-orthodoxes a lancé en 2023 une réforme judiciaire qui a suscité un vaste mouvement de protestation. Benyamin Netanyahou est jugé pour corruption depuis 2020 et visé depuis novembre 2024 par un mandat d'arrêt de la Cour pénale internationale ; il conteste ces poursuites. Les élections législatives sont fixées au 27 octobre 2026.",
};
