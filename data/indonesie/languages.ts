import type { LanguagesData } from "@/lib/types";

const CENSUS = "Badan Pusat Statistik (BPS), recensement 2010 (langue maternelle)";
const CENSUS_URL = "https://en.wikipedia.org/wiki/Languages_of_Indonesia";

export const languages: LanguagesData = {
  entries: [
    { name: "Indonésien (Bahasa Indonesia)", kind: "officielle", note: "Forme standardisée du malais, adoptée comme langue de l'unité nationale dès le Serment de la jeunesse (Sumpah Pemuda) de 1928 puis proclamée langue officielle en 1945 ; langue maternelle d'une minorité mais parlée comme seconde langue par la quasi-totalité de la population, elle est le principal ciment linguistique d'un pays de plus de 700 langues vivantes." },
    { name: "Javanais", kind: "régionale", sharePercent: { value: 31.8, unit: "% de la population (langue maternelle)", year: 2010, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Langue maternelle la plus parlée du pays, dominante à Java centre et est ; dispose d'une riche tradition littéraire et d'une écriture historique propre (hanacaraka)." },
    { name: "Soundanais", kind: "régionale", sharePercent: { value: 15.5, unit: "% de la population (langue maternelle)", year: 2010, source: CENSUS, sourceUrl: CENSUS_URL }, note: "Dominant à l'ouest de Java (région de Bandung)." },
    { name: "Malais (dialectes régionaux)", kind: "régionale", sharePercent: { value: 3.7, unit: "% de la population (langue maternelle)", year: 2010, source: CENSUS, sourceUrl: CENSUS_URL } },
    { name: "Madourais", kind: "régionale", sharePercent: { value: 3.4, unit: "% de la population (langue maternelle)", year: 2010, source: CENSUS, sourceUrl: CENSUS_URL } },
    { name: "Batak", kind: "régionale", sharePercent: { value: 3.0, unit: "% de la population (langue maternelle)", year: 2010, source: CENSUS, sourceUrl: CENSUS_URL, note: "Ensemble de langues du nord de Sumatra." } },
    { name: "Minangkabau", kind: "régionale", sharePercent: { value: 2.0, unit: "% de la population (langue maternelle)", year: 2010, source: CENSUS, sourceUrl: CENSUS_URL } },
    { name: "Bugis", kind: "régionale", sharePercent: { value: 1.5, unit: "% de la population (langue maternelle)", year: 2010, source: CENSUS, sourceUrl: CENSUS_URL, note: "Peuple navigateur de Sulawesi-Sud." } },
    { name: "Balinais", kind: "régionale", note: "Dominant à Bali, coexistant avec l'indonésien et étroitement lié aux pratiques religieuses hindoues de l'île." },
    { name: "Anglais et langues étrangères", kind: "parlée", note: "Langue des affaires internationales, du tourisme et largement enseignée, sans statut officiel." },
  ],
  summary:
    "L'Indonésie est l'un des pays les plus plurilingues au monde, avec plus de 700 langues vivantes recensées (deuxième total mondial après la Papouasie-Nouvelle-Guinée voisine), reflet de la fragmentation géographique de l'archipel et de sa diversité ethnique. Une seule langue officielle, l'indonésien (bahasa Indonesia), forme standardisée du malais choisie dès l'époque coloniale par le mouvement nationaliste comme symbole d'unité neutre — ne favorisant aucune ethnie majoritaire — a permis de fédérer cette mosaïque linguistique : proclamée solennellement dans le Serment de la jeunesse de 1928 puis langue officielle de la République dès son indépendance en 1945, elle est aujourd'hui parlée par la quasi-totalité des Indonésiens alors qu'elle n'est la langue maternelle que d'une petite minorité. Le javanais, langue maternelle de près d'un tiers du pays, reste la langue régionale la plus parlée à la maison, suivi du soundanais ; de nombreuses langues locales, en particulier en Papouasie où plusieurs centaines de langues coexistent sur un territoire faiblement peuplé, sont aujourd'hui menacées par la progression de l'indonésien dans l'éducation et les médias.",
};
