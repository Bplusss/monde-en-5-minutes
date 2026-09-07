import type { LanguagesData } from "@/lib/types";

const OFS = "Office fédéral de la statistique (OFS)";
const OFS_URL = "https://www.swissstats.bfs.admin.ch/data/webviewer/appId/ch.admin.bfs.swissstat/article/issue220122032200-05/package";

export const languages: LanguagesData = {
  entries: [
    { name: "Allemand", kind: "officielle", sharePercent: { value: 62, unit: "%", source: OFS, sourceUrl: OFS_URL }, note: "Y compris le suisse allemand." },
    { name: "Français", kind: "officielle", sharePercent: { value: 23, unit: "%", source: OFS, sourceUrl: OFS_URL } },
    { name: "Italien", kind: "officielle", sharePercent: { value: 8, unit: "%", source: OFS, sourceUrl: OFS_URL }, note: "Y compris le dialecte tessinois ou italo-grison." },
    { name: "Romanche", kind: "officielle", sharePercent: { value: 0.5, unit: "%", source: OFS, sourceUrl: OFS_URL }, note: "Langue nationale, officielle uniquement dans les rapports avec les personnes romanchophones." },
  ],
  summary:
    "La Suisse a quatre langues nationales : l'allemand (langue principale de 62 % de la population résidante), le français (23 %), l'italien (8 %) et le romanche (0,5 %). Les personnes interrogées pouvant déclarer plusieurs langues principales, le total dépasse 100 %.",
};
