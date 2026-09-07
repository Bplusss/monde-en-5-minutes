import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle",
  regime: "Monarchie parlementaire",
  headOfState: {
    title: "Roi de Norvège",
    name: "Haakon VIII",
    since: "28 août 2026 (succède à son père, Harald V)",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Jonas Gahr Støre",
    since: "14 octobre 2021",
  },
  legislature: {
    name: "Storting",
    chambers: [{ name: "Storting", seats: 169 }],
  },
  constitution: {
    adopted: "17 mai 1814",
    source: "Storting",
    sourceUrl: "https://www.stortinget.no/",
  },
  summary:
    "La Norvège est une monarchie constitutionnelle et parlementaire : le roi exerce un rôle essentiellement représentatif, tandis que le gouvernement, dirigé par le Premier ministre, est responsable devant le Storting, parlement monocaméral élu au scrutin proportionnel.",
};
