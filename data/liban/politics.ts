import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République parlementaire unitaire",
  regime: "Démocratie parlementaire fondée sur un partage confessionnel des fonctions publiques, dont l'autorité est concurrencée par l'arsenal du Hezbollah",
  headOfState: {
    title: "Président de la République libanaise",
    name: "Joseph Aoun",
    since: "9 janvier 2025",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Joseph_Aoun",
  },
  headOfGovernment: {
    title: "Président du Conseil des ministres",
    name: "Nawaf Salam",
    since: "8 février 2025",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Nawaf_Salam",
  },
  legislature: {
    name: "Parlement libanais (Assemblée nationale, Majlis al-Nuwwab)",
    chambers: [{ name: "Assemblée nationale", seats: 128 }],
  },
  constitution: {
    adopted: "23 mai 1926, sous mandat français ; amendée en 1943 (indépendance) et en 1990, pour appliquer l'accord de Taëf",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Lebanon",
  },
  summary:
    "Selon le Pacte national de 1943, coutume non écrite, le président est un chrétien maronite, le Premier ministre un musulman sunnite et le président du Parlement un musulman chiite (Nabih Berri depuis 1992). L'accord de Taëf (1989) a réparti les 128 sièges à parité entre chrétiens et musulmans, puis par confession. Ancien commandant de l'armée, Joseph Aoun a été élu par le Parlement en janvier 2025, après plus de deux ans de vacance ; il a nommé Nawaf Salam, alors président de la Cour internationale de justice. Prévues en mai 2026, les législatives ont été reportées à mai 2028 par un vote du Parlement du 9 mars 2026, en raison de la guerre. Le 2 mars 2026, le gouvernement a interdit les activités militaires du Hezbollah, qui conserve 15 députés élus en 2022.",
};
