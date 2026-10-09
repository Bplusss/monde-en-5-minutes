import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "Régime parlementaire",
  headOfState: {
    title: "Président de la République",
    name: "Mirza Fakhrul Islam Alamgir",
    since: "août 2026 (élu par le Parlement le 20 août 2026)",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mirza_Fakhrul_Islam_Alamgir",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Tarique Rahman",
    since: "17 février 2026",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Tarique_Rahman",
  },
  legislature: {
    name: "Parlement (Jatiya Sangsad)",
    chambers: [{ name: "Jatiya Sangsad", seats: 350 }],
  },
  constitution: {
    adopted: "4 novembre 1972, en vigueur depuis le 16 décembre 1972 ; une vaste réforme (la « Charte de juillet ») a été approuvée par référendum le 12 février 2026",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Bangladesh",
  },
  summary:
    "Le Bangladesh est une république parlementaire : le Premier ministre, issu de la majorité, détient l'essentiel du pouvoir, et le président, élu par les députés, a un rôle surtout honorifique. Le Parlement compte 300 députés élus au scrutin majoritaire et 50 sièges réservés aux femmes. Depuis 1991, la vie politique est dominée par la rivalité entre la Ligue Awami et le Parti nationaliste du Bangladesh (BNP). En août 2024, un soulèvement étudiant a chassé Sheikh Hasina, au pouvoir depuis 2009, réfugiée depuis en Inde et condamnée à mort par contumace en 2025. Après dix-huit mois de gouvernement intérimaire dirigé par Muhammad Yunus, le BNP a remporté les élections de février 2026 avec 209 sièges élus, devant les islamistes du Jamaat-e-Islami ; la Ligue Awami en était exclue. La Charte de juillet, approuvée le même jour par référendum, prévoit notamment un Sénat et une limite de deux mandats pour le Premier ministre.",
};
