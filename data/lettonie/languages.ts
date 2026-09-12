import type { LanguagesData } from "@/lib/types";

const SRC = "CSP, enquête sur l'éducation des adultes 2021-2022";
const URL = "https://stat.gov.lv/en/statistics-themes/education/level-education/press-releases/21052-mother-tongue-and-language-used";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Letton",
      kind: "officielle",
      sharePercent: { value: 64.3, unit: "%", year: 2021, source: SRC, sourceUrl: URL, note: "Part de la population (18-69 ans) déclarant le letton comme langue maternelle." },
      note: "Langue balte, seule langue officielle depuis la loi linguistique de 1999 ; son usage exclusif dans l'administration et l'enseignement public est un enjeu politique récurrent.",
    },
    {
      name: "Russe",
      kind: "parlée",
      sharePercent: { value: 37.7, unit: "%", year: 2021, source: SRC, sourceUrl: URL, note: "Langue maternelle ; le russe reste en outre la langue d'usage domestique d'environ un tiers de la population, sans statut officiel." },
      note: "Langue de la minorité russophone, héritée des migrations de la période soviétique, largement implantée à Riga, à Daugavpils et dans les grandes villes de l'est du pays.",
    },
    {
      name: "Latgalien",
      kind: "régionale",
      sharePercent: { value: 1.3, unit: "%", year: 2021, source: SRC, sourceUrl: URL },
      note: "Parler balte de la région de Latgale (sud-est), reconnu par la loi comme variété historique de la langue lettone à préserver, sans statut de langue officielle distincte.",
    },
    {
      name: "Ukrainien",
      kind: "parlée",
      sharePercent: { value: 1.7, unit: "%", year: 2021, source: SRC, sourceUrl: URL, note: "Part en hausse depuis 2022 avec l'accueil de réfugiés ayant fui l'invasion russe de l'Ukraine." },
    },
  ],
  summary:
    "Le letton, seule langue officielle, est la langue maternelle d'environ les deux tiers des habitants. La minorité russophone, héritée de la période soviétique, en représente plus d'un tiers et reste concentrée à Riga et dans les villes de l'est du pays, notamment à Daugavpils où elle est majoritaire ; son intégration linguistique et le statut du russe dans l'enseignement public restent des sujets de débat politique récurrents.",
};
