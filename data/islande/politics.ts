import type { PoliticsData } from "@/lib/types";

export const politics: PoliticsData = {
  stateForm: "République parlementaire unitaire",
  regime: "Démocratie parlementaire",
  headOfState: {
    title: "Présidente de la République",
    name: "Halla Tómasdóttir",
    since: "1er août 2024",
    source: "Bureau du président d'Islande",
    sourceUrl: "https://en.wikipedia.org/wiki/Halla_T%C3%B3masd%C3%B3ttir",
  },
  headOfGovernment: {
    title: "Première ministre",
    name: "Kristrún Frostadóttir",
    since: "21 décembre 2024",
    source: "Gouvernement islandais",
    sourceUrl: "https://www.government.is/",
  },
  legislature: {
    name: "Alþingi (Althing)",
    chambers: [{ name: "Alþingi", seats: 63 }],
  },
  constitution: {
    adopted: "17 juin 1944",
    source: "Alþingi",
    sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Iceland",
  },
  summary:
    "L'Alþingi, fondé en 930 sur le site de Þingvellir par les colons norrois, est considéré comme l'un des plus anciens parlements du monde encore en activité, même si sa forme moderne date de sa refondation au XIXᵉ siècle. L'Islande devient une république pleinement souveraine le 17 juin 1944, en pleine occupation du Danemark par l'Allemagne nazie, rompant ainsi l'union personnelle qui la liait à la couronne danoise. Le pouvoir exécutif appartient au gouvernement, responsable devant l'Alþingi, tandis que la présidente exerce un rôle largement représentatif.",
};
