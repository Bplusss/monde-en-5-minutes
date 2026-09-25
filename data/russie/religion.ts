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
    "L'orthodoxie russe (patriarcat de Moscou) est de très loin la tradition dominante et joue un rôle politique croissant depuis la fin de l'URSS, l'Église ayant explicitement soutenu l'invasion de l'Ukraine — une position qui a provoqué une rupture avec l'Église orthodoxe d'Ukraine. L'islam sunnite, deuxième religion du pays, est ancré au Tatarstan, en Bachkirie et surtout dans le Caucase du Nord (Tchétchénie, Daguestan). Le bouddhisme tibétain reste la religion traditionnelle de peuples mongols (Bouriates, Kalmouks, Touvains). Après sept décennies d'athéisme d'État soviétique, la pratique religieuse réelle reste nettement plus faible que l'identification déclarée.",
  methodologyNote:
    "Le recensement russe ne pose pas de question directe sur la religion ; les enquêtes sociologiques (Levada, VTsIOM) donnent des résultats différents selon qu'elles mesurent l'identification culturelle ou la pratique réelle. Les chiffres retenus ici sont des ordres de grandeur agrégés, non des mesures précises et consensuelles.",
};
