import type { LanguagesData } from "@/lib/types";

const ANSD = "ANSD, RGPH-5 2023 (principale langue couramment parlée, population de 3 ans et plus)";
const ANSD_URL = "https://www.ansd.sn/sites/default/files/recensements/rapport/Chapitre%201-%20ETAT-STRUCTURE-POPULATION-Rapport-Provisoire-RGPH5_juillet2024_0.pdf";
const share = (value: number) => ({ value, unit: "% (principale langue parlée)", year: 2023, source: ANSD, sourceUrl: ANSD_URL });

export const languages: LanguagesData = {
  entries: [
    { name: "Français", kind: "officielle", sharePercent: share(0.6), note: "Langue de l'administration, de la justice et de l'enseignement, mais langue principale d'à peine 0,6 % de la population." },
    { name: "Wolof", kind: "régionale", sharePercent: share(53.5), note: "Langue nationale et véritable langue véhiculaire, comprise bien au-delà des seuls Wolofs." },
    { name: "Pulaar (peul)", kind: "régionale", sharePercent: share(26.2), note: "Langue nationale, dominante dans la vallée du fleuve Sénégal (Fouta) et en Haute-Casamance." },
    { name: "Sérère", kind: "régionale", sharePercent: share(9.6), note: "Langue nationale du Sine, du Saloum et de la Petite-Côte." },
    { name: "Diola (joola)", kind: "régionale", sharePercent: share(2.9), note: "Langue nationale de Basse-Casamance." },
    { name: "Mandingue", kind: "régionale", sharePercent: share(2.8), note: "Langue nationale de Casamance et du Sénégal oriental." },
    { name: "Soninké", kind: "régionale", sharePercent: share(1.2), note: "Langue nationale du haut fleuve (Bakel)." },
  ],
  summary:
    "Le français est la seule langue officielle, héritée de la colonisation, mais 97,6 % des habitants utilisent au quotidien une langue nationale. La Constitution reconnaît comme langues nationales le wolof, le pulaar, le sérère, le diola, le mandingue, le soninké « et toute autre langue nationale qui sera codifiée » — une vingtaine le sont aujourd'hui. Le wolof, langue principale de plus de la moitié de la population, s'impose comme langue commune des villes, des médias et de la vie politique.",
};
