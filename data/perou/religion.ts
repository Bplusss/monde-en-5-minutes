import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Recensement de la population",
  year: 2017,
  ageScope: "Population de 12 ans et plus",
  source: "INEI (recensement 2017)",
  sourceUrl: "https://censo2017.inei.gob.pe/",
  points: [
    { label: "Catholiques", sharePercent: 76.0 },
    { label: "Évangéliques", sharePercent: 14.1 },
    { label: "Autre religion", sharePercent: 4.8 },
    { label: "Sans religion", sharePercent: 5.1 },
  ],
  summary:
    "Le catholicisme, introduit par la conquête espagnole et souvent mêlé à des traditions andines comme le culte de la Pachamama (la Terre mère), reste la religion de trois Péruviens sur quatre. Les grandes processions, comme celle du Seigneur des Miracles à Lima en octobre, rassemblent des centaines de milliers de fidèles. Les Églises évangéliques progressent, surtout en Amazonie et dans les quartiers populaires, et le pape Léon XIV, élu en 2025, a la nationalité péruvienne depuis 2015, après des décennies de mission dans le nord du pays.",
  methodologyNote:
    "Le recensement de 2025 comprend aussi une question sur la religion, mais ses résultats détaillés n'étaient pas encore publiés.",
};
