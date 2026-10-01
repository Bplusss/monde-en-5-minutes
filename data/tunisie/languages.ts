import type { LanguagesData } from "@/lib/types";

const WIKI = "Wikipedia";
const WIKI_URL = "https://en.wikipedia.org/wiki/Languages_of_Tunisia";

export const languages: LanguagesData = {
  entries: [
    { name: "Arabe standard moderne", kind: "officielle", note: "Langue officielle selon la Constitution ; langue de l'administration, de la justice et de l'enseignement primaire." },
    { name: "Arabe tunisien (derja)", kind: "parlée", note: "Langue maternelle de la quasi-totalité de la population ; dialecte maghrébin riche en emprunts au berbère, au français, à l'italien et au turc." },
    {
      name: "Français",
      kind: "parlée",
      sharePercent: { value: 52, unit: "% de francophones", year: 2022, source: "Organisation internationale de la Francophonie", sourceUrl: "https://www.webdo.tn/fr/actualite/national/52-des-tunisiens-sont-francophones/207973/" },
      note: "Sans statut officiel, mais langue de l'enseignement scientifique au secondaire et à l'université, des affaires et d'une partie de la presse.",
    },
    { name: "Berbère (chelha)", kind: "régionale", note: "Parlé par une petite minorité, surtout à Djerba et dans quelques villages du Sud (Matmata, Tataouine)." },
  ],
  summary:
    "L'arabe est la seule langue officielle, mais la vie quotidienne se déroule en derja, l'arabe tunisien. Le français, héritage du protectorat, reste très présent dans l'enseignement supérieur, l'économie et les médias : environ un Tunisien sur deux est francophone, la proportion la plus élevée du Maghreb. Les parlers berbères, autrefois majoritaires, ne subsistent que dans quelques localités du Sud.",
};
