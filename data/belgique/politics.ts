import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle fédérale",
  regime: "Régime parlementaire fédéral",
  headOfState: {
    title: "Roi des Belges",
    name: "Philippe",
    since: "21 juillet 2013",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Bart De Wever",
    since: "3 février 2025",
  },
  legislature: {
    name: "Parlement fédéral",
    chambers: [
      { name: "Chambre des représentants", seats: 150 },
      { name: "Sénat", seats: 60 },
    ],
  },
  constitution: {
    adopted: "7 février 1831",
    source: "Wikipédia (données constitutionnelles)",
    sourceUrl: "https://fr.wikipedia.org/wiki/Constitution_belge",
  },
  summary:
    "La Belgique est une monarchie constitutionnelle fédérale à régime parlementaire, composée de trois régions (Flandre, Wallonie, Bruxelles-Capitale) et de trois communautés linguistiques. Le roi exerce un rôle protocolaire tandis que le Premier ministre, responsable devant la Chambre des représentants, dirige le gouvernement fédéral.",
};
