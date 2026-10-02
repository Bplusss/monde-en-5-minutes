import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Estimations agrégées (CIA World Factbook / Pew Research Center / enquêtes sociologiques russes)",
  year: 2017,
  ageScope: "Population totale",
  source: "CIA World Factbook",
  sourceUrl: "https://www.cia.gov/the-world-factbook/countries/russia/",
  points: [
    { label: "Christianisme orthodoxe (essentiellement Église orthodoxe russe)", sharePercent: 71.0 },
    { label: "Sans affiliation religieuse ou athée", sharePercent: 15.0 },
    { label: "Islam", sharePercent: 10.0 },
    { label: "Autres religions et croyances (dont bouddhisme, autres christianismes, judaïsme)", sharePercent: 4.0 },
  ],
  summary:
    "L'orthodoxie (patriarcat de Moscou), tradition dominante, joue un rôle politique croissant ; l'Église a soutenu l'invasion de l'Ukraine. L'islam sunnite est ancré au Tatarstan, en Bachkirie et dans le Caucase du Nord ; le bouddhisme tibétain chez les Bouriates, Kalmouks et Touvains. Après sept décennies d'athéisme d'État, la pratique reste bien plus faible que l'identification déclarée.",
  methodologyNote:
    "Le recensement ne pose pas de question sur la religion ; les enquêtes (Levada, VTsIOM) divergent selon qu'elles mesurent l'identification ou la pratique. Les chiffres retenus sont des ordres de grandeur.",
};
