import type { LanguagesData } from "@/lib/types";

const SRC = "Zavod za statistiku Crne Gore (MONSTAT), recensement 2023";
const URL = "https://www.monstat.org/eng/novosti.php?id=4012";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Monténégrin",
      kind: "officielle",
      sharePercent: { value: 34.52, unit: "%", year: 2023, source: SRC, sourceUrl: URL },
      note: "Langue officielle unique désignée par la Constitution de 2007, standardisée après l'indépendance à partir du serbe ijekavien parlé dans le pays.",
    },
    {
      name: "Serbe",
      kind: "officielle",
      sharePercent: { value: 43.18, unit: "%", year: 2023, source: SRC, sourceUrl: URL },
      note: "Langue déclarée maternelle par la plus large part de la population ; la Constitution la reconnaît, avec le bosniaque, l'albanais et le croate, comme langue « en usage officiel ».",
    },
    {
      name: "Bosniaque",
      kind: "officielle",
      sharePercent: { value: 6.97, unit: "%", year: 2023, source: SRC, sourceUrl: URL },
      note: "Langue de la minorité bosniaque, reconnue en usage officiel.",
    },
    {
      name: "Albanais",
      kind: "officielle",
      sharePercent: { value: 5.25, unit: "%", year: 2023, source: SRC, sourceUrl: URL },
      note: "Reconnu en usage officiel ; majoritaire dans certaines municipalités du littoral sud, notamment Ulcinj.",
    },
    {
      name: "Croate",
      kind: "officielle",
      note: "Langue de la petite minorité croate de la baie de Kotor, également reconnue en usage officiel par la Constitution, sans pourcentage distinct publié au recensement.",
    },
  ],
  summary:
    "La question linguistique reflète directement la question identitaire monténégrine : le monténégrin, langue officielle depuis l'indépendance, n'est déclaré langue maternelle que par environ un tiers de la population, tandis que le serbe reste la réponse la plus fréquente au recensement. Ces deux langues sont mutuellement intelligibles et très proches du bosniaque et du croate, l'ensemble formant un continuum linguistique commun à l'ex-Yougoslavie ; leur distinction relève avant tout de l'identité nationale déclarée par chaque locuteur plutôt que d'une différence linguistique marquée. La Constitution reconnaît quatre autres langues « en usage officiel » aux côtés du monténégrin : le serbe, le bosniaque, l'albanais et le croate.",
};
