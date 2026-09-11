import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République parlementaire unitaire",
  regime: "Démocratie parlementaire",
  headOfState: {
    title: "Présidente de la République",
    name: "Myriam Spiteri Debono",
    since: "4 avril 2024",
    source: "Bureau du président de Malte",
    sourceUrl: "https://president.gov.mt/",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Robert Abela",
    since: "13 janvier 2020",
    source: "Gouvernement de Malte",
    sourceUrl: "https://www.gov.mt/",
  },
  legislature: {
    name: "Chambre des représentants (Kamra tad-Deputati)",
    chambers: [{ name: "Chambre des représentants", seats: 65 }],
  },
  constitution: {
    adopted: "21 septembre 1964",
    source: "Chambre des représentants",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Malta",
  },
  summary:
    "Malte accède à l'indépendance du Royaume-Uni en 1964 sous forme de monarchie parlementaire au sein du Commonwealth, avant de devenir une république en 1974 tout en conservant l'anglais et le régime parlementaire hérités de la période coloniale. La présidente, élue par la Chambre des représentants, exerce un rôle essentiellement cérémoniel, le pouvoir exécutif appartenant au premier ministre responsable devant le Parlement. Malte a rejoint l'Union européenne en 2004 et adopté l'euro en 2008.",
};
