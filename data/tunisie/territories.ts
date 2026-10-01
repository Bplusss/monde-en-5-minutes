import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Tunisie est un État unitaire divisé en 24 gouvernorats (wilayat), eux-mêmes subdivisés en délégations (mutamadiyat) et en municipalités. Depuis 2023, les gouvernorats sont aussi regroupés en cinq districts (aqalim), créés pour l'élection du Conseil national des régions et des districts : ce sont des circonscriptions de représentation et de planification, sans administration propre. Les îles de Djerba et de Kerkennah font partie des gouvernorats de Médenine et de Sfax ; le pays ne possède aucun territoire non contigu.",
  divisions: [
    { name: "Gouvernorats (wilayat)", count: 24, note: "Dont quatre dans le Grand Tunis : Tunis, Ariana, Ben Arous et La Manouba.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Tunisia" },
    { name: "Districts (aqalim)", count: 5, note: "Créés par le décret n° 2023-589 (publié le 22 septembre 2023) ; chacun regroupe quatre à six gouvernorats et élit un membre du Conseil national des régions et des districts.", source: "L'Économiste maghrébin", sourceUrl: "https://www.leconomistemaghrebin.com/2023/09/22/voici-le-nouveau-decoupage-territorial/" },
    { name: "Délégations (mutamadiyat)", count: 264, source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Governorates_of_Tunisia" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
