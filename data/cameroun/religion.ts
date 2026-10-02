import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimation du CIA World Factbook",
  year: 2018,
  ageScope: "Population totale",
  source: "CIA World Factbook (via Wikipedia)",
  sourceUrl: "https://en.wikipedia.org/wiki/Demographics_of_Cameroon",
  points: [
    { label: "Catholiques", sharePercent: 38.3 },
    { label: "Protestants", sharePercent: 25.5 },
    { label: "Autres chrétiens", sharePercent: 6.9 },
    { label: "Musulmans", sharePercent: 24.4 },
    { label: "Religions traditionnelles (animisme)", sharePercent: 2.2 },
    { label: "Sans religion", sharePercent: 2.2 },
    { label: "Autres", sharePercent: 0.5 },
  ],
  summary:
    "Le Cameroun est un État laïc à majorité chrétienne, implantée surtout dans le sud et l'ouest depuis les missions du XIXe siècle. L'islam sunnite domine dans les trois régions septentrionales, où il s'est diffusé avec le jihad peul. Le culte des ancêtres et le rôle religieux des chefferies restent vivants chez de nombreux chrétiens et musulmans. La coexistence entre confessions est généralement paisible.",
  methodologyNote:
    "Le recensement de 2005 n'a pas publié de répartition religieuse détaillée. Les estimations divergent : une édition plus récente du World Factbook (2022) donne environ 66 % de chrétiens et 31 % de musulmans, le Pew Research Center (2010) 80 % de chrétiens et 16 % de musulmans. Les chiffres retenus ici sont un ordre de grandeur.",
};
