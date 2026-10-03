import type { LanguagesData } from "@/lib/types";

export const languages: LanguagesData = {
  entries: [
    { name: "Arabe standard moderne", kind: "officielle", note: "Seule langue officielle : administration, enseignement, justice et presse écrite." },
    { name: "Arabe nejdi", kind: "régionale", note: "Dialecte du plateau central, dont Riyad." },
    { name: "Arabe hedjazi", kind: "régionale", note: "Dialecte de l'ouest (Djeddah, La Mecque, Médine), façonné par des siècles de brassage lié au pèlerinage." },
    { name: "Arabe du Golfe", kind: "régionale", note: "Parlé dans la région de l'Est, proche des parlers du Koweït, de Bahreïn et du Qatar." },
    { name: "Ourdou, hindi, bengali, tagalog, malayalam…", kind: "parlée", note: "Langues des travailleurs étrangers d'Asie du Sud et du Sud-Est." },
    { name: "Anglais", kind: "parlée", note: "Langue des affaires, de l'enseignement supérieur et de la communication avec la main-d'œuvre étrangère." },
  ],
  summary:
    "L'arabe standard moderne est la seule langue officielle ; au quotidien, les Saoudiens parlent des dialectes régionaux. Le poids de la main-d'œuvre étrangère fait de l'anglais et des langues d'Asie du Sud des langues courantes dans les villes.",
};
