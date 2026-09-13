import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Hindi",
      kind: "officielle",
      sharePercent: { value: 43.6, unit: "%", year: 2011, source: "Recensement de l'Inde", sourceUrl: "https://en.wikipedia.org/wiki/Languages_of_India" },
      note: "Langue officielle de l'Union (en écriture devanagari), langue maternelle la plus parlée du pays, mais la Constitution ne reconnaît aucune « langue nationale ».",
    },
    {
      name: "Anglais",
      kind: "officielle",
      sharePercent: { value: 0.02, unit: "%", year: 2011, source: "Recensement de l'Inde", sourceUrl: "https://en.wikipedia.org/wiki/Languages_of_India", note: "Part de locuteurs de langue maternelle ; l'anglais est très largement pratiqué comme deuxième ou troisième langue (environ 11 % de la population), notamment dans l'administration, la justice, l'enseignement supérieur et les affaires." },
      note: "Coofficielle de l'Union « à titre subsidiaire » depuis 1967, sans limite de durée, aux côtés du hindi.",
    },
    {
      name: "Bengali", kind: "régionale", note: "Langue officielle du Bengale-Occidental et du Tripura ; deuxième langue maternelle du pays.",
    },
    { name: "Marathi", kind: "régionale", note: "Langue officielle du Maharashtra." },
    { name: "Télougou", kind: "régionale", note: "Langue officielle de l'Andhra Pradesh et du Telangana." },
    { name: "Tamoul", kind: "régionale", note: "Langue officielle du Tamil Nadu et du Puducherry ; l'une des plus anciennes langues classiques encore en usage." },
    { name: "Gujarati", kind: "régionale", note: "Langue officielle du Gujarat." },
    { name: "Ourdou", kind: "régionale", note: "Langue officielle ou coofficielle dans plusieurs États du nord, notamment en Jammu-et-Cachemire." },
    { name: "Kannada", kind: "régionale", note: "Langue officielle du Karnataka." },
    { name: "Malayalam", kind: "régionale", note: "Langue officielle du Kerala." },
    { name: "Pendjabi", kind: "régionale", note: "Langue officielle du Pendjab, langue liturgique du sikhisme." },
  ],
  summary:
    "La Constitution indienne ne consacre aucune « langue nationale » : le hindi et l'anglais sont les deux langues officielles de l'Union, tandis que 22 langues supplémentaires figurent à la huitième annexe de la Constitution et servent de langues officielles dans les États où elles dominent. Le hindi, langue maternelle d'environ 44 % de la population, est concentré dans le nord et le centre du pays ; les États du sud (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana) utilisent des langues dravidiennes sans lien avec le hindi et y sont souvent réticents à son extension. Au total, le recensement de 2011 dénombre 121 langues et plus de 19 500 dialectes déclarés.",
};
