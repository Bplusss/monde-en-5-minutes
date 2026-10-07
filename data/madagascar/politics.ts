import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République unitaire",
  regime: "Transition sous direction militaire depuis octobre 2025 (Constitution suspendue)",
  headOfState: {
    title: "Président de la Refondation de la République de Madagascar",
    name: "Colonel Michael Randrianirina",
    since: "17 octobre 2025",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Michael_Randrianirina",
  },
  headOfGovernment: {
    title: "Premier ministre",
    name: "Mamitiana Rajaonarison",
    since: "15 mars 2026",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Mamitiana_Rajaonarison",
  },
  legislature: {
    name: "Assemblée nationale (le Sénat a été dissous en octobre 2025)",
    chambers: [{ name: "Assemblée nationale", seats: 163 }],
  },
  constitution: {
    adopted: "Constitution de la IVe République, adoptée par référendum le 17 novembre 2010 ; suspendue depuis le 14 octobre 2025",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Madagascar",
  },
  summary:
    "Depuis l'indépendance, Madagascar a connu des crises politiques à répétition, presque toutes nées de soulèvements à Antananarivo. Fin septembre 2025, des manifestations de jeunes de la « génération Z » contre les coupures d'eau et d'électricité se transforment en contestation du président Andry Rajoelina. Le 12 octobre, une unité de l'armée, le CAPSAT, rallie les manifestants ; Rajoelina fuit le pays, l'Assemblée nationale le destitue et le colonel Michael Randrianirina, chef du CAPSAT, prête serment le 17 octobre. Il a suspendu la Constitution, dissous le Sénat et promis, dans un délai de deux ans, un référendum constitutionnel puis des élections. L'Union africaine a suspendu le pays de ses instances le 15 octobre 2025.",
};
