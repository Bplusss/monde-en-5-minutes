import type { LanguagesData } from "@/lib/types";

const HCP = "Haut-Commissariat au Plan (HCP), RGPH 2024 (via TelQuel)";
const HCP_URL = "https://telquel.ma/instant-t/2024/12/30/pres-de-25-des-marocains-parlent-amazigh-selon-le-hcp_1911036/";

export const languages: LanguagesData = {
  entries: [
    { name: "Arabe standard moderne", kind: "officielle", note: "Langue officielle depuis l'indépendance, utilisée à l'écrit, dans l'administration, l'enseignement et les médias." },
    { name: "Amazighe (berbère)", kind: "officielle", sharePercent: { value: 24.8, unit: "% de la population (usage quotidien)", year: 2024, source: HCP, sourceUrl: HCP_URL, note: "En légère baisse (25,8 % en 2014). Le mouvement amazigh conteste ce chiffre, jugé sous-estimé." }, note: "Co-officielle depuis la Constitution de 2011 ; écrite en alphabet tifinagh. Trois grandes variantes : tachelhit (14,2 %, Souss et Anti-Atlas), tamazight (7,4 %, Moyen et Haut Atlas) et tarifit (3,2 %, Rif)." },
    { name: "Darija (arabe marocain)", kind: "parlée", note: "Langue de la vie quotidienne, comprise par la quasi-totalité de la population ; riche d'emprunts à l'amazighe, au français et à l'espagnol." },
    { name: "Hassaniya", kind: "régionale", sharePercent: { value: 0.8, unit: "% de la population", year: 2024, source: HCP, sourceUrl: HCP_URL }, note: "Dialecte arabe des provinces sahariennes, protégé à ce titre par la Constitution de 2011." },
    { name: "Français", kind: "parlée", note: "Sans statut officiel, mais très présent dans l'économie, l'enseignement supérieur scientifique et une partie de l'administration ; selon le RGPH 2024, 57 % des Marocains alphabétisés de 10 ans et plus savent le lire et l'écrire." },
    { name: "Espagnol", kind: "parlée", note: "Présent dans le nord (ancienne zone de protectorat espagnol) et autour de Ceuta et Melilla." },
  ],
  summary:
    "Le Maroc a deux langues officielles depuis 2011 : l'arabe et l'amazighe, langue des premiers habitants du pays, utilisée au quotidien par environ un quart de la population. Au quotidien, la plupart des Marocains parlent la darija, un arabe dialectal distinct de l'arabe standard écrit. Le français, hérité du protectorat, reste une langue de l'économie et des études supérieures, tandis que l'anglais progresse dans l'enseignement depuis le milieu des années 2020.",
};
