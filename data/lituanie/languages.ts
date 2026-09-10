import type { LanguagesData } from "@/lib/types";

const SRC = "Office lituanien de statistique (recensement 2021)";
const URL = "https://osp.stat.gov.lt/en/2021-gyventoju-ir-bustu-surasymo-rezultatai/tautybe-gimtoji-kalba-ir-tikyba";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Lituanien",
      kind: "officielle",
      sharePercent: { value: 85.3, unit: "%", year: 2021, source: SRC, sourceUrl: URL },
      note: "Langue balte, l'une des plus archaïques parmi les langues indo-européennes vivantes ; seule langue officielle de la République depuis la loi de 1995.",
    },
    {
      name: "Russe",
      kind: "parlée",
      sharePercent: { value: 6.8, unit: "%", year: 2021, source: SRC, sourceUrl: URL },
      note: "Langue maternelle héritée de la période soviétique, encore largement comprise comme deuxième langue au-delà de la minorité russophone.",
    },
    {
      name: "Polonais",
      kind: "parlée",
      sharePercent: { value: 5.1, unit: "%", year: 2021, source: SRC, sourceUrl: URL },
      note: "Langue de la minorité polonaise, concentrée dans la région de Vilnius (district de Vilnius et de Šalčininkai notamment).",
    },
  ],
  summary:
    "Le lituanien, langue officielle unique, est la langue maternelle d'environ 85 % de la population. Les minorités russophone et polonophone, héritées de l'histoire mouvementée de la région de Vilnius et de la période soviétique, restent implantées respectivement dans les grandes villes et dans le sud-est du pays.",
};
