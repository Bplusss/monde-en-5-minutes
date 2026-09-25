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
    "L'orthodoxie russe, rattachée au patriarcat de Moscou, est de très loin la tradition religieuse dominante et joue un rôle politique et symbolique croissant depuis la fin de l'URSS, l'Église orthodoxe russe entretenant une alliance étroite avec le pouvoir de Vladimir Poutine, qu'elle a explicitement soutenu dans sa légitimation religieuse et nationaliste de l'invasion de l'Ukraine depuis 2022 — une position qui a provoqué en 2022 une rupture de communion avec l'Église orthodoxe d'Ukraine et une crise majeure au sein de l'orthodoxie mondiale. L'islam, essentiellement sunnite, est la deuxième religion du pays, profondément enraciné dans plusieurs régions à identité ethnique turcique ou caucasienne (Tatarstan, Bachkirie, et surtout le Caucase du Nord — Tchétchénie, Daguestan, Ingouchie — où il est pratiqué par l'écrasante majorité de la population). Le bouddhisme tibétain, minoritaire mais historiquement bien implanté, est la religion traditionnelle de plusieurs peuples mongols de Russie (Bouriates, Kalmouks — seul peuple bouddhiste d'Europe — et Touvains). Après sept décennies d'athéisme d'État sous l'Union soviétique, qui avait détruit ou fermé l'immense majorité des lieux de culte, la pratique religieuse organisée reste globalement plus faible que l'identification religieuse déclarée : une large partie des Russes se disent orthodoxes par identité culturelle et nationale plutôt que par pratique régulière.",
  methodologyNote:
    "Comme pour de nombreux pays post-soviétiques, la mesure de l'appartenance religieuse en Russie reste sujette à d'importantes marges d'incertitude : le recensement national ne pose pas de question directe sur la religion, et les enquêtes sociologiques successives (notamment celles du centre Levada et du VTsIOM) donnent des résultats sensiblement différents selon qu'elles mesurent l'auto-identification culturelle (« je suis orthodoxe » comme marqueur identitaire) ou la pratique religieuse réelle (fréquentation des offices, prière régulière), cette dernière étant nettement plus faible. Les chiffres retenus ici, dérivés d'estimations agrégées par la CIA et plusieurs instituts internationaux, doivent donc être lus comme des ordres de grandeur plutôt que comme des mesures précises et consensuelles.",
};
