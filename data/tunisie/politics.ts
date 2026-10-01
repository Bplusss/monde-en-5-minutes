import type { PoliticsData } from "@/lib/types";

const WIKI = "Wikipedia";

export const politics: PoliticsData = {
  stateForm: "République présidentielle unitaire",
  regime: "Pouvoir concentré entre les mains du président depuis 2021 ; opposants, journalistes et avocats poursuivis, régime classé « non libre » par Freedom House",
  headOfState: {
    title: "Président de la République",
    name: "Kaïs Saïed",
    since: "23 octobre 2019",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/2024_Tunisian_presidential_election",
  },
  headOfGovernment: {
    title: "Cheffe du gouvernement",
    name: "Sarra Zaafrani Zenzri",
    since: "21 mars 2025",
    source: "Portail du gouvernement tunisien",
    sourceUrl: "http://fr.tunisie.gov.tn/membre-de-gouvernement/183/3-zaafrani-zenzri.htm",
  },
  legislature: {
    name: "Parlement (bicaméral depuis 2024)",
    chambers: [
      { name: "Assemblée des représentants du peuple (ARP)", seats: 161 },
      { name: "Conseil national des régions et des districts (CNRD)", seats: 77 },
    ],
  },
  constitution: {
    adopted: "25 juillet 2022, approuvée par référendum (taux de participation d'environ 30 %), remplaçant celle de 2014",
    source: WIKI,
    sourceUrl: "https://en.wikipedia.org/wiki/2022_Constitution_of_Tunisia",
  },
  summary:
    "Élu en 2019, le juriste Kaïs Saïed suspend le Parlement et limoge le gouvernement le 25 juillet 2021, puis gouverne par décrets avant de faire adopter en 2022 une Constitution qui renforce fortement la présidence : le gouvernement, nommé par le président, est responsable devant lui. Le Parlement compte désormais deux chambres : l'Assemblée des représentants du peuple, élue fin 2022-début 2023 avec environ 11 % de participation, et le Conseil national des régions et des districts, élu au suffrage indirect et installé en avril 2024. Le 6 octobre 2024, Saïed est réélu avec 90,7 % des voix et 28,8 % de participation, ses principaux concurrents ayant été écartés ou emprisonnés. Quatre chefs de gouvernement ont été nommés depuis 2021 ; Sarra Zaafrani Zenzri occupe le poste depuis mars 2025. Depuis l'été 2026, des manifestations dénoncent la dérive autoritaire et les coupures d'eau et d'électricité.",
};
