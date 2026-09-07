import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Statistique des membres de l'Église du Danemark",
  year: 2026,
  ageScope: "Ensemble de la population résidente, données administratives (CPR) au 1ᵉʳ janvier 2026",
  source: "Danmarks Statistik / Folkekirken",
  sourceUrl: "https://www.dst.dk/da/Statistik/emner/borgere/folkekirke/medlemmer-af-folkekirken",
  points: [
    { label: "Église du Danemark (Folkekirken, luthérienne)", sharePercent: 70.0 },
    { label: "Autres religions ou sans appartenance déclarée", sharePercent: 30.0 },
  ],
  summary:
    "Au 1ᵉʳ janvier 2026, 70,0 % des Danois sont membres de l'Église du Danemark (Folkekirken), l'Église nationale luthérienne — une part en recul régulier depuis vingt ans, notamment du fait de l'immigration.",
  methodologyNote:
    "Ce chiffre mesure l'appartenance administrative à l'Église nationale (chacun peut s'en désinscrire librement), pas la pratique religieuse réelle, très inférieure au taux d'appartenance déclaré.",
};
