import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "Monarchie constitutionnelle",
  regime: "Monarchie parlementaire",
  headOfState: {
    title: "Roi",
    name: "Frederik X",
    since: "14 janvier 2024",
    source: "Kongehuset (maison royale danoise)",
    sourceUrl: "https://www.kongehuset.dk/",
  },
  headOfGovernment: {
    title: "Première ministre",
    name: "Mette Frederiksen",
    since: "3 juin 2026 (3ᵉ gouvernement, après l'élection du 24 mars 2026)",
    source: "Statsministeriet",
    sourceUrl: "https://www.stm.dk/",
  },
  legislature: {
    name: "Folketing",
    chambers: [{ name: "Folketing", seats: 179 }],
  },
  constitution: {
    adopted: "5 juin 1953 (4ᵉ révision de la Constitution de 1849)",
    source: "Folketinget",
    sourceUrl: "https://www.ft.dk/",
  },
  summary:
    "Le Danemark est une monarchie constitutionnelle et parlementaire : le roi exerce un rôle protocolaire, le pouvoir exécutif appartenant au gouvernement responsable devant le Folketing, l'assemblée unicamérale de 179 sièges — dont 2 réservés au Groenland et 2 aux îles Féroé.",
};
