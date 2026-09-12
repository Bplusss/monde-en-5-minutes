import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Français",
      kind: "officielle",
      note: "Seule langue officielle, héritée de la colonisation française ; langue de l'administration, de l'enseignement et des médias, mais langue maternelle d'une minorité seulement de la population.",
    },
    {
      name: "Éwé",
      kind: "régionale",
      note: "Langue nationale, principale langue véhiculaire du sud du pays et de la région de Lomé ; parlée de part et d'autre de la frontière avec le Ghana et le Bénin.",
    },
    {
      name: "Kabiyè",
      kind: "régionale",
      note: "Langue nationale, principale langue véhiculaire du centre et du nord du pays, notamment de la région de la Kara.",
    },
    {
      name: "Mina (Gen)",
      kind: "parlée",
      note: "Langue véhiculaire du littoral, proche de l'éwé, très parlée dans la région de Lomé et d'Aného.",
    },
    {
      name: "Autres langues togolaises (tem, moba, kotokoli, ana...)",
      kind: "parlée",
      note: "Le Togo compte une quarantaine de langues et de groupes ethniques, reflet d'un carrefour de peuplements ouest-africains.",
    },
  ],
  summary:
    "Le français, langue officielle unique héritée de la tutelle puis colonisation française, reste minoritaire comme langue maternelle : il cohabite avec une quarantaine de langues locales, dont deux sont reconnues comme « langues nationales » à vocation véhiculaire, l'éwé au sud et le kabiyè au centre-nord, reflet du clivage régional qui structure aussi largement la vie politique du pays.",
};
