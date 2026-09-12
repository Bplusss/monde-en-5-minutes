import type { LanguagesData } from "@/lib/types";

const SRC = "Office statistique de la République de Serbie (RZS), recensement 2022";
const URL = "https://www.stat.gov.rs/en-us/vesti/20230616-st/";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Serbe",
      kind: "officielle",
      sharePercent: { value: 84.4, unit: "%", year: 2022, source: SRC, sourceUrl: URL, note: "Langue maternelle." },
      note: "Langue officielle sur tout le territoire, s'écrivant indifféremment en alphabet cyrillique (officiel, utilisé dans l'administration) ou latin (très largement employé dans l'usage courant).",
    },
    {
      name: "Hongrois",
      kind: "régionale",
      sharePercent: { value: 2.6, unit: "%", year: 2022, source: SRC, sourceUrl: URL, note: "Langue maternelle." },
      note: "Coofficiel dans plusieurs municipalités de Voïvodine, où la minorité hongroise reste concentrée.",
    },
    {
      name: "Bosniaque",
      kind: "régionale",
      note: "Coofficiel dans la région du Sandžak (sud-ouest), à forte population bosniaque musulmane, notamment autour de Novi Pazar.",
    },
    {
      name: "Slovaque",
      kind: "régionale",
      note: "Coofficiel dans plusieurs municipalités de Voïvodine, où réside la plus importante communauté slovaque hors de Slovaquie.",
    },
    {
      name: "Roumain",
      kind: "régionale",
      note: "Coofficiel dans plusieurs municipalités de Voïvodine (région du Banat).",
    },
    {
      name: "Ruthène et croate",
      kind: "régionale",
      note: "Autres langues des minorités nationales de Voïvodine, coofficielles au niveau municipal ou provincial selon les localités.",
    },
    {
      name: "Albanais",
      kind: "parlée",
      note: "Langue parlée dans le sud de la Serbie (vallée de Preševo) et langue officielle du Kosovo voisin.",
    },
  ],
  summary:
    "Le serbe, langue officielle dans tout le pays, appartient au même continuum slave méridional que le croate, le bosnien et le monténégrin. La Voïvodine, province autonome du nord, reconnaît officiellement six langues du fait de sa mosaïque de minorités héritée de l'Empire austro-hongrois, tandis que le bosniaque est coofficiel dans le Sandžak.",
};
