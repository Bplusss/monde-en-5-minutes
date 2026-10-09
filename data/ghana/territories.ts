import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Ghana est un État unitaire divisé en 16 régions. Il n'en comptait que 10 jusqu'en 2018 : des référendums organisés en décembre de cette année-là ont créé six nouvelles régions, détachées des plus vastes (Occidentale-Nord, Ahafo, Bono oriental, Oti, Nord-Est et Savane), pour rapprocher l'administration des habitants. Chaque région est dirigée par un ministre nommé par le président. Les régions sont subdivisées en 261 assemblées métropolitaines, municipales et de district, l'échelon de base de l'administration locale. À côté de l'État, les chefferies traditionnelles, reconnues par la Constitution, jouent un rôle dans la gestion des terres et le règlement des conflits.",
  divisions: [
    { name: "Régions", count: 16, source: "Ghana Statistical Service", sourceUrl: "https://statsghana.gov.gh/" },
    { name: "Assemblées métropolitaines, municipales et de district", count: 261, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Districts_of_Ghana" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
